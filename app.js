const zones = {
  polo: {
    type: "Signature experience",
    title: "Polo Field",
    text: "The original 2D layout places the main polo field as the central east-west anchor, with safety zones around the field and villas, clubhouse, lake, and circulation organized around it.",
    client: "Prestige, arrival, lifestyle, event energy, and a clear visual center of value.",
    action: "Enter the 3D field and walk toward villas, clubhouse, lake, or stables.",
  },
  waterfront: {
    type: "Lifestyle premium",
    title: "Proposed Lake",
    text: "The marked 2D plan places the proposed lake along the north edge of the polo field, between premium villa clusters and the upper crescent road.",
    client: "Calm, privacy, outlook, and strong photographic value.",
    action: "Walk from the pitch to the lake-edge villas.",
  },
  clubhouse: {
    type: "Social anchor",
    title: "Clubhouse",
    text: "The clubhouse sits south of the main polo field in the 2D source layout, directly connected to parking and the proposed Lagos Road frontage.",
    client: "Belonging, service, hosting, and member experience.",
    action: "Stand at the clubhouse frontage and look back across the field.",
  },
  villas: {
    type: "Residential offer",
    title: "Premium Villas",
    text: "Premium villas wrap the polo field and lake edges, making them the strongest lifestyle ownership product in the current masterplan.",
    client: "Family retreat, long-stay comfort, privacy, and status.",
    action: "Approach the 3-bedroom villa and step through its parking, living, and bedroom levels.",
  },
  lofts: {
    type: "Residential offer",
    title: "Loft Apartments",
    text: "Loft apartments appear along the western internal blocks and northern frontage, forming a higher-density residential layer around the core estate.",
    client: "Convenience, yield potential, lock-up-and-leave ownership.",
    action: "Use later loft plans to build this as a second detailed unit path.",
  },
  training: {
    type: "Sporting support",
    title: "Training Field",
    text: "The training field sits west of the main polo field in the 2D plan, creating a secondary sporting zone with its own safety boundary.",
    client: "Depth, operational credibility, coaching, and youth/community programming.",
    action: "Walk from the main field toward the training field and service edge.",
  },
  recreation: {
    type: "Family amenity",
    title: "Game Park / Play Ground",
    text: "The game park and play ground sit on the eastern side near paddock and commercial uses, strengthening the family and leisure story.",
    client: "Family activity, dwell time, and softer lifestyle appeal.",
    action: "Clarify public, resident, and member access rules before final copy.",
  },
  stables: {
    type: "Authenticity layer",
    title: "Stables and Paddocks",
    text: "Stables, paddocks, vet, storage, and related support functions sit around the western and southern service edge of the plan.",
    client: "Craft, training, heritage, and real sporting culture.",
    action: "Walk from the pitch to the equestrian support zone.",
  },
  commercial: {
    type: "Revenue layer",
    title: "Commercial Block",
    text: "The commercial block is positioned on the eastern frontage, close to parking and the game park, giving the plan a visible mixed-use edge.",
    client: "Convenience, community energy, and investor confidence.",
    action: "Separate public, member, resident, and event access in the final journey.",
  },
  services: {
    type: "Estate operations",
    title: "Services and Back-of-House",
    text: "Mechanical/electrical services, service office, quarantine, storage, vet, and support areas are grouped away from the premium residential front.",
    client: "Operational confidence without interrupting the premium arrival sequence.",
    action: "Keep these visible for investor diligence but visually secondary for buyers.",
  },
  lagosRoad: {
    type: "Access and visibility",
    title: "Proposed Lagos Road",
    text: "The southern edge is marked as Proposed Lagos Road, creating the main arrival frontage for clubhouse, parking, and commercial access.",
    client: "Findability, arrival clarity, frontage value, and future commercial visibility.",
    action: "Use this as the main public arrival edge unless later source files contradict it.",
  },
};

