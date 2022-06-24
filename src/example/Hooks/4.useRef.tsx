import { useRef } from 'react';

const App = () => {
  /**
   * 当使用 Ref 保存 DOM element时
   */
  const divRef = useRef<HTMLDivElement>(null);

  /**
   * 当确定 current 一定有值时，可以使用非空断言
   */
  const divRef2 = useRef<HTMLDivElement>(null!);

  /**
   * 使用 ref 保存变量时
   */
  const number = useRef<number | null>(null);
}