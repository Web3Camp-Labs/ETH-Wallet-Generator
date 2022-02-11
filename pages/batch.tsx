import React, {ReactNode, useState, ChangeEvent} from "react";
import Layout from "../components/layout/layout";
import {Button, FloatingLabel, Form, Spinner} from 'react-bootstrap';
import styled from "styled-components";
import {Download, ClipboardCheck} from 'react-bootstrap-icons';

import * as bip39 from 'bip39';
import { hdkey }from "ethereumjs-wallet";
import { pubToAddress,bufferToHex } from "ethereumjs-util";
import CsvDownloader from 'react-csv-downloader'

const Ulbox = styled.ul`
  margin-top: 20px;
  li{
    background: #f8f8f8;
    padding: 0 20px;
    margin-bottom:20px;
    user-select: none;
    &>div{
      padding: 20px 0;
      border-bottom:1px solid #ddd;
      display: flex;
      word-break: break-all;
      &:last-child{
        border-bottom: 0;
      }
    }
    .title{
      min-width: 130px;
      display: flex;
      .titleMain{
        white-space: nowrap;
      }
      .iconbox{
         margin-right: 10px;
      }
      span{
        color: purple;
         font-family: "din_bold";
      }
    }
  }
`;

const BtnGroup = styled.div`
  display: flex;
  button{
    margin-right: 20px;
  }
`;

const Total = styled.div`
  font-family: "din_bold";
  color: purple;
  margin-top: 20px;
  background: #f8f8f8;
  padding: 20px;
  span{
    margin-right: 10px;
    color:#666;
  }
`

const LoadingBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 50px 0;
  span{
  margin-left: 20px;
  }
`


interface walletObj {
    mnemonic: string;
    address: string;
    privateKey: string;
}

export default function  Batch<NextPage>() {

    const [list, setList ] = useState<walletObj[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [num, setNum] = useState<number|string>('');

    const createWallet = async()=>{
        const mnemonic: string = bip39.generateMnemonic();
        const seed: Buffer = await bip39.mnemonicToSeed(mnemonic,'');
        const hdWallet: any = hdkey.fromMasterSeed(seed);
        const path: string = "m/44'/60'/0'/0/0";
        const keyBuffer = hdWallet.derivePath(path);
        const privateKeyBuffer = keyBuffer._hdkey._privateKey;
        const privateKey: string = bufferToHex(privateKeyBuffer);
        const publicKeyBuffer = keyBuffer._hdkey._publicKey;
        const publicKey: string = bufferToHex(publicKeyBuffer);

        const addressBuffer = pubToAddress(publicKeyBuffer, true);
        const address = bufferToHex(addressBuffer)

        return {
            address,
            mnemonic,
            privateKey
        } as walletObj;

    }
    const handleChange = (e: ChangeEvent) =>{
        const element = e.target as HTMLInputElement;
        setNum(parseInt(element.value))
    }

    const handleCreate = async() =>{
        setLoading(true)
        let arr: any[] = [...Array(num)];
        let listArr: walletObj[] = [];
        for await (let i of arr){
           let obj: walletObj = await createWallet();
            listArr.push(obj)
        }
        setLoading(false)
        setList(listArr);
    }
    return <div>
        <div>
            <FloatingLabel
                controlId="floatingInput"
                label="Number of wallets created"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="Number of wallets created" value={num} onChange={(e)=>handleChange(e)}/>
            </FloatingLabel>
        </div>
        <BtnGroup>
            <Button variant="flat" onClick={()=>handleCreate()}>
                Batch Create ETH Address
            </Button>
            {
                !!list.length && <CsvDownloader
                    datas={list as any}
                    filename={`myWallets_${list[0]?.address}`}
                    extension=".csv"> <Button variant="dark"> <Download /> Download</Button>
                </CsvDownloader>
            }

        </BtnGroup>
        <Total>
            <span> Created:</span>{list?.length}
        </Total>
        <div>
            <Ulbox>


                {
                    loading &&<LoadingBox>
                        <Spinner animation="border" variant="dark" /> <span>Loading...</span>
                    </LoadingBox>
                }

                {
                    list?.map((item,index)=>(<li key={item.address}>
                        <div>
                            <div className="title">
                                <div className="iconbox"><ClipboardCheck color="purple" /></div>
                                <div className="titleMain">address</div>
                                <span>{index+1}</span>
                            </div>
                            <div>{item.address}</div>
                        </div>
                        <div>
                            <div className="title">
                                <div className="iconbox"><ClipboardCheck color="purple" /></div>
                               <div className="titleMain">mnemonic</div>
                            </div>
                            <div>{item.mnemonic}</div>
                        </div>
                        <div>
                            <div className="title">
                                <div className="iconbox"><ClipboardCheck color="purple" /></div>
                                <div className="titleMain">private key</div>
                            </div>
                            <div>{item.privateKey}</div>
                        </div>
                    </li>))
                }

            </Ulbox>
        </div>
    </div>
}

interface LayoutProps {
    children: ReactNode;
}

Batch.getLayout = function getLayout(page:LayoutProps) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
