import React from 'react'
import Menu from   '../components/Menu'
import BoxIconsConfig from '../components/BoxIconsConfig'
import MenuSettings from '../components/MenuSettings'

export default function configuracoes() {
    return (
        <>
        <Menu />
    <div>
        <BoxIconsConfig />
        <MenuSettings />
     </div>
        </>
    )
}
