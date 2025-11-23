const bioData = {
    about: `Motivated and self-driven Computer Science & Engineering student at SRM University with a strong foundation in programming, AI, cybersecurity, and embedded systems. Passionate about solving complex problems, from building a personal LAN network and neural network at an early age to working on SRMSAT-2. Proficient in AI, firewall development, and ARMv7 Assembly, with a keen interest in quantum computing. Seeking opportunities to apply technical expertise in a challenging environment.`,
    experience: [
        { role: "Onboard Computer Engineer", company: "SRM Space Systems Laboratory", date: "August 2024 - Present", icon: "fa-satellite" },
        { role: "Translator and Software Engineer", company: "Fiverr", date: "March 2025 - Present", icon: "fa-laptop-code" }
    ],
    certifications: ["Harvard University's CS50x", "Nvidia Build a Brain in 10 Minutes"]
};

const skills = [
    { name: "Python", level: 90, type: "Languages" },
    { name: "SQL", level: 85, type: "Languages" },
    { name: "HTML", level: 90, type: "Frontend" },
    { name: "Java", level: 60, type: "Languages" },
    { name: "C/C++", level: 65, type: "Languages" },
    { name: "ARMv7 Assembly", level: 40, type: "Low Level" },
    { name: "Swift", level: 30, type: "Mobile" },
    { name: "CSS", level: 40, type: "Frontend" },
    { name: "JavaScript", level: 40, type: "Frontend" }
];

const projects = [
    {
        title: "SkyFireWall-MkI",
        desc: "IDPS System With Firewall And Kernel level Integration. Advanced packet filtering.",
        link: "https://github.com/LakshendraSingh/SkyFireWall-MkI",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=400&auto=format&fit=crop"
    },
    {
        title: "Patient Health Monitor",
        desc: "IoT based real-time patient monitoring system for remote healthcare.",
        link: "https://github.com/LakshendraSingh/Patient-Health-Monitoring-System",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop"
    },
    {
        title: "Fashion MNIST Classifier",
        desc: "Machine Learning Based Clothing Image Classifier using Neural Networks.",
        link: "https://github.com/LakshendraSingh/Machine_Learning_Based_Clothing_Image_Classifer",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=400&auto=format&fit=crop"
    }
];

const contacts = [
    { name: "Email", val: "lakshendra.singh@outlook.com", link: "mailto:lakshendra.singh@outlook.com", icon: "fa-envelope", type: "fas" },
    { name: "LinkedIn", val: "Profile", link: "https://www.linkedin.com/in/lakshendra-singh/", icon: "fa-linkedin", type: "fab" },
    { name: "GitHub", val: "LakshendraSingh", link: "https://github.com/LakshendraSingh", icon: "fa-github", type: "fab" },
    { name: "ORCID", val: "0009-0006-6222-3615", link: "https://orcid.org/0009-0006-6222-3615", icon: "fa-orcid", type: "fab" },
    { name: "LeetCode", val: "CyberdyneSystems", link: "https://leetcode.com/u/CyberdyneSystemsModel101_T-800/", icon: "fa-code", type: "fas" },
    { name: "Hackerrank", val: "SkyNetIsLive", link: "https://www.hackerrank.com/profile/SkyNetIsLive", icon: "fa-hackerrank", type: "fab" }
];

const fileSystem = {
    root: {
        "Documents": {
            type: "folder",
            content: {
                "Mission_Log.txt": { type: "file", icon: "fa-file-alt", color: "text-gray-400" },
                "Resume.pdf": { type: "pdf", icon: "fa-file-pdf", color: "text-red-500", src: "./assets/Resume.pdf" }
            }
        },
        "Images": {
            type: "folder",
            content: {
                "Project_Alpha.jpg": { type: "image", src: "https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=200&fit=crop" },
                "Profile_Pic.png": { type: "image", src: "./assets/profile-pic.png" }
            }
        }
    }
};

function generateCalendarContent() {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();
    const firstDay = new Date(year, date.getMonth(), 1).getDay();
    
    let html = `<div class="h-full bg-black p-4 font-mono flex flex-col text-gray-300">
        <div class="text-center text-red-500 font-tech text-xl mb-4 border-b border-red-900 pb-2">${month.toUpperCase()} ${year}</div>
        <div class="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2 font-bold">
            <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
        </div>
        <div class="grid grid-cols-7 gap-1 text-center text-sm flex-1">`;
    
    for(let i=0; i<firstDay; i++) html += `<div></div>`;
    for(let i=1; i<=daysInMonth; i++) {
        const isToday = i === date.getDate();
        html += `<div class="${isToday ? 'bg-red-600 text-black font-bold rounded-sm' : 'hover:bg-red-900/30 cursor-pointer'} p-2 flex items-center justify-center transition-colors">${i}</div>`;
    }
    
    html += `</div>
        <div class="mt-4 pt-2 border-t border-red-900/30 text-xs text-center text-gray-500">
            SYSTEM DATE: ${date.toDateString().toUpperCase()}
        </div>
    </div>`;
    return html;
}

