# Little_movie_loli
中文：小小电影娘
荣耀同时属于#小小书童#https://github.com/csufuyi/niubility 
看到小小书童的idea，激发了我们对电影娘的规划。
## 成员介绍
N0.1  莫颜云月 

自我评价：性别女坐标杭州&北京，混迹于互联网金融公司的一枚PM，优点是脑洞大，好奇心强。

技能点数：脑洞能力、产品能力、入门级python代码（修炼中）

团队职责：产品规划，提炼需求，简单的python抓取数据源

N0.2 喂喂

自我评价：北京工作的小伙砸，一个想养两只名字叫代码（黛玛） 和 BUG（巴基）宠物的PM

技能点数：弱鸡的开发能力、弱鸡的产品能力、开始学python

团队职责：半推半就的主程，有空就哆嗦两句需求，顺便用自己的半吊子去影响莫女侠的编码认知

######女侠注：我不是不会承认“PHP是最好的语言”之类的编程认知的

（请接龙）

## 项目规划
### V0.5 娘之大者，萝莉之身
此版本以搭建完整业务模型，实现电影查找功能为目标，下个版本再进行功能模块升级
#### 用户场景
  需求1
  屌丝李累在微信上和女神韩霉霉聊天，韩霉霉难得有心情搭理李累，于是说了一句，你看过《癞蛤蟆终将不可能得到白天鹅》这部获奖电影吗？
  李累完全木有看过啊，但是为了争取在女神面前表现一下，于是赶紧关掉微信，打开百度，输入电影名称，等待返回的搜索结果，点击了一个似乎
  是电影资料页面地址，结果防不胜防啊，竟然是个广告网站，于是花了老大劲终于找到这部电影的资料介绍页面，找了几篇影评看完酝酿了一下，
  信心满满打开微信准备回复韩霉霉，就见韩霉霉发过来一个“呵呵”、“去洗澡了”。李累拿着手机露出了悔恨的眼神，有什么工具能够帮助李累
  快速查询到电影资料、影评，好从容的在女神面前装X呢？
  
  这就是小小电影娘解决的用户痛点，我们将基于微信公众号搭建一个快速查询电影资料的小工具，下次李累再遇到没有看过的电影的时候，只要
  打开我们的【小小电影娘】公众号，在公众号对话框，语音输入电影名称，公众号能够快速返回电影资料，最热影评，主演还参与了别的什么片子
  等数据，全程不需要脱离微信，只需10秒，小小电影娘助您从容装逼。
  
  需求2（类似小小书童的功能）
  文艺青年郭小明喜欢看电影，经常在微信上和人讨论电影，朋友们推荐好电影的时候，想记录下来，每次都需要打开豆瓣APP，进行一堆操作才能
  标记该电影【想看】，有木有什么简单的办法呢。基于微信后，授权绑定豆瓣账户后，再遇到想看的电影，只需要在电影娘的公众号对话框输入
  电影名称，就能够快速标记想看的电影了，同时底部菜单栏还支持用户直接查询回你的【想看】电影列表。
  
  
#### 功能需求

  - 找电影
    + 输入：《癞蛤蟆终将不可能得到白天鹅》
    + 输出：「电影基本信息（类型、评分、上映时间、简介）点击查看详细」，「共10086条影评...点击查看最热影评」，「点击查看同类推荐」

  - 标记想看
    + 输入：想看(xk)
    + 输出：记录用户想看列表
    + 说明：功能不与豆瓣绑定是否可行？我这的考虑是如果用户没有豆瓣帐号，用户还需要去注册豆瓣！所以系统利用用户公众号信息生成帐号数据

  - 想看列表
    + 输入：回复列表
    + 输出：标记的电影列表数据（前10条，超出部分给链接）

#### 技术架构
业务核心架构图
![业务架构](http://c.hiphotos.baidu.com/image/pic/item/c75c10385343fbf2b8a4c211b87eca8065388f73.jpg)

扩展功能项
根据实际业务需要，对通过公众号发起的影片查询结果进行保存，以便后期做数据处理

####时间安排
6月计划&策略&里程碑

week0: 开脑洞

week1:以下省略一千字
。
。
。

####运营推广



