/* ===================================================
   ADANI PETROCHEM — App Launcher Data & Renderer
   =================================================== */

const APPS = [
  { id: 'diginx', title: 'DigiNX', desc: 'Next-generation digital engineering platform for integrated plant lifecycle management and real-time collaboration.', tag: 'Engineering', icon: 'cpu' },
  { id: 'aims', title: 'AIMS', desc: 'Asset Integrity Management System — predictive analytics for equipment health and compliance tracking.', tag: 'Asset Mgmt', icon: 'shield-check' },
  { id: 'dashboard', title: 'Dashboard', desc: 'Executive command center with live KPIs, production metrics, and operational overview.', tag: 'Analytics', icon: 'layout-dashboard' },
  { id: 'aproms', title: 'AProMS', desc: 'Advanced Process Monitoring System for real-time process optimization.', tag: 'Operations', icon: 'activity' },
  { id: 'material-mgmt', title: 'Material Management', desc: 'End-to-end material tracking, inventory optimization, and supply chain coordination.', tag: 'Supply Chain', icon: 'package' },
  { id: 'epc-proman', title: 'EPC Proman & TNT', desc: 'Project management suite for engineering, procurement, and construction workflows.', tag: 'Projects', icon: 'gantt-chart' },
  { id: 'nfa-portal', title: 'NFA Portal', desc: 'Note for Approval workflows with multi-level authorization and audit trails.', tag: 'Approvals', icon: 'file-check' },
  { id: 'tekla-powerfab', title: 'Tekla Powerfab', desc: 'Steel detailing and fabrication management with 3D modeling integration.', tag: 'Fabrication', icon: 'boxes' },
  { id: 'pim', title: 'PIM', desc: 'Plant Information Management — centralized data repository for process historians.', tag: 'Data', icon: 'database' },
  { id: 'intl-standards', title: 'International Standards', desc: 'Access ASME, API, ISO, IEC, and international engineering codes and standards library.', tag: 'Standards', icon: 'globe' },
  { id: 'bis-standards', title: 'BIS Indian Standards', desc: 'Bureau of Indian Standards digital library with latest BIS codes and amendments.', tag: 'Compliance', icon: 'book-open' },
  { id: 'plant-analytics', title: 'Plant Analytics', desc: 'Advanced analytics engine for plant performance, energy efficiency, and throughput optimization.', tag: 'Analytics', icon: 'bar-chart-3' },
  { id: 'ai-assistant', title: 'AI Assistant', desc: 'Intelligent copilot for engineering queries, document search, and operational guidance.', tag: 'AI', icon: 'bot' },
  { id: 'safety-monitoring', title: 'Safety Monitoring', desc: 'Real-time safety systems monitoring, incident tracking, and hazard management.', tag: 'Safety', icon: 'alert-triangle' },
  { id: 'smart-reports', title: 'Smart Reports', desc: 'Automated report generation with AI-powered insights and visual dashboards.', tag: 'Reports', icon: 'file-bar-chart' },
  { id: 'engineering-docs', title: 'Engineering Docs', desc: 'Document management system for P&IDs, PFDs, datasheets, and technical drawings.', tag: 'Documents', icon: 'folder-open' },
  { id: 'workflow-automation', title: 'Workflow Automation', desc: 'No-code workflow builder for automating approval chains and business processes.', tag: 'Automation', icon: 'workflow' },
  { id: 'procurement-hub', title: 'Procurement Hub', desc: 'Centralized procurement portal with vendor management and purchase order tracking.', tag: 'Procurement', icon: 'shopping-cart' },
  { id: 'asset-monitoring', title: 'Asset Monitoring', desc: 'IoT-enabled real-time asset tracking with predictive maintenance algorithms.', tag: 'IoT', icon: 'radar' },
  { id: 'maintenance-scheduler', title: 'Maintenance Scheduler', desc: 'Intelligent maintenance planning with resource optimization and downtime prediction.', tag: 'Maintenance', icon: 'calendar-check' },
  { id: 'digital-twin', title: 'Digital Twin', desc: 'Virtual plant replicas for simulation, scenario planning, and operational optimization.', tag: 'Simulation', icon: 'rotate-3d' },
  { id: 'compliance-center', title: 'Compliance Center', desc: 'Regulatory compliance dashboard with audit management and certification tracking.', tag: 'Regulatory', icon: 'clipboard-check' }
];

