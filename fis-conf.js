// 设置图片合并的最小间隔
fis.config.set('settings.spriter.csssprites.margin', 20);

// 下面的开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
  fis.config.set('modules.postpackager', 'simple');

// 下面的设置打包规则
 fis.config.set('pack', {
      '/js/aaa.js': [
         'js/slide.js',
         'js/xslider.js',
		  'js/slides.min.jquery.js',
       
      ],
     // 下面的设置CSS打包规则，CSS打包的同时会进行图片合并
      '/css/aaa.css': '**.css'
 });

// 下面的可以开启simple对零散资源的自动合并
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
                //发布到/ceshi/fabu/js目录下
				 release : '/ceshi/fabu/$&',
				 //命令行输入-m 需要加md5就用true，把不需要加md5的都设为false
				 //在命令行输入某个命令，才会遍历文档，执行摸个功能，再根据true和false判断用不用这个功能
				 useHash:true
				 // release : '/ceshi/fabu/$&'
				
				
            },
          		
            {
                //所有的css文件
                reg : '**.css',
                //发布到/ceshi/fabu/css目录下
                release : '/ceshi/fabu/$&',
				useHash : false

            },
            {
                //所有images目录下的.png，.gif文件
                reg : /^\/images\/(.*\.(?:png|gif))/i,
                //发布到/ceshi/fabu/images目录下
                release : '/ceshi/fabu/images/$1',
				useHash : false
			
            },
			//将默认在css文件夹下生成的合并图片发布到指定的位置上
			 {
      reg : /^\/css\/(.*\.(?:png|gif))/i,
   release : '/ceshi/fabu/images/$1',
   useHash : false
    },
	//将html文件一并移到发布目录下
	 {
      reg : 'index.html',
   release : '/ceshi/fabu/$&'
    }
        ]
    }
});
