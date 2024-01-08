'use client';
 
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import {Link} from '../navigation';
import './style.css';

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;
 
  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
      className='menu-link'
      style={{fontWeight: isActive ? 'bold' : 'normal'}}
      {...rest}
    />
  );
}