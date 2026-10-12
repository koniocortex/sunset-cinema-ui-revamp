/* Sunset Cinema Club — front-end behaviour
   Kept intentionally minimal; swap for your framework as you build. */

/* ---- Placeholder photography (assets/images/photos) --------------- */
var SCC_PHOTOS = [
  'assets/images/photos/screening-1.jpg',
  'assets/images/photos/screening-2.jpg',
  'assets/images/photos/screening-3.jpg'
];
/* Portrait (2:3) film posters for the detail page. Placeholder crops —
   give an event its own `poster` path to use the real one-sheet. */
var SCC_POSTERS = [
  'assets/images/posters/poster-1.jpg',
  'assets/images/posters/poster-2.jpg',
  'assets/images/posters/poster-3.jpg'
];

/* ---- Event data: shared by home, events listing, detail & cart ----- */
/* tag = event type shown on cards; type = filter key on events.html.
   sessions (optional) = multi-show event → "Buy" opens the sessions popup. */
var SCC_EVENTS = [
  {
    id: 'la-la-land', title: 'La La Land', tag: 'Candlelight Cinema', type: 'candlelight', photo: 0,
    genres: ['Romance', 'Musical', 'Drama'],
    cast: 'Ryan Gosling, Emma Stone, John Legend, Rosemarie DeWitt, J.K. Simmons',
    synopsis: 'An aspiring actress and a dedicated jazz musician fall in love while chasing their dreams across Los Angeles. Damien Chazelle’s Oscar-winning musical romance, projected under the stars with candlelit seating and a curated cocktail menu.',
    weekday: 'Saturday', day: '6', month: 'September', year: '2026', dateShort: 'Sat, 6 Sep',
    time: '7:30 PM', doors: '7:00 PM',
    venueName: 'Taj Lands End', venueArea: 'Bandra, Mumbai',
    price: 899,
    sessions: {
      title: 'Sunset Cinema Weekend',
      dates: 'Sat, 6 September – Sun, 7 September 2026 · 4:30 PM onwards',
      list: [
        { key: 'sat-1630', label: 'Sat 6 Sep, 4:30 PM Onwards', id: 'la-la-land' },
        { key: 'sat-1930', label: 'Sat 6 Sep, 7:30 PM Onwards', id: 'dil-chahta-hai' },
        { key: 'sun-1630', label: 'Sun 7 Sep, 4:30 PM Onwards', id: 'la-la-land' },
        { key: 'sun-1930', label: 'Sun 7 Sep, 7:30 PM Onwards', id: 'dil-chahta-hai' }
      ]
    }
  },
  {
    id: 'grand-budapest-hotel', title: 'The Grand Budapest Hotel', tag: 'Gourmet Cinema', type: 'gourmet', photo: 1,
    genres: ['Comedy', 'Adventure'],
    cast: 'Ralph Fiennes, Tony Revolori, Saoirse Ronan, Adrien Brody, Willem Dafoe',
    synopsis: 'Wes Anderson’s whimsical caper follows legendary concierge Gustave H. and his protégé through a decadent European hotel. Paired with a chef-curated tasting menu inspired by the film’s pastel world.',
    weekday: 'Sunday', day: '7', month: 'September', year: '2026', dateShort: 'Sun, 7 Sep',
    time: '8:00 PM', doors: '7:00 PM',
    venueName: 'Hilton', venueArea: 'Andheri East, Mumbai',
    price: 1199
  },
  {
    id: 'interstellar-inception', title: 'Interstellar + Inception', tag: 'Drive-in', type: 'drive-in', photo: 2,
    genres: ['Sci-Fi', 'Double Bill'],
    cast: 'Matthew McConaughey, Anne Hathaway, Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
    synopsis: 'A back-to-back double bill of two Christopher Nolan epics — watch from the comfort of your own car on Monalisa Lawn’s open-air drive-in screen, with in-car dining service.',
    weekday: 'Friday', day: '12', month: 'September', year: '2026', dateShort: 'Fri, 12 Sep',
    time: '7:00 PM', doors: '6:00 PM',
    venueName: 'Monalisa Lawn', venueArea: 'Thane',
    price: 799
  },
  {
    id: 'in-the-mood-for-love', title: 'In the Mood for Love', tag: 'Open Air Theater', type: 'open-air', photo: 0,
    genres: ['Romance', 'World Cinema'],
    cast: 'Tony Leung Chiu-wai, Maggie Cheung, Rebecca Pan, Lai Chen',
    synopsis: 'Wong Kar-wai’s aching, beautifully restrained romance about two neighbours drawn together by their spouses’ infidelity. An intimate open-air screening for cinephiles.',
    weekday: 'Saturday', day: '13', month: 'September', year: '2026', dateShort: 'Sat, 13 Sep',
    time: '8:30 PM', doors: '7:30 PM',
    venueName: 'Butterfly High', venueArea: 'Oshiwara, Mumbai',
    price: 749
  },
  {
    id: 'spirited-away', title: 'Spirited Away', tag: 'Open Air Theater', type: 'open-air', photo: 1,
    genres: ['Animation', 'Family'],
    cast: 'Rumi Hiiragi, Miyu Irino, Mari Natsuki (English dub: Daveigh Chase, Jason Marsden)',
    synopsis: 'Studio Ghibli’s beloved masterpiece about a young girl lost in a spirit world. An early-evening family screening with kid-friendly seating.',
    weekday: 'Sunday', day: '14', month: 'September', year: '2026', dateShort: 'Sun, 14 Sep',
    time: '6:00 PM', doors: '5:15 PM',
    venueName: 'Nexus Seawoods', venueArea: 'Navi Mumbai',
    price: 699
  },
  {
    id: 'dil-chahta-hai', title: 'Dil Chahta Hai', tag: 'Candlelight Cinema', type: 'candlelight', photo: 2,
    genres: ['Bollywood', 'Comedy', 'Drama'],
    cast: 'Aamir Khan, Saif Ali Khan, Akshaye Khanna, Preity Zinta, Dimple Kapadia',
    synopsis: 'Farhan Akhtar’s coming-of-age classic about friendship, love and self-discovery — a candlelit evening celebrating one of Bollywood’s most iconic ensemble films.',
    weekday: 'Friday', day: '19', month: 'September', year: '2026', dateShort: 'Fri, 19 Sep',
    time: '7:30 PM', doors: '7:00 PM',
    venueName: 'Of10', venueArea: 'Powai, Mumbai',
    price: 899
  },
  {
    id: 'whiplash', title: 'Whiplash', tag: 'Gourmet Cinema', type: 'gourmet', photo: 0,
    genres: ['Drama', 'Music'],
    cast: 'Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist',
    synopsis: 'A relentless music student and an abusive instructor push each other to the edge in Damien Chazelle’s electrifying drama. Paired with a chef-curated tasting menu.',
    weekday: 'Saturday', day: '20', month: 'September', year: '2026', dateShort: 'Sat, 20 Sep',
    time: '8:00 PM', doors: '7:00 PM',
    venueName: 'Kohinoor Continental', venueArea: 'Andheri East, Mumbai',
    price: 1099
  },
  {
    id: 'amelie', title: 'Amélie', tag: 'Open Air Theater', type: 'open-air', photo: 1,
    genres: ['Romance', 'Comedy', 'World Cinema'],
    cast: 'Audrey Tautou, Mathieu Kassovitz, Rufus, Yolande Moreau',
    synopsis: 'Jean-Pierre Jeunet’s whimsical Parisian fable about a shy waitress who sets out to change the lives of those around her — screened under the open sky.',
    weekday: 'Sunday', day: '21', month: 'September', year: '2026', dateShort: 'Sun, 21 Sep',
    time: '8:00 PM', doors: '7:00 PM',
    venueName: 'The Club Mumbai', venueArea: 'Andheri West, Mumbai',
    price: 799
  },
  {
    id: 'eeaao', title: 'Everything Everywhere All at Once', tag: 'Candlelight Cinema', type: 'candlelight', photo: 2,
    genres: ['Sci-Fi', 'Comedy', 'Action'],
    cast: 'Michelle Yeoh, Ke Huy Quan, Stephanie Hsu, Jamie Lee Curtis',
    synopsis: 'A laundromat owner discovers she must connect with parallel-universe versions of herself in this genre-bending, Oscar-sweeping multiverse adventure.',
    weekday: 'Saturday', day: '27', month: 'September', year: '2026', dateShort: 'Sat, 27 Sep',
    time: '7:30 PM', doors: '7:00 PM',
    venueName: 'Taj Lands End', venueArea: 'Bandra, Mumbai',
    price: 1299
  },
  {
    id: 'la-la-land-bandra-rooftop', title: 'La La Land', tag: 'Candlelight Cinema', type: 'candlelight', photo: 0,
    genres: ['Romance', 'Musical', 'Drama'],
    cast: 'Ryan Gosling, Emma Stone, John Legend, Rosemarie DeWitt, J.K. Simmons',
    synopsis: 'An aspiring actress and a dedicated jazz musician fall in love while chasing their dreams across Los Angeles. Damien Chazelle’s Oscar-winning musical romance, projected under the stars with candlelit seating and a curated cocktail menu.',
    weekday: 'Sunday', day: '30', month: 'August', year: '2026', dateShort: 'Sun, 30 Aug',
    time: '7:30 PM', doors: '7:00 PM',
    venueName: 'Rooftop, Bandra', venueArea: 'Mumbai',
    price: 899
  },
  {
    id: 'grand-budapest-hotel-indiranagar', title: 'The Grand Budapest Hotel', tag: 'Gourmet Cinema', type: 'gourmet', photo: 1,
    genres: ['Comedy', 'Adventure'],
    cast: 'Ralph Fiennes, Tony Revolori, Saoirse Ronan, Adrien Brody, Willem Dafoe',
    synopsis: 'Wes Anderson’s whimsical caper follows legendary concierge Gustave H. and his protégé through a decadent European hotel. Paired with a chef-curated tasting menu inspired by the film’s pastel world.',
    weekday: 'Friday', day: '5', month: 'September', year: '2026', dateShort: 'Fri, 5 Sep',
    time: '8:00 PM', doors: '7:00 PM',
    venueName: 'Microbrewery, Indiranagar', venueArea: 'Bangalore',
    price: 1199
  },
  {
    id: 'interstellar-inception-gachibowli', title: 'Interstellar + Inception', tag: 'Drive-in', type: 'drive-in', photo: 2,
    genres: ['Sci-Fi', 'Double Bill'],
    cast: 'Matthew McConaughey, Anne Hathaway, Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
    synopsis: 'A back-to-back double bill of two Christopher Nolan epics — watch from the comfort of your own car on an open-air drive-in screen, with in-car dining service.',
    weekday: 'Saturday', day: '13', month: 'September', year: '2026', dateShort: 'Sat, 13 Sep',
    time: '7:00 PM', doors: '6:00 PM',
    venueName: 'Amphitheatre, Gachibowli', venueArea: 'Hyderabad',
    price: 799
  }
];