const viewpoints = {
  polo: {
    type: "Walkable 3D simulation",
    title: "Polo Field",
    text: "You are standing on the central pitch. Villas wrap the long edges, the proposed lake sits north, the clubhouse sits south, and the stables/training field sit to the west.",
    position: [0, 1.8, 26],
    yaw: Math.PI,
    caption: "Standing on the polo field",
  },
  villas: {
    type: "3 bedroom villa simulation",
    title: "Premium Villa Row",
    text: "This villa row is built from the 3-bedroom villa intelligence: undercroft parking, raised living level, bedroom level above, terraces, exterior stair, and garden frontage.",
    position: [-84, 1.8, -54],
    yaw: -0.35,
    caption: "Approaching the 3-bedroom villa row",
    isVilla: true,
  },
  clubhouse: {
    type: "Hospitality simulation",
    title: "Clubhouse Frontage",
    text: "The clubhouse is positioned south of the pitch with terraces facing the field and arrival/parking behind it toward the Lagos Road frontage.",
    position: [0, 1.8, 112],
    yaw: Math.PI,
    caption: "At the clubhouse edge",
  },
  waterfront: {
    type: "Lake-edge simulation",
    title: "Proposed Lake",
    text: "The lake sits north of the field. From here buyers can read the relationship between water, villas, crescent road, and the field.",
    position: [0, 1.8, -104],
    yaw: 0,
    caption: "On the lake-edge promenade",
  },
  stables: {
    type: "Equestrian simulation",
    title: "Stables and Paddocks",
    text: "The equestrian support zone is placed at the western service edge near the training field, based on the 2D masterplan.",
    position: [-184, 1.8, 105],
    yaw: -1.05,
    caption: "Walking toward the stables",
  },
  training: {
    type: "Training field simulation",
    title: "Training Field",
    text: "The training field sits west of the main pitch, giving the estate a second sporting surface and operational depth.",
    position: [-198, 1.8, 10],
    yaw: -Math.PI / 2,
    caption: "On the training field",
  },
  commercial: {
    type: "Mixed-use simulation",
    title: "Commercial Block",
    text: "The commercial block sits on the eastern frontage, useful for investor visibility and day-to-day convenience.",
    position: [172, 1.8, 88],
    yaw: Math.PI / 2,
    caption: "At the commercial edge",
  },
  recreation: {
    type: "Family amenity simulation",
    title: "Game Park / Play Ground",
    text: "The recreation zone sits east of the pitch near paddocks and the commercial frontage.",
    position: [170, 1.8, -22],
    yaw: Math.PI / 2,
    caption: "At the family amenity zone",
  },
  services: {
    type: "Operations simulation",
    title: "Services",
    text: "Service and back-of-house functions sit toward the western/southwestern support edge.",
    position: [-172, 1.8, 126],
    yaw: -1.4,
    caption: "At the services edge",
  },
  lagosRoad: {
    type: "Arrival simulation",
    title: "Proposed Lagos Road",
    text: "The southern road frontage frames public arrival, clubhouse access, parking, and future commercial visibility.",
    position: [38, 1.8, 152],
    yaw: Math.PI,
    caption: "Arriving from Proposed Lagos Road",
  },
  villaExterior: {
    type: "3 bedroom villa simulation",
    title: "3 Bedroom Villa Approach",
    text: "The villa is massed as a raised three-level home: two-car undercroft below, living and study level above, then three bedrooms and family lounge on the upper level.",
    position: [-72, 1.7, -62],
    yaw: -0.55,
    caption: "Approaching the 3-bedroom villa",
    isVilla: true,
  },
  villaParking: {
    type: "3 bedroom villa simulation",
    title: "Undercroft Parking",
    text: "The arrival level reflects the plan: two-car parking, staff quarters, bath, store, stair lobby, ante room, WC, ramp access, and garden edge.",
    position: [-91, 1.45, -61],
    yaw: -0.22,
    caption: "Inside the undercroft arrival level",
    isVilla: true,
  },
  villaLiving: {
    type: "3 bedroom villa simulation",
    title: "Living Level",
    text: "This level represents the kitchen, living/dining, study, stair lobby, store, and terraces from the villa floor plan.",
    position: [-91, 5.1, -54],
    yaw: 0.02,
    caption: "On the living and terrace level",
    isVilla: true,
  },
  villaBedrooms: {
    type: "3 bedroom villa simulation",
    title: "Bedroom Level",
    text: "The upper level represents the master bedroom, bedroom 2, bedroom 3, bathrooms, walk-in closet, family lounge, and terrace.",
    position: [-91, 8.45, -50],
    yaw: 0.12,
    caption: "On the bedroom level",
    isVilla: true,
  },
};

const story = {
  type: document.querySelector("#zoneType"),
  title: document.querySelector("#zoneTitle"),
  text: document.querySelector("#zoneText"),
  client: document.querySelector("#zoneClient"),
  action: document.querySelector("#zoneAction"),
};

const stage = document.querySelector("#virtualStage");
const viewport = document.querySelector("#threeViewport");
const virtualType = document.querySelector("#virtualType");
const virtualTitle = document.querySelector("#virtualTitle");
const virtualText = document.querySelector("#virtualText");
const closeStage = document.querySelector("#closeStage");
const villaModule = document.querySelector("#villaModule");
const sceneCaption = document.querySelector("#sceneCaption");
const enterPrompt = document.querySelector("#enterPrompt");

