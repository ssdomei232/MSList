<div>
    <div>
        <table id="distro-table" cellpadding="0" cellspacing="0">
        <colgroup>
        <col width="72%"/>
        <col width="15%"/>
        <col width="35%"/>
        </colgroup>
            <thead>
                <tr>
                    <th>文件名</th>
                    <th>文件大小</th>
                    <th>修改日期</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if (dirname($f) == '/') {
                    $p = '';
                } else {
                    $p = str_replace("\\", "/", dirname($f));
                }
                if ($rewrite) {
                    echo '<td><a href="' . $siteURL . $p . '">上级目录</a></td>';
                } else {
                    echo '<td><a href="' . $siteURL . '?f=' . $p . '">上级目录</a></td>';
                }
                echo '<td>Dir</td><td>' . date("Y-m-d H:i:s", filemtime($path . $f)) . '</td>';
                if (is_dir($path . $f)) {
                    $dir = scandir($path . $f);
                    foreach ($dir as $filename) {
                        $subPath = $path . $f . '/' . $filename;
                        if ($filename == '.' || $filename == '..') {
                            continue;
                        } else {
                            echo '<tr>';
                            if ($rewrite) {
                                $fileURL = $siteURL . str_replace("//", "/", $f . '/' . $filename);
                            } else {
                                $fileURL = $siteURL . str_replace("//", "/", "?f=" . $f . '/' . $filename);
                            }
                            if (is_dir($subPath)) {
                                $extraFlag = '';
                                $filesize = 'Dir';
                            } else {
                                switch ($downloadMode) {
                                    case 2:
                                        $fileURL = $siteURL . str_replace("//", "/", $subPath);
                                        break;
                                    case 3:
                                        $fileURL = $downloadURL . str_replace("//", "/", $f . '/' . $filename);
                                        break;
                                }
                                $extraFlag = 'download="' . $filename . '"';
                                $filesize = sizeConvert(filesize($subPath));
                            }
                            echo '<td><a href="' .  $fileURL . '" ' . $extraFlag . '>' . $filename . '</a></td>';
                            echo '<td>' . $filesize . '</td>';
                            echo '<td>' . date("Y-m-d H:i:s", filemtime($subPath)) . '</td>';
                            echo '</tr>';
                        }
                    }
                }
                ?>
            </tbody>
        </table>
        <div id="footer">
            <p>©2024 Linuxcat</p>
        </div>
    </div>
    <br>
</div>
</body>

</html>