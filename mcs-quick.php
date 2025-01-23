<?php include('config.php'); ?>
<!DOCTYPE HTML>
<!--
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>Minecraft Severs List | 一键开服脚本</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/home.main.css" />
		<script type="text/javascript" src="assets/js/jquery-1.11.3.min.js" ></script>
		<meta name="author" content="mei">
		<meta name="keywords" content="一键开服脚本,Minecraft一键开服脚本,一键开服,Minecraft 服务端列表,Minecraft 服务端,Minecraft,Minecraft Severs List,Minecraft Severs,Linuxcat,linuxcat,linux">
		<meta name="description" content="Minecraft Severs List | 一键开服脚本">
		<meta property="og:type" content="website">
		<meta property="og:title" content="Minecraft Severs List | 一键开服脚本">
		<meta property="og:url" content="https://d.mmeiblog.cn/mcs-quick.php">
		<meta property="og:site_name" content="Minecraft Severs List | 一键开服脚本">
		<meta property="og:description" content="Minecraft 一键开服脚本">
		<meta property="og:locale" content="zh_CN">
		<meta property="article:author" content="mei">
		<meta property="article:tag" content="一键开服脚本,Minecraft一键开服脚本,一键开服,Minecraft 服务端列表,Minecraft 服务端,Minecraft,Minecraft Severs List,Minecraft Severs,Linuxcat,linuxcat,linux">
		<meta name="twitter:card" content="summary_large_image">
		<?php echo $umami; ?>
	</head>
	<body class="is-preload no-sidebar">
		<div id="page-wrapper">

			<!-- Header -->
				<div id="header-wrapper">
					<header id="header" class="container">

						<!-- Logo -->
							<div id="logo">
								<h1><a href="/">一键开服脚本</a></h1>
								<span>by Linuxcat</span>
							</div>

						<!-- Nav -->
							<nav id="nav">
								<ul>
									<li><a href="/">Home</a></li>
									<li class="current"><a href="/mcs-quick.php">一键开服</a></li>
								</ul>
							</nav>

					</header>
				</div>

			<!-- Main -->
				<div id="main-wrapper">
					<div class="container">
						<div id="content">

							<!-- Content -->
								<article>
									<h3>注意事项</h3>
									<p>如果你需要自定义修改脚本,可以访问<a href="https://github.com/ssdomei232/Start-the-minecraft-server-automatically/">Github仓库</a></br>
									我们默认认为您同意Minecraft的<a href="https://account.mojang.com/documents/minecraft_eula">eula协议</a></br>
									<strong>在使用前请确保服务器中安装了<code>screen</code>并且已经创建了一个 session ,之后的管理都需要进入这个 session 来进行</strong></br>
									<strong>关于 screen ,可以看<a href="https://mei.lv/articles/2023/linux-screen.html">这篇文章</a></strong></p>

									<h3>使用一键脚本</h3>
									<p>首先进入一个 session ,在下面选择版本后执行下面的脚本</br>
									<label><strong>发行版: </strong></label>
									<select id="distributionSelect" onchange="updateContent('release', this.options[this.options.selectedIndex].value)">
										<option value="paper">Paper(插件端)</option>
										<option value="forge">Forge(mod端)</option>
										<option value="arclight">Arclight(混合端)</option>
										<option value="mohist">Mohist(混合端)</option>
										<option value="catserver">CatServer(混合端)</option>
										<option value="folia">Folia(插件端)</option>
										<option value="purpur">Purpur(插件端)</option>
										<option value="spigot">Spigot(插件端)</option>
										<option value="airplane">Airplane(插件端)</option>
										<option value="akarin">Akarin(插件端)</option>
										<option value="spongeforge">SpongeForge(混合端)</option>
									</select>
									<label><strong>版本: </strong></label>
									<select id="versionSelect" onchange="updateContent('version', this.options[this.options.selectedIndex].value)"></select>
									<script type="text/javascript" src="assets/js/select.js"></script>
<pre>curl -sSL https://d.mmeiblog.cn/mcs-quick/?release=<code class="release">paper</code>\&version=<code class="version">1.88</code> -o quick_install.sh && sudo bash quick_install.sh</pre>

								</article>

						</div>
					</div>
				</div>

				<!-- Footer -->
				<div id="footer-wrapper">
					<footer id="footer" class="container">
						<div class="row">
							<div class="col-12">
								<div id="copyright">
									<ul class="menu">
										<li>&copy;<?php echo date('Y');?> Linuxcat. All rights reserved</li>
									</ul>
								</div>
							</div>
						</div>
					</footer>
				</div>

			</div>
	</body>
</html>