let THREE;
let scene;
let camera;
let renderer;
let clock;
let estateReady = false;
let yaw = Math.PI;
let pitch = 0;
let dragging = false;
let lastPointer = { x: 0, y: 0 };
const activeKeys = new Set();
const bounds = { minX: -230, maxX: 215, minZ: -145, maxZ: 170 };

document.querySelectorAll(".zone").forEach((button) => {
  button.addEventListener("click", () => {
    selectZone(button);
    openVirtual(button.dataset.zone);
  });
  button.addEventListener("mouseenter", () => selectZone(button));
});

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => openVirtual(button.dataset.view));
});

document.querySelectorAll("[data-villa-view]").forEach((button) => {
  button.addEventListener("click", () => openVirtual(button.dataset.villaView));
});

document.querySelectorAll("[data-move]").forEach((button) => {
  button.addEventListener("click", () => nudge(button.dataset.move));
});

closeStage.addEventListener("click", closeVirtual);

document.addEventListener("keydown", (event) => {
  if (!stage.classList.contains("open")) return;
  if (event.key === "Escape") closeVirtual();
  activeKeys.add(event.key.toLowerCase());
});

document.addEventListener("keyup", (event) => activeKeys.delete(event.key.toLowerCase()));

viewport.addEventListener("pointerdown", (event) => {
  dragging = true;
  lastPointer = { x: event.clientX, y: event.clientY };
  viewport.setPointerCapture(event.pointerId);
  enterPrompt.textContent = "Drag to look. WASD or arrows to walk.";
});

viewport.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  const dx = event.clientX - lastPointer.x;
  const dy = event.clientY - lastPointer.y;
  lastPointer = { x: event.clientX, y: event.clientY };
  yaw -= dx * 0.004;
  pitch = clamp(pitch - dy * 0.003, -0.75, 0.55);
});

viewport.addEventListener("pointerup", (event) => {
  dragging = false;
  viewport.releasePointerCapture(event.pointerId);
});

function selectZone(button) {
  const zone = zones[button.dataset.zone];
  if (!zone) return;

  document.querySelectorAll(".zone").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");

  story.type.textContent = zone.type;
  story.title.textContent = zone.title;
  story.text.textContent = zone.text;
  story.client.textContent = zone.client;
  story.action.textContent = zone.action;
}

async function openVirtual(key) {
  await ensureEstate();
  const view = viewpoints[key] || viewpoints.polo;

  virtualType.textContent = view.type;
  virtualTitle.textContent = view.title;
  virtualText.textContent = view.text;
  sceneCaption.textContent = view.caption;
  villaModule.hidden = !view.isVilla;

  camera.position.set(...view.position);
  yaw = view.yaw;
  pitch = 0;
  updateCameraRotation();

  document.querySelectorAll(".view-tabs button").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.view === key || (view.isVilla && button.dataset.view === "villas"),
    );
  });

  document.querySelectorAll(".villa-tabs button").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.villaView === key || (key === "villas" && button.dataset.villaView === "villaExterior"),
    );
  });

  stage.classList.add("open");
  stage.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  resizeThree();
}

function closeVirtual() {
  stage.classList.remove("open");
  stage.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

async function ensureEstate() {
  if (estateReady) return;
  THREE = await import("https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js");
  clock = new THREE.Clock();
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x9ac5e1);
  scene.fog = new THREE.Fog(0x9ac5e1, 120, 520);

  camera = new THREE.PerspectiveCamera(68, 1, 0.1, 900);
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  viewport.prepend(renderer.domElement);

  buildEstate();
  window.addEventListener("resize", resizeThree);
  resizeThree();
  estateReady = true;
  animateEstate();
}

function buildEstate() {
  scene.add(new THREE.HemisphereLight(0xd8f0ff, 0x365035, 1.8));
  const sun = new THREE.DirectionalLight(0xfff0ce, 2.2);
  sun.position.set(-80, 130, 70);
  sun.castShadow = true;
  sun.shadow.camera.left = -240;
  sun.shadow.camera.right = 240;
  sun.shadow.camera.top = 190;
  sun.shadow.camera.bottom = -190;
  sun.shadow.mapSize.set(2048, 2048);
  scene.add(sun);

  addGround();
  addPoloField();
  addLake();
  addRoads();
  addClubhouse();
  addVillaRows();
  addDetailedVilla();
  addTrainingField();
  addStables();
  addCommercialAndRecreation();
  addTrees();
  addLabels();
}

