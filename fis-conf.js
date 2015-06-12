// 设置图片合并的最小间隔
fis.config.set('settings.spriter.csssprites.margin', 20);

// 取消下面的注释开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
  fis.config.set('modules.postpackager', 'simple');

// 取消下面的注释设置打包规则
 fis.config.set('pack', {
      '/js/aaa.js': [
         'js/slide.js',
         'js/xslider.js',
		  'js/slides.min.jquery.js',
       
      ],
     // 取消下面的注释设置CSS打包规则，CSS打包的同时会进行图片合并
      '/css/aaa.css': '**.css'
 });

// 取消下面的注释可以开启simple对零散资源的自动合并
 fis.config.set('settings.postpackager.simple.autoCombine', true);
fis.config.merge({
    roadmap : {
        domain : {
            //所有css文件添加http://localhost:8080作为域名
            '**.css' : 'http://localhost:8080'
        },
        path : [
            {
                //所有的js文件
                reg : '**.js',
                //发布到/static/js/xxx目录下
                release : '$&'
            },
            {
                //所有的css文件
                reg : '**.css',
                //发布到/static/css/xxx目录下
                release : '$&'
            },
            {
                //所有image目录下的.png，.gif文件
                reg : /^\/images\/(.*\.(?:png|gif|jpg))/i,
                //发布到/static/pic/xxx目录下
                release : 'images/$1'
            }
        ]
    }
});