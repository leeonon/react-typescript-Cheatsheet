import { useState } from 'react';

interface User {
  name: string;
  age: number;
}

const Hooks = () => {
  /**
   * 基础类型不需要显示声明类型，依赖其自动推导即可
   */
  const [status, setStatus] = useState(false);

  /**
   * 如果值可能为空，则可以使用联合类型
   */
  const [user, setUser] = useState<User | null>(null);

  /**
   * 如果一个状态在设置之后很快初始化，并且总是在之后有一个值，可以使用类型断言
   */
  const [user2, setUser2] = useState<User>({} as User);

  return <div></div>
}