function addGround() {
  const ground = box("estate-ground", [470, 0.12, 350], [0, -0.08, 18], mat(0x2f6b3f, 0.95, 0.8));
  ground.receiveShadow = true;
  scene.add(ground);
}

function addPoloField() {
  scene.add(box("main-polo-field", [250, 0.08, 128], [22, 0.02, 16], mat(0x7fa957, 0.75, 0.9)));
  scene.add(box("north-safety-zone", [264, 0.09, 20], [22, 0.04, -58], mat(0x9a6d3d, 0.8, 0.8)));
  scene.add(box("south-safety-zone", [264, 0.09, 20], [22, 0.04, 90], mat(0x9a6d3d, 0.8, 0.8)));
  scene.add(box("west-safety-zone", [18, 0.1, 144], [-120, 0.05, 16], mat(0x9a6d3d, 0.8, 0.8)));
  scene.add(box("east-safety-zone", [18, 0.1, 144], [164, 0.05, 16], mat(0x9a6d3d, 0.8, 0.8)));

  for (const x of [-80, -55, -30, 74, 99, 124]) {
    scene.add(box("yard-line", [0.45, 0.1, 118], [x, 0.1, 16], mat(0xf3f0d8, 0.42, 0.4)));
  }
  scene.add(box("center-line", [0.7, 0.12, 128], [22, 0.11, 16], mat(0xf3f0d8, 0.5, 0.4)));
  scene.add(box("field-edge-n", [250, 0.12, 0.8], [22, 0.12, -48], mat(0xf3f0d8, 0.45, 0.4)));
  scene.add(box("field-edge-s", [250, 0.12, 0.8], [22, 0.12, 80], mat(0xf3f0d8, 0.45, 0.4)));
  scene.add(box("field-edge-w", [0.8, 0.12, 128], [-103, 0.12, 16], mat(0xf3f0d8, 0.45, 0.4)));
  scene.add(box("field-edge-e", [0.8, 0.12, 128], [147, 0.12, 16], mat(0xf3f0d8, 0.45, 0.4)));
}

function addLake() {
  const lake = box("proposed-lake", [136, 0.05, 18], [20, 0.05, -84], mat(0x227b91, 0.45, 0.1));
  scene.add(lake);
  for (let i = 0; i < 9; i += 1) {
    scene.add(box("lake-ripple", [126, 0.03, 0.32], [20, 0.1, -90 + i * 1.7], mat(0xbde7f0, 0.45, 0.25)));
  }
}

function addRoads() {
  const roadMat = mat(0x242826, 0.7, 0.7);
  scene.add(box("lagos-road", [420, 0.08, 14], [18, 0.06, 153], roadMat));
  scene.add(box("west-spine-road", [14, 0.08, 250], [-145, 0.06, 20], roadMat));
  scene.add(box("east-spine-road", [14, 0.08, 235], [187, 0.06, 18], roadMat));
  scene.add(box("north-crescent-road", [244, 0.08, 10], [22, 0.06, -112], roadMat));
  scene.add(box("clubhouse-parking", [76, 0.08, 18], [24, 0.07, 125], roadMat));
  for (let x = -175; x <= 185; x += 18) {
    scene.add(box("road-marking", [5, 0.09, 0.32], [x, 0.11, 153], mat(0xf6f0d2, 0.55, 0.4)));
  }
}

function addClubhouse() {
  const group = new THREE.Group();
  group.name = "clubhouse";
  group.position.set(20, 0, 116);
  group.add(box("clubhouse-base", [74, 5, 16], [0, 2.5, 0], mat(0xf0e6d4, 0.65, 0.35)));
  group.add(box("clubhouse-level-2", [86, 4, 16], [0, 7.1, -1], mat(0xf7f0e6, 0.6, 0.3)));
  group.add(box("clubhouse-glass-front", [68, 3.8, 0.5], [0, 7, -9.1], mat(0x27556d, 0.28, 0.05, true)));
  group.add(box("clubhouse-terrace", [82, 0.5, 9], [0, 5.1, -11], mat(0x9b6a40, 0.55, 0.45)));
  group.add(box("clubhouse-roof", [94, 1.2, 22], [0, 10, -1], mat(0xffffff, 0.52, 0.35)));
  for (let x = -34; x <= 34; x += 8) {
    group.add(box("clubhouse-column", [0.7, 5.3, 0.7], [x, 2.9, -8.7], mat(0xe8dccb, 0.5, 0.55)));
  }
  scene.add(group);
}