/* Screenings for single-film events with more than one show (demo data).
   Each becomes a `sessions` block, so "Buy" asks for the exact timeslot.
   Events left out here have one show and go straight to the cart. */
(function () {
  var SHOWS = {
    'grand-budapest-hotel': ['Sat 6 Sep', '8:00 PM', 'Sun 7 Sep', '5:00 PM', 'Sun 7 Sep', '8:00 PM'],
    'in-the-mood-for-love': ['Sat 13 Sep', '6:00 PM', 'Sat 13 Sep', '8:30 PM'],
    'spirited-away': ['Sat 13 Sep', '4:00 PM', 'Sun 14 Sep', '4:00 PM', 'Sun 14 Sep', '6:00 PM'],
    'dil-chahta-hai': ['Fri 19 Sep', '7:30 PM', 'Sat 20 Sep', '4:30 PM', 'Sat 20 Sep', '7:30 PM'],
    'whiplash': ['Sat 20 Sep', '8:00 PM', 'Sun 21 Sep', '8:00 PM'],
    'amelie': ['Sat 20 Sep', '8:00 PM', 'Sun 21 Sep', '5:30 PM', 'Sun 21 Sep', '8:00 PM'],
    'eeaao': ['Sat 27 Sep', '4:30 PM', 'Sat 27 Sep', '7:30 PM', 'Sun 28 Sep', '7:30 PM'],
    'la-la-land-bandra-rooftop': ['Sat 29 Aug', '7:30 PM', 'Sun 30 Aug', '4:30 PM', 'Sun 30 Aug', '7:30 PM'],
    'grand-budapest-hotel-indiranagar': ['Fri 5 Sep', '8:00 PM', 'Sat 6 Sep', '8:00 PM']
  };
  SCC_EVENTS.forEach(function (evt) {
    var s = SHOWS[evt.id];
    if (!s || evt.sessions) return;
    var list = [];
    for (var i = 0; i < s.length; i += 2) {
      list.push({ key: 's' + (i / 2 + 1), label: s[i] + ', ' + s[i + 1] + ' Onwards', id: evt.id });
    }
    var first = s[0], last = s[s.length - 2];
    evt.sessions = {
      title: evt.title,
      dates: (first === last ? first : first + ' – ' + last) + ' · ' + evt.venueName + ', ' + evt.venueArea,
      list: list
    };
  });
})();

