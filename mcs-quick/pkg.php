<?php

// 检查是否接收到GET请求中的"release"和"version"参数
if (isset($_GET['release']) && isset($_GET['version'])) {
    // 获取参数值并存入变量
    $release = $_GET['release'];
    $version = $_GET['version'];
} else {
    die;
}

// 定义JDK版本
if ($version >= 1.7 && $version < 1.8) {
    $jdk_version = "8";
} 
elseif ($version >= 1.8 && $version < 11.6) { 
    $jdk_version = "11";
} 
elseif ($version >= 11.6 && $version < 12){
    $jdk_version = "17";
} 
elseif ($version >= 12){
    $jdk_version ="21";
} 
else{
    die("Too old version");
};
?>
#!/bin/bash
echo -e "\e[40;38;5;82m By \e[30;48;5;82m Linuxcat-mei \e[0m"
if [[ -f /etc/redhat-release ]]; then
    is_centos=true
    package_manager=yum
elif cat /etc/os-release | grep -q '^ID=centos'; then
    is_centos=true
    package_manager=yum
elif cat /etc/os-release | grep -q '^ID=debian' || cat /etc/os-release | grep -q '^ID=ubuntu'; then
    is_centos=false
    is_apt=true
    package_manager=apt-get
else
    echo -e "\033[31m此脚本不支持您的操作系统(只支持apt和yum包管理器)\033[0m "
    exit 1
fi
if [[ $is_centos == true ]]; then
    if ! command -v screen > /dev/null 2>&1; then
        echo -e "\033[33m没有找到Screen,正在使用 $package_manager 为您安装\033[0m"
        sudo $package_manager install -y screen
    else
        echo -e "\033[32mScreen安装完成\033[0m"
    fi
elif [[ $is_apt == true ]]; then
    if ! command -v screen > /dev/null 2>&1; then
        echo -e "\033[33m没有找到Screen,正在使用 $package_manager 为您安装\033[0m"
        sudo $package_manager update && sudo $package_manager install -y screen
    else
        echo -e "\033[32mScreen安装完成\033[0m"
    fi
fi
screen -R minecraft-server
jdk_url="https://d.mmeiblog.cn/file/jdk"
architecture=$(uname -m)
case $architecture in
    x86_64)
        jdk_arch="x64"
        jdk_filename="x64-<?php echo $jdk_version; ?>.tar.gz"
        ;;
    aarch64)
        jdk_arch="aarch64"
        jdk_filename="aarch64-<?php echo $jdk_version; ?>.tar.gz"
        ;;
    *)
        echo "Unsupported schemas: $architecture"
        exit 1
        ;;
esac
wget $jdk_url"/"$jdk_filename -O "/tmp/$jdk_filename"
if [ $? -ne 0 ]; then
    echo -e "\033[31m下载JDK失败\033[0m"
    exit 1
fi
mkdir -p /usr/local/java
tar -zxvf "/tmp/$jdk_filename" -C /usr/local/java
rm "/tmp/$jdk_filename"
echo -e "\033[32mJDK <?php echo $jdk_version; ?> 已安装完成\033[0m"
mkdir -p /opt/mc
cd /opt/mc
wget https://d.mmeiblog.cn/file/minecraft-server-script/pkgs/<?php echo $release; ?>/<?php echo $version; ?>.tar.gz -O server.tar.gz
tar -zxvf server.tar.gz
server_file="server.jar"
chmod +x /usr/local/java/$jdk_arch-<?php echo $jdk_version; ?>/bin/java
echo -e "\033[32m一切都已准备就绪，请耐心等待服务器启动\033[0m"
echo -e "\033[96m感谢您的使用,在服务器启动成功后按下Ctrl+a+d即可退出这个界面(服务器进程不会被中止)\033[0m"
echo -e "\033[96m再次进入只需在终端执行 screen -r minecraft-server 即可\033[0m"
/usr/local/java/$jdk_arch-<?php echo $jdk_version; ?>/bin/java -jar "$server_file" nogui