function addVillaRows() {
  const placements = [
    [-84, -56, 0.34],
    [-58, -73, 0.12],
    [-32, -78, 0],
    [0, -79, 0],
    [34, -79, 0],
    [68, -75, -0.12],
    [98, -62, -0.32],
    [-118, -22, Math.PI / 2],
    [-118, 22, Math.PI / 2],
    [-113, 65, Math.PI / 2],
    [158, -28, -Math.PI / 2],
    [158, 17, -Math.PI / 2],
    [151, 58, -Math.PI / 2],
    [-78, 96, Math.PI],
    [-35, 101, Math.PI],
    [82, 98, Math.PI],
    [122, 94, Math.PI],
  ];

  for (const [x, z, rotation] of placements) {
    const villa = createVillaShell(0.62);
    villa.position.set(x, 0, z);
    villa.rotation.y = rotation;
    scene.add(villa);
  }
}

function addDetailedVilla() {
  const villa = createDetailedVilla();
  villa.position.set(-92, 0, -62);
  villa.rotation.y = 0.12;
  scene.add(villa);
}

function createVillaShell(scale = 1) {
  const group = new THREE.Group();
  group.name = "3-bedroom-villa-shell";
  group.scale.setScalar(scale);
  const wallMat = mat(0xf5f1e9, 0.56, 0.34);
  const timber = mat(0xb98a54, 0.55, 0.5);
  const glass = mat(0x91bed0, 0.24, 0.04, true);
  group.add(box("undercroft-slab", [18, 2.8, 12], [0, 1.4, 0], wallMat));
  group.add(box("living-volume", [20, 3.4, 13], [0, 4.8, 0], wallMat));
  group.add(box("bedroom-volume", [21, 3.2, 13.5], [0, 8.3, 0], wallMat));
  group.add(box("flat-roof-with-overhang", [23, 0.8, 15.5], [0, 10.25, 0], mat(0xe7e4dd, 0.5, 0.42)));
  group.add(box("timber-panel", [3, 5.8, 0.45], [-4.2, 6.5, -7], timber));
  group.add(box("glass-balcony", [14, 1.2, 0.35], [1.2, 5.7, -7.9], glass));
  group.add(box("upper-glass", [13, 1.5, 0.35], [1, 8.3, -7.2], glass));
  group.add(box("parking-shadow", [13, 1.9, 0.45], [1, 1.85, -6.2], mat(0x1f2524, 0.7, 0.8)));
  return group;
}

function createDetailedVilla() {
  const group = new THREE.Group();
  group.name = "detailed-3-bedroom-villa";
  const wallMat = mat(0xf7f4ef, 0.58, 0.32);
  const concrete = mat(0xaaa69d, 0.55, 0.7);
  const timber = mat(0xb8844f, 0.52, 0.48);
  const dark = mat(0x293033, 0.5, 0.6);
  const glass = mat(0x9ed0df, 0.25, 0.05, true);

  group.add(box("undercroft-slab", [24, 0.7, 17], [0, 0.35, 0], concrete));
  group.add(box("left-column", [1, 3, 1], [-9, 1.9, -6], wallMat));
  group.add(box("right-column", [1, 3, 1], [9, 1.9, -6], wallMat));
  group.add(box("service-core", [7, 3, 7], [6.5, 1.9, 4.4], wallMat));
  group.add(box("staff-room", [6, 2.8, 5], [-7, 1.8, 4.5], wallMat));
  group.add(car("car-left", [-4.5, 1.1, -5.2]));
  group.add(car("car-right", [4.8, 1.1, -5.2]));

  group.add(box("living-floor", [25, 0.45, 18], [0, 3.45, 0], concrete));
  group.add(box("living-volume", [24, 3.2, 16], [0, 5.05, 0], wallMat));
  group.add(box("kitchen-zone", [7, 0.08, 7], [-4.5, 3.75, -1.4], mat(0xd4c5aa, 0.45, 0.7)));
  group.add(box("study-zone", [6, 0.08, 6], [7.2, 3.76, -3], mat(0xc8d2d1, 0.45, 0.7)));
  group.add(box("living-dining-zone", [11, 0.08, 7], [4.6, 3.77, 4.2], mat(0xd8d0c1, 0.45, 0.7)));
  group.add(box("front-terrace", [15, 0.35, 3.2], [-3.5, 3.85, -9.8], concrete));
  group.add(box("terrace-glass", [15, 1.1, 0.32], [-3.5, 4.55, -11.4], glass));
  group.add(box("side-terrace", [5, 0.32, 7], [-11, 3.85, 1.8], concrete));

  group.add(box("bedroom-floor", [25.5, 0.45, 18.5], [0, 6.78, 0], concrete));
  group.add(box("bedroom-volume", [24.5, 3.1, 16.4], [0, 8.35, 0], wallMat));
  group.add(box("master-bedroom", [9, 0.1, 6], [-5.8, 6.98, -3.8], mat(0xd9d2c7, 0.42, 0.8)));
  group.add(box("bedroom-2", [6, 0.1, 5.4], [7.4, 6.99, -4.3], mat(0xd9d2c7, 0.42, 0.8)));
  group.add(box("bedroom-3", [6, 0.1, 5.4], [-5.8, 7, 4.1], mat(0xd9d2c7, 0.42, 0.8)));
  group.add(box("family-lounge", [8, 0.1, 6], [6.5, 7.01, 4.1], mat(0xcfc6b8, 0.42, 0.8)));
  group.add(box("upper-balcony-glass", [14, 1.1, 0.32], [1, 8.2, -9.7], glass));

  group.add(box("front-windows", [16, 1.8, 0.35], [1.5, 8.6, -8.38], glass));
  group.add(box("living-windows", [16, 1.8, 0.35], [1.2, 5.2, -8.18], glass));
  group.add(box("timber-cladding-left", [2.8, 5.5, 0.38], [-7.8, 6.6, -8.45], timber));
  group.add(box("timber-cladding-right", [2.8, 5.5, 0.38], [7.8, 6.6, -8.45], timber));
  group.add(box("dark-side-panel", [0.38, 5.2, 8.4], [12.38, 6.5, -1.8], dark));
  group.add(box("roof-overhang", [29, 0.7, 21], [0, 10.35, 0], mat(0xebe8e1, 0.5, 0.4)));
  addVillaStairs(group);
  return group;
}