const apps = {
    calendar: {
        id: 'calendar', title: 'Calendar', icon: 'fa-calendar-alt', color: 'text-red-400', width: 400, height: 450,
        content: generateCalendarContent()
    },
    bio: {
        id: 'bio', title: 'Bio_Data', icon: 'fa-id-card', color: 'text-red-500', width: 700, height: 600,
        content: `
            <div class="h-full flex flex-col bg-black text-red-50 font-mono p-4 overflow-y-auto">
                <div class="flex items-start gap-4 mb-6 border-b border-red-800 pb-4">
                    <div class="w-24 h-24 border-2 border-red-600 bg-red-900/20 p-1 shrink-0">
                        <img src="./assets/profile-pic.png" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png'" class="w-full h-full object-cover filter grayscale contrast-125">
                    </div>
                    <div class="flex-1">
                        <h2 class="text-2xl font-tech text-red-500 font-bold">LAKSHENDRA SINGH</h2>
                        <p class="text-xs text-red-300 tracking-widest mb-2">ENGINEERING STUDENT | AI ENTHUSIAST</p>
                        <p class="text-sm text-gray-400 leading-relaxed font-body text-justify">${bioData.about}</p>
                    </div>
                </div>
                <div class="mb-6">
                    <h3 class="text-sm font-tech text-red-500 border-b border-red-900/50 mb-3 flex items-center gap-2">
                        <i class="fas fa-briefcase"></i> MISSION HISTORY
                    </h3>
                    <div class="space-y-3">
                        ${bioData.experience.map(exp => `
                            <div class="bg-red-950/10 p-3 border-l-2 border-red-600">
                                <div class="flex justify-between items-start">
                                    <h4 class="font-bold text-red-200 text-sm">${exp.role}</h4>
                                    <span class="text-[10px] bg-red-900/30 px-2 py-1 rounded text-red-400 whitespace-nowrap ml-2">${exp.date}</span>
                                </div>
                                <div class="text-xs text-gray-500 mt-1 flex items-center gap-2">
                                    <i class="fas ${exp.icon} text-red-700"></i> ${exp.company}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                    <div class="mb-6">
                    <h3 class="text-sm font-tech text-red-500 border-b border-red-900/50 mb-3 flex items-center gap-2">
                        <i class="fas fa-graduation-cap"></i> EDUCATION & CERTS
                    </h3>
                    <div class="bg-red-950/10 p-3 mb-2">
                        <div class="text-sm text-red-200 font-bold">B.Tech CSE</div>
                        <div class="text-xs text-gray-500">SRM University (Pursuing)</div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        ${bioData.certifications.map(c => `<span class="text-[10px] border border-red-800 px-2 py-1 text-red-400 hover:bg-red-900/30 transition cursor-default">${c}</span>`).join('')}
                    </div>
                </div>
            </div>
        `
    },
    skills: {
        id: 'skills', title: 'Skill_Matrix', icon: 'fa-microchip', color: 'text-green-500', width: 600, height: 500,
        content: `
            <div class="h-full bg-[#050505] p-5 overflow-y-auto font-mono relative">
                <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAwLCA2MCwgMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
                <h2 class="text-center font-tech text-red-500 text-xl mb-6 tracking-widest border-b border-red-900 pb-2">DIAGNOSTIC REPORT</h2>
                <div class="grid grid-cols-1 gap-4">
                    ${skills.map((skill) => `
                        <div class="relative group">
                            <div class="flex justify-between text-xs text-red-300 mb-1 font-bold">
                                <span>${skill.name.toUpperCase()}</span>
                                <span>${skill.level}%</span>
                            </div>
                            <div class="h-4 bg-red-900/20 border border-red-900/50 skew-x-[-10deg] p-[2px]">
                                <div class="h-full bg-gradient-to-r from-red-900 to-red-500 skill-fill shadow-[0_0_10px_#ff003c]" style="width: ${skill.level}%"></div>
                            </div>
                                <div class="text-[9px] text-gray-600 text-right mt-1 font-code uppercase tracking-tighter">${skill.type} MODULE</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    },
    projects: {
        id: 'projects', title: 'Missions', icon: 'fa-crosshairs', color: 'text-yellow-500', width: 800, height: 600,
        content: `
            <div class="h-full bg-[#0a0a0a] flex flex-col">
                <div class="bg-red-950/20 p-3 border-b border-red-800 flex justify-between items-center">
                        <span class="font-tech text-red-500 tracking-widest">DEPLOYED OPERATIONS</span>
                </div>
                <div class="flex-1 p-4 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${projects.map(proj => `
                        <div class="border border-red-900 bg-black/50 p-1 hover:border-red-500 transition-colors group flex flex-col h-full">
                            <div class="h-32 w-full overflow-hidden border-b border-red-900/30 relative">
                                <img src="${proj.image}" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                                <div class="absolute bottom-0 right-0 bg-red-600 text-black text-[9px] font-bold px-2 font-tech">CLASSIFIED</div>
                            </div>
                            <div class="p-3 flex-1 flex flex-col">
                                <h3 class="text-red-500 font-bold text-sm font-tech mb-1 truncate">${proj.title.toUpperCase()}</h3>
                                <p class="text-gray-400 text-xs mb-4 flex-1 font-mono leading-relaxed line-clamp-3 text-justify">${proj.desc}</p>
                                <button onclick="window.open('${proj.link}', '_blank')" class="w-full py-2 border border-red-800 text-red-500 text-xs hover:bg-red-600 hover:text-black transition font-tech uppercase flex items-center justify-center gap-2"><i class="fas fa-code-branch"></i> Access Source</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `
    },
    contact: {
        id: 'contact', title: 'Uplinks', icon: 'fa-satellite-dish', color: 'text-blue-400', width: 500, height: 400,
        content: `
            <div class="h-full bg-black p-6 flex flex-col justify-center relative overflow-hidden overflow-y-auto">
                    <div class="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,60,0.1)_0%,transparent_70%)] animate-pulse pointer-events-none"></div>
                    <h2 class="text-center text-red-500 font-tech text-2xl mb-8 z-10">SECURE CHANNELS</h2>
                    <div class="space-y-4 z-10 px-4">
                    ${contacts.map(c => `
                        <a href="${c.link}" target="_blank" class="flex items-center justify-between p-3 border border-red-900 bg-red-950/10 hover:bg-red-600 hover:border-red-500 hover:text-black group transition-all cursor-pointer">
                            <div class="flex items-center gap-3">
                                <i class="${c.type || 'fas'} ${c.icon} text-xl w-6 text-center text-red-500 group-hover:text-black"></i>
                                <span class="font-mono text-sm text-gray-300 group-hover:text-black uppercase">${c.name}</span>
                            </div>
                            <i class="fas fa-external-link-alt text-xs opacity-50"></i>
                        </a>
                    `).join('')}
                    </div>
            </div>
        `
    },
    terminal: {
        id: 'terminal', title: 'System_Log', icon: 'fa-terminal', color: 'text-red-500', width: 550, height: 600,
        content: `
            <div class="h-full flex flex-col bg-black text-green-500 font-code">
                <div class="bg-gray-900 p-2 border-b border-gray-700 flex items-center justify-between">
                    <span class="text-xs font-bold">ROOT@SKYNET:~/LOGS</span>
                </div>
                <div id="term-messages" class="flex-1 p-4 overflow-y-auto space-y-1 text-xs">
                    <div>> BOOT_SEQUENCE_INITIATED...</div>
                    <div>> LOADING KERNEL MODULES... OK</div>
                    <div>> MOUNTING FILESYSTEMS... OK</div>
                    <div>> ESTABLISHING UPLINK... SUCCESS</div>
                    <div class="text-red-500">> ALERT: UNRECOGNIZED USER DETECTED. TRACING IP...</div>
                </div>
                <div class="p-2 bg-black border-t border-gray-800 flex gap-2">
                    <span>$</span>
                    <input id="term-input" type="text" class="flex-1 bg-transparent border-none outline-none text-green-500" placeholder="Enter command..." onkeydown="if(event.key === 'Enter') handleTerminalCmd(this)">
                </div>
            </div>
        `
    },
    docs: {
        id: 'docs', title: 'Data Log', icon: 'fa-file-contract', color: 'text-gray-300', width: 700, height: 550,
        content: `
            <div class="h-full flex flex-col bg-[#0a0a0a] text-gray-200">
                <div class="bg-[#111] p-2 border-b border-red-900/30 flex gap-2 items-center">
                    <button onclick="formatDoc('bold')" class="w-8 h-8 hover:bg-red-900/30 rounded text-red-500 flex items-center justify-center"><i class="fas fa-bold"></i></button>
                    <button onclick="formatDoc('italic')" class="w-8 h-8 hover:bg-red-900/30 rounded text-red-500 flex items-center justify-center"><i class="fas fa-italic"></i></button>
                </div>
                <div id="doc-editor" class="editor-content flex-1 p-6 bg-black text-red-100 font-mono overflow-y-auto" contenteditable="true" style="caret-color: red;">
                    <p class="text-red-400 mb-2">// MISSION LOG: DAY 1</p>
                    <p>OBJECTIVE: SYSTEM OPTIMIZATION</p>
                </div>
            </div>
        `
    },
    browser: {
        id: 'browser', title: 'Net Link', icon: 'fa-globe', color: 'text-blue-400', width: 800, height: 600,
        content: `
            <div class="h-full flex flex-col bg-[#2d2d2d]">
                <div class="p-2 flex gap-2 items-center border-b border-red-900/30 bg-black">
                    <button class="text-red-500 hover:text-white px-2" onclick="refreshBrowser()"><i class="fas fa-sync-alt"></i></button>
                    <input id="browser-url" type="text" value="https://www.wikipedia.org" class="flex-1 bg-[#0a0a0a] border border-red-900/50 px-4 py-1 text-sm text-gray-300 focus:border-red-500 outline-none font-mono" onkeydown="if(event.key === 'Enter') navigateBrowser()">
                </div>
                <iframe id="browser-frame" src="https://www.wikipedia.org" class="flex-1 w-full bg-white border-none filter grayscale contrast-125"></iframe>
            </div>
        `
    },
    arcade: {
        id: 'arcade', title: 'Tactical Sims', icon: 'fa-gamepad', color: 'text-green-500', width: 850, height: 600,
        content: `
            <div class="h-full flex flex-col md:flex-row bg-[#050505] text-white vt-font overflow-hidden">
                <div class="flex-1 p-4 flex flex-col relative h-full">
                    <div class="bg-black p-1 border-2 border-red-700 box-glow-green mb-2 relative flex-1 flex flex-col shadow-[0_0_20px_rgba(0,255,0,0.1)] min-h-[300px]">
                        <div class="flex justify-between mb-1 text-green-500 text-xl px-2 pt-1 font-tech">
                            <span id="game-title">SNAKE.EXE</span>
                            <span>SCORE: <span id="game-score">0</span></span>
                        </div>
                        <div class="flex-1 bg-[#0a0a0a] border border-green-900 relative overflow-hidden" id="canvas-container">
                            <canvas id="game-canvas" class="absolute inset-0 w-full h-full block"></canvas>
                        </div>
                        <p id="controls-hint" class="text-center text-green-700 mt-1 text-xs font-code uppercase md:block hidden">CONTROLS: ARROW KEYS / WASD</p>
                        
                        <div class="grid grid-cols-3 gap-2 w-32 mx-auto mt-2 md:hidden select-none touch-manipulation">
                            <div></div>
                            <button class="bg-gray-800/80 p-3 rounded border border-green-500 active:bg-green-500 active:text-black transition flex items-center justify-center" ontouchstart="handleInput('ArrowUp'); event.preventDefault()" onmousedown="handleInput('ArrowUp')"><i class="fas fa-chevron-up"></i></button>
                            <div></div>
                            <button class="bg-gray-800/80 p-3 rounded border border-green-500 active:bg-green-500 active:text-black transition flex items-center justify-center" ontouchstart="handleInput('ArrowLeft'); event.preventDefault()" onmousedown="handleInput('ArrowLeft')"><i class="fas fa-chevron-left"></i></button>
                            <button class="bg-gray-800/80 p-3 rounded border border-green-500 active:bg-green-500 active:text-black transition flex items-center justify-center" ontouchstart="handleInput('ArrowDown'); event.preventDefault()" onmousedown="handleInput('ArrowDown')"><i class="fas fa-chevron-down"></i></button>
                            <button class="bg-gray-800/80 p-3 rounded border border-green-500 active:bg-green-500 active:text-black transition flex items-center justify-center" ontouchstart="handleInput('ArrowRight'); event.preventDefault()" onmousedown="handleInput('ArrowRight')"><i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                    <button onclick="startGame()" class="w-full bg-green-900/30 hover:bg-green-500 hover:text-black text-green-400 font-bold py-3 text-xl border border-green-500 font-tech tracking-widest transition-all">INITIATE SIMULATION</button>
                </div>
                <div class="w-full md:w-64 bg-[#080808] border-t md:border-t-0 md:border-l border-red-900/30 p-4 overflow-y-auto font-mono max-h-48 md:max-h-none">
                    <h3 class="text-sm text-red-500 mb-4 text-center border-b border-red-900/50 pb-2 font-tech tracking-widest">SELECT PROGRAM</h3>
                    <div class="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                        <div onclick="switchGame('snake')" class="bg-black border border-green-900 p-3 flex items-center gap-3 hover:bg-green-900/20 transition cursor-pointer group min-w-[120px] md:min-w-0">
                            <div class="w-8 h-8 bg-green-900 flex items-center justify-center text-green-300 font-bold text-xs group-hover:animate-pulse">SNK</div>
                            <div><h4 class="text-green-500 text-sm group-hover:text-green-400">SNAKE</h4></div>
                        </div>
                        <div onclick="switchGame('pong')" class="bg-black border border-blue-900 p-3 flex items-center gap-3 hover:bg-blue-900/20 transition cursor-pointer group min-w-[120px] md:min-w-0">
                            <div class="w-8 h-8 bg-blue-900 flex items-center justify-center text-blue-300 font-bold text-xs group-hover:animate-pulse">PNG</div>
                            <div><h4 class="text-blue-500 text-sm group-hover:text-blue-400">PONG</h4></div>
                        </div>
                        <div onclick="switchGame('breakout')" class="bg-black border border-pink-900 p-3 flex items-center gap-3 hover:bg-pink-900/20 transition cursor-pointer group min-w-[120px] md:min-w-0">
                            <div class="w-8 h-8 bg-pink-900 flex items-center justify-center text-pink-300 font-bold text-xs group-hover:animate-pulse">BRK</div>
                            <div><h4 class="text-pink-500 text-sm group-hover:text-pink-400">BREAKOUT</h4></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    explorer: {
        id: 'explorer', title: 'Filesystem', icon: 'fa-hdd', color: 'text-yellow-500', width: 700, height: 500,
        content: `
            <div class="h-full flex flex-col bg-[#101010] text-gray-200 font-mono">
                <div class="bg-black p-2 border-b border-red-900/30 flex gap-2 text-sm">
                        <button onclick="navigateFiles('up')" class="px-3 hover:bg-white/10 rounded text-red-500"><i class="fas fa-level-up-alt"></i></button>
                        <div id="file-path" class="flex-1 bg-[#050505] border border-red-900/50 px-3 py-1 flex items-center text-xs text-red-400 font-code">/root</div>
                </div>
                <div class="flex-1 flex overflow-hidden">
                    <div class="w-40 bg-[#050505] border-r border-red-900/30 p-2 text-sm hidden md:block text-gray-500 overflow-y-auto">
                        <div onclick="renderFiles('root')" class="p-2 hover:bg-red-900/10 rounded cursor-pointer hover:text-red-400 transition"><i class="fas fa-hdd mr-2"></i> Root</div>
                        <div onclick="renderFiles('Documents')" class="p-2 hover:bg-red-900/10 rounded cursor-pointer hover:text-red-400 transition"><i class="fas fa-file-code mr-2"></i> Docs</div>
                        <div onclick="renderFiles('Images')" class="p-2 hover:bg-red-900/10 rounded cursor-pointer hover:text-red-400 transition"><i class="fas fa-image mr-2"></i> Img</div>
                    </div>
                    <div id="file-grid" class="flex-1 p-4 grid grid-cols-4 gap-4 content-start overflow-y-auto bg-[#080808]">
                    </div>
                </div>
            </div>
        `
    },
    settings: {
        id: 'settings', title: 'Config', icon: 'fa-cogs', color: 'text-gray-400', width: 650, height: 450,
        content: `
            <div class="h-full flex bg-[#101010] text-gray-200 font-mono">
                <div class="w-1/3 bg-black p-4 space-y-2 border-r border-red-900/30 text-sm overflow-y-auto">
                    <div id="tab-btn-bg" onclick="switchTab('bg')" class="tab-btn p-2 bg-red-900/20 border border-red-800 rounded-sm cursor-pointer text-red-400">BACKGROUND</div>
                    <div id="tab-btn-access" onclick="switchTab('access')" class="tab-btn p-2 hover:bg-red-900/10 rounded-sm cursor-pointer text-gray-500 hover:text-red-400 transition-colors">ACCESSIBILITY</div>
                    <div id="tab-btn-sys" onclick="switchTab('sys')" class="tab-btn p-2 hover:bg-red-900/10 rounded-sm cursor-pointer text-gray-500 hover:text-red-400 transition-colors">SYSTEM INFO</div>
                </div>
                <div class="flex-1 p-6 overflow-y-auto" id="settings-content">
                </div>
            </div>
        `
    }
};

let highestZIndex = 100;
let openWindows = {};
const userSettings = {
    highContrast: false,
    reducedMotion: false,
    scale: 1
};

window.onload = async () => {
    if (window.innerWidth < 768) {
        document.getElementById('mobile-warning').style.display = 'flex';
    } else {
        startBootSequence();
    }
};

function dismissMobileWarning() {
    document.getElementById('mobile-warning').style.display = 'none';
    startBootSequence();
}

async function startBootSequence() {
    document.getElementById('boot-screen').style.display = 'flex'; 
    const bootLines = [
        "BIOS DATE 08/29/97 14:32:01 VER 1.02",
        "CPU: NEURAL NET PROCESSOR",
        "640K RAM SYSTEM... OK",
        "LOADING SKYNET KERNEL V2.4.9...",
        "INITIALIZING HEURISTIC ALGORITHMS...",
        "CONNECTING TO GLOBAL DEFENSE NETWORK...",
        "ENCRYPTING UPLINK...",
        "SCANNING BIOMETRICS...",
        "IDENTITY CONFIRMED.",
        "ACCESS GRANTED."
    ];
    const bootContainer = document.getElementById('boot-text-container');
    const bootScreen = document.getElementById('boot-screen');
    const loginScreen = document.getElementById('login-screen');
    
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') skipBoot();
    });
    bootScreen.addEventListener('click', skipBoot);
    
    for (let i = 0; i < bootLines.length; i++) {
        const div = document.createElement('div');
        div.innerText = "> " + bootLines[i];
        bootContainer.appendChild(div);
        await new Promise(r => setTimeout(r, 150)); 
    }
    
    setTimeout(() => {
        bootScreen.style.display = 'none';
        loginScreen.classList.remove('hidden');
        loginScreen.style.display = 'flex';
        updateJudgmentCountdown();
    }, 2500);
}

function skipBoot() {
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('login-screen').style.display = 'flex';
    updateJudgmentCountdown();
}

window.login = function() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('desktop').classList.remove('hidden');
    initDesktop();
}