/* Ticket types per event — default menu unless an event sets its own `tickets`. */
function sccTicketTypes(evt) {
  return evt.tickets || [
    { key: 'nonveg', name: 'Per Person Ticket + F&B (Non Veg)', note: '(Includes 5 Course Tasting Menu + 2 Drinks)', price: evt.price + 500 },
    { key: 'veg', name: 'Per Person Ticket + F&B (Veg)', note: '(Includes 5 Course Tasting Menu + 2 Drinks)', price: evt.price }
  ];
}

(function () {
  'use strict';

  var ICON = {
    cal: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="1.5"/><path d="M3.5 10h17M8 3v4M16 3v4M8 14h2M14 14h2"/></svg>',
    close: '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>',
    info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
    minus: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/></svg>',
    plus: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M12 5v14"/></svg>'
  };

  // Demo codes only — replace with a server-side gift card / voucher lookup.
  var DEMO_CODES = { SUNSET500: 500 };

  var $ = function (id) { return document.getElementById(id); };
  var inr = function (n) { return '₹' + n.toLocaleString('en-IN'); };
  var inr2 = function (n) { return n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
  var esc = function (s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  };
  var findEvent = function (id) {
    return SCC_EVENTS.filter(function (e) { return e.id === id; })[0];
  };
  var params = new URLSearchParams(window.location.search);

  /* ---- Mobile navigation ------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var panel = $('primary-nav');

  if (toggle && panel) {
    var header = document.querySelector('header');
    var savedY = 0;
    var setOpen = function (open) {
      var root = document.documentElement;
      if (open === root.classList.contains('nav-open')) { panel.classList.toggle('open', open); return; }
      if (open) {
        savedY = window.scrollY;
        root.style.setProperty('--nav-top', header.getBoundingClientRect().bottom + 'px');
      }
      root.classList.toggle('nav-open', open);
      // unlocking page scroll can reset the position, so put it back
      if (!open) window.scrollTo({ top: savedY, behavior: 'instant' });
      panel.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', function () { setOpen(!panel.classList.contains('open')); });
    panel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) { setOpen(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 961px)').addEventListener('change', function (e) {
      if (e.matches) setOpen(false);
    });
  }

  /* ---- Header dropdowns: city selector + "More" menu ------------- */
  var dropdowns = Array.prototype.slice.call(document.querySelectorAll('.city-select, .has-submenu'));
  var closeDropdowns = function (except) {
    dropdowns.forEach(function (d) {
      if (d === except) return;
      d.classList.remove('open');
      var b = d.querySelector('button');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  };
  dropdowns.forEach(function (d) {
    var btn = d.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var willOpen = !d.classList.contains('open');
      closeDropdowns(d);
      d.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  });
  document.addEventListener('click', function () { closeDropdowns(null); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDropdowns(null); });

  /* City selection (demo wiring — label only) */
  document.querySelectorAll('.city-menu button').forEach(function (b) {
    b.addEventListener('click', function () {
      var city = b.textContent.trim();
      document.querySelectorAll('.city-select-btn b').forEach(function (el) { el.textContent = city; });
      document.querySelectorAll('.city-menu button').forEach(function (o) {
        if (o.textContent.trim() === city) o.setAttribute('aria-current', 'true');
        else o.removeAttribute('aria-current');
      });
      closeDropdowns(null);
    });
  });

  /* ---- Listings: filter pills + load more (events, venues, gallery) --
     Markup contract: [data-listing data-page=N] holds the items (each with
     data-type); a sibling [data-filter-group] has .filter-pill[data-filter];
     [data-more] holds the count + button; [data-empty] is the empty state. */
  document.querySelectorAll('[data-listing]').forEach(function (grid) {
    var scope = grid.parentNode;
    var items = Array.prototype.slice.call(grid.children);
    var pills = Array.prototype.slice.call(scope.querySelectorAll('[data-filter-group] .filter-pill'));
    var more = scope.querySelector('[data-more]');
    var empty = scope.querySelector('[data-empty]');
    var PAGE = Number(grid.dataset.page) || 9;
    var limit = PAGE;
    var filter = 'all';

    var render = function () {
      var matches = items.filter(function (it) { return filter === 'all' || it.dataset.type === filter; });
      items.forEach(function (it) { it.hidden = true; });
      matches.slice(0, limit).forEach(function (it) { it.hidden = false; });
      if (empty) empty.hidden = matches.length !== 0;
      if (more) {
        more.hidden = matches.length <= limit;
        more.querySelector('[data-shown]').textContent = String(Math.min(limit, matches.length));
        more.querySelector('[data-total]').textContent = String(matches.length);
      }
    };

    pills.forEach(function (pill) {
      pill.setAttribute('aria-pressed', String(pill.classList.contains('active')));
      pill.addEventListener('click', function () {
        pills.forEach(function (p) { p.classList.remove('active'); p.setAttribute('aria-pressed', 'false'); });
        pill.classList.add('active');
        pill.setAttribute('aria-pressed', 'true');
        filter = pill.dataset.filter;
        limit = PAGE;
        render();
      });
    });
    if (more) {
      more.querySelector('button').addEventListener('click', function () { limit += PAGE; render(); });
    }
    render();
  });

  /* ---- Sessions popup: multi-show events ------------------------- */
  var sessionsDialog = null;
  var openSessions = function (evt) {
    if (!sessionsDialog) {
      sessionsDialog = document.createElement('dialog');
      sessionsDialog.className = 'modal';
      sessionsDialog.setAttribute('aria-labelledby', 'sessionsTitle');
      document.body.appendChild(sessionsDialog);
      sessionsDialog.addEventListener('click', function (e) {
        if (e.target === sessionsDialog || e.target.closest('.modal-close')) sessionsDialog.close();
      });
    }
    var s = evt.sessions;
    sessionsDialog.innerHTML =
      '<button type="button" class="modal-close" aria-label="Close">' + ICON.close + '</button>' +
      '<div class="modal-head"><h2 class="display" id="sessionsTitle">' + esc(s.title) + '</h2><p>' + esc(s.dates) + '</p></div>' +
      '<ul class="session-list">' + s.list.map(function (row) {
        var film = findEvent(row.id) || evt;
        return '<li><span>' + esc(row.label) + '</span><span>' + esc(film.title) + '</span>' +
          '<a class="btn btn-outline" href="cart.html?id=' + encodeURIComponent(film.id) + '&amp;session=' + encodeURIComponent(evt.id + ':' + row.key) + '">Book Tickets</a></li>';
      }).join('') + '</ul>';
    sessionsDialog.showModal();
  };

  document.addEventListener('click', function (e) {
    var buy = e.target.closest('[data-buy]');
    if (!buy) return;
    var evt = findEvent(buy.dataset.buy);
    if (evt && evt.sessions && typeof HTMLDialogElement === 'function') {
      e.preventDefault();
      openSessions(evt);
    }
  });

  /* Session label for the cart ("evtId:key" in ?session=) */
  var sessionFor = function (value) {
    if (!value) return null;
    var parts = value.split(':');
    var host = findEvent(parts[0]);
    if (!host || !host.sessions) return null;
    return host.sessions.list.filter(function (r) { return r.key === parts[1]; })[0] || null;
  };

  /* ---- Lightbox with thumbnail strip (gallery + event detail) ---- */
  var lightbox = $('lightbox');
  var openLightbox = null;
  if (lightbox && typeof lightbox.showModal === 'function') {
    var lbImage = $('lightboxImage');
    var lbThumbs = $('lightboxThumbs');
    var lbPhotos = [];
    var lbIndex = 0;

    var lbShow = function (i) {
      lbIndex = (i + lbPhotos.length) % lbPhotos.length;
      lbImage.src = lbPhotos[lbIndex];
      lbThumbs.querySelectorAll('button').forEach(function (b, j) {
        if (j === lbIndex) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
      });
      var cur = lbThumbs.children[lbIndex];
      if (cur) cur.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    };

    openLightbox = function (photos, index, caption) {
      lbPhotos = photos;
      lbThumbs.innerHTML = photos.map(function (src, j) {
        return '<li><button type="button" data-i="' + j + '" aria-label="Photo ' + (j + 1) + ' of ' + photos.length + '"><img src="' + src + '" alt=""></button></li>';
      }).join('');
      setText('lightboxCaption', caption || '');
      lbImage.alt = caption || '';
      lightbox.showModal();
      lbShow(index || 0);
    };

    lbThumbs.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (b) lbShow(Number(b.dataset.i));
    });
    lightbox.querySelector('.lightbox-close').addEventListener('click', function () { lightbox.close(); });
    lightbox.querySelector('.lightbox-prev').addEventListener('click', function () { lbShow(lbIndex - 1); });
    lightbox.querySelector('.lightbox-next').addEventListener('click', function () { lbShow(lbIndex + 1); });
    lightbox.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') lbShow(lbIndex - 1);
      if (e.key === 'ArrowRight') lbShow(lbIndex + 1);
    });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lightbox.close(); });
  }

  /* Placeholder albums: 6 photos rotated from the 3 stand-ins.
     With real photography, read the album's URLs from data attributes. */
  var albumPhotos = function (seed) {
    var out = [];
    for (var j = 0; j < 6; j++) out.push(SCC_PHOTOS[(seed + j) % SCC_PHOTOS.length]);
    return out;
  };

  /* ---- Gallery page: album cards open the lightbox ---------------- */
  var galleryGrid = $('galleryGrid');
  if (galleryGrid && openLightbox) {
    galleryGrid.addEventListener('click', function (e) {
      var card = e.target.closest('.gallery-card');
      if (!card) return;
      openLightbox(albumPhotos(Number(card.dataset.album)), 0, card.textContent.trim());
    });
  }

  /* ---- Home: destination carousel -------------------------------- */
  document.querySelectorAll('[data-carousel]').forEach(function (c) {
    var track = c.querySelector('.carousel-track');
    var slides = track.children.length;
    var i = 0;
    var go = function (n) {
      i = (n + slides) % slides;
      track.style.transform = 'translateX(' + (-i * track.children[0].offsetWidth) + 'px)';
    };
    c.querySelector('.carousel-prev').addEventListener('click', function () { go(i - 1); });
    c.querySelector('.carousel-next').addEventListener('click', function () { go(i + 1); });
    window.addEventListener('resize', function () { go(i); });
  });

  /* ---- Event card markup (JS-rendered grids) — mirrors the HTML cards */
  var cardHTML = function (evt) {
    var url = 'event-detail.html?id=' + encodeURIComponent(evt.id);
    return '<article class="ticket">' +
      '<a class="ticket-image" href="' + url + '" tabindex="-1" aria-hidden="true"><img src="' + SCC_PHOTOS[evt.photo % 3] + '" alt="" loading="lazy"><span class="tag">' + esc(evt.tag) + '</span></a>' +
      '<div class="ticket-body"><h3><a href="' + url + '">' + esc(evt.title) + '</a></h3>' +
      '<div class="ticket-meta"><span>' + esc(evt.venueName + ', ' + evt.venueArea) + '</span><span>' + esc(evt.dateShort + ' · ' + evt.time) + '</span></div>' +
      '<div class="ticket-foot"><a class="link-arrow" href="' + url + '">View Details</a>' +
      '<a class="btn btn-primary" href="cart.html?id=' + encodeURIComponent(evt.id) + '" data-buy="' + esc(evt.id) + '">Buy Now</a></div></div></article>';
  };

  /* ---- Event detail page: populate from SCC_EVENTS -------------- */
  var detail = $('eventDetail');
  if (detail) {
    var evt = findEvent(params.get('id')) || SCC_EVENTS[0];
    document.title = evt.title + ' — Sunset Cinema Club';

    setText('eventCrumb', evt.title);
    setText('eventTitle', evt.title);
    setText('eventBannerDate', evt.dateShort + '; ' + evt.time + ' onwards');
    setText('eventBannerVenue', evt.venueName + ', ' + evt.venueArea);
    $('eventBanner').style.backgroundImage = 'url("' + SCC_PHOTOS[(evt.photo + 1) % 3] + '")';
    $('eventTrailer').href = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(evt.title + ' trailer');
    $('eventTrailer').target = '_blank';
    $('eventTrailer').rel = 'noopener';

    $('eventTags').innerHTML = [evt.tag].concat(evt.genres || []).map(function (t) {
      return '<span class="tag">' + esc(t) + '</span>';
    }).join('');
    setText('eventSynopsis', evt.synopsis);
    setText('eventSchedule', evt.day + ' ' + evt.month + ', ' + evt.weekday + ' — ' + evt.title);
    setText('eventGates', 'Gates open at ' + evt.doors + ' and the movie starts at ' + evt.time + '.');

    var poster = evt.poster || SCC_POSTERS[evt.photo % 3];
    $('panelPoster').src = poster;
    $('panelPoster').alt = evt.title + ' poster';
    setText('eventCast', evt.cast || '—');
    setText('panelDate', evt.weekday + ', ' + evt.month.slice(0, 3) + ' ' + evt.day);
    setText('panelTime', evt.time + ' onwards');
    setText('panelVenue', evt.venueName + ', ' + evt.venueArea);
    var buyBtn = $('panelBuy');
    buyBtn.textContent = 'Buy Tickets – ' + inr(evt.price) + ' onwards';
    buyBtn.href = 'cart.html?id=' + encodeURIComponent(evt.id);
    buyBtn.dataset.buy = evt.id;

    // Venue map: keyless Google Maps embed from the venue name (swap for a real address/place id)
    var place = evt.address || (evt.venueName + ', ' + evt.venueArea);
    setText('eventAddress', place);
    $('eventMap').src = 'https://maps.google.com/maps?q=' + encodeURIComponent(place) + '&z=15&output=embed';
    $('eventMap').title = 'Map of ' + evt.venueName;
    $('eventDirections').href = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(place);

    var eventPhotos = albumPhotos(evt.photo);
    $('eventGallery').addEventListener('click', function (e) {
      var b = e.target.closest('[data-lightbox-index]');
      if (b && openLightbox) openLightbox(eventPhotos, Number(b.dataset.lightboxIndex), evt.title);
    });

    // Recently viewed: per-browser convenience only (falls back to other events)
    var recent = [];
    try { recent = JSON.parse(localStorage.getItem('scc-recent') || '[]'); } catch (err) { recent = []; }
    var picks = recent.filter(function (id) { return id !== evt.id; }).map(findEvent).filter(Boolean);
    SCC_EVENTS.forEach(function (e) {
      if (picks.length < 3 && e.id !== evt.id && picks.indexOf(e) === -1) picks.push(e);
    });
    $('recentGrid').innerHTML = picks.slice(0, 3).map(cardHTML).join('');
    try {
      localStorage.setItem('scc-recent', JSON.stringify([evt.id].concat(recent.filter(function (id) { return id !== evt.id; })).slice(0, 6)));
    } catch (err) { /* storage unavailable — ignore */ }
  }

  /* ---- FAQ page: search ------------------------------------------ */
  var faqSearch = $('faqSearch');
  if (faqSearch) {
    var faqGroups = Array.prototype.slice.call(document.querySelectorAll('#faqList .faq-group:not(.empty-state)'));
    faqSearch.addEventListener('input', function () {
      var q = faqSearch.value.trim().toLowerCase();
      var total = 0;
      faqGroups.forEach(function (g) {
        var shown = 0;
        g.querySelectorAll('.faq-item').forEach(function (item) {
          var match = !q || item.textContent.toLowerCase().indexOf(q) !== -1;
          item.hidden = !match;
          if (match) shown++;
        });
        g.hidden = shown === 0;
        total += shown;
      });
      $('faqEmpty').hidden = total !== 0;
    });
  }

  /* ---- Shared checkout helpers ------------------------------------ */
  var setStep = function (stepperId, n) {
    var steps = $(stepperId).children;
    for (var k = 0; k < steps.length; k++) {
      if (k === n) steps[k].setAttribute('aria-current', 'step'); else steps[k].removeAttribute('aria-current');
    }
  };
  var validate = function (form, errorEl, msg) {
    var firstBad = null;
    form.querySelectorAll('[required], [pattern]').forEach(function (f) {
      var bad = !f.checkValidity();
      if (bad) f.setAttribute('aria-invalid', 'true'); else f.removeAttribute('aria-invalid');
      if (bad && !firstBad) firstBad = f;
    });
    if (firstBad) {
      errorEl.textContent = firstBad.type === 'checkbox' ? 'Please accept the Terms & Conditions.' : msg;
      errorEl.hidden = false;
      firstBad.focus();
      return false;
    }
    errorEl.hidden = true;
    return true;
  };
  /* Wires a voucher input + Apply button; onChange(discount) on apply */
  var voucher = function (pfx, cap, onChange) {
    var input = $(pfx + 'Voucher');
    var msg = $(pfx + 'VoucherMsg');
    var apply = function () {
      var code = input.value.trim().toUpperCase();
      var amount = DEMO_CODES[code] ? Math.min(DEMO_CODES[code], cap()) : 0;
      if (DEMO_CODES[code]) {
        msg.textContent = 'Code applied — ' + inr(amount) + ' off.';
        msg.className = 'voucher-msg ok';
      } else {
        msg.textContent = code ? 'That code isn’t valid.' : 'Enter a code first.';
        msg.className = 'voucher-msg bad';
      }
      onChange(amount);
    };
    $(pfx + 'Apply').addEventListener('click', apply);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); apply(); } });
  };
  /* Two-step flow: step1 form → step2 form → success panel */
  var twoStep = function (cfg) {
    var s1 = $(cfg.step1), s2 = $(cfg.step2), ok = $(cfg.success);
    var go = function (n) {
      s1.hidden = n !== 0; s2.hidden = n !== 1; ok.hidden = n !== 2;
      setStep(cfg.stepper, Math.min(n, 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    s1.addEventListener('submit', function (e) {
      e.preventDefault();
      if (cfg.check1()) { if (cfg.enter2) cfg.enter2(); go(1); }
    });
    s2.addEventListener('submit', function (e) {
      e.preventDefault();
      // Demo only — no payment backend wired. Replace with checkout.
      if (cfg.check2()) { cfg.done(); go(2); ok.focus(); }
    });
    s2.querySelector('[data-back]').addEventListener('click', function () { go(0); });
  };

  /* ---- Cart (event tickets) ---------------------------------------- */
  if ($('cartStep1')) {
    var cEvt = findEvent(params.get('id')) || SCC_EVENTS[0];
    var cSession = sessionFor(params.get('session'));
    var types = sccTicketTypes(cEvt);
    var qty = {};
    var cDiscount = 0;
    var MAX_QTY = 10;

    document.title = 'Your Order: ' + cEvt.title + ' — Sunset Cinema Club';
    $('cartPoster').src = SCC_PHOTOS[cEvt.photo % 3];
    $('cartPoster').alt = cEvt.title;
    setText('cartTitle', cEvt.title);
    setText('cartDate', cSession ? cSession.label : cEvt.dateShort + '; ' + cEvt.time + ' onwards');
    setText('cartVenue', cEvt.venueName + ', ' + cEvt.venueArea);

    $('ticketRows').innerHTML = types.map(function (t) {
      qty[t.key] = 0;
      return '<tr><td><span class="tt-name">' + esc(t.name) + '</span><span class="tt-note">' + esc(t.note) + '</span></td>' +
        '<td class="col-price">₹ ' + inr2(t.price) + '</td>' +
        '<td class="col-qty"><div class="qty" data-key="' + t.key + '">' +
        '<button type="button" data-step="-1" aria-label="Remove one ' + esc(t.name) + '">' + ICON.minus + '</button>' +
        '<output aria-live="polite">00</output>' +
        '<button type="button" data-step="1" aria-label="Add one ' + esc(t.name) + '">' + ICON.plus + '</button></div></td></tr>';
    }).join('');

    var subtotal = function () {
      return types.reduce(function (sum, t) { return sum + t.price * qty[t.key]; }, 0);
    };
    var cRender = function () {
      types.forEach(function (t) {
        var box = document.querySelector('.qty[data-key="' + t.key + '"]');
        box.querySelector('output').textContent = (qty[t.key] < 10 ? '0' : '') + qty[t.key];
        box.querySelector('[data-step="-1"]').disabled = qty[t.key] === 0;
        box.querySelector('[data-step="1"]').disabled = qty[t.key] >= MAX_QTY;
      });
      $('cartLines').innerHTML = types.filter(function (t) { return qty[t.key] > 0; }).map(function (t) {
        return '<li><span>' + esc(t.name) + ' <span class="info-tip" tabindex="0" aria-label="' + esc(t.note) + '">' + ICON.info +
          '<span class="tip" role="tooltip">' + esc(t.note) + ' — ₹' + inr2(t.price) + ' each</span></span></span><span>× ' + qty[t.key] + '</span></li>';
      }).join('');
      var sub = subtotal();
      cDiscount = Math.min(cDiscount, sub);
      setText('cartSubtotal', inr2(sub));
      setText('cartDiscount', inr2(cDiscount));
      setText('cartTotal', inr2(sub - cDiscount));
      setText('cartPay', 'Proceed to Pay ₹' + inr2(sub - cDiscount));
    };
    $('ticketRows').addEventListener('click', function (e) {
      var b = e.target.closest('[data-step]');
      if (!b) return;
      var key = b.closest('.qty').dataset.key;
      qty[key] = Math.max(0, Math.min(MAX_QTY, qty[key] + Number(b.dataset.step)));
      cRender();
    });
    voucher('cart', subtotal, function (d) { cDiscount = d; cRender(); });

    twoStep({
      step1: 'cartStep1', step2: 'cartStep2', success: 'cartSuccess', stepper: 'cartStepper',
      check1: function () {
        var ok = subtotal() > 0;
        $('cartError1').textContent = 'Add at least one ticket to continue.';
        $('cartError1').hidden = ok;
        return ok;
      },
      check2: function () { return validate($('cartStep2'), $('cartError2'), 'Please fill in every field with valid details.'); },
      done: function () {
        setText('cartSuccessText', 'Thanks, ' + $('cartFirst').value.trim() + '. Your e-tickets for ' + cEvt.title +
          ' are on their way to ' + $('cartEmail').value.trim() + '.');
      }
    });
    cRender();
  }

  /* ---- Gift card ---------------------------------------------------- */
  if ($('giftStep1')) {
    var gDiscount = 0;
    var gAmount = function () { return Number(document.querySelector('input[name="amount"]:checked').value); };
    var fmtDate = function (d) {
      return ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear();
    };
    var from = new Date();
    var till = new Date(from); till.setFullYear(from.getFullYear() + 1);
    setText('gcValidFrom', fmtDate(from));
    setText('gcValidTill', fmtDate(till));

    var gRender = function () {
      gDiscount = Math.min(gDiscount, gAmount());
      setText('gcPreviewAmount', '₹ ' + inr2(gAmount()));
      setText('gcReviewAmount', inr(gAmount()));
      setText('gcReviewDiscount', inr(gDiscount));
      setText('gcReviewTotal', inr(gAmount() - gDiscount));
      setText('gcPay', 'Proceed to Pay ' + inr(gAmount() - gDiscount));
    };
    $('giftStep1').addEventListener('change', gRender);
    voucher('gc', gAmount, function (d) { gDiscount = d; gRender(); });

    twoStep({
      step1: 'giftStep1', step2: 'giftStep2', success: 'giftSuccess', stepper: 'giftStepper',
      check1: function () { return validate($('giftStep1'), $('gcError1'), 'Please add the recipient’s name and a valid email.'); },
      enter2: function () { setText('gcReviewTo', $('gcName').value.trim()); gRender(); },
      check2: function () { return validate($('giftStep2'), $('gcError2'), 'Please fill in every field with valid details.'); },
      done: function () {
        setText('gcSuccessText', 'A ' + inr(gAmount()) + ' gift card is on its way to ' + $('gcName').value.trim() + '.');
      }
    });
    gRender();
  }

  /* ---- Join The Club ------------------------------------------------ */
  if ($('joinStep1')) {
    var PLAN = 2500;
    var jDiscount = 0;
    var jRender = function () {
      setText('jReviewDiscount', inr(jDiscount));
      setText('jReviewTotal', inr(PLAN - jDiscount));
      setText('jPay', 'Pay ' + inr(PLAN - jDiscount) + ' & Join');
    };
    voucher('j', function () { return PLAN; }, function (d) { jDiscount = d; jRender(); });

    twoStep({
      step1: 'joinStep1', step2: 'joinStep2', success: 'joinSuccess', stepper: 'joinStepper',
      check1: function () { return validate($('joinStep1'), $('jError1'), 'Please fill in every field with valid details.'); },
      enter2: function () {
        setText('jReviewName', $('jFirst').value.trim() + ' ' + $('jLast').value.trim());
        setText('jReviewCity', $('jCity').value);
      },
      check2: function () { return validate($('joinStep2'), $('jError2'), ''); },
      done: function () {
        setText('jSuccessText', 'Thanks, ' + $('jFirst').value.trim() + '. Your member ID is on its way to ' + $('jEmail').value.trim() + '.');
      }
    });
    jRender();
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }
})();