function addVillaStairs(group) {
  const stairMat = mat(0xd9d4c8, 0.55, 0.72);
  for (let i = 0; i < 12; i += 1) {
    group.add(box("garden-stair", [5.4, 0.22, 0.8], [14.8, 0.25 + i * 0.26, 8.2 - i * 0.75], stairMat));
  }
  group.add(box("garden-strip", [3, 0.12, 18], [16.8, 0.08, 1], mat(0x556b2f, 0.75, 0.9)));
}

function car(name, position) {
  const group = new THREE.Group();
  group.name = name;
  group.position.set(...position);
  group.add(box("car-body", [4.4, 0.75, 2], [0, 0.35, 0], mat(0x2e3436, 0.42, 0.2)));
  group.add(box("car-cabin", [2.2, 0.65, 1.65], [0.2, 0.95, 0], mat(0x111719, 0.3, 0.1)));
  group.add(box("headlight-left", [0.12, 0.22, 0.42], [2.25, 0.38, -0.55], mat(0xfff4b0, 0.25, 0.05)));
  group.add(box("headlight-right", [0.12, 0.22, 0.42], [2.25, 0.38, 0.55], mat(0xfff4b0, 0.25, 0.05)));
  return group;
}

function addTrainingField() {
  scene.add(box("training-field", [106, 0.08, 116], [-198, 0.04, 6], mat(0x769a51, 0.75, 0.9)));
  scene.add(box("training-safety", [118, 0.07, 128], [-198, 0.02, 6], mat(0x8a653d, 0.78, 0.85)));
  for (const z of [-42, 6, 54]) {
    scene.add(box("training-line", [96, 0.09, 0.45], [-198, 0.12, z], mat(0xf3f0d8, 0.45, 0.4)));
  }
}

function addStables() {
  const group = new THREE.Group();
  group.name = "stables";
  group.position.set(-182, 0, 115);
  group.add(box("stable-brick-base", [54, 4, 18], [0, 2, 0], mat(0xb24d33, 0.62, 0.62)));
  group.add(box("stable-open-bay", [42, 3.2, 0.5], [0, 2.2, -9.2], mat(0x44281b, 0.55, 0.7)));
  group.add(box("stable-roof", [62, 1.2, 24], [0, 5.1, 0], mat(0x9b4f2f, 0.55, 0.7)));
  for (let x = -22; x <= 22; x += 7) {
    group.add(box("stable-post", [0.55, 3.5, 0.55], [x, 2.1, -9.5], mat(0x75401f, 0.6, 0.75)));
  }
  scene.add(group);
  scene.add(box("paddock", [44, 0.04, 36], [-189, 0.08, -96], mat(0x6f8e48, 0.8, 0.9)));
}