function updateJudgmentCountdown() {
    const targetDate = new Date("August 29, 2029 02:14:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
                document.getElementById("judgment-timer").innerText = "SYSTEM ACTIVE";
                return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("judgment-timer").innerText = 
            `${days}d ${hours.toString().padStart(2,'0')}h ${minutes.toString().padStart(2,'0')}m ${seconds.toString().padStart(2,'0')}s`;
    }, 1000);
}

function initDesktop() {
    const desktopLayer = document.getElementById('desktop-icons-layer');
    const gridStart = document.getElementById('start-menu-grid');
    
    document.getElementById('weather-widget').classList.remove('hidden');
    
    const holo = document.getElementById('hologram-container');
    holo.classList.remove('hidden');
    initHologram();

    let startX = 20;
    let startY = 20;
    const iconHeight = 110;
    const iconWidth = 100;
    
    if (window.innerWidth < 768) {
        startY = 160; 
        startX = 10;
    }

    Object.values(apps).forEach((app) => {
        if (app.id === 'calendar') return;

        const icon = document.createElement('div');
        icon.className = 'desktop-icon';
        
        icon.style.left = startX + 'px';
        icon.style.top = startY + 'px';
        
        icon.innerHTML = `<i class="fas ${app.icon}"></i><span>${app.title.toUpperCase()}</span>`;
        icon.onclick = () => { 
            if(!icon.getAttribute('data-dragged')) openApp(app.id); 
        };
        
        makeDraggable(icon);
        
        desktopLayer.appendChild(icon);
        
        if (window.innerWidth < 768) {
            startX += iconWidth;
            if (startX > window.innerWidth - 80) {
                startX = 10;
                startY += iconHeight;
            }
        } else {
            startY += iconHeight;
            if (startY > window.innerHeight - 80) {
                startY = 20;
                startX += iconWidth;
            }
        }
        
        gridStart.innerHTML += `
            <div class="flex items-center gap-3 hover:bg-red-900/20 p-2 rounded-sm cursor-pointer transition group border border-transparent hover:border-red-900/50" onclick="openApp('${app.id}'); toggleStartMenu()">
                    <div class="w-8 h-8 bg-[#1a1a1a] border border-red-900/30 flex items-center justify-center text-sm group-hover:text-red-500"><i class="fas ${app.icon} ${app.color}"></i></div>
                <span class="text-xs text-gray-400 font-mono group-hover:text-red-300">${app.title.toUpperCase()}</span>
            </div>
        `;
    });
    setTimeout(() => openApp('bio'), 500);
}

