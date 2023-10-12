#!/usr/bin/env node

import cli from '../src/cli.mjs'
import a from '@guojw/a';
console.log(a());
// eslint-disable-next-line no-unused-expressions
cli().parse(process.argv.slice(2));
