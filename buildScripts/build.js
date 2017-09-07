import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod.js';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('generating minified bundle for production. This will take a moment...'))

webpack(webpackConfig).run((err, stats) => {
  if(err) { // fatal error, stop here.
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.map(error => console.log(chalk.red(error)));
  }

  if(jsonStats.hasWarnings) {
    return jsonStats.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);
  
  console.log(chalk.green('Your app has been built successfully.'));
  
  return 0;
});