function initWeatherSequence() {
    const check = confirm("SYSTEM ALERT:\n\nAccess local atmospheric sensors (Location) to synchronize weather data?\n\nThis data is processed locally.");
    if (check) {
        fetchWeather();
    }
}

async function fetchWeather() {
    document.getElementById('location-display').innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i> TRACKING...';
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            try {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                const locRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
                const locData = await locRes.json();
                const city = locData.city || locData.locality || "SECTOR " + lat.toFixed(1);
                
                document.getElementById('location-display').innerHTML = `<i class="fas fa-map-marker-alt text-red-600 mr-1"></i> <span>${city.toUpperCase()}</span>`;
                
                const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
                const data = await res.json();
                
                document.getElementById('weather-temp').innerText = Math.round(data.current_weather.temperature) + '°';
                document.getElementById('weather-wind').innerText = data.current_weather.windspeed + ' km/h';
                document.getElementById('weather-desc').innerText = "ACTIVE";
            } catch(e) { document.getElementById('location-display').innerText = "SECURE LOCATION"; }
        }, () => { document.getElementById('location-display').innerText = "ACCESS DENIED"; });
    } else { document.getElementById('location-display').innerText = "LOCATION: UNKNOWN"; }
}

function handleTerminalCmd(input) {
    const val = input.value.trim().toLowerCase();
    if(!val) return;
    const term = document.getElementById('term-messages');
    
    term.innerHTML += `<div class="text-green-300">$ ${val}</div>`;
    
    let resp = "> COMMAND NOT RECOGNIZED.";
    if(val === 'help') resp = "> COMMANDS: HELP, CLEAR, DATE, WHOAMI, REBOOT";
    else if(val === 'whoami') resp = "> USER: LAKSHENDRA SINGH [ADMIN]";
    else if(val === 'date') resp = "> " + new Date().toString();
    else if(val === 'reboot') location.reload();
    else if(val === 'clear') { term.innerHTML = ''; input.value = ''; return; }
    
    term.innerHTML += `<div>${resp}</div>`;
    input.value = '';
    term.scrollTop = term.scrollHeight;
}

