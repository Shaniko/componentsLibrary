import { AccountCircle, ArrowBack, AttachFile, MoreVert, Today } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

import React from 'react';
import './TopBarTitle.scss';

const Title = ({title = 'Default title', isCentered = false, variant = "h4"}) =>  <Typography variant={variant} component={variant} sx={{ flexGrow: 1 }} className={isCentered  ? 'center' : ''}> {title} </Typography>;
const RightIcons = () => <section className='rightIcons'>
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" >
        <AttachFile sx={{ color: "var(--fill) "}} />
    </IconButton>
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" >
        <Today sx={{ color: "var(--fill) "}} />
    </IconButton>
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" >
        <MoreVert sx={{ color: "var(--fill) "}} />
    </IconButton>
</section>


export const TopTitle = ({title, isCentered, variant, loginIcon, menu, backArrow, rightIcons, type}) => {
    const typeTitleBottom = type === 'medium' || type === 'large';
    const displayTitle = !typeTitleBottom;
    return (
        <AppBar position="static">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className={typeTitleBottom ? 'newLine topTitleContainer' : 'topTitleContainer'}>
                        {menu && <IconButton size="large" edge="start" color="inherit" aria-label="menu" >
                            <MenuIcon sx={{ color: "var(--fill) "}} />
                        </IconButton>}
                        {backArrow && <IconButton size="large" edge="start" color="inherit" aria-label="menu" >
                            <ArrowBack />
                        </IconButton>}
                        {displayTitle && <Title title={title} isCentered={isCentered} variant={variant}/>}
                        {loginIcon && <IconButton color="inherit" sx={{ p: 0 }} >
                           <AccountCircle/>
                        </IconButton>}
                        {rightIcons && <RightIcons/>}
                        {typeTitleBottom && <section className={`newLine ${type}`}><Title title={title} variant={variant}/></section>}
                    </Toolbar>
                </AppBar>
            </Box>
        </AppBar>
    );
};

export const SmallCentered = ({title}) => {
    return <TopTitle title={title} isCentered variant="h5" loginIcon menu/>
}
export const Small = ({title}) => {
    return <TopTitle title={title} backArrow rightIcons type="small"/>
}
export const Medium = ({title}) => {
    return <TopTitle title={title} backArrow rightIcons type="medium"/>
}
export const Large = ({title}) => {
    return <TopTitle title={title} backArrow rightIcons type="large"/>
}
export const Headline = ({title}) => {
    return <TopTitle title={title} />
}


