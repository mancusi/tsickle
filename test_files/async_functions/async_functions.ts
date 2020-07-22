/**
 * Exercises various forms of async functions.  When TypeScript downlevels these functions, it
 * inserts a reference to 'this' which then tickles a Closure check around whether 'this' has a
 * known type.
 */

export {};

async function asyncTopLevelFunction(param: string): Promise<string> {
  const s = await 'a';
  return s;
}

// Note: some Closure checks are only triggered when functions are exported.
export {asyncTopLevelFunction, asyncTopLevelFunctionWithThisType};

async function asyncTopLevelFunctionWithThisType(this: Container, param: string): Promise<string> {
  const s = await 3;
  return s + this.field;
}

const asyncTopLevelArrowFunction = async(param: string): Promise<string> => {
  const s = await 3;
  return s + (this as any).field;
};

class Container {
  field = 'y';

  async asyncMethod() {
    const s = await asyncTopLevelFunction('x');
    return s + this.field;
  }

  containerMethod() {
    const asyncArrowFunctionInMethod = async(param: string): Promise<string> => {
      const s = await 3;
      return s + this.field;
    };
    async function asyncFunctionInMethod(this: Container, param: string): Promise<string> {
      const s = await 3;
      return s + this.field;
    }
  }

  static staticField = 's';

  static async asyncStaticMethod() {
    const s = await asyncTopLevelFunction('x');
    return s + this.staticField;
  }
}

// TODO(#1099): uncomment this test after the async emit is fixed.
// const asyncFnExpression = async function f() {};

const asyncArrowFn = async () => {};

export const exportedAsyncArrowFn = async () => {};

export function toplevelContainingAsync() {
  return async () => 3;
}

export function toplevelWithThisType(this: string) {
  return async () => 3;
}