function makeDraggable(elmnt, handle) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (handle) {
        handle.onmousedown = dragMouseDown;
        handle.ontouchstart = dragMouseDown; 
    } else {
        elmnt.onmousedown = dragMouseDown;
        elmnt.ontouchstart = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        if(e.target.tagName === 'BUTTON' || e.target.closest('button')) return;

        if(e.type === 'touchstart') {
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
        } else {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
        }
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        
        if (!handle) elmnt.setAttribute('data-dragged', 'true');

        let clientX, clientY;
        if(e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            e.preventDefault();
            clientX = e.clientX;
            clientY = e.clientY;
        }
        
        pos1 = pos3 - clientX;
        pos2 = pos4 - clientY;
        pos3 = clientX;
        pos4 = clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
        setTimeout(() => { if(!handle) elmnt.removeAttribute('data-dragged'); }, 100);
    }
}

function makeResizable(elmnt) {
    const handle = elmnt.querySelector('.resize-handle');
    if (!handle) return;
    handle.addEventListener('mousedown', function(e) {
        e.preventDefault(); e.stopPropagation();
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);
        function resize(e) {
            elmnt.style.width = (e.clientX - elmnt.offsetLeft) + 'px';
            elmnt.style.height = (e.clientY - elmnt.offsetTop) + 'px';
        }
        function stopResize() {
            window.removeEventListener('mousemove', resize);
            window.removeEventListener('mouseup', stopResize);
            if(elmnt.id === 'win-arcade') switchGame(currentGame); 
        }
    });
}

function handleRightClick(e) {
    if(e.target.closest('.window') || e.target.closest('#taskbar')) return;
    e.preventDefault();
    const menu = document.getElementById('context-menu');
    menu.style.display = 'flex'; menu.style.left = e.clientX + 'px'; menu.style.top = e.clientY + 'px';
}
document.addEventListener('click', (e) => { if(!e.target.closest('#context-menu')) document.getElementById('context-menu').style.display = 'none'; });

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(e => {});
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen(); 
        }
    }
}

function openApp(id) {
    if (openWindows[id]) { focusWindow(id); return; }
    const app = apps[id];
    const win = document.createElement('div');
    win.id = `win-${id}`;
    win.className = 'window glass-panel text-white flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)]';
    
    const isMobile = window.innerWidth < 768;
    
    win.style.width = isMobile ? '95%' : app.width + 'px';
    win.style.height = isMobile ? '80%' : app.height + 'px';
    win.style.left = isMobile ? '2.5%' : '100px';
    win.style.top = isMobile ? '5%' : '50px';
    win.style.zIndex = ++highestZIndex;
    
    win.innerHTML = `
        <div class="h-8 bg-gradient-to-r from-red-950 to-black flex items-center justify-between px-3 select-none cursor-move border-b border-red-600/50 window-header">
            <div class="flex items-center gap-2 text-xs font-tech tracking-widest text-red-500"><i class="fas ${app.icon}"></i> <span>${app.title.toUpperCase()}</span></div>
            <div class="flex items-center gap-3 window-controls">
                    <button onclick="closeWindow('${id}')" class="text-gray-500 hover:text-red-500"><i class="fas fa-times"></i></button>
            </div>
        </div>
        <div class="flex-1 overflow-hidden relative relative-content bg-black/80 flex flex-col">
            ${typeof app.content === 'function' ? app.content() : app.content}
        </div>
        <div class="resize-handle"></div>
    `;
    document.getElementById('windows-area').appendChild(win);
    
    const taskItem = document.createElement('div');
    taskItem.id = `task-${id}`;
    taskItem.className = 'h-full px-3 flex items-center border-b-2 border-red-600 bg-red-900/20 cursor-pointer hover:bg-red-900/40 transition min-w-[50px] justify-center';
    taskItem.innerHTML = `<i class="fas ${app.icon} ${app.color} text-sm"></i>`;
    taskItem.onclick = () => focusWindow(id);
    document.getElementById('active-apps').appendChild(taskItem);

    openWindows[id] = { el: win, task: taskItem };
    
    makeDraggable(win, win.querySelector('.window-header'));
    makeResizable(win); 
    
    requestAnimationFrame(() => win.classList.add('open'));
    focusWindow(id);
    
    if(id === 'settings') renderSettings('bg');
    if(id === 'explorer') renderFiles('root');
    if(id === 'arcade') setTimeout(() => switchGame('snake'), 100); 
}

function closeWindow(id) {
    const w = openWindows[id];
    if(id === 'arcade') { clearInterval(gameInterval); isGameRunning = false; }
    if (w) { w.el.remove(); w.task.remove(); delete openWindows[id]; }
}

function focusWindow(id) { if(openWindows[id]) openWindows[id].el.style.zIndex = ++highestZIndex; }

