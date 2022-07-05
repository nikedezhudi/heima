module.exports = {
    plugins: {
      'autoprefixer': {
        browsers: ['Android >= 4.0', 'iOS >= 8']
      },
      'postcss-pxtorem': {
        //区分设置（我们自己写的样式是75，vant组件的样式是37.5）
        rootValue: (arg) => {
            console.log(arg);
            //判断需要处理的样式文件是否是vant组件的
            return arg.file.includes("vant") ? 37.5 : 75;
        },
        propList: ['*']
      }
    }
  }