const args = process.argv.slice(2);

const timer = () => {
  if (args.length === 0) {
    return null;
  };

  for (let element of args) {
    if (element <= 0){
      return null;
    };

    if (element === NaN) {
      return null;
    }

    setTimeout(() => {
    process.stdout.write('\x07');
  }, element);

}
};

// timer();