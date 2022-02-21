async function doSomething() {
  const foo = await import('./foo');

  console.log('foo is ', foo);
}

doSomething();
