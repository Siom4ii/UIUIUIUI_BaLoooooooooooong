// ===================== SIMPLE AUTH (LOGIN.HTML) =====================

const DEMO_USERS = {
  admin: { password: "admin123", role: "Admin User" },
  cashier: { password: "cashier123", role: "Cashier User" },
  barber: { password: "barber123", role: "Barber" },
};

function setSession(username, role) {
  localStorage.setItem("balong_logged_in", "1");
  localStorage.setItem("balong_username", username);
  localStorage.setItem("balong_role", role);
}

function clearSession() {
  localStorage.removeItem("balong_logged_in");
  localStorage.removeItem("balong_username");
  localStorage.removeItem("balong_role");
}

function isLoggedIn() {
  return localStorage.getItem("balong_logged_in") === "1";
}

// ----- LOGIN PAGE -----
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginError = document.getElementById("loginError");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const u = usernameInput.value.trim();
    const p = passwordInput.value;

    const user = DEMO_USERS[u];
    if (!user || user.password !== p) {
      loginError.textContent = "Invalid username or password.";
      return;
    }

    setSession(u, user.role);
    window.location.href = "index.html";
  });
}

// ===================== MAIN APP (INDEX.HTML) =====================

const appLayout = document.querySelector(".layout");
if (appLayout) {
  // If you want strict auth, uncomment this:
  // if (!isLoggedIn()) window.location.href = "login.html";

  // --------- BASIC SETUP ---------
  const username = localStorage.getItem("balong_username") || "Admin User";
  const role = localStorage.getItem("balong_role") || "Admin User";

  const topUserName = document.getElementById("topUserName");
  const sidebarUserRole = document.getElementById("sidebarUserRole");
  if (topUserName) topUserName.textContent = username;
  if (sidebarUserRole) sidebarUserRole.textContent = role;

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      clearSession();
      window.location.href = "login.html";
    });
  }

  // --------- SAMPLE DATA (IN-MEMORY ONLY) ---------
  const customers = [
    {
      id: 1,
      name: "Juan Dela Cruz",
      contact: "0917 123 4567",
      lastVisit: "2025-11-20",
      visits: 5,
      status: "Active",
    },
    {
      id: 2,
      name: "Ana Reyes",
      contact: "0918 222 3344",
      lastVisit: "2025-11-19",
      visits: 3,
      status: "Active",
    },
    {
      id: 3,
      name: "Walk-in",
      contact: "—",
      lastVisit: "2025-11-21",
      visits: 30,
      status: "Active",
    },
  ];

  const barbers = [
    {
      id: 1,
      name: "Tony Balong",
      username: "tony",
      contact: "0917 555 1111",
      rate: "40%",
      status: "Active",
    },
    {
      id: 2,
      name: "Jake Santos",
      username: "jake",
      contact: "0917 555 2222",
      rate: "35%",
      status: "Active",
    },
    {
      id: 3,
      name: "Carlos D.",
      username: "carlos",
      contact: "0917 555 3333",
      rate: "30%",
      status: "On Leave",
    },
  ];

  const services = [
    {
      id: 1,
      name: "Classic Haircut",
      category: "Haircuts",
      duration: "30 min",
      price: 150,
      status: "Active",
    },
    {
      id: 2,
      name: "Premium Haircut",
      category: "Haircuts",
      duration: "45 min",
      price: 250,
      status: "Active",
    },
    {
      id: 3,
      name: "Kids Cut",
      category: "Haircuts",
      duration: "20 min",
      price: 120,
      status: "Active",
    },
    {
      id: 4,
      name: "Beard Trim",
      category: "Shaving",
      duration: "15 min",
      price: 100,
      status: "Active",
    },
    {
      id: 5,
      name: "Hot Towel Shave",
      category: "Shaving",
      duration: "30 min",
      price: 200,
      status: "Active",
    },
    {
      id: 6,
      name: "Haircut + Shave Combo",
      category: "Combos",
      duration: "60 min",
      price: 320,
      status: "Active",
    },
  ];

  const inventory = [
    {
      id: 1,
      group: "Backbar Products",
      sku: "COND-001",
      name: "Conditioner",
      stock: 8,
      min: 10,
      price: 180,
    },
    {
      id: 2,
      group: "Backbar Products",
      sku: "SHP-001",
      name: "Shampoo Daily",
      stock: 6,
      min: 10,
      price: 150,
    },
    {
      id: 3,
      group: "Retail Products",
      sku: "OIL-001",
      name: "Beard Oil",
      stock: 5,
      min: 5,
      price: 220,
    },
    {
      id: 4,
      group: "Retail Products",
      sku: "WAX-001",
      name: "Matte Hair Wax",
      stock: 15,
      min: 6,
      price: 190,
    },
  ];

  const appointments = [
    {
      id: 1,
      date: "2025-11-21",
      time: "09:30",
      customer: "Juan Dela Cruz",
      barber: "Tony Balong",
      service: "Premium Haircut",
      status: "Completed",
    },
    {
      id: 2,
      date: "2025-11-21",
      time: "10:15",
      customer: "Walk-in",
      barber: "Jake Santos",
      service: "Classic Haircut",
      status: "In Progress",
    },
    {
      id: 3,
      date: "2025-11-21",
      time: "11:00",
      customer: "Ana Reyes",
      barber: "Carlos D.",
      service: "Hot Towel Shave",
      status: "Scheduled",
    },
  ];

  // salesRecords = completed tickets (some seeded, plus POS checkouts)
  const salesRecords = [
    {
      id: "R-0001",
      datetime: new Date("2025-11-18T10:15:00"),
      customer: "Walk-in",
      barber: "Tony Balong",
      items: [{ name: "Classic Haircut", qty: 1, price: 150 }],
      total: 150,
    },
    {
      id: "R-0002",
      datetime: new Date("2025-11-18T11:05:00"),
      customer: "Juan Dela Cruz",
      barber: "Tony Balong",
      items: [
        { name: "Premium Haircut", qty: 1, price: 250 },
        { name: "Beard Trim", qty: 1, price: 100 },
      ],
      total: 350,
    },
    {
      id: "R-0003",
      datetime: new Date("2025-11-19T14:30:00"),
      customer: "Walk-in",
      barber: "Jake Santos",
      items: [
        { name: "Classic Haircut", qty: 1, price: 150 },
        { name: "Hot Towel Shave", qty: 1, price: 200 },
      ],
      total: 350,
    },
    {
      id: "R-0004",
      datetime: new Date("2025-11-20T15:10:00"),
      customer: "Ana Reyes",
      barber: "Carlos D.",
      items: [
        { name: "Classic Haircut", qty: 1, price: 150 },
        { name: "Beard Trim", qty: 1, price: 100 },
      ],
      total: 250,
    },
  ];

  // --------- HELPERS ---------
  function formatPeso(num) {
    return "₱" + Number(num).toFixed(2);
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  // ===================== NAVIGATION =====================

  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const pageTitle = document.getElementById("pageTitle");
  const pageSubtitle = document.querySelector(".page-subtitle");

  navLinks.forEach((link) => {
    const sectionId = link.getAttribute("data-section");
    if (!sectionId) return; // skip logout

    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      sections.forEach((sec) => {
        sec.classList.toggle("active", sec.id === sectionId);
      });

      const label = link.querySelector("span")
        ? link.querySelector("span").textContent
        : "Dashboard";
      if (pageTitle) pageTitle.textContent = label;

      if (!pageSubtitle) return;
      switch (sectionId) {
        case "dashboard":
          pageSubtitle.textContent = "Today’s overview";
          break;
        case "pos":
          pageSubtitle.textContent = "Process and record sales";
          break;
        case "customers":
          pageSubtitle.textContent = "Manage customer records";
          break;
        case "appointments":
          pageSubtitle.textContent = "Schedule and track bookings";
          break;
        case "services":
          pageSubtitle.textContent = "Configure services and prices";
          break;
        case "inventory":
          pageSubtitle.textContent = "Manage your product inventory";
          break;
        case "barbers":
          pageSubtitle.textContent = "Manage your team of barbers";
          break;
        case "analytics":
          pageSubtitle.textContent = "Visualize your performance";
          break;
        case "reports":
          pageSubtitle.textContent = "Sales summaries and breakdowns";
          break;
        case "settings":
          pageSubtitle.textContent = "System configuration";
          break;
        default:
          pageSubtitle.textContent = "";
      }
    });
  });

  // ===================== DASHBOARD RENDER =====================

  function renderLowStock() {
    const container = document.getElementById("lowStockContainer");
    if (!container) return;
    container.innerHTML = "";

    const low = inventory.filter((item) => item.stock <= item.min);
    if (!low.length) {
      container.innerHTML =
        '<p class="card-muted small-mt">No items in low stock.</p>';
      return;
    }

    low.forEach((item) => {
      const div = document.createElement("div");
      div.className = "low-stock-item";
      div.innerHTML = `
        <div>
          <div class="low-stock-name">${item.name}</div>
          <div class="low-stock-code">${item.sku}</div>
        </div>
        <div class="low-stock-qty text-danger">${item.stock} left</div>
      `;
      container.appendChild(div);
    });
  }

  function renderDashboardKPIs() {
    const dashRevenue = document.getElementById("dashRevenue");
    const dashTickets = document.getElementById("dashTickets");
    const dashTotalTickets = document.getElementById("dashTotalTickets");
    const dashAvgTicket = document.getElementById("dashAvgTicket");
    const dashCommission = document.getElementById("dashCommission");
    const dashNet = document.getElementById("dashNet");
    const dashTopServices = document.getElementById("dashTopServices");
    const dashAppointments = document.getElementById("dashAppointments");

    const today = todayStr();
    let todayRevenue = 0;
    let todayTicketCount = 0;

    const serviceCounts = {};
    const dateCounts = {};

    salesRecords.forEach((sale) => {
      const d = sale.datetime.toISOString().slice(0, 10);
      todayTicketCount += d === today ? 1 : 0;
      todayRevenue += d === today ? sale.total : 0;

      // for avg etc
      dateCounts[d] = (dateCounts[d] || 0) + 1;

      sale.items.forEach((it) => {
        serviceCounts[it.name] = (serviceCounts[it.name] || 0) + it.qty;
      });
    });

    const totalTickets = salesRecords.length;
    const totalRevenue = salesRecords.reduce((s, r) => s + r.total, 0);
    const avgTicket = totalTickets ? totalRevenue / totalTickets : 0;

    if (dashRevenue) dashRevenue.textContent = formatPeso(todayRevenue);
    if (dashTickets)
      dashTickets.textContent = `${todayTicketCount} ticket${
        todayTicketCount === 1 ? "" : "s"
      }`;
    if (dashTotalTickets) dashTotalTickets.textContent = totalTickets;
    if (dashAvgTicket) dashAvgTicket.textContent = `Avg: ${formatPeso(avgTicket)}`;

    const commissionRate = 0.4; // 40%
    const todayCommission = todayRevenue * commissionRate;
    if (dashCommission) dashCommission.textContent = formatPeso(todayCommission);
    if (dashNet)
      dashNet.textContent = `Net: ${formatPeso(todayRevenue - todayCommission)}`;

    // Top services
    if (dashTopServices) {
      dashTopServices.innerHTML = "";
      const entries = Object.entries(serviceCounts).sort((a, b) => b[1] - a[1]);
      if (!entries.length) {
        dashTopServices.innerHTML = "<li>No services sold today</li>";
      } else {
        entries.slice(0, 4).forEach(([name, qty]) => {
          const li = document.createElement("li");
          li.textContent = `${name} – ${qty}x`;
          dashTopServices.appendChild(li);
        });
      }
    }

    // Today's appointments
    if (dashAppointments) {
      dashAppointments.innerHTML = "";
      const todaysAppts = appointments.filter((a) => a.date === today);
      if (!todaysAppts.length) {
        dashAppointments.innerHTML = "<li>No appointments scheduled.</li>";
      } else {
        todaysAppts.forEach((a) => {
          const li = document.createElement("li");
          li.textContent = `${a.time} – ${a.customer} (${a.service})`;
          dashAppointments.appendChild(li);
        });
      }
    }
  }

  // ===================== POS RENDER & LOGIC =====================

  let cart = [];

  function renderPOSServiceSections() {
    const container = document.getElementById("posServiceSections");
    if (!container) return;

    container.innerHTML = "";
    const byCategory = {};
    services.forEach((s) => {
      if (!byCategory[s.category]) byCategory[s.category] = [];
      byCategory[s.category].push(s);
    });

    Object.entries(byCategory).forEach(([category, items]) => {
      const section = document.createElement("div");
      section.className = "service-section";
      section.innerHTML = `<h3 class="service-section-title">${category}</h3>`;

      const grid = document.createElement("div");
      grid.className = "service-grid";

      items.forEach((s) => {
        const btn = document.createElement("button");
        btn.className = "service-card add-to-cart";
        btn.setAttribute("data-name", s.name);
        btn.setAttribute("data-price", s.price.toString());

        btn.innerHTML = `
          <div class="service-icon">
            <i class="fa-solid fa-scissors"></i>
          </div>
          <div class="service-info">
            <div class="service-name">${s.name}</div>
            <div class="service-price">${formatPeso(s.price)}</div>
            <div class="service-duration">${s.duration}</div>
          </div>
        `;

        btn.addEventListener("click", () =>
          addToCart(s.name, Number(s.price))
        );

        grid.appendChild(btn);
      });

      section.appendChild(grid);
      container.appendChild(section);
    });
  }

  function updateCartDisplay() {
    const cartTableBody = document.querySelector("#cartTable tbody");
    const cartEmpty = document.getElementById("cartEmpty");
    const subtotalAmount = document.getElementById("subtotalAmount");
    const taxAmount = document.getElementById("taxAmount");
    const totalAmount = document.getElementById("totalAmount");

    if (!cartTableBody) return;

    cartTableBody.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = item.name;

      const qtyCell = document.createElement("td");
      qtyCell.textContent = item.qty;

      const priceCell = document.createElement("td");
      priceCell.textContent = formatPeso(item.price);

      const subCell = document.createElement("td");
      const lineTotal = item.qty * item.price;
      subCell.textContent = formatPeso(lineTotal);

      const actionCell = document.createElement("td");
      const removeBtn = document.createElement("span");
      removeBtn.textContent = "✕";
      removeBtn.className = "cart-remove";
      removeBtn.addEventListener("click", () => {
        cart.splice(index, 1);
        updateCartDisplay();
      });
      actionCell.appendChild(removeBtn);

      row.appendChild(nameCell);
      row.appendChild(qtyCell);
      row.appendChild(priceCell);
      row.appendChild(subCell);
      row.appendChild(actionCell);

      cartTableBody.appendChild(row);
      subtotal += lineTotal;
    });

    const tax = 0; // add VAT logic here if needed

    if (subtotalAmount) subtotalAmount.textContent = formatPeso(subtotal);
    if (taxAmount) taxAmount.textContent = formatPeso(tax);
    if (totalAmount) totalAmount.textContent = formatPeso(subtotal + tax);

    if (cartEmpty) {
      cartEmpty.style.display = cart.length ? "none" : "block";
    }
  }

  function addToCart(name, price) {
    const existing = cart.find((c) => c.name === name);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, qty: 1 });
    }
    updateCartDisplay();
  }

  function setupPOSSearch() {
    const searchInput = document.getElementById("serviceSearch");
    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase();
      document.querySelectorAll(".service-card").forEach((card) => {
        const name = (card.getAttribute("data-name") || "").toLowerCase();
        card.style.display = name.includes(term) ? "flex" : "none";
      });
    });
  }

  function setupPaymentButtons() {
    const chips = document.querySelectorAll(".btn-chip");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
      });
    });
  }

  function setupCheckout() {
    const btn = document.getElementById("completeSaleBtn");
    const posCustomerName = document.getElementById("posCustomerName");
    if (!btn) return;

    btn.addEventListener("click", () => {
      if (!cart.length) {
        alert("Cart is empty.");
        return;
      }

      const subtotal = cart.reduce(
        (sum, item) => sum + item.qty * item.price,
        0
      );
      const customer =
        (posCustomerName && posCustomerName.value.trim()) || "Walk-in";
      const paymentChip = document.querySelector(".btn-chip.active");
      const paymentType = paymentChip
        ? paymentChip.textContent.trim()
        : "Cash";

      const receiptId =
        "R-" + (salesRecords.length + 1).toString().padStart(4, "0");
      const sale = {
        id: receiptId,
        datetime: new Date(),
        customer,
        barber: "Unassigned",
        items: cart.map((c) => ({ ...c })),
        total: subtotal,
        paymentType,
      };
      salesRecords.push(sale);

      // Update customer's visits if exists
      const cust = customers.find(
        (c) => c.name.toLowerCase() === customer.toLowerCase()
      );
      if (cust) {
        cust.visits += 1;
        cust.lastVisit = todayStr();
      }

      alert(`Sale completed! Receipt #${receiptId}`);
      cart = [];
      updateCartDisplay();
      renderDashboardKPIs();
      renderCustomers();
      renderReports();
      renderAnalytics();
    });
  }

  // ===================== CUSTOMERS =====================

  function renderCustomers() {
    const tbody = document.getElementById("customersTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    customers.forEach((c) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${c.name}</td>
        <td>${c.contact}</td>
        <td>${c.lastVisit}</td>
        <td>${c.visits}</td>
        <td>${c.status}</td>
        <td><button class="tiny-link">View</button></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // ===================== APPOINTMENTS =====================

  function renderAppointmentsTable() {
    const tbody = document.getElementById("appointmentsTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    appointments.forEach((a) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${a.date} ${a.time}</td>
        <td>${a.customer}</td>
        <td>${a.barber}</td>
        <td>${a.service}</td>
        <td>${a.status}</td>
        <td><button class="tiny-link">Details</button></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // ===================== SERVICES TABLE =====================

  function renderServicesTable() {
    const tbody = document.getElementById("servicesTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    services.forEach((s) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${s.name}</td>
        <td>${s.category}</td>
        <td>${s.duration}</td>
        <td>${formatPeso(s.price)}</td>
        <td>${s.status}</td>
        <td><button class="tiny-link">Edit</button></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // ===================== INVENTORY TABLES =====================

  function renderInventoryGroups() {
    const container = document.getElementById("inventoryGroups");
    if (!container) return;
    container.innerHTML = "";

    const byGroup = {};
    inventory.forEach((p) => {
      if (!byGroup[p.group]) byGroup[p.group] = [];
      byGroup[p.group].push(p);
    });

    Object.entries(byGroup).forEach(([groupName, items]) => {
      const block = document.createElement("div");
      block.className = "inventory-group-block";
      block.innerHTML = `<h3 class="inventory-group-title">${groupName}</h3>`;

      const table = document.createElement("table");
      table.className = "table hover-rows";
      table.innerHTML = `
        <thead>
          <tr>
            <th>SKU</th>
            <th>Product</th>
            <th>Stock</th>
            <th>Min</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;

      const tbody = table.querySelector("tbody");
      items.forEach((p) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${p.sku}</td>
          <td>${p.name}</td>
          <td>${p.stock}</td>
          <td>${p.min}</td>
          <td>${formatPeso(p.price)}</td>
        `;
        tbody.appendChild(tr);
      });

      block.appendChild(table);
      container.appendChild(block);
    });
  }

  // ===================== BARBERS TABLE =====================

  function renderBarbersTable() {
    const tbody = document.getElementById("barbersTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    barbers.forEach((b) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${b.name}</td>
        <td>${b.username}</td>
        <td>${b.contact}</td>
        <td>${b.rate}</td>
        <td>${b.status}</td>
        <td><button class="tiny-link">Profile</button></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // ===================== REPORTS =====================

  function renderReports() {
    const tbody = document.getElementById("reportTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const byDate = {};
    salesRecords.forEach((sale) => {
      const d = sale.datetime.toISOString().slice(0, 10);
      if (!byDate[d]) byDate[d] = { tickets: 0, gross: 0 };
      byDate[d].tickets += 1;
      byDate[d].gross += sale.total;
    });

    Object.entries(byDate)
      .sort(([a], [b]) => (a > b ? -1 : 1))
      .forEach(([date, stat]) => {
        const net = stat.gross * 0.6; // assuming 40% commission
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${date}</td>
          <td>${stat.tickets}</td>
          <td>${formatPeso(stat.gross)}</td>
          <td>${formatPeso(net)}</td>
        `;
        tbody.appendChild(tr);
      });
  }

  // ===================== ANALYTICS =====================

  function renderAnalytics() {
    const bestServiceEl = document.getElementById("analyticsBestService");
    const topBarberEl = document.getElementById("analyticsTopBarber");
    const busiestDayEl = document.getElementById("analyticsBusiestDay");

    const serviceRevenue = {};
    const barberRevenue = {};
    const dateTickets = {};

    salesRecords.forEach((sale) => {
      const d = sale.datetime.toISOString().slice(0, 10);
      dateTickets[d] = (dateTickets[d] || 0) + 1;

      sale.items.forEach((it) => {
        serviceRevenue[it.name] =
          (serviceRevenue[it.name] || 0) + it.qty * it.price;
      });

      if (sale.barber) {
        barberRevenue[sale.barber] =
          (barberRevenue[sale.barber] || 0) + sale.total;
      }
    });

    // Best service
    if (bestServiceEl) {
      const best = Object.entries(serviceRevenue).sort((a, b) => b[1] - a[1])[0];
      bestServiceEl.textContent = best
        ? `${best[0]} (${formatPeso(best[1])})`
        : "—";
    }

    // Top barber
    if (topBarberEl) {
      const top = Object.entries(barberRevenue).sort((a, b) => b[1] - a[1])[0];
      topBarberEl.textContent = top
        ? `${top[0]} (${formatPeso(top[1])})`
        : "—";
    }

    // Busiest day
    if (busiestDayEl) {
      const busy = Object.entries(dateTickets).sort((a, b) => b[1] - a[1])[0];
      busiestDayEl.textContent = busy ? `${busy[0]} (${busy[1]} tickets)` : "—";
    }
  }

  // ===================== INIT EVERYTHING =====================

  renderLowStock();
  renderDashboardKPIs();
  renderPOSServiceSections();
  setupPOSSearch();
  setupPaymentButtons();
  setupCheckout();
  renderCustomers();
  renderAppointmentsTable();
  renderServicesTable();
  renderInventoryGroups();
  renderBarbersTable();
  renderReports();
  renderAnalytics();
}
