import type { Ref, FunctionComponent } from 'react';
import React, { useImperativeHandle, useRef } from 'react';

interface ChildProps {
  items: string[];
  innerRef?: Ref<{
    click: (item: string) => void;
  }>
}

const Child: FunctionComponent<ChildProps> = ({
  innerRef
}) => {
  const click = () => { };

  useImperativeHandle(innerRef, () => ({
    click
  }))

  return <div></div>
}

const Parent = () => {
  const childRef = useRef(null);

  return <Child innerRef={childRef} items={[]} />
}