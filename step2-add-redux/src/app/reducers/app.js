const init = {
  hi: 'Hello, It\'s me'
};

const app = (state, action) => {
  if (state === undefined) {
    state = init;
  }

  switch (action.type) {
    default: return state;
  }
};

export default app;