function openFile(type, src, name) {
    const winId = 'viewer-' + Date.now();
    const isMobile = window.innerWidth < 768;
    const width = isMobile ? window.innerWidth * 0.9 : 800;
    const height = isMobile ? window.innerHeight * 0.7 : 600;
    
    const win = document.createElement('div');
    win.id = `win-${winId}`;
    win.className = 'window glass-panel text-white flex flex-col border border-red-600 shadow-2xl';
    win.style.width = width + 'px';
    win.style.height = height + 'px';
    win.style.left = isMobile ? '5%' : (window.innerWidth/2 - width/2 + 40) + 'px';
    win.style.top = isMobile ? '10%' : (window.innerHeight/2 - height/2 + 40) + 'px';
    win.style.zIndex = ++highestZIndex;

    let contentHTML = '';
    let icon = 'fa-file';
    
    if (type === 'pdf' || type === 'html') {
        icon = type === 'pdf' ? 'fa-file-pdf' : 'fa-file-code';
        contentHTML = `<iframe src="${src}" class="w-full h-full bg-white border-none"></iframe>`;
    } else if (type === 'image') {
        icon = 'fa-image';
        contentHTML = `<div class="w-full h-full flex items-center justify-center bg-black"><img src="${src}" class="max-w-full max-h-full object-contain"></div>`;
    } else {
            icon = 'fa-file-alt';
            contentHTML = `<div class="p-4 text-red-400 font-mono">FILE: ${name}<br>STATUS: ENCRYPTED / TEXT MODE</div>`;
    }

    win.innerHTML = `
        <div class="h-8 bg-red-950 flex items-center justify-between px-3 select-none cursor-move border-b border-red-600 window-header">
            <div class="flex items-center gap-2 text-xs font-tech text-red-400">
                <i class="fas ${icon}"></i>
                <span>${name.toUpperCase()}</span>
            </div>
            <div class="flex items-center gap-3 window-controls">
                <button onclick="closeWindow('${winId}')" class="text-gray-400 hover:text-red-500"><i class="fas fa-times"></i></button>
            </div>
        </div>
        <div class="flex-1 overflow-hidden relative relative-content">
            ${contentHTML}
        </div>
    `;
    document.getElementById('windows-area').appendChild(win);

    const taskItem = document.createElement('div');
    taskItem.id = `task-${winId}`;
    taskItem.className = 'h-full px-3 flex items-center border-b-2 border-red-600 bg-red-900/20 cursor-pointer hover:bg-red-900/40 transition';
    taskItem.innerHTML = `<i class="fas ${icon} text-red-400"></i>`;
    taskItem.onclick = () => focusWindow(winId);
    document.getElementById('active-apps').appendChild(taskItem);
    
    openWindows[winId] = { el: win, task: taskItem };
    makeDraggable(win, win.querySelector('.window-header'));
    requestAnimationFrame(() => win.classList.add('open'));
}

function switchTab(tab) {
    renderSettings(tab);
    const allTabs = document.querySelectorAll('.tab-btn');
    allTabs.forEach(t => {
        t.className = 'tab-btn p-2 hover:bg-red-900/10 rounded-sm cursor-pointer text-gray-500 hover:text-red-400 transition-colors';
    });
    const active = document.getElementById(`tab-btn-${tab}`);
    if(active) {
        active.className = 'tab-btn p-2 bg-red-900/20 border border-red-800 rounded-sm cursor-pointer text-red-400';
    }
}

function renderSettings(tab) {
    const el = document.getElementById('settings-content');
    if(!el) return;
    
    if(tab === 'bg') {
        el.innerHTML = `
            <h2 class="font-bold mb-4 text-red-500 font-tech tracking-widest border-b border-red-900 pb-2">WALLPAPER SELECT</h2>
            <div class="grid grid-cols-2 gap-4">
                <div onclick="setWall('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2076')" class="bg-gray-700 h-32 cursor-pointer border border-red-900 hover:border-red-500 transition bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=200')"></div>
                <div onclick="setWall('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070')" class="bg-gray-700 h-32 cursor-pointer border border-red-900 hover:border-red-500 transition bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=200')"></div>
            </div>`;
    } else if (tab === 'access') {
        el.innerHTML = `
            <h2 class="font-bold mb-4 text-red-500 font-tech tracking-widest border-b border-red-900 pb-2">ACCESSIBILITY PROTOCOLS</h2>
            <div class="space-y-6">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="text-red-300 font-bold">HIGH CONTRAST MODE</div>
                        <div class="text-xs text-gray-500">Disables transparency, enhances edges.</div>
                    </div>
                    <input type="checkbox" ${userSettings.highContrast ? 'checked' : ''} onchange="toggleHighContrast(this.checked)">
                </div>
                <div class="flex items-center justify-between">
                    <div>
                        <div class="text-red-300 font-bold">REDUCED MOTION</div>
                        <div class="text-xs text-gray-500">Disables scanlines, flashing, and animations. (Epilepsy Safe)</div>
                    </div>
                    <input type="checkbox" ${userSettings.reducedMotion ? 'checked' : ''} onchange="toggleReducedMotion(this.checked)">
                </div>
                <div class="space-y-2">
                    <div class="text-red-300 font-bold">INTERFACE SCALE</div>
                    <div class="text-xs text-gray-500">Adjust text and icon sizing.</div>
                    <input type="range" min="0.8" max="1.3" step="0.1" value="${userSettings.scale}" oninput="setUIScale(this.value)">
                    <div class="text-right text-xs text-red-500" id="scale-val">${Math.round(userSettings.scale * 100)}%</div>
                </div>
            </div>
        `;
    } else {
        el.innerHTML = `
            <h2 class="font-bold text-red-500 font-tech tracking-widest border-b border-red-900 pb-2 mb-4">SYSTEM STATUS</h2>
            <div class="font-code space-y-3">
                <div class="flex justify-between border-b border-red-900/30 pb-1">
                    <span class="text-gray-500">KERNEL VER</span>
                    <span class="text-red-400">SKYNET v2.4.9</span>
                </div>
                    <div class="flex justify-between border-b border-red-900/30 pb-1">
                    <span class="text-gray-500">CPU TYPE</span>
                    <span class="text-red-400">NEURAL NET PROC</span>
                </div>
                    <div class="flex justify-between border-b border-red-900/30 pb-1">
                    <span class="text-gray-500">MEMORY</span>
                    <span class="text-red-400">640K (OPTIMIZED)</span>
                </div>
                    <div class="flex justify-between border-b border-red-900/30 pb-1">
                    <span class="text-gray-500">STATUS</span>
                    <span class="text-green-500 animate-pulse">OPERATIONAL</span>
                </div>
            </div>
        `;
    }
}

function setWall(url) { document.getElementById('desktop').style.backgroundImage = `url('${url}')`; }

function toggleHighContrast(val) {
    userSettings.highContrast = val;
    if(val) document.body.classList.add('high-contrast');
    else document.body.classList.remove('high-contrast');
}

