import React from 'react'
import ScreenLogo from './ScreenLogo/ScreenLogo'
import style from './Welcome.module.scss'
import { useRouter } from 'next/router';

export function MainScreenText({text}: {text: string}) {
  return (
    <h1 className={style['welcome-area--text']}>
      {text}
    </h1>
  );
}

export default function WelcomeScreen() {
  const router = useRouter();
  
  return (
    <div>
      <ScreenLogo />
      <MainScreenText text='Explore employees Feedback and Rating' />
      <div className="div">
        <button onClick={() => {
          router.push("employees")
        }}>
          employees
        </button>
      </div>
    </div>
  )
}
