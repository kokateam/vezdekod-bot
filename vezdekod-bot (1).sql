-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 10, 2022 at 04:50 PM
-- Server version: 5.7.37-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vezdekod-bot`
--

-- --------------------------------------------------------

--
-- Table structure for table `memes`
--

CREATE TABLE `memes` (
  `id` int(11) NOT NULL,
  `photo_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `memes`
--

INSERT INTO `memes` (`id`, `photo_id`) VALUES
(2, '-197700721_457240646'),
(3, '-197700721_457240664'),
(4, '-197700721_457240665'),
(5, '-197700721_457240667'),
(6, '-197700721_457240648'),
(7, '-197700721_457240649'),
(8, '-197700721_457240652'),
(9, '-197700721_457240650'),
(10, '-197700721_457240647'),
(11, '-197700721_457240653'),
(12, '-197700721_457240659'),
(13, '-197700721_457240669'),
(14, '-197700721_457240660'),
(15, '-197700721_457240671'),
(16, '-197700721_457240672'),
(17, '-197700721_457240673'),
(18, '-197700721_457240675'),
(19, '-197700721_457240676'),
(20, '-197700721_457240677'),
(21, '-197700721_457240678'),
(22, '-197700721_457240679'),
(23, '-197700721_457240680'),
(24, '-197700721_457240674'),
(25, '-197700721_457240681'),
(26, '-197700721_457240683'),
(27, '-197700721_457240682'),
(28, '-197700721_457240684'),
(29, '-197700721_457240685'),
(30, '-197700721_457240686'),
(31, '-197700721_457240687'),
(32, '-197700721_457240688'),
(33, '-197700721_457240690'),
(34, '-197700721_457240691'),
(35, '-197700721_457240692'),
(36, '-197700721_457240693'),
(37, '-197700721_457240695'),
(38, '-197700721_457240696'),
(39, '-197700721_457240697'),
(40, '-197700721_457240698'),
(41, '-197700721_457240700'),
(42, '-197700721_457240701'),
(43, '-197700721_457240702'),
(44, '-197700721_457240703'),
(45, '-197700721_457240705'),
(46, '-197700721_457240706'),
(47, '-197700721_457240707'),
(48, '-197700721_457240708'),
(49, '-197700721_457240709'),
(50, '-197700721_457240712'),
(51, '-197700721_457240713'),
(52, '172118960_457313468'),
(53, '172118960_457313471_de2e611827e3c89649'),
(54, '566935204_457274280'),
(55, '566935204_457274280_e1c7bfdd6801a206f8'),
(56, '566935204_457274282_b1eec522d19383f4e4'),
(57, '566935204_457274283_5f7cdc36d202e5eff1'),
(58, '510624674_457245639_22b2b5cc38dbc95289');

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `meme_id` int(11) NOT NULL,
  `liked` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rating`
--

INSERT INTO `rating` (`id`, `user_id`, `meme_id`, `liked`) VALUES
(1, 172118960, 47, 1),
(2, 172118960, 38, 1),
(3, 172118960, 29, 1),
(4, 172118960, 6, 0),
(5, 172118960, 21, 0),
(6, 172118960, 20, 0),
(7, 172118960, 32, 1),
(8, 17218960, 32, 1),
(9, 172118960, 5, 1),
(10, 172118960, 19, 1),
(11, 172118960, 12, 1),
(12, 172118960, 16, 1),
(13, 172118960, 7, 1),
(14, 172118960, 30, 1),
(15, 172118960, 2, 1),
(16, 172118960, 18, 1),
(17, 172118960, 36, 1),
(18, 172118960, 48, 1),
(19, 172118960, 44, 1),
(20, 566935204, 4, 1),
(21, 566935204, 14, 0),
(22, 566935204, 9, 0),
(23, 566935204, 46, 1),
(24, 566935204, 19, 1),
(25, 566935204, 31, 1),
(26, 566935204, 38, 1),
(27, 566935204, 44, 1),
(28, 566935204, 36, 0),
(29, 566935204, 15, 0),
(30, 566935204, 21, 1),
(31, 566935204, 25, 1),
(32, 566935204, 16, 0),
(33, 566935204, 45, 1),
(34, 566935204, 40, 0),
(35, 566935204, 41, 1),
(36, 566935204, 57, 1),
(37, 566935204, 7, 1),
(38, 566935204, 35, 1),
(39, 566935204, 32, 0),
(40, 566935204, 24, 1),
(41, 566935204, 47, 1),
(42, 566935204, 8, 0),
(43, 566935204, 50, 1),
(44, 197150646, 5, 0),
(45, 197150646, 3, 0),
(46, 197150646, 29, 0),
(47, 197150646, 39, 0),
(48, 197150646, 36, 0),
(49, 197150646, 33, 0),
(50, 197150646, 22, 0),
(51, 197150646, 47, 0),
(52, 510624674, 39, 1),
(53, 510624674, 11, 1),
(54, 510624674, 3, 1),
(55, 403701496, 13, 1),
(56, 403701496, 3, 1),
(57, 403701496, 2, 1),
(58, 403701496, 37, 1),
(59, 403701496, 18, 1),
(60, 403701496, 7, 1),
(61, 403701496, 52, 1),
(62, 403701496, 44, 1),
(63, 403701496, 51, 1),
(64, 403701496, 9, 1),
(65, 403701496, 46, 1),
(66, 403701496, 14, 1),
(67, 403701496, 30, 1),
(68, 403701496, 39, 1),
(69, 403701496, 36, 1),
(70, 403701496, 56, 1),
(71, 403701496, 5, 1),
(72, 403701496, 49, 1),
(73, 403701496, 11, 1),
(74, 403701496, 12, 1),
(75, 403701496, 34, 1),
(76, 403701496, 33, 1),
(77, 403701496, 4, 1),
(78, 403701496, 6, 1),
(79, 403701496, 40, 1),
(80, 403701496, 42, 1),
(81, 403701496, 23, 1),
(82, 403701496, 55, 1),
(83, 403701496, 8, 1),
(84, 403701496, 20, 1),
(85, 403701496, 19, 1),
(86, 403701496, 38, 1),
(87, 403701496, 41, 1),
(88, 403701496, 53, 1),
(89, 403701496, 48, 1),
(90, 403701496, 35, 1),
(91, 403701496, 15, 1),
(92, 403701496, 50, 1),
(93, 403701496, 32, 1),
(94, 403701496, 57, 1),
(95, 403701496, 54, 1),
(96, 403701496, 16, 1),
(97, 403701496, 27, 1),
(98, 403701496, 28, 1),
(99, 403701496, 25, 1),
(100, 403701496, 10, 1),
(101, 403701496, 58, 1),
(102, 403701496, 29, 0),
(103, 403701496, 21, 1),
(104, 403701496, 26, 1),
(105, 403701496, 22, 1),
(106, 403701496, 17, 1),
(107, 403701496, 24, 1),
(108, 403701496, 45, 1),
(109, 403701496, 47, 1),
(110, 403701496, 43, 1),
(111, 403701496, 31, 1),
(112, 510624674, 34, 0),
(113, 510624674, 26, 0),
(114, 510624674, 23, 0),
(115, 510624674, 19, 0),
(116, 510624674, 31, 0),
(117, 510624674, 56, 0),
(118, 172118960, 45, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `memes`
--
ALTER TABLE `memes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `memes`
--
ALTER TABLE `memes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
