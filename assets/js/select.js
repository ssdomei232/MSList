const versionAvailability = {
  "paper": [
    { label: "1.8.8", value: "1.88" },
    { label: "1.12.2", value: "11.22" },
    { label: "1.14.2", value: "11.42" },
    { label: "1.14.4", value: "11.44" },
    { label: "1.16.5", value: "11.65" },
    { label: "1.18.2", value: "11.82" },
    { label: "1.19.2", value: "11.92" },
    { label: "1.19.4", value: "11.94" },
    { label: "1.20", value: "12" },
    { label: "1.20.1", value: "12.01" },
    { label: "1.20.2", value: "12.02" },
  ],
  "forge": [
    { label: "1.8.8", value: "1.88" },
    { label: "1.12.2", value: "11.22" },
    { label: "1.14.2", value: "11.42" },
    { label: "1.14.4", value: "11.44" },
    { label: "1.16.5", value: "11.65" },
    { label: "1.18.2", value: "11.82" },
    { label: "1.19.2", value: "11.92" },
    { label: "1.20.1", value: "12.01" },
    { label: "1.20.2", value: "12.02" }
  ],
  "arclight": [
    { label: "1.16.1", value: "11.61" },
    { label: "1.18.1", value: "11.81" },
    { label: "1.19.2", value: "11.92" }
  ],
  "catserver": [
    { label: "1.12.2", value: "11.22" },
    { label: "1.16.5", value: "11.65" },
    { label: "1.18.2", value: "11.82" }
  ],
  "mohist": [
    { label: "1.12.2", value: "11.22" },
    { label: "1.16.5", value: "11.65" },
    { label: "1.18.2", value: "11.82" },
    { label: "1.19.2", value: "11.92" },
    { label: "1.19.4", value: "11.94" },
    { label: "1.20.1", value: "12.01" },
    { label: "1.20.2", value: "12.02" }
  ],
  "folia": [
    { label: "1.19.4", value: "11.94" },
    { label: "1.20.1", value: "12.01" },
    { label: "1.20.2", value: "12.02" }
  ],
  "purpur": [
    { label: "1.14.2", value: "11.42" },
    { label: "1.14.4", value: "11.44" },
    { label: "1.16.5", value: "11.65" },
    { label: "1.18.2", value: "11.82" },
    { label: "1.19.2", value: "11.92" },
    { label: "1.19.4", value: "11.94" },
    { label: "1.20", value: "12" },
    { label: "1.20.1", value: "12.01" },
    { label: "1.20.2", value: "12.02" }
  ],
  "spigot": [
    { label: "1.8", value: "1.8" },
    { label: "1.12.2", value: "11.22" },
    { label: "1.13.2", value: "11.32" },
    { label: "1.14.2", value: "11.42" },
    { label: "1.14.4", value: "11.44" },
    { label: "1.16.5", value: "11.65" },
    { label: "1.18.2", value: "11.82" },
    { label: "1.19.2", value: "11.92" },
    { label: "1.19.4", value: "11.94" },
    { label: "1.20", value: "12" },
    { label: "1.20.1", value: "12.01" },
    { label: "1.20.2", value: "12.02" }
  ],
  "airplane": [
    { label: "1.16.5", value: "11.65" },
    { label: "1.17.1", value: "11.71" }
  ],
  "akarin": [
    { label: "1.12.2", value: "11.22" },
    { label: "1.13.2", value: "11.32" },
    { label: "1.14.4", value: "11.44" }
  ],
  "spongeforge": [
    { label: "1.8.9", value: "1.89" },
    { label: "1.12.2", value: "11.22" },
    { label: "1.16.5", value: "11.65" },
    { label: "1.20.2", value: "12.02" }
  ]
};

const distributionSelect = document.getElementById("distributionSelect");
const versionSelect = document.getElementById("versionSelect");

// 当发行版选择发生变化时，更新版本选择区
distributionSelect.addEventListener("change", () => {
  const selectedDistribution = distributionSelect.value;
  const availableVersions = versionAvailability[selectedDistribution];

  // 清空版本选择区
  versionSelect.innerHTML = "";

  // 添加新版本选项
  availableVersions.forEach(version => {
    const option = document.createElement("option");
    option.value = version.value; // 使用自定义的value属性
    option.textContent = version.label; // 显示给用户的版本名称或标签
    versionSelect.appendChild(option);
  });
});

// 初始加载时，预填充版本选择区（如果有默认选择的话）
distributionSelect.dispatchEvent(new Event("change"));

function updateContent(className, newValue) {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = newValue;
  }
}

