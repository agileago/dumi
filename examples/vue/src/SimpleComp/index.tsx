import type { VNodeChild } from 'vue';
import { defineComponent } from 'vue3-oop';

export interface SimpleCompProps {
  /**
   * @description 数据源
   */
  data?: number;
  /**
   * @description 打开事件
   */
  onOpen?: () => void;

  /**
   * foo插槽
   */
  renderFoo?: () => VNodeChild;
}

export interface SimpleCompExpose {
  /**
   * @description 聚焦芳芳
   * @public
   * @param name 姓名
   */
  focus: (name: string) => void;
}

export const SimpleComp = defineComponent<SimpleCompProps, SimpleCompExpose>(
  (props, ctx) => {
    return () => <div>{props.data}</div>;
  },
);
