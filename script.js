document.addEventListener('DOMContentLoaded', function() {
    // ==================== DOM ELEMENTS ====================
    
    // Mode Selection Elements
    const singleModeTab = document.getElementById('singleModeTab');
    const matchingModeTab = document.getElementById('matchingModeTab');
    const singleAnalysisSection = document.getElementById('singleAnalysisSection');
    const matchingAnalysisSection = document.getElementById('matchingAnalysisSection');
    const modeIndicator = document.querySelector('.mode-indicator');
    
    // Single Analysis Elements
    const form = document.getElementById('cosmicForm');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const stepsSection = document.getElementById('stepsSection');
    const resultsSection = document.getElementById('resultsSection');
    const stepsContainer = document.getElementById('stepsContainer');
    
    // Matching Analysis Elements
    const matchingAnalyzeBtn = document.getElementById('matchingAnalyzeBtn');
    const matchingResultsSection = document.getElementById('matchingResultsSection');
    
    // Matching Form Elements
    const person1Name = document.getElementById('person1Name');
    const person1DOB = document.getElementById('person1DOB');
    const person1Mobile = document.getElementById('person1Mobile');
    const person1Email = document.getElementById('person1Email');
    const person2Name = document.getElementById('person2Name');
    const person2DOB = document.getElementById('person2DOB');
    const person2Mobile = document.getElementById('person2Mobile');
    const person2Email = document.getElementById('person2Email');
    
    // Matching Result Display Elements
    const matchingStatusCard = document.getElementById('matchingStatusCard');
    const matchIcon = document.getElementById('matchIcon');
    const matchTitle = document.getElementById('matchTitle');
    const matchScore = document.getElementById('matchScore');
    const matchMessage = document.getElementById('matchMessage');
    const groupMatchResult = document.getElementById('groupMatchResult');
    const groupInsights = document.getElementById('groupInsights');
    
    // Person 1 Display Elements
    const person1NameDisplay = document.getElementById('person1NameDisplay');
    const person1DOBFinal = document.getElementById('person1DOBFinal');
    const person1NameFinal = document.getElementById('person1NameFinal');
    const person1MobileFinal = document.getElementById('person1MobileFinal');
    const person1EmailFinal = document.getElementById('person1EmailFinal');
    const person1GroupInfo = document.getElementById('person1GroupInfo');
    
    // Person 2 Display Elements
    const person2NameDisplay = document.getElementById('person2NameDisplay');
    const person2DOBFinal = document.getElementById('person2DOBFinal');
    const person2NameFinal = document.getElementById('person2NameFinal');
    const person2MobileFinal = document.getElementById('person2MobileFinal');
    const person2EmailFinal = document.getElementById('person2EmailFinal');
    const person2GroupInfo = document.getElementById('person2GroupInfo');
    
    // Single Analysis Display Elements
    const nameFinalEl = document.getElementById('nameFinal');
    const dobFinalEl = document.getElementById('dobFinal');
    const mobileFinalEl = document.getElementById('mobileFinal');
    const emailFinalEl = document.getElementById('emailFinal');
    const indicatorA = document.getElementById('indicatorA');
    const messageA = document.getElementById('messageA');
    const indicatorB = document.getElementById('indicatorB');
    const messageB = document.getElementById('messageB');
    const zone18 = document.getElementById('zone18');
    const zone36 = document.getElementById('zone36');
    const status18 = document.getElementById('status18');
    const status36 = document.getElementById('status36');
    const message18 = document.getElementById('message18');
    const message36 = document.getElementById('message36');
    const dangerReport1 = document.getElementById('dangerReport1');
    const dangerReport2 = document.getElementById('dangerReport2');
    const groupReport = document.getElementById('groupReport');
    const recommendations = document.getElementById('recommendations');
    const reportContent = document.getElementById('reportContent');
    
    // Group Stats Elements
    const groupACount = document.getElementById('groupACount');
    const groupBCount = document.getElementById('groupBCount');
    const neutralCount = document.getElementById('neutralCount');
    
    // Common Elements
    const loadingOverlay = document.getElementById('loadingOverlay');
    const enhancedModal = document.getElementById('enhancedModal');
    const modalClose = document.getElementById('modalClose');
    const downloadEnhanced = document.getElementById('downloadEnhanced');
    const shareEnhanced = document.getElementById('shareEnhanced');
    const viewReport = document.getElementById('viewReport');
    const actionButtons = document.getElementById('actionButtons');
    const downloadReportBtn = document.getElementById('downloadReport');
    const shareWhatsAppBtn = document.getElementById('shareWhatsApp');
    const view3DBtn = document.getElementById('view3D');
    
    // Matching Modal Elements
    const matchingModal = document.getElementById('matchingModal');
    const matchingModalClose = document.getElementById('matchingModalClose');
    const downloadMatchingEnhanced = document.getElementById('downloadMatchingEnhanced');
    const shareMatchingEnhanced = document.getElementById('shareMatchingEnhanced');
    const viewMatchingReport = document.getElementById('viewMatchingReport');
    const matchingModalMessage = document.getElementById('matchingModalMessage');
    const matchingTip = document.getElementById('matchingTip');
    
    // Matching Action Buttons
    const downloadMatchingReportBtn = document.getElementById('downloadMatchingReport');
    const shareMatchingWhatsAppBtn = document.getElementById('shareMatchingWhatsApp');
    
    // Stats elements
    const particleCount = document.getElementById('particleCount');
    const neuralCount = document.getElementById('neuralCount');
    
    // ==================== GLOBAL VARIABLES ====================
    
    // Store current results
    let currentResults = null;
    let reportImage = null;
    let matchingReportImage = null;
    let isAnimating = false;
    let currentMode = 'single'; // 'single' or 'matching'
    
    // Numerology mapping
    const letterToNumber = {
        'A':1, 'B':2, 'C':3, 'D':4, 'E':5, 'F':6, 'G':7, 'H':8, 'I':9,
        'J':1, 'K':2, 'L':3, 'M':4, 'N':5, 'O':6, 'P':7, 'Q':8, 'R':9,
        'S':1, 'T':2, 'U':3, 'V':4, 'W':5, 'X':6, 'Y':7, 'Z':8
    };
    
    // Groups (Only A and B) - Note: 5 is neutral, not in any group
    const groups = {
        'A': [1, 2, 3, 9],    // Deva Group
        'B': [4, 6, 7, 8]     // Danav Group
        // 5 is neutral
    };
    
    // ==================== INITIALIZATION ====================
    
    // Initialize particles
    function initElonParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: { 
                        value: 120,
                        density: { 
                            enable: true, 
                            value_area: 1000 
                        }
                    },
                    color: { 
                        value: ["#40e0d0", "#1e90ff", "#8a2be2", "#ff1493", "#ffd700"]
                    },
                    shape: { 
                        type: "circle",
                        stroke: { width: 0, color: "#000000" }
                    },
                    opacity: { 
                        value: 0.5,
                        random: true,
                        anim: { 
                            enable: true, 
                            speed: 1, 
                            opacity_min: 0.1, 
                            sync: false 
                        }
                    },
                    size: { 
                        value: 3,
                        random: true,
                        anim: { 
                            enable: true, 
                            speed: 2, 
                            size_min: 0.1, 
                            sync: false 
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#40e0d0",
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: { 
                            enable: false, 
                            rotateX: 600, 
                            rotateY: 1200 
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { 
                            enable: true, 
                            mode: "grab" 
                        },
                        onclick: { 
                            enable: true, 
                            mode: "push" 
                        },
                        resize: true
                    },
                    modes: {
                        grab: { 
                            distance: 200, 
                            line_linked: { opacity: 0.5 } 
                        },
                        push: { 
                            particles_nb: 4 
                        }
                    }
                },
                retina_detect: true
            });
        }
    }
    
    // Update loading stats
    function updateLoadingStats() {
        let particles = 0;
        let neural = 0;
        
        const interval = setInterval(() => {
            particles += Math.floor(Math.random() * 5);
            neural += Math.floor(Math.random() * 3);
            
            if (particles > 1567) particles = 1567;
            if (neural > 892) neural = 892;
            
            particleCount.textContent = particles;
            neuralCount.textContent = neural;
            
            if (particles === 1567 && neural === 892) {
                clearInterval(interval);
            }
        }, 50);
    }
    
    // Animate button sparkles
    function animateButtonSparkles(button) {
        if (!button) return;
        
        const sparkle = button.querySelector('.btn-sparkle');
        if (!sparkle) return;
        
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            sparkle.style.setProperty('--x', `${x}px`);
            sparkle.style.setProperty('--y', `${y}px`);
        });
    }
    
    // Launch confetti celebration
    function launchConfetti() {
        if (typeof confetti !== 'undefined') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
            
            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    angle: 60,
                    spread: 80,
                    origin: { x: 0 }
                });
            }, 250);
            
            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    angle: 120,
                    spread: 80,
                    origin: { x: 1 }
                });
            }, 500);
        }
    }
    
    // ==================== LOADING AND INITIALIZATION ====================
    
    // Enhanced loading animation
    function showLoadingAnimation() {
        loadingOverlay.style.display = 'flex';
        loadingOverlay.style.opacity = '1';
        
        updateLoadingStats();
        
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
                initElonParticles();
                animateButtonSparkles(analyzeBtn);
                animateButtonSparkles(matchingAnalyzeBtn);
            }, 500);
        }, 2000);
    }
    
    // Hide loading overlay
    showLoadingAnimation();
    
    // ==================== MODE SELECTION ====================
    
    singleModeTab.addEventListener('click', function() {
        currentMode = 'single';
        singleModeTab.classList.add('active');
        matchingModeTab.classList.remove('active');
        singleAnalysisSection.classList.add('active');
        matchingAnalysisSection.classList.remove('active');
        modeIndicator.classList.remove('right');
        
        // Hide results sections
        resultsSection.classList.add('hidden');
        matchingResultsSection.classList.add('hidden');
        stepsSection.classList.add('hidden');
    });
    
    matchingModeTab.addEventListener('click', function() {
        currentMode = 'matching';
        matchingModeTab.classList.add('active');
        singleModeTab.classList.remove('active');
        matchingAnalysisSection.classList.add('active');
        singleAnalysisSection.classList.remove('active');
        modeIndicator.classList.add('right');
        
        // Hide results sections
        resultsSection.classList.add('hidden');
        matchingResultsSection.classList.add('hidden');
        stepsSection.classList.add('hidden');
    });
    
    // ==================== NUMEROLOGY CALCULATION FUNCTIONS ====================
    
    function reduceToSingleDigit(num) {
        let sum = num;
        while (sum > 9) {
            sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return sum;
    }
    
    function calculateNameNumber(name) {
        name = name.toUpperCase().replace(/[^A-Z]/g, '');
        let total = 0;
        let stepLog = `<div class="step-log"><h4><i class="fas fa-signature"></i> Name Calculation: ${name}</h4><ul>`;
        
        for (let char of name) {
            let num = letterToNumber[char] || 0;
            stepLog += `<li><span class="char">${char}</span> → <strong>${num}</strong></li>`;
            total += num;
        }
        
        stepLog += `<li class="total"><strong>Total = ${total}</strong></li>`;
        let reduced = reduceToSingleDigit(total);
        stepLog += `<li class="reduced">${total} → <strong class="final">${reduced}</strong></li>`;
        stepLog += `</ul><p><strong>Final Name Number: ${reduced}</strong></p></div>`;
        
        return { number: reduced, steps: stepLog };
    }
    
    function calculateDOBNumber(dob) {
        let digits = dob.replace(/-/g, '').split('').map(Number);
        let total = digits.reduce((a, b) => a + b, 0);
        let stepLog = `<div class="step-log"><h4><i class="fas fa-calendar-star"></i> Date of Birth: ${dob}</h4><ul>`;
        stepLog += `<li>Digits: <strong>${digits.join('')}</strong></li>`;
        stepLog += `<li>Sum: ${digits.join('+')} = <strong>${total}</strong></li>`;
        
        let reduced = reduceToSingleDigit(total);
        stepLog += `<li class="reduced">${total} → <strong class="final">${reduced}</strong></li>`;
        stepLog += `</ul><p><strong>Final DOB Number: ${reduced}</strong></p></div>`;
        
        return { number: reduced, steps: stepLog };
    }
    
    function calculateMobileNumber(mobile) {
        let digits = mobile.split('').map(Number);
        let total = digits.reduce((a, b) => a + b, 0);
        let stepLog = `<div class="step-log"><h4><i class="fas fa-mobile-alt"></i> Mobile: ${mobile}</h4><ul>`;
        stepLog += `<li>Digits: <strong>${digits.join('')}</strong></li>`;
        stepLog += `<li>Sum: ${digits.join('+')} = <strong>${total}</strong></li>`;
        
        let reduced = reduceToSingleDigit(total);
        stepLog += `<li class="reduced">${total} → <strong class="final">${reduced}</strong></li>`;
        stepLog += `</ul><p><strong>Final Mobile Number: ${reduced}</strong></p></div>`;
        
        return { number: reduced, steps: stepLog };
    }
    
    function calculateEmailNumber(email) {
        let localPart = email.split('@')[0].toUpperCase();
        let stepLog = `<div class="step-log"><h4><i class="fas fa-at"></i> Email: ${email}</h4><ul>`;
        stepLog += `<li>Using: <strong>${localPart}</strong></li>`;
        
        let letters = localPart.replace(/[^A-Z]/g, '');
        let numbersPart = localPart.replace(/[^0-9]/g, '');
        
        let lettersTotal = 0;
        if (letters) {
            for (let char of letters) {
                let num = letterToNumber[char] || 0;
                lettersTotal += num;
            }
            lettersTotal = reduceToSingleDigit(lettersTotal);
            stepLog += `<li>Letters sum: <strong>${lettersTotal}</strong></li>`;
        }
        
        let numbersTotal = 0;
        if (numbersPart) {
            let nums = numbersPart.split('').map(Number);
            numbersTotal = nums.reduce((a, b) => a + b, 0);
            numbersTotal = reduceToSingleDigit(numbersTotal);
            stepLog += `<li>Numbers sum: <strong>${numbersTotal}</strong></li>`;
        }
        
        let finalEmailNumber = reduceToSingleDigit(lettersTotal + numbersTotal);
        stepLog += `<li class="final-calculation"><strong>Final: ${lettersTotal} + ${numbersTotal} = ${finalEmailNumber}</strong></li>`;
        stepLog += `</ul><p><strong>Final Email Number: ${finalEmailNumber}</strong></p></div>`;
        
        return { number: finalEmailNumber, steps: stepLog };
    }
    
    // ==================== UPDATED GROUP DETERMINATION FUNCTIONS ====================
    
    function determineGroupByDOB(dobNumber, allNumbers = []) {
        // If DOB is 5 (neutral), determine group based on other numbers
        if (dobNumber === 5) {
            return determineGroupFromAllNumbers(allNumbers);
        }
        
        // If DOB is in Group A
        if (groups['A'].includes(dobNumber)) {
            return {
                group: 'A',
                name: 'Group A (Deva/Divine)',
                message: 'You are a GROUP A PERSON (Based on DOB number)',
                color: '#4CAF50',
                isNeutralBased: false,
                groupCounts: countGroups(allNumbers)
            };
        }
        
        // If DOB is in Group B
        if (groups['B'].includes(dobNumber)) {
            return {
                group: 'B',
                name: 'Group B (Danav/Asura)',
                message: 'You are a GROUP B PERSON (Based on DOB number)',
                color: '#ff4757',
                isNeutralBased: false,
                groupCounts: countGroups(allNumbers)
            };
        }
        
        // Default (should not happen)
        return {
            group: 'neutral',
            name: 'Neutral',
            message: 'Group not determined',
            color: '#FFC107',
            isNeutralBased: false,
            groupCounts: countGroups(allNumbers)
        };
    }
    
    function determineGroupFromAllNumbers(allNumbers) {
        const counts = countGroups(allNumbers);
        
        // If more numbers in Group A
        if (counts.A > counts.B) {
            return {
                group: 'A',
                name: 'Group A (Deva/Divine)',
                message: `You are a GROUP A PERSON (Stronger group: ${counts.A} vs ${counts.B} numbers)`,
                color: '#4CAF50',
                isNeutralBased: true,
                groupCounts: counts
            };
        }
        
        // If more numbers in Group B
        if (counts.B > counts.A) {
            return {
                group: 'B',
                name: 'Group B (Danav/Asura)',
                message: `You are a GROUP B PERSON (Stronger group: ${counts.B} vs ${counts.A} numbers)`,
                color: '#ff4757',
                isNeutralBased: true,
                groupCounts: counts
            };
        }
        
        // If equal counts or no numbers
        return {
            group: 'neutral',
            name: 'Neutral (5)',
            message: 'You are NEUTRAL - Equal group counts or no dominant group',
            color: '#FFC107',
            isNeutralBased: true,
            groupCounts: counts
        };
    }
    
    function countGroups(allNumbers) {
        let groupACount = 0;
        let groupBCount = 0;
        let neutralCount = 0;
        
        allNumbers.forEach(num => {
            if (num === 5) {
                neutralCount++;
            } else if (groups['A'].includes(num)) {
                groupACount++;
            } else if (groups['B'].includes(num)) {
                groupBCount++;
            }
        });
        
        return {
            A: groupACount,
            B: groupBCount,
            neutral: neutralCount
        };
    }
    
    // ==================== NUMBER COLOR CODING FUNCTIONS ====================
    
    function updateNumberDisplay(element, number, dobGroupInfo) {
        element.textContent = number;
        
        // Remove all color classes first
        element.classList.remove('number-neutral', 'number-group-a', 'number-group-b', 'number-danger');
        
        // If number is 5 (neutral), show in yellow
        if (number === 5) {
            element.classList.add('number-neutral');
            return;
        }
        
        // Determine if number is in Group A or B
        const isInGroupA = groups['A'].includes(number);
        const isInGroupB = groups['B'].includes(number);
        
        // If person's group is A, show Group A numbers in green, Group B numbers in red
        if (dobGroupInfo.group === 'A') {
            if (isInGroupA) {
                element.classList.add('number-group-a');
            } else if (isInGroupB) {
                element.classList.add('number-group-b');
            }
        }
        // If person's group is B, show Group B numbers in red, Group A numbers in green
        else if (dobGroupInfo.group === 'B') {
            if (isInGroupB) {
                element.classList.add('number-group-b');
            } else if (isInGroupA) {
                element.classList.add('number-group-a');
            }
        }
        // If person is neutral, show based on stronger group
        else if (dobGroupInfo.group === 'neutral') {
            const strongerGroup = dobGroupInfo.groupCounts.A > dobGroupInfo.groupCounts.B ? 'A' : 'B';
            if (strongerGroup === 'A' && isInGroupA) {
                element.classList.add('number-group-a');
            } else if (strongerGroup === 'B' && isInGroupB) {
                element.classList.add('number-group-b');
            }
        }
    }
    
    // ==================== DANGER ZONE ANALYSIS FUNCTIONS ====================
    
    function checkDangerZone(numbers, pair) {
        let found = numbers.filter(num => pair.includes(num));
        
        if (found.length === 2) {
            return { 
                status: 'danger', 
                color: '#ff4757', 
                icon: 'fa-radiation-alt', 
                message: 'DANGER! Both numbers present',
                details: `⚠️ DANGER ZONE! Both numbers (${pair[0]} & ${pair[1]}) found. Immediate changes required.`
            };
        } else {
            const safeColor = '#4CAF50';
            const safeIcon = 'fa-shield-alt';
            
            if (found.length === 1) {
                return { 
                    status: 'safe', 
                    color: safeColor, 
                    icon: safeIcon, 
                    message: 'Safe! Only one number present',
                    details: `✅ SAFE! Only number ${found[0]} present. No conflict detected.`
                };
            } else {
                return { 
                    status: 'safe', 
                    color: safeColor, 
                    icon: safeIcon, 
                    message: 'Safe! No conflict numbers',
                    details: `✅ SAFE! No numbers (${pair[0]} & ${pair[1]}) found. Harmony maintained.`
                };
            }
        }
    }
    
    function updateDangerZoneDisplay(zoneElement, statusElement, messageElement, dangerInfo) {
        const indicator = zoneElement.querySelector('.zone-indicator i');
        const ring = zoneElement.querySelector('.zone-ring');
        
        statusElement.textContent = `Status: ${dangerInfo.message}`;
        statusElement.className = `zone-status`;
        messageElement.textContent = dangerInfo.details;
        messageElement.className = `zone-message`;
        
        if (dangerInfo.status === 'danger') {
            statusElement.classList.add('zone-danger');
            messageElement.classList.add('zone-danger');
            zoneElement.style.borderColor = '#ff4757';
            zoneElement.style.boxShadow = '0 0 40px rgba(255, 71, 87, 0.5)';
        } else {
            statusElement.classList.add('zone-safe');
            messageElement.classList.add('zone-safe');
            zoneElement.style.borderColor = '#4CAF50';
            zoneElement.style.boxShadow = '0 0 40px rgba(76, 175, 80, 0.5)';
        }
        
        indicator.className = `fas ${dangerInfo.icon}`;
        indicator.style.color = dangerInfo.color;
        ring.style.borderColor = `${dangerInfo.color}80`;
    }
    
    // ==================== GROUP DISPLAY FUNCTIONS ====================
    
    function updateGroupDisplay(dobGroupInfo, groupCounts) {
        // Update group stats
        groupACount.textContent = groupCounts.A;
        groupBCount.textContent = groupCounts.B;
        neutralCount.textContent = groupCounts.neutral;
        
        // Update group cards
        const groupACard = document.querySelector('.group-card[data-group="A"]');
        const groupBCard = document.querySelector('.group-card[data-group="B"]');
        
        if (dobGroupInfo.group === 'A') {
            // Highlight Group A
            groupACard.style.borderColor = '#4CAF50';
            groupACard.style.boxShadow = '0 0 40px rgba(76, 175, 80, 0.5)';
            groupACard.querySelector('.group-title').style.color = '#4CAF50';
            groupACard.querySelector('.indicator i').className = 'fas fa-check-circle';
            groupACard.querySelector('.indicator i').style.color = '#4CAF50';
            
            if (dobGroupInfo.isNeutralBased) {
                groupACard.querySelector('.group-message').innerHTML = 
                    `<strong style="color:#4CAF50">YOUR GROUP (Stronger Group)</strong><br>${groupCounts.A} Group A numbers`;
            } else {
                groupACard.querySelector('.group-message').innerHTML = 
                    `<strong style="color:#4CAF50">YOUR GROUP (Based on DOB)</strong><br>${groupCounts.A} Group A numbers`;
            }
            
            // Dim Group B
            groupBCard.style.opacity = '0.7';
            groupBCard.querySelector('.indicator i').className = 'fas fa-times-circle';
            groupBCard.querySelector('.indicator i').style.color = '#666';
            groupBCard.querySelector('.group-message').innerHTML = 
                `<span style="color:#666">Not your group</span><br>${groupCounts.B} Group B numbers`;
                
        } else if (dobGroupInfo.group === 'B') {
            // Highlight Group B
            groupBCard.style.borderColor = '#ff4757';
            groupBCard.style.boxShadow = '0 0 40px rgba(255, 71, 87, 0.5)';
            groupBCard.querySelector('.group-title').style.color = '#ff4757';
            groupBCard.querySelector('.indicator i').className = 'fas fa-check-circle';
            groupBCard.querySelector('.indicator i').style.color = '#ff4757';
            
            if (dobGroupInfo.isNeutralBased) {
                groupBCard.querySelector('.group-message').innerHTML = 
                    `<strong style="color:#ff4757">YOUR GROUP (Stronger Group)</strong><br>${groupCounts.B} Group B numbers`;
            } else {
                groupBCard.querySelector('.group-message').innerHTML = 
                    `<strong style="color:#ff4757">YOUR GROUP (Based on DOB)</strong><br>${groupCounts.B} Group B numbers`;
            }
            
            // Dim Group A
            groupACard.style.opacity = '0.7';
            groupACard.querySelector('.indicator i').className = 'fas fa-times-circle';
            groupACard.querySelector('.indicator i').style.color = '#666';
            groupACard.querySelector('.group-message').innerHTML = 
                `<span style="color:#666">Not your group</span><br>${groupCounts.A} Group A numbers`;
                
        } else {
            // Neutral - both groups available
            groupACard.style.borderColor = '#FFC107';
            groupBCard.style.borderColor = '#FFC107';
            groupACard.querySelector('.group-title').style.color = '#FFC107';
            groupBCard.querySelector('.group-title').style.color = '#FFC107';
            groupACard.querySelector('.indicator i').className = 'fas fa-question-circle';
            groupBCard.querySelector('.indicator i').className = 'fas fa-question-circle';
            groupACard.querySelector('.indicator i').style.color = '#FFC107';
            groupBCard.querySelector('.indicator i').style.color = '#FFC107';
            groupACard.querySelector('.group-message').innerHTML = 
                `<strong style="color:#FFC107">AVAILABLE</strong><br>${groupCounts.A} Group A numbers`;
            groupBCard.querySelector('.group-message').innerHTML = 
                `<strong style="color:#FFC107">AVAILABLE</strong><br>${groupCounts.B} Group B numbers`;
        }
        
        // Animate the group cards
        [groupACard, groupBCard].forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(-15px) scale(1.05)';
                card.style.transition = 'all 0.3s';
                setTimeout(() => {
                    card.style.transform = 'translateY(0) scale(1)';
                }, 300);
            }, index * 200);
        });
        
        // Update group report
        updateGroupReport(dobGroupInfo, groupCounts);
    }
    
    function updateGroupReport(dobGroupInfo, groupCounts) {
        const reportContent = document.getElementById('reportContent');
        
        let reportHTML = `
            <div class="report-item">
                <h4><i class="fas fa-user-circle"></i> Group Determination</h4>
                <p><strong>Your Group:</strong> <span style="color:${dobGroupInfo.color}">${dobGroupInfo.name}</span></p>
                <p><strong>Group Analysis:</strong></p>
                <p>• Group A Numbers: ${groupCounts.A}</p>
                <p>• Group B Numbers: ${groupCounts.B}</p>
                <p>• Neutral (5): ${groupCounts.neutral}</p>
                <p><strong>Status:</strong> ${dobGroupInfo.message}</p>
            </div>
            
            <div class="report-item">
                <h4><i class="fas fa-palette"></i> Number Color Coding</h4>
                <p><span style="color:#4CAF50">● Green:</span> Numbers in your determined group</p>
                <p><span style="color:#ff4757">● Red:</span> Numbers in opposite group</p>
                <p><span style="color:#FFC107">● Yellow:</span> Neutral numbers (5)</p>
        `;
        
        if (dobGroupInfo.group === 'neutral') {
            reportHTML += `
                <p><strong style="color:#FFC107">🎯 YOU ARE NEUTRAL!</strong></p>
                <p>✅ Your DOB number is 5</p>
                <p>✅ Group A: ${groupCounts.A} numbers, Group B: ${groupCounts.B} numbers</p>
                <p>✅ You can choose to join either Group A or Group B</p>
                <p><strong>Recommendation:</strong> Choose the group with more numbers for better harmony.</p>
            `;
        } else {
            const yourGroup = dobGroupInfo.group === 'A' ? 'Group A' : 'Group B';
            const otherGroup = dobGroupInfo.group === 'A' ? 'Group B' : 'Group A';
            const yourCount = dobGroupInfo.group === 'A' ? groupCounts.A : groupCounts.B;
            const otherCount = dobGroupInfo.group === 'A' ? groupCounts.B : groupCounts.A;
            
            reportHTML += `
                <p><strong>Your Numbers Analysis:</strong></p>
                <p>✅ ${yourGroup} numbers: ${yourCount}</p>
                <p>❌ ${otherGroup} numbers: ${otherCount}</p>
                <p>🎯 Neutral numbers: ${groupCounts.neutral}</p>
            `;
            
            if (otherCount > 0) {
                reportHTML += `
                    <p><strong style="color:#ff4757">⚠️ ATTENTION NEEDED:</strong></p>
                    <p>You have ${otherCount} number(s) from the opposite group.</p>
                    <p>Consider changing these numbers to match your group for better cosmic harmony.</p>
                `;
            } else {
                reportHTML += `
                    <p><strong style="color:#4CAF50">✅ PERFECT HARMONY!</strong></p>
                    <p>All your numbers are aligned with your group.</p>
                    <p>Maintain this perfect cosmic alignment!</p>
                `;
            }
        }
        
        reportHTML += `
            </div>
        `;
        
        reportContent.innerHTML = reportHTML;
        
        // Animate report content
        reportContent.style.opacity = '0';
        reportContent.style.transform = 'translateY(20px)';
        setTimeout(() => {
            reportContent.style.opacity = '1';
            reportContent.style.transform = 'translateY(0)';
            reportContent.style.transition = 'all 0.5s';
        }, 300);
    }
    
    // ==================== MATCHING ANALYSIS FUNCTIONS ====================
    
    function analyzeMatching() {
        // Get form values
        const p1Name = person1Name.value.trim();
        const p1DOB = person1DOB.value.trim();
        const p1Mobile = person1Mobile.value.trim();
        const p1Email = person1Email.value.trim();
        
        const p2Name = person2Name.value.trim();
        const p2DOB = person2DOB.value.trim();
        const p2Mobile = person2Mobile.value.trim();
        const p2Email = person2Email.value.trim();
        
        // Validation
        if (!p1Name || !p1DOB || !p1Mobile || !p1Email || 
            !p2Name || !p2DOB || !p2Mobile || !p2Email) {
            alert('Please fill in all fields for both persons');
            return;
        }
        
        if (!/^\d{2}-\d{2}-\d{4}$/.test(p1DOB) || !/^\d{2}-\d{2}-\d{4}$/.test(p2DOB)) {
            alert('Please enter Date of Birth in DD-MM-YYYY format for both persons');
            return;
        }
        
        if (!/^\d{10}$/.test(p1Mobile) || !/^\d{10}$/.test(p2Mobile)) {
            alert('Please enter valid 10-digit mobile numbers for both persons');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p1Email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p2Email)) {
            alert('Please enter valid email addresses for both persons');
            return;
        }
        
        if (isAnimating) return;
        isAnimating = true;
        
        // Show loading state
        matchingAnalyzeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Calculating Group Match...</span>';
        matchingAnalyzeBtn.disabled = true;
        matchingAnalyzeBtn.style.animationPlayState = 'paused';
        
        // Hide any open results
        resultsSection.classList.add('hidden');
        stepsSection.classList.add('hidden');
        
        // Clear previous steps
        stepsContainer.innerHTML = '';
        
        // Calculate for both persons
        const person1Results = calculatePersonDetails(p1Name, p1DOB, p1Mobile, p1Email);
        const person2Results = calculatePersonDetails(p2Name, p2DOB, p2Mobile, p2Email);
        
        // Show matching results section
        setTimeout(() => {
            matchingResultsSection.classList.remove('hidden');
            matchingResultsSection.style.cssText = 'opacity: 0; transform: translateY(50px) scale(0.9);';
            
            setTimeout(() => {
                matchingResultsSection.style.cssText = 'opacity: 1; transform: translateY(0) scale(1); transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);';
                
                // Update display for both persons
                updatePersonDisplay(1, person1Results, p1Name);
                updatePersonDisplay(2, person2Results, p2Name);
                
                // Calculate and display group compatibility
                calculateGroupCompatibility(person1Results, person2Results);
                
                // Launch confetti for perfect match
                if (person1Results.dobGroupInfo.group === person2Results.dobGroupInfo.group && 
                    person1Results.dobGroupInfo.group !== 'neutral') {
                    launchConfetti();
                }
                
                // Show matching modal
                setTimeout(() => {
                    showMatchingModal(person1Results, person2Results);
                }, 1000);
                
                // Scroll to results
                setTimeout(() => {
                    matchingResultsSection.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start'
                    });
                }, 500);
                
                // Reset button
                setTimeout(() => {
                    matchingAnalyzeBtn.innerHTML = '<i class="fas fa-heartbeat"></i> <span>Calculate Group Match</span>';
                    matchingAnalyzeBtn.disabled = false;
                    matchingAnalyzeBtn.style.animationPlayState = 'running';
                    isAnimating = false;
                }, 2000);
            }, 100);
        }, 1000);
    }
    
    function calculatePersonDetails(name, dob, mobile, email) {
        const nameResult = calculateNameNumber(name);
        const dobResult = calculateDOBNumber(dob);
        const mobileResult = calculateMobileNumber(mobile);
        const emailResult = calculateEmailNumber(email);
        
        const allNumbers = [
            dobResult.number,
            nameResult.number,
            mobileResult.number,
            emailResult.number
        ];
        
        const groupCounts = countGroups(allNumbers);
        const dobGroupInfo = determineGroupByDOB(dobResult.number, allNumbers);
        
        return {
            name: name,
            numbers: allNumbers,
            dobGroupInfo: dobGroupInfo,
            groupCounts: groupCounts,
            details: {
                dob: dobResult.number,
                name: nameResult.number,
                mobile: mobileResult.number,
                email: emailResult.number
            }
        };
    }
    
    function updatePersonDisplay(personNum, results, originalName) {
        const nameDisplay = personNum === 1 ? person1NameDisplay : person2NameDisplay;
        const dobFinal = personNum === 1 ? person1DOBFinal : person2DOBFinal;
        const nameFinal = personNum === 1 ? person1NameFinal : person2NameFinal;
        const mobileFinal = personNum === 1 ? person1MobileFinal : person2MobileFinal;
        const emailFinal = personNum === 1 ? person1EmailFinal : person2EmailFinal;
        const groupInfo = personNum === 1 ? person1GroupInfo : person2GroupInfo;
        
        // Update display elements
        nameDisplay.textContent = originalName;
        dobFinal.textContent = results.details.dob;
        nameFinal.textContent = results.details.name;
        mobileFinal.textContent = results.details.mobile;
        emailFinal.textContent = results.details.email;
        
        // Color code numbers based on group
        updateNumberDisplay(dobFinal, results.details.dob, results.dobGroupInfo);
        updateNumberDisplay(nameFinal, results.details.name, results.dobGroupInfo);
        updateNumberDisplay(mobileFinal, results.details.mobile, results.dobGroupInfo);
        updateNumberDisplay(emailFinal, results.details.email, results.dobGroupInfo);
        
        // Update group info
        let groupText = '';
        if (results.dobGroupInfo.group === 'A') {
            groupText = `<strong style="color:#4CAF50">Group A Person (Deva/Divine)</strong><br>`;
            if (results.dobGroupInfo.isNeutralBased) {
                groupText += `Based on stronger group analysis<br>`;
            } else {
                groupText += `Based on DOB number: ${results.details.dob}<br>`;
            }
            groupText += `Group A: ${results.groupCounts.A}, Group B: ${results.groupCounts.B}, Neutral: ${results.groupCounts.neutral}`;
        } else if (results.dobGroupInfo.group === 'B') {
            groupText = `<strong style="color:#ff4757">Group B Person (Danav/Asura)</strong><br>`;
            if (results.dobGroupInfo.isNeutralBased) {
                groupText += `Based on stronger group analysis<br>`;
            } else {
                groupText += `Based on DOB number: ${results.details.dob}<br>`;
            }
            groupText += `Group A: ${results.groupCounts.A}, Group B: ${results.groupCounts.B}, Neutral: ${results.groupCounts.neutral}`;
        } else {
            groupText = `<strong style="color:#FFC107">Neutral Person (5)</strong><br>`;
            groupText += `DOB number is 5 - Can choose either group<br>`;
            groupText += `Group A: ${results.groupCounts.A}, Group B: ${results.groupCounts.B}, Neutral: ${results.groupCounts.neutral}`;
        }
        
        groupInfo.innerHTML = groupText;
        
        // Animate the display
        const elements = [dobFinal, nameFinal, mobileFinal, emailFinal];
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.transform = 'scale(1.3)';
                el.style.transition = 'transform 0.3s';
                setTimeout(() => {
                    el.style.transform = 'scale(1)';
                }, 300);
            }, index * 100);
        });
    }
    
    function calculateGroupCompatibility(person1, person2) {
        const person1Group = person1.dobGroupInfo.group;
        const person2Group = person2.dobGroupInfo.group;
        
        let matchStatus = '';
        let matchColor = '';
        let matchIconClass = '';
        let matchMessageText = '';
        
        // Check group match
        if (person1Group === person2Group) {
            if (person1Group === 'A') {
                matchStatus = 'PERFECT MATCH!';
                matchColor = '#4CAF50';
                matchIconClass = 'fas fa-heart';
                matchMessageText = 'Both are Group A (Deva/Divine) - Excellent cosmic harmony!';
                matchingStatusCard.className = 'matching-status-card perfect-match';
                
                groupMatchResult.innerHTML = `
                    <span style="color:#4CAF50">✅ PERFECT GROUP MATCH!</span><br>
                    Both persons are <strong>Group A (Deva/Divine)</strong><br>
                    Excellent foundation for spiritual and creative harmony
                `;
                
            } else if (person1Group === 'B') {
                matchStatus = 'PERFECT MATCH!';
                matchColor = '#ff4757';
                matchIconClass = 'fas fa-heart';
                matchMessageText = 'Both are Group B (Danav/Asura) - Strong practical connection!';
                matchingStatusCard.className = 'matching-status-card perfect-match';
                
                groupMatchResult.innerHTML = `
                    <span style="color:#ff4757">✅ PERFECT GROUP MATCH!</span><br>
                    Both persons are <strong>Group B (Danav/Asura)</strong><br>
                    Excellent foundation for practical and material success
                `;
                
            } else {
                matchStatus = 'NEUTRAL MATCH';
                matchColor = '#FFC107';
                matchIconClass = 'fas fa-balance-scale';
                matchMessageText = 'Both are Neutral - Highly adaptable relationship!';
                matchingStatusCard.className = 'matching-status-card';
                matchingStatusCard.style.borderColor = '#FFC107';
                
                groupMatchResult.innerHTML = `
                    <span style="color:#FFC107">⚖️ NEUTRAL MATCH</span><br>
                    Both persons are <strong>Neutral</strong><br>
                    Highly adaptable and flexible relationship potential
                `;
            }
            
        } else if (person1Group === 'neutral' || person2Group === 'neutral') {
            const neutralPerson = person1Group === 'neutral' ? 'Person 1' : 'Person 2';
            const otherGroup = person1Group === 'neutral' ? person2Group : person1Group;
            const groupName = otherGroup === 'A' ? 'Group A (Deva/Divine)' : 'Group B (Danav/Asura)';
            
            matchStatus = 'GOOD MATCH';
            matchColor = '#90EE90';
            matchIconClass = 'fas fa-handshake';
            matchMessageText = `${neutralPerson} is Neutral - Can adapt to ${groupName}`;
            matchingStatusCard.className = 'matching-status-card';
            matchingStatusCard.style.borderColor = '#90EE90';
            
            groupMatchResult.innerHTML = `
                <span style="color:#90EE90">🤝 GOOD MATCH</span><br>
                ${neutralPerson} is <strong>Neutral</strong>, other is <strong>${groupName}</strong><br>
                Neutral person can adapt to create harmony
            `;
            
        } else {
            matchStatus = 'GROUP CONFLICT';
            matchColor = '#ff4757';
            matchIconClass = 'fas fa-radiation-alt';
            matchMessageText = 'Different groups - Energy conflict detected!';
            matchingStatusCard.className = 'matching-status-card bad-match';
            
            groupMatchResult.innerHTML = `
                <span style="color:#ff4757">⚠️ GROUP CONFLICT</span><br>
                Person 1: <strong>${person1Group === 'A' ? 'Group A' : 'Group B'}</strong><br>
                Person 2: <strong>${person2Group === 'A' ? 'Group A' : 'Group B'}</strong><br>
                Different cosmic energies may cause conflicts
            `;
        }
        
        // Update matching status card
        updateMatchingStatusCard(matchStatus, matchMessageText, matchIconClass, matchColor);
        
        // Generate group insights
        generateGroupInsights(person1, person2);
        
        // Create matching report image
        setTimeout(async () => {
            matchingReportImage = await createMatchingReportImage();
        }, 1000);
    }
    
    function updateMatchingStatusCard(status, message, iconClass, color) {
        // Update match icon
        matchIcon.className = iconClass;
        matchIcon.style.color = color;
        
        // Update match title and score
        matchTitle.textContent = status;
        matchScore.innerHTML = `Match Status: <span>${status}</span>`;
        matchMessage.textContent = message;
        
        // Animate the card
        matchingStatusCard.style.transform = 'scale(1.05)';
        setTimeout(() => {
            matchingStatusCard.style.transform = 'scale(1)';
            matchingStatusCard.style.transition = 'transform 0.5s';
        }, 300);
    }
    
    function generateGroupInsights(person1, person2) {
        const insights = [];
        
        // Group compatibility insight
        if (person1.dobGroupInfo.group === person2.dobGroupInfo.group) {
            if (person1.dobGroupInfo.group === 'A') {
                insights.push('• <strong>Perfect Divine Harmony:</strong> Both are Group A (Deva/Divine) - excellent for spiritual growth');
                insights.push('• <strong>Creative Synergy:</strong> Your energies amplify artistic and creative pursuits');
                insights.push('• <strong>Shared Values:</strong> Similar outlook on life and higher purpose');
            } else if (person1.dobGroupInfo.group === 'B') {
                insights.push('• <strong>Strong Practical Bond:</strong> Both are Group B (Danav/Asura) - excellent for material success');
                insights.push('• <strong>Manifestation Power:</strong> Combined energy creates strong results in practical matters');
                insights.push('• <strong>Business Compatibility:</strong> Great for business partnerships and financial ventures');
            } else {
                insights.push('• <strong>Ultimate Flexibility:</strong> Both are Neutral - highly adaptable relationship');
                insights.push('• <strong>Balanced Energy:</strong> Can flow between different situations effortlessly');
                insights.push('• <strong>Conflict Resolution:</strong> Natural ability to find middle ground');
            }
        } else if (person1.dobGroupInfo.group === 'neutral' || person2.dobGroupInfo.group === 'neutral') {
            insights.push('• <strong>Adaptive Harmony:</strong> Neutral person can bridge energy differences');
            insights.push('• <strong>Teaching Opportunity:</strong> Different groups can learn from each other');
            insights.push('• <strong>Complementary Strengths:</strong> Balance between spiritual and practical energies');
        } else {
            insights.push('• <strong>Energy Conflict:</strong> Different cosmic groups may create tension');
            insights.push('• <strong>Communication Key:</strong> Regular honest conversations are essential');
            insights.push('• <strong>Respect Differences:</strong> Acknowledge and appreciate different approaches');
        }
        
        // Number distribution insight
        const totalGroupA = person1.groupCounts.A + person2.groupCounts.A;
        const totalGroupB = person1.groupCounts.B + person2.groupCounts.B;
        const totalNeutral = person1.groupCounts.neutral + person2.groupCounts.neutral;
        
        insights.push(`• <strong>Combined Numbers:</strong> Group A: ${totalGroupA}, Group B: ${totalGroupB}, Neutral: ${totalNeutral}`);
        
        // Dominant group insight
        if (totalGroupA > totalGroupB) {
            insights.push('• <strong>Dominant Energy:</strong> Combined Group A energy stronger - favors spiritual/creative activities');
        } else if (totalGroupB > totalGroupA) {
            insights.push('• <strong>Dominant Energy:</strong> Combined Group B energy stronger - favors practical/material pursuits');
        } else {
            insights.push('• <strong>Balanced Energy:</strong> Equal Group A and B numbers - balanced approach possible');
        }
        
        // Update insights display
        groupInsights.innerHTML = insights.map(insight => `<p>${insight}</p>`).join('');
    }
    
    function showMatchingModal(person1, person2) {
        // Update modal message based on compatibility
        const isPerfectMatch = person1.dobGroupInfo.group === person2.dobGroupInfo.group && 
                              person1.dobGroupInfo.group !== 'neutral';
        
        if (isPerfectMatch) {
            matchingModalMessage.textContent = "Perfect Group Match Found! Your cosmic energies are perfectly aligned!";
            matchingTip.textContent = "Tip: Perfect match report includes detailed group analysis!";
        } else if (person1.dobGroupInfo.group === 'neutral' || person2.dobGroupInfo.group === 'neutral') {
            matchingModalMessage.textContent = "Good Group Compatibility! Your energies can work together with adaptation.";
            matchingTip.textContent = "Tip: Match report includes personalized group recommendations!";
        } else {
            matchingModalMessage.textContent = "Group Energy Conflict Detected! Your cosmic energies show significant differences.";
            matchingTip.textContent = "Tip: Detailed report includes specific recommendations for improving compatibility!";
        }
        
        // Show modal
        matchingModal.style.display = 'flex';
        matchingModal.style.opacity = '0';
        
        setTimeout(() => {
            matchingModal.style.opacity = '1';
            matchingModal.style.transition = 'opacity 0.3s';
        }, 50);
    }
    
    // ==================== SINGLE ANALYSIS ====================
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (isAnimating) return;
        isAnimating = true;
        
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const email = document.getElementById('email').value.trim();
        
        // Validation
        if (!fullName || !dob || !mobile || !email) {
            alert('Please fill in all fields');
            isAnimating = false;
            return;
        }
        
        if (!/^\d{2}-\d{2}-\d{4}$/.test(dob)) {
            alert('Please enter Date of Birth in DD-MM-YYYY format');
            isAnimating = false;
            return;
        }
        
        if (!/^\d{10}$/.test(mobile)) {
            alert('Please enter a valid 10-digit mobile number');
            isAnimating = false;
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            isAnimating = false;
            return;
        }
        
        // Show loading state
        analyzeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Quantum Computing...</span>';
        analyzeBtn.disabled = true;
        analyzeBtn.style.animationPlayState = 'paused';
        
        // Clear previous steps
        stepsContainer.innerHTML = '';
        
        // Show sections
        stepsSection.classList.remove('hidden');
        stepsSection.style.cssText = 'opacity: 0; transform: translateY(40px) scale(0.95);';
        
        setTimeout(() => {
            stepsSection.style.cssText = 'opacity: 1; transform: translateY(0) scale(1); transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);';
        }, 50);
        
        // Calculate all numbers
        const nameResult = calculateNameNumber(fullName);
        const dobResult = calculateDOBNumber(dob);
        const mobileResult = calculateMobileNumber(mobile);
        const emailResult = calculateEmailNumber(email);
        
        // Display steps
        const allSteps = [dobResult.steps, nameResult.steps, mobileResult.steps, emailResult.steps];
        allSteps.forEach((step, index) => {
            setTimeout(() => {
                const stepDiv = document.createElement('div');
                stepDiv.innerHTML = step;
                stepDiv.style.opacity = '0';
                stepDiv.style.transform = 'translateX(-30px)';
                stepsContainer.appendChild(stepDiv);
                
                setTimeout(() => {
                    stepDiv.style.opacity = '1';
                    stepDiv.style.transform = 'translateX(0)';
                    stepDiv.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                }, 50);
            }, index * 400);
        });
        
        // Prepare all numbers
        const allNumbers = [
            dobResult.number,
            nameResult.number,
            mobileResult.number,
            emailResult.number
        ];
        
        const groupCounts = countGroups(allNumbers);
        const dobGroupInfo = determineGroupByDOB(dobResult.number, allNumbers);
        
        // Check danger zones
        const danger18 = checkDangerZone(allNumbers, [1, 8]);
        const danger36 = checkDangerZone(allNumbers, [3, 6]);
        
        // Show results section
        setTimeout(() => {
            resultsSection.classList.remove('hidden');
            resultsSection.style.cssText = 'opacity: 0; transform: translateY(50px) scale(0.9);';
            
            setTimeout(() => {
                resultsSection.style.cssText = 'opacity: 1; transform: translateY(0) scale(1); transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);';
                
                // Launch confetti for good harmony
                const otherGroupCount = dobGroupInfo.group === 'A' ? groupCounts.B : groupCounts.A;
                if (otherGroupCount === 0 && dobGroupInfo.group !== 'neutral') {
                    launchConfetti();
                }
                
                // Update number displays with animation
                setTimeout(() => {
                    // Color code numbers
                    updateNumberDisplay(dobFinalEl, dobResult.number, dobGroupInfo);
                    setTimeout(() => {
                        updateNumberDisplay(nameFinalEl, nameResult.number, dobGroupInfo);
                        setTimeout(() => {
                            updateNumberDisplay(mobileFinalEl, mobileResult.number, dobGroupInfo);
                            setTimeout(() => {
                                updateNumberDisplay(emailFinalEl, emailResult.number, dobGroupInfo);
                                
                                // Animate number cards
                                document.querySelectorAll('.number-card').forEach((card, i) => {
                                    setTimeout(() => {
                                        card.style.transform = 'translateY(-20px) scale(1.1)';
                                        setTimeout(() => {
                                            card.style.transform = 'translateY(0) scale(1)';
                                        }, 300);
                                    }, i * 200);
                                });
                                
                                // Update danger zones
                                setTimeout(() => {
                                    updateDangerZoneDisplay(zone18, status18, message18, danger18);
                                    setTimeout(() => {
                                        updateDangerZoneDisplay(zone36, status36, message36, danger36);
                                        
                                        // Update group display
                                        setTimeout(() => {
                                            updateGroupDisplay(dobGroupInfo, groupCounts);
                                            
                                            // Create report image
                                            setTimeout(async () => {
                                                reportImage = await createReportImage();
                                                
                                                // Show action buttons
                                                setTimeout(() => {
                                                    actionButtons.style.opacity = '0';
                                                    actionButtons.style.transform = 'translateY(30px)';
                                                    
                                                    setTimeout(() => {
                                                        actionButtons.style.opacity = '1';
                                                        actionButtons.style.transform = 'translateY(0)';
                                                        actionButtons.style.transition = 'all 0.5s';
                                                        
                                                        // Show enhanced modal
                                                        setTimeout(() => {
                                                            enhancedModal.style.display = 'flex';
                                                            enhancedModal.style.opacity = '0';
                                                            
                                                            setTimeout(() => {
                                                                enhancedModal.style.opacity = '1';
                                                                enhancedModal.style.transition = 'opacity 0.3s';
                                                            }, 50);
                                                        }, 1000);
                                                    }, 100);
                                                }, 500);
                                            }, 1000);
                                            
                                        }, 500);
                                    }, 500);
                                }, 500);
                            }, 300);
                        }, 300);
                    }, 300);
                }, 500);
                
                // Scroll to results
                setTimeout(() => {
                    resultsSection.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start',
                        inline: 'nearest'
                    });
                }, 1000);
                
                // Reset button
                setTimeout(() => {
                    analyzeBtn.innerHTML = '<i class="fas fa-rocket"></i> <span>New Analysis</span>';
                    analyzeBtn.disabled = false;
                    analyzeBtn.style.animationPlayState = 'running';
                    isAnimating = false;
                }, 2000);
            }, 100);
        }, 2000);
    });
    
    // ==================== REPORT IMAGE CREATION ====================
    
    async function createReportImage() {
        // Hide action buttons for screenshot
        actionButtons.classList.add('hidden');
        resultsSection.classList.add('no-print-buttons');
        
        try {
            const canvas = await html2canvas(resultsSection, {
                scale: 3,
                useCORS: true,
                backgroundColor: '#0c0e2a',
                logging: false,
                allowTaint: true,
                removeContainer: false,
                onclone: function(clonedDoc) {
                    const clonedSection = clonedDoc.getElementById('resultsSection');
                    if (clonedSection) {
                        clonedSection.style.transform = 'none';
                        clonedSection.style.transition = 'none';
                        clonedSection.style.animation = 'none';
                        // Remove all interactive elements from clone
                        const buttons = clonedSection.querySelectorAll('button');
                        buttons.forEach(btn => btn.style.display = 'none');
                    }
                }
            });
            
            // Show action buttons again
            actionButtons.classList.remove('hidden');
            resultsSection.classList.remove('no-print-buttons');
            
            return canvas.toDataURL('image/png', 1.0);
        } catch (error) {
            console.error('Error creating report image:', error);
            // Restore on error
            actionButtons.classList.remove('hidden');
            resultsSection.classList.remove('no-print-buttons');
            return null;
        }
    }
    
    async function createMatchingReportImage() {
        // Hide action buttons for screenshot
        const matchingActionButtons = document.getElementById('matchingActionButtons');
        matchingActionButtons.classList.add('hidden');
        matchingResultsSection.classList.add('no-print-buttons');
        
        try {
            const canvas = await html2canvas(matchingResultsSection, {
                scale: 3,
                useCORS: true,
                backgroundColor: '#0c0e2a',
                logging: false,
                allowTaint: true,
                removeContainer: false,
                onclone: function(clonedDoc) {
                    const clonedSection = clonedDoc.getElementById('matchingResultsSection');
                    if (clonedSection) {
                        clonedSection.style.transform = 'none';
                        clonedSection.style.transition = 'none';
                        clonedSection.style.animation = 'none';
                        // Remove all interactive elements from clone
                        const buttons = clonedSection.querySelectorAll('button');
                        buttons.forEach(btn => btn.style.display = 'none');
                    }
                }
            });
            
            // Show action buttons again
            matchingActionButtons.classList.remove('hidden');
            matchingResultsSection.classList.remove('no-print-buttons');
            
            return canvas.toDataURL('image/png', 1.0);
        } catch (error) {
            console.error('Error creating matching report image:', error);
            // Restore on error
            matchingActionButtons.classList.remove('hidden');
            matchingResultsSection.classList.remove('no-print-buttons');
            return null;
        }
    }
    
    function dataURLtoBlob(dataURL) {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new Blob([u8arr], { type: mime });
    }
    
    // ==================== DOWNLOAD AND SHARE FUNCTIONS ====================
    
    async function downloadHDReport() {
        if (!reportImage) {
            alert('Please generate a report first');
            return;
        }
        
        try {
            const blob = dataURLtoBlob(reportImage);
            const url = window.URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            link.download = `Cosmic_Harmony_HD_Report_${timestamp}.png`;
            
            document.body.appendChild(link);
            link.click();
            
            // Cleanup
            setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            }, 100);
            
            // Show success animation
            launchConfetti();
            
        } catch (error) {
            console.error('Download error:', error);
            // Fallback
            const link = document.createElement('a');
            link.href = reportImage;
            link.download = 'Cosmic_Harmony_Report.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
    
    async function shareOnWhatsApp() {
        if (!reportImage) {
            alert('Please generate a report first');
            return;
        }
        
        try {
            const blob = dataURLtoBlob(reportImage);
            const file = new File([blob], "CosmicHarmonyReport.png", { 
                type: "image/png",
                lastModified: Date.now()
            });
            
            if (navigator.share && navigator.canShare) {
                const shareData = {
                    files: [file],
                    title: 'Cosmic Harmony Analysis Report',
                    text: '🔮 Check out my Cosmic Harmony Analysis! 🌌\n\nThis report analyzes my connection with Divine & Danav energies using advanced numerology.\n\nGenerated with Elon Musk-level graphics! 🚀'
                };
                
                if (navigator.canShare(shareData)) {
                    await navigator.share(shareData);
                    return;
                }
            }
            
            // Fallback for desktop or unsupported browsers
            downloadHDReport();
            setTimeout(() => {
                alert('✅ Report downloaded!\n\n📱 To share on WhatsApp:\n1. Open WhatsApp\n2. Go to any chat\n3. Click attachment (📎)\n4. Select "Gallery/Photos"\n5. Choose the downloaded image\n6. Add caption: "My Cosmic Harmony Analysis Report"');
            }, 500);
            
        } catch (error) {
            console.error('Share error:', error);
            downloadHDReport();
        }
    }
    
    async function downloadMatchingReport() {
        if (!matchingReportImage) {
            alert('Please generate a matching report first');
            return;
        }
        
        try {
            const blob = dataURLtoBlob(matchingReportImage);
            const url = window.URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            link.download = `Cosmic_Group_Match_HD_Report_${timestamp}.png`;
            
            document.body.appendChild(link);
            link.click();
            
            // Cleanup
            setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            }, 100);
            
            // Show success animation
            launchConfetti();
            
        } catch (error) {
            console.error('Download error:', error);
            // Fallback
            const link = document.createElement('a');
            link.href = matchingReportImage;
            link.download = 'Cosmic_Group_Match_Report.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
    
    async function shareMatchingOnWhatsApp() {
        if (!matchingReportImage) {
            alert('Please generate a matching report first');
            return;
        }
        
        try {
            const blob = dataURLtoBlob(matchingReportImage);
            const file = new File([blob], "CosmicGroupMatchReport.png", { 
                type: "image/png",
                lastModified: Date.now()
            });
            
            if (navigator.share && navigator.canShare) {
                const shareData = {
                    files: [file],
                    title: 'Cosmic Group Match Analysis Report',
                    text: '💖 Check out our Cosmic Group Compatibility Analysis! 🌌\n\nThis report analyzes our cosmic group harmony and energy alignment.\n\nGenerated with Elon Musk-level graphics! 🚀'
                };
                
                if (navigator.canShare(shareData)) {
                    await navigator.share(shareData);
                    return;
                }
            }
            
            // Fallback for desktop or unsupported browsers
            downloadMatchingReport();
            setTimeout(() => {
                alert('✅ Match report downloaded!\n\n📱 To share on WhatsApp:\n1. Open WhatsApp\n2. Go to any chat\n3. Click attachment (📎)\n4. Select "Gallery/Photos"\n5. Choose the downloaded image\n6. Add caption: "Our Cosmic Group Compatibility Analysis Report"');
            }, 500);
            
        } catch (error) {
            console.error('Share error:', error);
            downloadMatchingReport();
        }
    }
    
    function show3DVisualization() {
        alert('🚀 3D Visualization Feature\n\nThis advanced feature is currently in development!\n\nComing soon:\n• Interactive 3D neural network visualization\n• Quantum energy field mapping\n• Real-time group harmony simulation\n\nStay tuned for the next update!');
        
        // For now, show the modal
        enhancedModal.style.display = 'flex';
        enhancedModal.style.opacity = '0';
        
        setTimeout(() => {
            enhancedModal.style.opacity = '1';
            enhancedModal.style.transition = 'opacity 0.3s';
        }, 50);
    }
    
    // ==================== EVENT LISTENERS ====================
    
    // Matching analyze button
    matchingAnalyzeBtn.addEventListener('click', analyzeMatching);
    
    // Matching modal close
    matchingModalClose.addEventListener('click', () => {
        matchingModal.style.opacity = '0';
        setTimeout(() => {
            matchingModal.style.display = 'none';
        }, 300);
    });
    
    matchingModal.addEventListener('click', (e) => {
        if (e.target === matchingModal) {
            matchingModal.style.opacity = '0';
            setTimeout(() => {
                matchingModal.style.display = 'none';
            }, 300);
        }
    });
    
    // Single modal close
    modalClose.addEventListener('click', () => {
        enhancedModal.style.opacity = '0';
        setTimeout(() => {
            enhancedModal.style.display = 'none';
        }, 300);
    });
    
    enhancedModal.addEventListener('click', (e) => {
        if (e.target === enhancedModal) {
            enhancedModal.style.opacity = '0';
            setTimeout(() => {
                enhancedModal.style.display = 'none';
            }, 300);
        }
    });
    
    // Single analysis buttons
    downloadEnhanced.addEventListener('click', async () => {
        enhancedModal.style.opacity = '0';
        setTimeout(() => {
            enhancedModal.style.display = 'none';
        }, 300);
        
        await downloadHDReport();
    });
    
    shareEnhanced.addEventListener('click', async () => {
        enhancedModal.style.opacity = '0';
        setTimeout(() => {
            enhancedModal.style.display = 'none';
        }, 300);
        
        await shareOnWhatsApp();
    });
    
    viewReport.addEventListener('click', () => {
        enhancedModal.style.opacity = '0';
        setTimeout(() => {
            enhancedModal.style.display = 'none';
        }, 300);
        
        // Scroll to report section
        resultsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
        });
    });
    
    // Matching download and share buttons
    downloadMatchingEnhanced.addEventListener('click', async () => {
        matchingModal.style.opacity = '0';
        setTimeout(() => {
            matchingModal.style.display = 'none';
        }, 300);
        
        await downloadMatchingReport();
    });
    
    shareMatchingEnhanced.addEventListener('click', async () => {
        matchingModal.style.opacity = '0';
        setTimeout(() => {
            matchingModal.style.display = 'none';
        }, 300);
        
        await shareMatchingOnWhatsApp();
    });
    
    viewMatchingReport.addEventListener('click', () => {
        matchingModal.style.opacity = '0';
        setTimeout(() => {
            matchingModal.style.display = 'none';
        }, 300);
        
        // Scroll to matching results
        matchingResultsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
        });
    });
    
    // Action buttons
    downloadReportBtn.addEventListener('click', async () => {
        await downloadHDReport();
    });
    
    shareWhatsAppBtn.addEventListener('click', async () => {
        await shareOnWhatsApp();
    });
    
    view3DBtn.addEventListener('click', () => {
        show3DVisualization();
    });
    
    // Matching action buttons
    downloadMatchingReportBtn.addEventListener('click', async () => {
        await downloadMatchingReport();
    });
    
    shareMatchingWhatsAppBtn.addEventListener('click', async () => {
        await shareMatchingOnWhatsApp();
    });
    
    // ==================== ENHANCED HOVER EFFECTS ====================
    
    document.querySelectorAll('.number-card, .group-card, .zone-card, .person-details-card, .summary-item').forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.style.transform || !this.style.transform.includes('scale')) {
                this.style.transform = 'translateY(-12px) scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('animated')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    // Animate form inputs
    document.querySelectorAll('.form-group input').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // Make sure action buttons are visible
    actionButtons.style.display = 'flex';
    actionButtons.style.opacity = '1';
    actionButtons.style.transform = 'translateY(0)';
    
    // Make sure matching action buttons are visible
    const matchingActionButtons = document.getElementById('matchingActionButtons');
    if (matchingActionButtons) {
        matchingActionButtons.style.display = 'flex';
        matchingActionButtons.style.opacity = '1';
        matchingActionButtons.style.transform = 'translateY(0)';
    }
});