function addCommercialAndRecreation() {
  scene.add(box("commercial-block", [28, 7.5, 22], [188, 3.75, 97], mat(0xd7d0c4, 0.52, 0.35)));
  scene.add(box("commercial-glass", [0.5, 5.4, 16], [173.8, 4, 97], mat(0x315d6b, 0.25, 0.08, true)));
  scene.add(box("game-park", [42, 0.08, 42], [181, 0.07, -32], mat(0x60884a, 0.72, 0.8)));
  for (let i = 0; i < 5; i += 1) {
    scene.add(box("play-structure", [4, 2 + i * 0.2, 4], [166 + i * 7, 1 + i * 0.1, -35 + (i % 2) * 9], mat(0xcaa45b, 0.48, 0.5)));
  }
}

function addTrees() {
  for (let x = -210; x <= 210; x += 22) {
    addTree(x, -136, 1.1);
    addTree(x, 166, 1.05);
  }
  for (let z = -120; z <= 142; z += 22) {
    addTree(-224, z, 1);
    addTree(212, z, 1);
  }
  for (const [x, z] of [[-120, -76], [-106, -8], [-106, 75], [154, -76], [172, 78], [-86, 112]]) {
    addTree(x, z, 1.25);
  }
}

function addTree(x, z, scale = 1) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.scale.setScalar(scale);
  group.add(box("tree-trunk", [0.8, 4, 0.8], [0, 2, 0], mat(0x79512d, 0.7, 0.9)));
  const canopy = new THREE.Mesh(new THREE.SphereGeometry(3.6, 10, 8), mat(0x2f7a42, 0.8, 0.85));
  canopy.position.set(0, 6, 0);
  canopy.castShadow = true;
  group.add(canopy);
  scene.add(group);
}

function addLabels() {
  addSign("PROPOSED LAKE", [20, 2.1, -101], 0);
  addSign("CLUBHOUSE", [20, 2.1, 98], Math.PI);
  addSign("3 BEDROOM VILLAS", [-86, 2.1, -78], 0.12);
  addSign("STABLES", [-182, 2.1, 99], Math.PI);
}

function addSign(text, position, rotation) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 128;
  const context = canvas.getContext("2d");
  context.fillStyle = "rgba(7, 18, 15, 0.82)";
  context.fillRect(0, 0, 512, 128);
  context.strokeStyle = "#caa45b";
  context.lineWidth = 8;
  context.strokeRect(6, 6, 500, 116);
  context.fillStyle = "#f7f2e7";
  context.font = "bold 42px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, 256, 64);
  const texture = new THREE.CanvasTexture(canvas);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(14, 3.5), new THREE.MeshBasicMaterial({ map: texture, transparent: true }));
  sign.position.set(...position);
  sign.rotation.y = rotation;
  scene.add(sign);
}

function box(name, size, position, material) {
  const geometry = new THREE.BoxGeometry(size[0], size[1], size[2]);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name;
  mesh.position.set(position[0], position[1], position[2]);
  mesh.castShadow = size[1] > 0.2;
  mesh.receiveShadow = true;
  return mesh;
}

function mat(color, roughness = 0.65, metalness = 0.4, transparent = false) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness,
    transparent,
    opacity: transparent ? 0.56 : 1,
  });
}

function nudge(direction) {
  if (!camera) return;
  const speed = 5;
  const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
  const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
  if (direction === "forward") camera.position.addScaledVector(forward, speed);
  if (direction === "back") camera.position.addScaledVector(forward, -speed);
  if (direction === "right") camera.position.addScaledVector(right, speed);
  if (direction === "left") camera.position.addScaledVector(right, -speed);
  clampCamera();
}

function animateEstate() {
  requestAnimationFrame(animateEstate);
  const delta = Math.min(clock.getDelta(), 0.05);
  updateWalk(delta);
  updateCameraRotation();
  renderer.render(scene, camera);
}

function updateWalk(delta) {
  if (!stage.classList.contains("open")) return;
  const speed = activeKeys.has("shift") ? 28 : 16;
  const move = new THREE.Vector3();
  const forward = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw));
  const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));

  if (activeKeys.has("w") || activeKeys.has("arrowup")) move.add(forward);
  if (activeKeys.has("s") || activeKeys.has("arrowdown")) move.addScaledVector(forward, -1);
  if (activeKeys.has("d") || activeKeys.has("arrowright")) move.add(right);
  if (activeKeys.has("a") || activeKeys.has("arrowleft")) move.addScaledVector(right, -1);

  if (move.lengthSq() > 0) {
    move.normalize().multiplyScalar(speed * delta);
    camera.position.add(move);
    clampCamera();
  }
}

function updateCameraRotation() {
  if (!camera) return;
  camera.rotation.order = "YXZ";
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;
}

