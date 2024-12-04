import { Button } from '@examples/vue';
import { defineComponent, ref, type Ref } from 'vue';
import { Mut, VueComponent } from 'vue3-oop';
import './demo.less';

class AAA extends VueComponent {
  @Mut() count = 100;
  render() {
    return (
      <div onClick={() => this.count++}>class component: {this.count}</div>
    );
  }
}

export default defineComponent({
  setup() {
    const count: Ref<number> = ref(0);
    const handleClick = (e: Event) => {
      count.value++;
    };
    return () => (
      <div class="demo">
        <Button onClick={handleClick} icon="👹">
          count {count.value}
        </Button>
        <AAA></AAA>
      </div>
    );
  },
});
