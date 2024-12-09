import type { VNodeChild } from 'vue';
import { Mut, VueComponent, type ComponentProps } from 'vue3-oop';

export interface ClassCountProps<T = number[]> {
  /**
   * @type T
   * @description 数据源
   */
  data?: T;
  /**
   * 默认数量
   */
  initValue?: number;

  /**
   * @description 点击事件
   */
  onClick?: () => Promise<string>;

  slots: {
    icon: ({ name }: { name: T }) => VNodeChild;
  };
}

export class ClassCount<T> extends VueComponent<ClassCountProps<T>> {
  static defaultProps: ComponentProps<ClassCountProps<any>> = [
    'initValue',
    'onClick',
    'data',
  ];

  @Mut() count = this.props.initValue;

  /**
   * @public
   */
  foo(name: string) {}

  render() {
    return (
      <div style={{ accentColor: 'green' }}>
        <h2>我是类组件</h2>
        <button onClick={() => this.count++}>增加</button>
        <div
          style={
            'display:grid;place-items: center;height: 300px; background-color:yellow;'
          }
        >
          <div style="background-color:red;">{this.count}</div>
        </div>
      </div>
    );
  }
}
