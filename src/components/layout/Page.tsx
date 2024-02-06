import React, {
  PropsWithChildren,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';

type PageProps = PropsWithChildren<any> &
  HTMLAttributes<HTMLDivElement> & {
    mainClassName?: string;
    headClassName?: string;
    headStyle?: React.CSSProperties;
    onlyFooter?: boolean; // 只有footer
    hideHead?: boolean;
    hideFooter?: boolean;
    /** 在帮助中心下面额外的展示 */
    extraFloatingWindow?: React.ReactNode;
    /**是否展示 loading
     * @default true
     */
    showLoading?: boolean;
    helpFloatingBall?: boolean;
    feedBack?: boolean;
    /** 修改内部样式， */
    sx?: {
      'page-bg': string;
    };
    marginTop?: string;
  };

export type NavItem = {
  nav_name: string;
  nav_link: string;
  nav_id: string;
  sub?: NavItem[];
};

export interface Nav {
  footer?: NavItem[];
  header?: NavItem[];
}

const Page = ({
  children,
  className,
  hideHead,
  onlyFooter,
  hideFooter,
  showLoading = true,
  hidden = false,
  extraFloatingWindow = null,
  helpFloatingBall = true,
  feedBack = false,
  marginTop = '24px',
  sx = {
    'page-bg': '#F9F9F9',
  },
  ...props
}: PageProps) => {
  return <></>;
};

export default Page;
