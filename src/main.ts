function getPromise() {
  return new Promise<[string, number]>((resolve): void => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top: Pick<AllType, "name" | "color">, bottom: Pick<AllType, "position" | "weight">): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

function merge<A extends object, B extends object>(objA: A, objB: B): A & B {
  return Object.assign(objA, objB);
}
const merged = merge({ name: "Danil" }, { age: 17 });
console.log(merged.name);

class Component<T extends object> {
  constructor(public props: T) {}
}

class Page extends Component<{ title: string }> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const page = new Page({ title: "Title" });
page.pageInfo();