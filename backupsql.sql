/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.1.40-MariaDB : Database - nodetest
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`nodetest` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `nodetest`;

/*Table structure for table `customers` */

DROP TABLE IF EXISTS `customers`;

CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=latin1;

/*Data for the table `customers` */

insert  into `customers`(`id`,`name`,`email`) values (40,'q','w'),(41,'yu','io'),(42,'uyi','yu'),(43,'yu','uyi'),(45,'vbc','nbvn'),(46,'dfg','wer'),(47,'dfg','dfg'),(48,'dfg','dfg'),(49,'dfg','dfg'),(50,'asd','asd'),(51,'qwe','qwe'),(52,'qwe','qwe'),(53,'qwe','qwe'),(54,'qqwe','qwe'),(55,'qwe','qwe'),(56,'kjllk','qwe'),(57,'jhlk','lk'),(58,'yu','yu'),(59,'miguel','lanh03@hotmail.com');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`id`,`email`,`password`) values (1,'lanh03@hotmail.com','$2b$12$VMfMydRv4jnFNbM2dbZZdup0eZSWUETfkfmyl5C4MTfrucRRe7PjS');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