const QUICK_ACCESS_APPS = [
  { title: 'DigiNX', tag: 'Engineering', icon: 'cpu', url: 'https://diginx.adani.com/login' },
  { title: 'AIMS', tag: 'Asset Mgmt', icon: 'shield-check', url: 'https://adanipetrochem.adani.com/AIMS/' },
  { title: 'AProMS', tag: 'Operations', icon: 'activity', url: 'https://mpl-hana-prd.authentication.eu10.hana.ondemand.com/login' },
  { title: 'Material Management', tag: 'Supply Chain', icon: 'package', url: 'https://gvemplwsmtapp01.adani.com:8443/apex/f?p=101:LOGIN::::::' },
  { title: 'EPC Proman & TNT', tag: 'Projects', icon: 'gantt-chart', url: 'https://tnt.adani.com/' },
  { title: 'NFA Portal', tag: 'Approvals', icon: 'file-check', url: 'https://mplnfaportal.adani.com/' },
  { title: 'Tekla Powerfab', tag: 'Fabrication', icon: 'boxes', url: 'https://adani.teklapowerfab.net/app/auth/' },
  { title: 'PIM', tag: 'Data', icon: 'database', url: 'https://adanipetrochem.adani.com/PIM.html' }
];

function renderApps() {
  const grid = document.getElementById('launcherGrid');
  if (!grid) return;

  grid.innerHTML = APPS.map((app, i) => `
    <a href="#app-${app.id}" class="app-card reveal" data-delay="${i}">
      <div class="app-card__top">
        <div class="app-card__icon">
          <i data-lucide="${app.icon}"></i>
        </div>
        <h3 class="app-card__title">${app.title}</h3>
        <p class="app-card__desc">${app.desc}</p>
      </div>
      <div class="app-card__bottom">
        <span class="app-card__tag">${app.tag}</span>
        <span class="app-card__arrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </div>
    </a>
  `).join('');
}

function renderDrawerApps() {
  const list = document.getElementById('drawerList');
  if (!list) return;

  list.innerHTML = QUICK_ACCESS_APPS.map(app => `
    <a href="${app.url}" class="drawer-link" target="_blank" rel="noopener noreferrer">
      <div class="drawer-link__icon">
        <i data-lucide="${app.icon}"></i>
      </div>
      <div class="drawer-link__text">
        <span class="drawer-link__title">${app.title}</span>
        <span class="drawer-link__tag">${app.tag}</span>
      </div>
    </a>
  `).join('');
}

function setupDrawer() {
  const btn = document.getElementById('appDrawerBtn');
  const close = document.getElementById('appDrawerClose');
  const drawer = document.getElementById('appDrawer');
  const backdrop = document.getElementById('drawerBackdrop');

  if (!btn || !drawer) return;

  const toggleDrawer = (show) => {
    if (show) {
      drawer.classList.add('is-active');
      backdrop.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('is-active');
      backdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  btn.addEventListener('click', () => toggleDrawer(true));
  close.addEventListener('click', () => toggleDrawer(false));
  backdrop.addEventListener('click', () => toggleDrawer(false));

  const heroBtn = document.getElementById('heroOpenDashboardBtn');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => toggleDrawer(true));
  }

  // Close drawer when a link is clicked
  const links = drawer.querySelectorAll('.drawer-link');
  links.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderApps();
  renderDrawerApps();
  setupDrawer();
  if (window.lucide) lucide.createIcons();
});
