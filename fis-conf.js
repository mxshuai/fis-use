// ����ͼƬ�ϲ�����С���
fis.config.set('settings.spriter.csssprites.margin', 20);

// ȡ�������ע�Ϳ���simple�����ע����Ҫ�Ƚ��в����װ npm install -g fis-postpackager-simple
  fis.config.set('modules.postpackager', 'simple');

// ȡ�������ע�����ô������
 fis.config.set('pack', {
      '/js/aaa.js': [
         'js/slide.js',
         'js/xslider.js',
		  'js/slides.min.jquery.js',
       
      ],
     // ȡ�������ע������CSS�������CSS�����ͬʱ�����ͼƬ�ϲ�
      '/css/aaa.css': '**.css'
 });

// ȡ�������ע�Ϳ��Կ���simple����ɢ��Դ���Զ��ϲ�
 fis.config.set('settings.postpackager.simple.autoCombine', true);
fis.config.merge({
    roadmap : {
        domain : {
            //����css�ļ����http://localhost:8080��Ϊ����
            '**.css' : 'http://localhost:8080'
        },
        path : [
            {
                //���е�js�ļ�
                reg : '**.js',
                //������/static/js/xxxĿ¼��
                release : '$&'
            },
            {
                //���е�css�ļ�
                reg : '**.css',
                //������/static/css/xxxĿ¼��
                release : '$&'
            },
            {
                //����imageĿ¼�µ�.png��.gif�ļ�
                reg : /^\/images\/(.*\.(?:png|gif|jpg))/i,
                //������/static/pic/xxxĿ¼��
                release : 'images/$1'
            }
        ]
    }
});