import React, {ReactNode, useEffect, useState, useRef, ChangeEvent} from "react";
import type { NextPage } from 'next'
import styled from "styled-components";
import { Button, Spinner,Overlay, Form, FloatingLabel } from 'react-bootstrap';
import * as bip39 from 'bip39';
import { hdkey }from "ethereumjs-wallet";
import { pubToAddress,bufferToHex } from "ethereumjs-util";
import Layout from "../components/layout/layout";

import {Bookmark, BookmarkCheck,Files} from 'react-bootstrap-icons';

const Ulbox = styled.ul`
    padding: 0;
    margin-bottom: 30px;
  li{
      background: #f8f8f8;
      padding: 20px 10px;
      margin-bottom: 2px;
      display: flex;
      word-break: break-all;
        .lft{
          margin-right: 10px;
        }
        .rht{
          flex-grow: 1;
          
        }
        .lftBtm{
          min-width: 44px;
        }
        .mnemon{
          color: purple;
          background: #fff;
          width: 100%;
          padding: 10px;
          margin-top: 10px;
        }
        .copy{
            cursor: pointer;
        }
        &.whiteBg{
          background: #fff;
          
        }
  }
  
`
const SwitchBox = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;

`

const FloatBox = styled(FloatingLabel)`
  width: 100%;
 
