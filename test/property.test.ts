import { safeGet, safeGet2, safeGet3, safeGet4, safeProp, safeSet, safeSet2, safeSet3, safeSet4 } from "./property";

test("call saveGet on data", () => {
  let a = { a: 1 };
  expect(safeGet(a, "a")).toBe(1);
  a = null;
  expect(safeGet(a, "a")).toBe(null);
});

test("call safeGet2 on data", () => {
  let a = { a: { b: 1 } };
  expect(safeGet2(a, "a", "b")).toBe(1);
  a.a = null;
  expect(safeGet2(a, "a", "b")).toBe(null);
  a = null;
  expect(safeGet2(a, "a", "b")).toBe(null);
});

test("call safeGet3 on data", () => {
  let a = { a: { b: { c: 1 } } };
  expect(safeGet3(a, "a", "b", "c")).toBe(1);
  a.a.b = null;
  expect(safeGet3(a, "a", "b", "c")).toBe(null);
  a.a = null;
  expect(safeGet3(a, "a", "b", "c")).toBe(null);
  a = null;
  expect(safeGet3(a, "a", "b", "c")).toBe(null);
});

test("call safeGet4 on data", () => {
  let a = { a: { b: { c: { d: 1 } } } };
  expect(safeGet4(a, "a", "b", "c", "d")).toBe(1);
  a.a.b.c = null;
  expect(safeGet4(a, "a", "b", "c", "d")).toBe(null);
  a.a.b = null;
  expect(safeGet4(a, "a", "b", "c", "d")).toBe(null);
  a.a = null;
  expect(safeGet4(a, "a", "b", "c", "d")).toBe(null);
  a = null;
  expect(safeGet4(a, "a", "b", "c", "d")).toBe(null);
});

test("call safeProp on data", () => {
  let a = { a: { b: { c: { d: 1 } } } };
  expect(safeProp(a, "a", "b", "c")).toEqual({ d: 1 });
  expect(safeProp(a, "a", "b", "c", "d")).toBe(1);
  a.a.b.c = null;
  expect(safeProp(a, "a", "b", "c", "d")).toBe(null);
  a.a.b = null;
  expect(safeProp(a, "a", "b", "c", "d")).toBe(null);
  a.a = null;
  expect(safeProp(a, "a", "b", "c", "d")).toBe(null);
  a = null;
  expect(safeProp(a, "a", "b", "c", "d")).toBe(null);
});

test("test safeSet on data", () => {
  let a = { a: 1 };
  safeSet(a, "a", 2);
  expect(a.a).toBe(2);

  a = {} as any;
  safeSet(a, "a", 3);
  expect(a.a).toBe(3);

  a = null;
  expect(() => safeSet(a, "a", 1)).toThrow();
});

test("test safeSet2 on data", () => {
  let a = { a: { b: 1 } };
  safeSet2(a, "a", "b", 2);
  expect(a.a.b).toBe(2);

  a = { a: {} } as any;
  safeSet2(a, "a", "b", 3);
  expect(a.a.b).toBe(3);

  a = {} as any;
  safeSet2(a, "a", "b", 4);
  expect(a.a.b).toBe(4);

  a = null;
  expect(() => safeSet2(a, "a", "b", 1)).toThrow();
});

test("test safeSet3 on data", () => {
  let a = { a: { b: { c: 1 } } };
  safeSet3(a, "a", "b", "c", 2);
  expect(a.a.b.c).toBe(2);

  a = { a: { b: {} } } as any;
  safeSet3(a, "a", "b", "c", 3);
  expect(a.a.b.c).toBe(3);

  a = { a: {} as any };
  safeSet3(a, "a", "b", "c", 4);
  expect(a.a.b.c).toBe(4);

  a = {} as any;
  safeSet3(a, "a", "b", "c", 5);
  expect(a.a.b.c).toBe(5);

  a = null;
  expect(() => safeSet3(a, "a", "b", "c", 1)).toThrow();
});

test("test safeSet4 on data", () => {
  let a = { a: { b: { c: { d: 1 } } } };
  safeSet4(a, "a", "b", "c", "d", 2);
  expect(a.a.b.c.d).toBe(2);

  a = { a: { b: { c: {} } } } as any;
  safeSet4(a, "a", "b", "c", "d", 3);
  expect(a.a.b.c.d).toBe(3);

  a = { a: { b: {} } } as any;
  safeSet4(a, "a", "b", "c", "d", 4);
  expect(a.a.b.c.d).toBe(4);

  a = { a: {} as any };
  safeSet4(a, "a", "b", "c", "d", 5);
  expect(a.a.b.c.d).toBe(5);

  a = {} as any;
  safeSet4(a, "a", "b", "c", "d", 6);
  expect(a.a.b.c.d).toBe(6);

  a = null;
  expect(() => safeSet4(a, "a", "b", "c", "d", 1)).toThrow();
});
