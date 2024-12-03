import { type ComponentProps, Mut, VueComponent } from 'vue3-oop'

export interface ClassCountProps {
  /**
   * 默认数量
   */
  initValue?: number
}

export class ClassCount extends VueComponent<ClassCountProps> {
  static defaultProps: ComponentProps<ClassCountProps> = ['initValue']

  @Mut() count = this.props.initValue

  render() {
    return <div style={{accentColor: 'green'}}>
      <h2>我是类组件</h2>
      <button onClick={() => this.count++}>增加</button>
      <div style={'display:grid;place-items: center;height: 300px; background-color:yellow;'}>
        <div style="background-color:red;">{this.count}</div>
      </div>
    </div>
  }
}
