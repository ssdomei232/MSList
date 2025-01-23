<?php

// 下载文件存储目录（如果下载模式为1时建议修改
$path = './file';

// 网址设定，为空为自动获取
$siteURL = '/';

// 下载模式
// 此值为2时：直接返回文件在本站的路径
// 此值为3时：将文件的路径拼接到$downloadURL中（$downloadURL变量生效
$downloadMode = 3;

// 单个文件下载限速，单位：KB/S（下载模式为1时生效
$maxSpeed = 10000;

// 文件服务器链接（下载模式为3时生效
$downloadURL = "/file";

// umami
$umami = '<script defer src="https://umami.mmeiblog.cn/script.js" data-website-id="5b3cf059-b49b-444c-ab25-aa69e26a4c10"></script>';