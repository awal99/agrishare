/**
 * @author Sulemana Awal
 * @email [awalsule001@gmail.com]
 * @create date 2020-01-04 09:59:51
 * @modify date 2020-01-04 09:59:51
 * @desc [description]
 */

import React from 'react';
import {Image} from 'react-bootstrap'

const AvatarStack = (props)=>{
    return(
        <div style={{display:'flex',right:20,position:'absolute',bottom:15}}>
        {props.avatars.map(avatar=>{
            return(
            <a href="#">
            <Image src={avatar.img} style={{
                width:60,
                height:60,
                borderRadius:'50%',
                marginLeft:-40
            }} />
            </a>
            )
        })}
        </div>
    )
}

export default AvatarStack;