`

const Home: NextPage = () => {
    const [loading,setLoading] = useState<boolean>(false);
    const [current,setCurrent] = useState<any>(null);
    const [show,setShow] = useState<boolean>(false);
    const [showType,setShowType] = useState<boolean>(false);
    const [type,setType] = useState<string>('');
    const [mnemonic,setMnemonic] = useState<string>('');
    const [seed,setSeed] = useState<Buffer>();
    const [privateKey,setPrivateKey] = useState<Buffer>();
    const [publicKey,setPublicKey] = useState<Buffer>();
    const [address,setAddress] = useState<string>('');
    const [typeInput,setTypeInput] = useState<string>('');
    const [InputValue,setInputValue] = useState<string>('');

    useEffect(()=>{
        const GenerateSeed = async () =>{
            const seedArr: Buffer = await bip39.mnemonicToSeed(mnemonic, "");
            setSeed(seedArr)
        }
        if(!mnemonic) return;
        GenerateSeed();

    },[mnemonic])

    useEffect(()=>{
        const GeneratePrivateKey = async () =>{
            const hdWallet: any = hdkey.fromMasterSeed(seed);
            const path:string =`m/44'/60'/0'/0/0`;

            const key: any = hdWallet.derivePath(path);
            const privateKeyB: Buffer = key._hdkey._privateKey;
            const pubKey: Buffer = key._hdkey._publicKey;

            setPublicKey(pubKey);
            setPrivateKey(privateKeyB);
        }
        if(seed == null || !seed) return;
        GeneratePrivateKey();

    },[seed])

    useEffect(()=>{
        if(privateKey ==null ) return;
            const addr: Buffer = pubToAddress(publicKey,true)
            setAddress(bufferToHex(addr));
            setLoading(false)

    },[privateKey])

    const handleCreate = () =>{
        const mnemonicWord: string = bip39.generateMnemonic();
        setMnemonic(mnemonicWord)
        setLoading(true)
    }

    const copyStr = (content: string,typeStr:string,e:ChangeEvent) => {
        const el = document.createElement('textarea');
        el.value = content;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setShow(true)
        setType(typeStr)

        const element = e.target as HTMLInputElement;
        setCurrent(element)
        setTimeout(()=>{
            setShow(false)
            setType('')
            setCurrent(null)
        },1500)
    }

    const handleType = () =>{
       setShowType(!showType)
    }
    const handleInputChange = (e:ChangeEvent) => {
        const eventObj = e.target as HTMLInputElement;
        setTypeInput(eventObj.value)
    }

    const handleInputFillChange = (e:ChangeEvent) => {
        const eventObj = e.target as HTMLInputElement;
        setInputValue(eventObj.value)
    }

    const handleRecovery = () =>{
        console.log("==typeInput,InputValue=====",typeInput,InputValue)
        switch(typeInput){
            case 'mnemonic':

                break;
            case 'seed':
                break;
            case 'privateKey':
                break;
            case 'publicKey':
                break;
            default:break;

        }
    }
  return (
    <div>
        <SwitchBox>
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Create/Recovery"
                value={showType}
                onChange={()=>handleType()}
            />
        </SwitchBox>
        <Overlay target={current} show={show} placement="right">
            {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                    {...props}
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: '2px 10px',
                        color: 'white',
                        borderRadius: 3,
                        ...props.style,
                    }}
                >
                    {type} copied to clipboard!
                </div>
            )}
        </Overlay>
            <div>
                <Ulbox>
                    <li>
                        {
                            !showType &&<div className="lft">
                                {
                                    !mnemonic && <Bookmark  color="#bbb"/>
                                }
                                {
                                    mnemonic && <BookmarkCheck  color="purple"/>
                                }
                            </div>
                        }
                        {
                            showType &&<div className="lft">
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="radio-mnemonic"
                                    value="mnemonic"
                                    onChange={handleInputChange}
                                />
                            </div>
                        }

                        <div className="rht">
                            <div>1. Mnemonic </div>
                            {
                                mnemonic && <div className="mnemon">{mnemonic} <span className="copy"><Files onClick={(e)=>copyStr(mnemonic,'mnemonic',e)} color="#bbb" /></span></div>
                            }
                        </div>
                    </li>
                    {
                        showType && typeInput ==='mnemonic'&& <li className="whiteBg">
                            <FloatBox
                                controlId="floatingInput"
                                label="Fill the Mnemonic"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Fill the Mnemonic" onChange={handleInputFillChange}/>
                            </FloatBox>
                        </li>
                    }


                    <li>
                        {
                            !showType && <div className="lft">
                                {
                                    seed == null && <Bookmark  color="#bbb"/>
                                }
                                {
                                    seed != null && <BookmarkCheck  color="purple"/>
                                }

                            </div>
                        }
                        {
                            showType &&<div className="lft">
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="radio-seed"
                                    value="seed"
                                    onChange={handleInputChange}
                                />
                            </div>
                        }

                        <div className="rht">
                            <div>2. Seed </div>
                            {
                                seed != null && <div className="mnemon">{bufferToHex(seed)} <span className="copy"><Files onClick={(e)=>copyStr(bufferToHex(seed),'seed',e)} color="#bbb"/></span></div>
                            }
                        </div>
                    </li>

                    {
                        showType && typeInput ==='seed'&& <li className="whiteBg">
                            <FloatBox
                                controlId="floatingInput"
                                label="Fill the Seed"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Fill the Seed"  onChange={handleInputFillChange}/>
                            </FloatBox>
                        </li>
                    }
                    <li>
                        {
                            !showType &&<div className="lft">
                                {
                                    privateKey == null && <Bookmark  color="#bbb"/>
                                }
                                {
                                    privateKey != null && <BookmarkCheck  color="purple"/>
                                }
                            </div>
                        }
                        {
                            showType &&<div className="lft">
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="radio-PrivateKey"
                                    value="PrivateKey"
                                    onChange={handleInputChange}
                                />
                            </div>
                        }
                        <div className="rht">
                            <div>3. PrivateKey </div>
                            {
                                privateKey && <div className="mnemon">{bufferToHex(privateKey)} <span className="copy"><Files onClick={(e)=>copyStr(bufferToHex(privateKey),'private key',e)} color="#bbb"/></span></div>
                            }
                        </div>
                    </li>

                    {
                        showType && typeInput ==='PrivateKey'&& <li className="whiteBg">
                            <FloatBox
                                controlId="floatingInput"
                                label="Fill the private key"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Fill the Fill the private key"  onChange={handleInputFillChange}/>
                            </FloatBox>
                        </li>
                    }
                    <li>
                        {
                            !showType &&<div className="lft">
                                {
                                    publicKey == null && <Bookmark  color="#bbb"/>
                                }
                                {
                                    publicKey != null && <BookmarkCheck  color="purple"/>
                                }
                            </div>
                        }
                        {
                            showType &&<div className="lft">
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id="radio-publicKey"
                                    value="publicKey"
                                    onChange={handleInputChange}
                                />
                            </div>
                        }

                        <div className="rht">
                            <div>4. publicKey </div>
                            {
                                publicKey && <div className="mnemon">{bufferToHex(publicKey)} <span className="copy"><Files onClick={(e)=>copyStr(bufferToHex(publicKey),'public key',e)} color="#bbb"/></span></div>
                            }
                        </div>
                    </li>
                    {
                        showType && typeInput ==='publicKey'&& <li className="whiteBg">
                            <FloatBox
                                controlId="floatingInput"
                                label="Fill the public key"
                                className="mb-3"
                            >
                                <Form.Control type="text" placeholder="Fill the Fill the public key"  onChange={handleInputFillChange}/>
                            </FloatBox>
                        </li>
                    }
                    <li>
                        {
                            !showType && <div className="lft">
                                {
                                    !address && <Bookmark  color="#bbb"/>
                                }
                                {
                                    address && <BookmarkCheck  color="purple"/>
                                }
                            </div>
                        }
                        {
                            showType &&<div className="lftBtm">

                            </div>
                        }

                        <div className="rht">
                            <div>5. Address </div>
                            {
                                address && <div className="mnemon">{address} <span className="copy"><Files onClick={(e)=>copyStr(address,'address',e)} color="#bbb"/></span></div>
                            }
                        </div>
                    </li>
                </Ulbox>
            </div>

            {
                !loading && !showType && <Button variant="flat" onClick={()=>handleCreate()}>
                    Create ETH Address
                </Button>
            }
            {
                !loading && showType && <Button variant="flat" onClick={()=>handleRecovery()}>
                    Recovery ETH Address
                </Button>
            }
            {
                loading && <Button variant="flat" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            }

    </div>
  )
}

export default Home;

interface LayoutProps {
    children: ReactNode;
}


Home.getLayout = function getLayout(page:LayoutProps) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
