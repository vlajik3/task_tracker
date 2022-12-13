import React, { useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import gsap, { Linear } from 'gsap';
import { useNavigate } from 'react-router-dom';
import style from './NotFound.module.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const NotFound = () => {
    const navigate = useNavigate();

    const cog1 = useRef(null);
    const cog2 = useRef(null);
    const wrong_para = useRef(null);

    const t1 = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();

    useEffect(() => {
        gsap.to(cog1.current, {
            transformOrigin: '50% 50%',
            rotation: '+=360',
            repeat: -1,
            ease: Linear.easeNone,
            duration: 8,
        });

        gsap.to(cog2.current, {
            transformOrigin: '50% 50%',
            rotation: '-=360',
            repeat: -1,
            ease: Linear.easeNone,
            duration: 8,
        });

        gsap.fromTo(
            wrong_para.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                stagger: {
                    repeat: -1,
                    yoyo: true,
                },
            },
        );
    }, []);

    return (
        <>
            <div className={style.home}>
                <Button color="secondary" size="large" onClick={() => navigate('/')} startIcon={<ArrowBackIosIcon />}>
                    Go home
                </Button>
            </div>
            <div className={style.container}>
                <h1 className={style.first_four}>4</h1>
                <div className={style.cog_wheel1}>
                    <div className={style.cog1} ref={cog1}>
                        <div className={style.top}></div>
                        <div className={style.down}></div>
                        <div className={style.left_top}></div>
                        <div className={style.left_down}></div>
                        <div className={style.right_top}></div>
                        <div className={style.right_down}></div>
                        <div className={style.left}></div>
                        <div className={style.right}></div>
                    </div>
                </div>
                <div className={style.cog_wheel2}>
                    <div className={style.cog2} ref={cog2}>
                        <div className={style.top}></div>
                        <div className={style.down}></div>
                        <div className={style.left_top}></div>
                        <div className={style.left_down}></div>
                        <div className={style.right_top}></div>
                        <div className={style.right_down}></div>
                        <div className={style.left}></div>
                        <div className={style.right}></div>
                    </div>
                </div>
                <h1 className={style.second_four}>4</h1>
                <p className={style.wrong_para} ref={wrong_para}>
                    Uh Oh! Page not found!
                </p>
            </div>
        </>
    );
};
export default NotFound;
