/*
Navicat MySQL Data Transfer

Source Server         : junjun
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : book

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2017-12-17 18:39:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for allbook
-- ----------------------------
DROP TABLE IF EXISTS `allbook`;
CREATE TABLE `allbook` (
  `name` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `number1` int(11) DEFAULT NULL,
  `allNumber` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of allbook
-- ----------------------------
INSERT INTO `allbook` VALUES ('《芳华》', '严歌苓', '《芳华》是严歌苓所著一部小说，由人民文学出版社出版。 严歌苓用狂欢的故事与狂欢的语言，细数了不仅仅是“芳华”这段青春时光，更展现出我们从不曾发掘的内心黑洞到恍然', '40', '39', '79', '1', '../image/1.jpg');
INSERT INTO `allbook` VALUES ('《java从入门到精通》', '未知', '《Java从入门到精通》是人民邮电出版社于 2010年出版的图书，由国家863中部软件孵化器主编。以零基础讲解为宗旨，深入浅出地讲解Java的各项技术及实战技能。本书从初学者角度出发，通过通俗易懂的语言、丰富多彩的实例，详细介绍了使用Java语言进行程序开发应该掌握的各方面技术。', '30', '10', '40', '2', '../image/s5926855.jpg');
INSERT INTO `allbook` VALUES ('《C语言程序设计》', '林建秋 韩静萍', '《C语言程序设计》讲述了C语言的基本概念、各种数据类型的使用技巧、程序流程控制、数组、函数、指针以及有关程序设计的方法等内容。', '50', '30', '80', '3', '../image/300.jpg');
INSERT INTO `allbook` VALUES ('《数据结构与算法》', '肖南峰 赵洁', '《数据结构与算法》注重理论与实践相结合，内容深入浅出，可以作为高等院校计算机学科相关专业的教材或参考书，同时对计算机科技工作者也有参考价值。《数据结构与算法》以基本数据结构和算法设计策略为知识单元，系统地介绍了数据结构的知识与应用、计算机算法的设计与分析方法，主要内容包括线性表、树、图和广义表、算法设计策略以及查找与排序算法等。', '40', '15', '55', '4', '../image/101.jpg');
INSERT INTO `allbook` VALUES ('《开心当兵》', '李俊良', '作为天下第一的儿子，远去北凉从军。臭名远扬的江湖世子如何在军伍中，展现迷人的风采', '100', '100', '200', '5', null);
INSERT INTO `allbook` VALUES ('《Vue.js权威指南》', '张耀春', 'Vue.js是一个用来开发Web界面的前端库。本书致力于普及国内Vue.js技术体系，让更多喜欢前端的人员了解和学习Vue.js。如果你对Vue.js基础知识感兴趣，如果你对源码解析感兴趣，如果你对Vue.js 2.0感兴趣，如果你对主流打包工具感兴趣，如果你对如何实践感兴趣，本书都是一本不容错过的以示例代码为引导、知识涵盖全面的*选择。全书一共30章，由浅入深地讲解了Vue.js基本语法及源码解析。主要内容包括数据绑定、指令、表单控件绑定、过滤器、组件、表单验证、服务通信、路由和视图、vue-cli、测', '20', '70', '90', '6', '../image/3451389f-c331-4db8-9676-a5fdaf829c1f.png');
INSERT INTO `allbook` VALUES ('《潮流：UI设计必修课》', '常丽', '《潮流 UI设计必修课》分为4篇共26课。第1篇全面介绍了UI的概念、分类、图形界面的发展史，以及UI行业的发展前景等；第2篇细致讲解了UI设计师的必备技能、UI设计的工作流程等；第3篇具体解析了图标设计、界面设计、系统控件设计、LOGO 与Banner设计、产品包装的设计，以及UI质感表现、色彩构图、元素风格等的制作方法；第4篇深度剖析了产品需求分析、交互设计、用户体验、手机应用 APP 等。', '46', '19', '65', '7', '../image/B6876761.jpg');
INSERT INTO `allbook` VALUES ('《Axure RP8 网站和APP原型制作 从入门到精通》', '金乌', '要做一名成功的用户体验设计师，我们必须要综合表达许多不同的信息，很多情况下这些信息设置是相互矛盾或冲突的。我们要熟悉业务流程，了解技术约束和用户体验对性能的影响，做用户研究和数据分析等。我们要在各种纷乱的条件和信息中找到至关重要的平衡，并创建可行的用户体验，无论在何种设备何种系统上，都不能阻止我们探索和前进的脚步。由此可见，一款能够帮助我们构思、可视化设计、沟通、协作、注释和创建规范文档的专业用户体验设计工具是非常宝贵的。', '10', '7', '17', '8', '../image/7dd98d1001e9390175aa98ab73ec54e737d196fe.jpg');
INSERT INTO `allbook` VALUES ('《HTML5+CSS3+JavaScript从入门到精通（标准版）》', '未来科技', '10年一线开发经验412节同步视频661个案例分析1000习题面试题 4396个案例 47部参考手册 1635个模版 17类素材库 623项配色 508项欣赏库', '26', '4', '30', '9', '../image/3.jpg');
INSERT INTO `allbook` VALUES ('《C#项目开发实战入门（全彩版）》', '明日科技', '《C#项目开发实战入门》以Q友——做你自己的QQ、365系统加速器、快递单打印精灵、闪电下载器、五子棋游戏、明日ERP管理系统、铭成在线考试系统和Show——企业个性化展示平台共8个项目为案例，从软件工程的角度出发，按照项目的开发顺序，系统、全面地介绍了项目开发流程，从开发背景、系统功能分析、业务流程分析、数据库建模到项目开发，每一过程都进行了详细讲解，旨在使读者真正获得程序开发经验，提高项目开发能力。', '61', '16', '77', '10', '../image/59dc3c3fN2d3d3784.jpg');

-- ----------------------------
-- Table structure for b_book
-- ----------------------------
DROP TABLE IF EXISTS `b_book`;
CREATE TABLE `b_book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of b_book
-- ----------------------------
INSERT INTO `b_book` VALUES ('1', '1', '《芳华》');
INSERT INTO `b_book` VALUES ('2', '1', '《java从入门到精通》');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `name` varchar(255) NOT NULL,
  `book_all` int(11) DEFAULT NULL,
  `book_now` int(11) DEFAULT NULL,
  `book_return` int(11) DEFAULT NULL,
  `sign` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('夏花', '12', '2', '2', '读书使人强大，懒冻使人坚强');