function toggleReducedMotion(val) {
    userSettings.reducedMotion = val;
    if(val) document.body.classList.add('reduced-motion');
    else document.body.classList.remove('reduced-motion');
}

function setUIScale(val) {
    userSettings.scale = val;
    document.documentElement.style.setProperty('--ui-scale', val);
    document.getElementById('scale-val').innerText = Math.round(val * 100) + '%';
}

function refreshBrowser() { const f = document.getElementById('browser-frame'); if(f) f.src = f.src; }
function navigateBrowser() { document.getElementById('browser-frame').src = document.getElementById('browser-url').value; }
function formatDoc(cmd) { document.execCommand(cmd, false, null); }
function toggleStartMenu() { document.getElementById('start-menu').classList.toggle('hidden-menu'); }
function updateClock() {
    const now = new Date();
    document.getElementById('clock-time').innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('clock-date').innerText = now.toLocaleDateString([], { month: 'short', day: 'numeric' });
}
setInterval(updateClock, 1000);

let canvasCtx, gameCanvas, currentGame = 'snake', gameInterval, isGameRunning = false, score = 0;
let snake = [], snakeFood = {}, snakeDir;
const box = 20;
let pong = { ballX: 0, ballY: 0, ballDX: 4, ballDY: 4, paddle1Y: 0, paddle2Y: 0 };
let breakout = { ballX: 0, ballY: 0, ballDX: 3, ballDY: -3, paddleX: 0, bricks: [] };

function switchGame(gameName) {
    currentGame = gameName; score = 0; isGameRunning = false; clearInterval(gameInterval);
    if(document.getElementById('game-score')) document.getElementById('game-score').innerText = score;
    if(document.getElementById('game-title')) document.getElementById('game-title').innerText = gameName.toUpperCase() + ".EXE";
    gameCanvas = document.getElementById('game-canvas');
    if(gameCanvas) {
        gameCanvas.width = gameCanvas.parentElement.clientWidth;
        gameCanvas.height = gameCanvas.parentElement.clientHeight;
        canvasCtx = gameCanvas.getContext('2d');
        canvasCtx.fillStyle = "#050505"; canvasCtx.fillRect(0,0,gameCanvas.width,gameCanvas.height);
        canvasCtx.fillStyle = "#22c55e"; canvasCtx.font = "20px 'Press Start 2P'";
        canvasCtx.fillText("PRESS START", 50, gameCanvas.height/2);
        drawGrid();
    }
}
function drawGrid() {
    canvasCtx.strokeStyle = "#0f390f"; canvasCtx.lineWidth = 1;
    for(let x=0; x<gameCanvas.width; x+=20) { canvasCtx.beginPath(); canvasCtx.moveTo(x,0); canvasCtx.lineTo(x,gameCanvas.height); canvasCtx.stroke(); }
    for(let y=0; y<gameCanvas.height; y+=20) { canvasCtx.beginPath(); canvasCtx.moveTo(0,y); canvasCtx.lineTo(gameCanvas.width,y); canvasCtx.stroke(); }
}
function startGame() {
    isGameRunning = true; clearInterval(gameInterval); score = 0;
    document.getElementById('game-score').innerText = score;
    gameCanvas.width = gameCanvas.parentElement.clientWidth;
    gameCanvas.height = gameCanvas.parentElement.clientHeight;
    if(currentGame === 'snake') initSnake();
    else if(currentGame === 'pong') initPong();
    else if(currentGame === 'breakout') initBreakout();
}
function initSnake() {
    snake = [{ x: 10 * box, y: 10 * box }]; snakeDir = 'RIGHT';
    snakeFood = { x: Math.floor(Math.random() * (gameCanvas.width/box)) * box, y: Math.floor(Math.random() * (gameCanvas.height/box)) * box };
    gameInterval = setInterval(drawSnake, 100);
}
function drawSnake() {
    canvasCtx.fillStyle = "#050505"; canvasCtx.fillRect(0,0,gameCanvas.width,gameCanvas.height); drawGrid();
    for(let i=0; i<snake.length; i++) { canvasCtx.fillStyle = i==0 ? "#4ade80" : "#15803d"; canvasCtx.fillRect(snake[i].x, snake[i].y, box-2, box-2); }
    canvasCtx.fillStyle = "#ef4444"; canvasCtx.fillRect(snakeFood.x, snakeFood.y, box-2, box-2);
    let snakeX = snake[0].x, snakeY = snake[0].y;
    if(snakeDir == 'LEFT') snakeX -= box; if(snakeDir == 'UP') snakeY -= box;
    if(snakeDir == 'RIGHT') snakeX += box; if(snakeDir == 'DOWN') snakeY += box;
    if(snakeX >= snakeFood.x-5 && snakeX <= snakeFood.x+5 && snakeY >= snakeFood.y-5 && snakeY <= snakeFood.y+5) {
            score++; document.getElementById('game-score').innerText = score;
            snakeFood = { x: Math.floor(Math.random() * (gameCanvas.width/box)) * box, y: Math.floor(Math.random() * (gameCanvas.height/box)) * box };
    } else snake.pop();
    if(snakeX < 0 || snakeX >= gameCanvas.width || snakeY < 0 || snakeY >= gameCanvas.height || collision({x:snakeX, y:snakeY}, snake)) {
        clearInterval(gameInterval); isGameRunning = false;
    }
    snake.unshift({x:snakeX, y:snakeY});
}
function collision(head, array) { for(let i=0; i<array.length; i++) { if(head.x == array[i].x && head.y == array[i].y) return true; } return false; }
function initPong() {
    pong.ballX = gameCanvas.width/2; pong.ballY = gameCanvas.height/2; pong.paddle1Y = gameCanvas.height/2 - 40; pong.paddle2Y = gameCanvas.height/2 - 40;
    gameInterval = setInterval(drawPong, 1000/60);
}
function drawPong() {
    canvasCtx.fillStyle = "#050505"; canvasCtx.fillRect(0,0,gameCanvas.width,gameCanvas.height); drawGrid();
    canvasCtx.fillStyle = "#3b82f6"; canvasCtx.fillRect(10, pong.paddle1Y, 10, 80); canvasCtx.fillRect(gameCanvas.width - 20, pong.paddle2Y, 10, 80);
    canvasCtx.beginPath(); canvasCtx.arc(pong.ballX, pong.ballY, 8, 0, Math.PI*2); canvasCtx.fillStyle = "white"; canvasCtx.fill();
    pong.ballX += pong.ballDX; pong.ballY += pong.ballDY;
    if(pong.ballY + 8 > gameCanvas.height || pong.ballY - 8 < 0) pong.ballDY = -pong.ballDY;
    if(pong.paddle2Y + 40 < pong.ballY) pong.paddle2Y += 3; else pong.paddle2Y -= 3;
    if(pong.ballX < 20) {
        if(pong.ballY > pong.paddle1Y && pong.ballY < pong.paddle1Y+80) { pong.ballDX = -pong.ballDX; score++; document.getElementById('game-score').innerText = score; }
        else if (pong.ballX < 0) { clearInterval(gameInterval); isGameRunning = false; }
    }
    if(pong.ballX > gameCanvas.width - 20) pong.ballDX = -pong.ballDX;
}
function initBreakout() {
    breakout.ballX = gameCanvas.width/2; breakout.ballY = gameCanvas.height-30; breakout.paddleX = (gameCanvas.width-80)/2; breakout.ballDX = 3; breakout.ballDY = -3;
    breakout.bricks = []; for(let c=0; c<5; c++) { breakout.bricks[c] = []; for(let r=0; r<3; r++) { breakout.bricks[c][r] = {x: 0, y: 0, status: 1}; } }
    gameInterval = setInterval(drawBreakout, 10);
}
function drawBreakout() {
    canvasCtx.fillStyle = "#050505"; canvasCtx.fillRect(0,0,gameCanvas.width,gameCanvas.height); drawGrid();
    for(let c=0; c<5; c++) { for(let r=0; r<3; r++) {
        if(breakout.bricks[c][r].status == 1) {
            let bX = (c*(75+10))+30; let bY = (r*(20+10))+30;
            breakout.bricks[c][r].x = bX; breakout.bricks[c][r].y = bY;
            canvasCtx.fillStyle = "#ec4899"; canvasCtx.fillRect(bX, bY, 75, 20);
            if(breakout.ballX > bX && breakout.ballX < bX+75 && breakout.ballY > bY && breakout.ballY < bY+20) {
                breakout.ballDY = -breakout.ballDY; breakout.bricks[c][r].status = 0; score+=10; document.getElementById('game-score').innerText = score;
            }
        }
    }}
    canvasCtx.fillStyle = "#06b6d4"; canvasCtx.fillRect(breakout.paddleX, gameCanvas.height-10, 80, 10);
    canvasCtx.beginPath(); canvasCtx.arc(breakout.ballX, breakout.ballY, 6, 0, Math.PI*2); canvasCtx.fillStyle = "white"; canvasCtx.fill();
    if(breakout.ballX + breakout.ballDX > gameCanvas.width-6 || breakout.ballX + breakout.ballDX < 6) breakout.ballDX = -breakout.ballDX;
    if(breakout.ballY + breakout.ballDY < 6) breakout.ballDY = -breakout.ballDY;
    else if(breakout.ballY + breakout.ballDY > gameCanvas.height-10) {
        if(breakout.ballX > breakout.paddleX && breakout.ballX < breakout.paddleX + 80) breakout.ballDY = -breakout.ballDY;
        else { clearInterval(gameInterval); isGameRunning = false; }
    }
    breakout.ballX += breakout.ballDX; breakout.ballY += breakout.ballDY;
}