function clampCamera() {
  camera.position.x = clamp(camera.position.x, bounds.minX, bounds.maxX);
  camera.position.z = clamp(camera.position.z, bounds.minZ, bounds.maxZ);
  camera.position.y = clamp(camera.position.y, 1.2, 9.2);
}

function resizeThree() {
  if (!renderer || !camera) return;
  const rect = viewport.getBoundingClientRect();
  const width = Math.max(320, rect.width);
  const height = Math.max(320, rect.height);
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

const canvas = document.querySelector("#estateScene");
const ctx = canvas.getContext("2d");
let width = 0;
let height = 0;
let tick = 0;

function resize() {
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawEstate() {
  tick += 0.004;

  const sky = ctx.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, "#173c39");
  sky.addColorStop(0.45, "#10251f");
  sky.addColorStop(1, "#08110e");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  drawLake();
  drawGroundBands();
  drawPoloField();
  drawApproachLights();

  requestAnimationFrame(drawEstate);
}

function drawLake() {
  const wave = Math.sin(tick * 12) * 10;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(width * 0.18, height * 0.1 + wave, width * 0.36, height * 0.11, width * 0.52, 0);
  ctx.lineTo(width, 0);
  ctx.lineTo(width, height * 0.2);
  ctx.bezierCurveTo(width * 0.64, height * 0.22, width * 0.32, height * 0.24 + wave, 0, height * 0.18);
  ctx.closePath();
  ctx.fillStyle = "rgba(45, 131, 146, 0.64)";
  ctx.fill();

  for (let i = 0; i < 9; i += 1) {
    ctx.strokeStyle = `rgba(247, 242, 231, ${0.04 + i * 0.006})`;
    ctx.beginPath();
    const y = height * (0.055 + i * 0.018) + Math.sin(tick * 30 + i) * 5;
    ctx.moveTo(width * 0.06, y);
    ctx.bezierCurveTo(width * 0.32, y - 18, width * 0.62, y + 18, width * 0.94, y);
    ctx.stroke();
  }
}

function drawGroundBands() {
  ctx.fillStyle = "rgba(18, 52, 40, 0.86)";
  ctx.beginPath();
  ctx.moveTo(0, height * 0.16);
  ctx.lineTo(width, height * 0.22);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "rgba(202, 164, 91, 0.12)";
  for (let i = 0; i < 18; i += 1) {
    const x = (i / 17) * width;
    ctx.beginPath();
    ctx.moveTo(x, height * 0.24);
    ctx.lineTo(width * 0.5 + (x - width * 0.5) * 1.8, height);
    ctx.stroke();
  }
}

function drawPoloField() {
  const fieldWidth = Math.min(width * 0.36, 440);
  const fieldHeight = Math.min(height * 0.54, 540);
  const x = width * 0.5 - fieldWidth * 0.5;
  const y = height * 0.34;

  ctx.save();
  ctx.translate(width * 0.5, y + fieldHeight * 0.5);
  ctx.rotate(-0.03);
  ctx.translate(-width * 0.5, -(y + fieldHeight * 0.5));

  ctx.fillStyle = "rgba(48, 129, 72, 0.72)";
  ctx.fillRect(x, y, fieldWidth, fieldHeight);
  ctx.strokeStyle = "rgba(247, 242, 231, 0.52)";
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, fieldWidth, fieldHeight);

  ctx.strokeStyle = "rgba(247, 242, 231, 0.22)";
  for (let i = 1; i < 7; i += 1) {
    const row = y + (fieldHeight / 7) * i;
    ctx.beginPath();
    ctx.moveTo(x, row);
    ctx.lineTo(x + fieldWidth, row);
    ctx.stroke();
  }

  ctx.restore();
}

function drawApproachLights() {
  for (let i = 0; i < 34; i += 1) {
    const depth = i / 34;
    const spread = width * (0.06 + depth * 0.58);
    const x1 = width * 0.5 - spread;
    const x2 = width * 0.5 + spread;
    const y = height * (0.42 + depth * 0.55);
    const glow = 0.22 - depth * 0.12 + Math.sin(tick * 24 + i) * 0.03;

    ctx.fillStyle = `rgba(202, 164, 91, ${Math.max(0.04, glow)})`;
    ctx.beginPath();
    ctx.arc(x1, y, 2.4 + depth * 2.4, 0, Math.PI * 2);
    ctx.arc(x2, y, 2.4 + depth * 2.4, 0, Math.PI * 2);
    ctx.fill();
  }
}

window.addEventListener("resize", resize);
resize();
drawEstate();