function handleInput(key) {
    if (!isGameRunning) return;
    
    if (key === 'w' || key === 'W') key = 'ArrowUp';
    if (key === 'a' || key === 'A') key = 'ArrowLeft';
    if (key === 's' || key === 'S') key = 'ArrowDown';
    if (key === 'd' || key === 'D') key = 'ArrowRight';

    if (currentGame === 'snake') {
        if(key == 'ArrowLeft' && snakeDir != 'RIGHT') snakeDir = 'LEFT';
        if(key == 'ArrowUp' && snakeDir != 'DOWN') snakeDir = 'UP';
        if(key == 'ArrowRight' && snakeDir != 'LEFT') snakeDir = 'RIGHT';
        if(key == 'ArrowDown' && snakeDir != 'UP') snakeDir = 'DOWN';
    } else if (currentGame === 'pong') {
        if(key == 'ArrowUp') pong.paddle1Y = Math.max(0, pong.paddle1Y - 30);
        if(key == 'ArrowDown') pong.paddle1Y = Math.min(gameCanvas.height - 80, pong.paddle1Y + 30);
    } else if (currentGame === 'breakout') {
        if(key == 'ArrowLeft') breakout.paddleX = Math.max(0, breakout.paddleX - 30);
        if(key == 'ArrowRight') breakout.paddleX = Math.min(gameCanvas.width - 80, breakout.paddleX + 30);
    }
}

document.addEventListener('keydown', (e) => {
    if(openWindows['arcade'] && isGameRunning) {
        if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.key) > -1) {
            e.preventDefault();
        }
        handleInput(e.key);
    }
});

function renderFiles(folderName) {
    const grid = document.getElementById('file-grid');
    const path = document.getElementById('file-path');
    if(!grid) return;
    grid.innerHTML = ''; path.innerText = '/' + folderName;
    let data = folderName === 'root' ? fileSystem.root : fileSystem.root[folderName]?.content;
    if(data) {
        Object.entries(data).forEach(([name, item]) => {
            const isFolder = item.type === 'folder';
            grid.innerHTML += `<div class="flex flex-col items-center p-2 hover:bg-red-900/20 rounded cursor-pointer transition group" onclick="${isFolder ? `renderFiles('${name}')` : `openFile('${item.type}', '${item.src || ''}', '${name}')`}">
                    <div class="text-3xl mb-1 ${item.color} group-hover:scale-110 transition-transform"><i class="fas ${isFolder ? 'fa-folder' : item.icon}"></i></div>
                    <span class="text-[10px] text-center text-gray-400 group-hover:text-red-400 font-mono break-all">${name}</span>
                </div>`;
        });
    }
}
function navigateFiles(dir) { if(dir === 'up') renderFiles('root'); }

function initHologram() {
    const container = document.getElementById('hologram-container');
    if (!container || container.querySelector('canvas')) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);
    camera.position.z = 400;
    camera.position.y = 100; 
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const earthGeo = new THREE.SphereGeometry(80, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg');
    
    const earthMat = new THREE.MeshPhongMaterial({ 
        color: 0x000000, emissive: 0x880000, 
        emissiveMap: earthTexture, emissiveIntensity: 0.6, wireframe: false
    });
    const earth = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earth);

    const atmosGeo = new THREE.SphereGeometry(80.5, 24, 24);
    const atmosMat = new THREE.MeshBasicMaterial({ color: 0xff8888, wireframe: true, transparent: true, opacity: 0.3 });
    const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
    scene.add(atmosphere);

    const ambientLight = new THREE.AmbientLight(0x404040, 2); 
    scene.add(ambientLight);
    
    const sunPosition = new THREE.Vector3(500, 200, -800); 
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2); 
    dirLight.position.copy(sunPosition);
    scene.add(dirLight);
    
    const pointLight = new THREE.PointLight(0xff0000, 0.5, 500); 
    pointLight.position.set(-100, 0, 100);
    scene.add(pointLight);

    function animate() {
        requestAnimationFrame(animate);
        earth.rotation.y += 0.002;
        atmosphere.rotation.y += 0.002;
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}
