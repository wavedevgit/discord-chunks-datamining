/** Chunk was on web.js **/
/** chunk id: 294684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./366843.js"), require("./458631.js");
var Chunk98405 = require("./98405.js"),
  Chunk127849 = require("./127849.js"),
  Chunk242606 = require("./242606.js"),
  Chunk154028 = require("./154028.js"),
  Chunk580983 = require("./580983.js"),
  Chunk46015 = require("./46015.js"),
  Chunk507604 = require("./507604.js"),
  Chunk394227 = require("./394227.js"),
  Chunk556585 = require("./556585.js"),
  Chunk573078 = require("./573078.js"),
  Chunk477732 = require("./477732.js"),
  Chunk25124 = require("./25124.js"),
  Chunk280481 = require("./280481.js"),
  Chunk199838 = require("./199838.js"),
  Chunk170322 = require("./170322.js"),
  Chunk880181 = require("./880181.js"),
  Chunk77025 = require("./77025.js"),
  Chunk48657 = require("./48657.js"),
  Chunk214027 = require("./214027.js"),
  Chunk179122 = require("./179122.js"),
  Chunk434431 = require("./434431.js"),
  Chunk382698 = require("./382698.js"),
  Chunk713411 = require("./713411.js"),
  Chunk530575 = require("./530575.js"),
  Chunk533610 = require("./533610.js"),
  Chunk800054 = require("./800054.js"),
  Chunk682564 = require("./682564.js"),
  Chunk338045 = require("./338045.js"),
  Chunk751736 = require("./751736.js"),
  Chunk992914 = require("./992914.js"),
  L = Chunk751736("iterator"),
  x = "URLSearchParams",
  M = x + "Iterator",
  k = Chunk199838.set,
  j = Chunk199838.getterFor(x),
  U = Chunk199838.getterFor(M),
  G = Chunk242606("fetch"),
  B = Chunk242606("Request"),
  Z = Chunk242606("Headers"),
  F = B && B.prototype,
  V = Z && Z.prototype,
  H = Chunk127849.TypeError,
  W = Chunk127849.encodeURIComponent,
  Y = String.fromCharCode,
  K = Chunk154028("String", "fromCodePoint"),
  z = parseInt,
  q = Chunk46015("".charAt),
  X = Chunk46015([].join),
  Q = Chunk46015([].push),
  J = Chunk46015("".replace),
  $ = Chunk46015([].shift),
  ee = Chunk46015([].splice),
  et = Chunk46015("".split),
  en = Chunk46015("".slice),
  er = Chunk46015(/./.exec),
  ei = /\+/g,
  ea = "�",
  eo = /^[0-9a-f]+$/i,
  es = function(e, t) {
    var n = en(e, t, t + 2);
    return er(eo, n) ? z(n, 16) : NaN
  },
  el = function(e) {
    for (var t = 0, n = 128; n > 0 && (e & n) != 0; n >>= 1) t++;
    return t
  },
  ec = function(e) {
    var t = null;
    switch (e.length) {
      case 1:
        t = e[0];
        break;
      case 2:
        t = (31 & e[0]) << 6 | 63 & e[1];
        break;
      case 3:
        t = (15 & e[0]) << 12 | (63 & e[1]) << 6 | 63 & e[2];
        break;
      case 4:
        t = (7 & e[0]) << 18 | (63 & e[1]) << 12 | (63 & e[2]) << 6 | 63 & e[3]
    }
    return t > 1114111 ? null : t
  },
  eu = function(e) {
    for (var t = (e = J(e, ei, " ")).length, n = "", r = 0; r < t;) {
      var i = q(e, r);
      if ("%" === i) {
        if ("%" === q(e, r + 1) || r + 3 > t) {
          n += "%", r++;
          continue
        }
        var a = es(e, r + 1);
        if (a != a) {
          n += i, r++;
          continue
        }
        r += 2;
        var o = el(a);
        if (0 === o) i = Y(a);
        else {
          if (1 === o || o > 4) {
            n += ea, r++;
            continue
          }
          for (var s = [a], l = 1; l < o && !(++r + 3 > t) && "%" === q(e, r);) {
            var c = es(e, r + 1);
            if (c != c) {
              r += 3;
              break
            }
            if (c > 191 || c < 128) break;
            Q(s, c), r += 2, l++
          }
          if (s.length !== o) {
            n += ea;
            continue
          }
          var u = ec(s);
          null === u ? n += ea : i = K(u)
        }
      }
      n += i, r++
    }
    return n
  },
  ed = /[!'()~]|%20/g,
  ef = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  },
  e_ = function(e) {
    return ef[e]
  },
  ep = function(e) {
    return J(W(e), ed, e_)
  },
  eh = Chunk280481(function(e, t) {
    k(this, {
      type: M,
      target: j(e).entries,
      index: 0,
      kind: t
    })
  }, x, function() {
    var e = U(this),
      t = module.target,
      n = module.index++;
    if (!exports || require >= exports.length) return module.target = null, Chunk682564(true, true);
    var r = exports[require];
    switch (module.kind) {
      case "keys":
        return Chunk682564(Chunk98405.key, false);
      case "values":
        return Chunk682564(Chunk98405.value, false)
    }
    return Chunk682564([Chunk98405.key, Chunk98405.value], false)
  }, true),
  em = function(e) {
    this.entries = [], this.url = null, true !== e && (I(e) ? this.parseObject(e) : this.parseQuery("string" == typeof e ? "?" === q(e, 0) ? en(e, 1) : e : T(e)))
  };
em.prototype = {
  type: x,
  bindURL: function(e) {
    this.url = e, this.update()
  },
  parseObject: function(e) {
    var t, n, r, i, a, o, l, c = this.entries,
      u = N(e);
    if (u)
      for (n = (t = C(e, u)).next; !(r = s(n, t)).done;) {
        if ((o = s(a = (i = C(v(r.value))).next, i)).done || (l = s(a, i)).done || !s(a, i).done) throw new H("Expected sequence with length 2");
        Q(c, {
          key: T(o.value),
          value: T(l.value)
        })
      } else
        for (var d in e) b(e, d) && Q(c, {
          key: d,
          value: T(e[d])
        })
  },
  parseQuery: function(e) {
    if (e)
      for (var t, n, r = this.entries, i = et(e, "&"), a = 0; a < i.length;)(t = i[a++]).length && Q(r, {
        key: eu($(n = et(t, "="))),
        value: eu(X(n, "="))
      })
  },
  serialize: function() {
    for (var e, t = this.entries, n = [], r = 0; Chunk98405 < exports.length;) Q(require, ep((e = exports[Chunk98405++]).key) + "=" + ep(module.value));
    return X(require, "&")
  },
  update: function() {
    this.entries.length = 0, this.parseQuery(this.url.query)
  },
  updateURL: function() {
    this.url && this.url.update()
  }
};
var eg = function() {
    Chunk170322(this, eE);
    var e = arguments.length > 0 ? arguments[0] : true,
      t = k(this, new em(module));
    Chunk507604 || (this.size = exports.entries.length)
  },
  eE = eg.prototype;
if (Chunk477732(eE, {
    append: function(e, t) {
      var n = j(this);
      P(arguments.length, 2), Q(n.entries, {
        key: T(e),
        value: T(t)
      }), !c && this.length++, n.updateURL()
    },
    delete: function(e) {
      for (var t = j(this), n = P(arguments.length, 1), r = t.entries, i = T(e), a = n < 2 ? true : arguments[1], o = true === a ? a : T(a), s = 0; s < r.length;) {
        var l = r[s];
        if (l.key === i && (true === o || l.value === o)) {
          if (ee(r, s, 1), true !== o) break
        } else s++
      }
      c || (this.size = r.length), t.updateURL()
    },
    get: function(e) {
      var t = j(this).entries;
      P(arguments.length, 1);
      for (var n = T(e), r = 0; r < t.length; r++)
        if (t[r].key === n) return t[r].value;
      return null
    },
    getAll: function(e) {
      var t = j(this).entries;
      P(arguments.length, 1);
      for (var n = T(e), r = [], i = 0; i < t.length; i++) t[i].key === n && Q(r, t[i].value);
      return r
    },
    has: function(e) {
      for (var t = j(this).entries, n = P(arguments.length, 1), r = T(e), i = n < 2 ? true : arguments[1], a = true === i ? i : T(i), o = 0; o < t.length;) {
        var s = t[o++];
        if (s.key === r && (true === a || s.value === a)) returntrue
      }
      returnfalse
    },
    set: function(e, t) {
      var n, r = j(this);
      P(arguments.length, 1);
      for (var i = r.entries, a = false, o = T(e), s = T(t), l = 0; l < i.length; l++)(n = i[l]).key === o && (a ? ee(i, l--, 1) : (a = true, n.value = s));
      a || Q(i, {
        key: o,
        value: s
      }), c || (this.size = i.length), r.updateURL()
    },
    sort: function() {
      var e = j(this);
      Chunk992914(module.entries, function(e, t) {
        return e.key > t.key ? 1 : false
      }), module.updateURL()
    },
    forEach: function(e) {
      for (var t, n = j(this).entries, r = y(e, arguments.length > 1 ? arguments[1] : true), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
    },
    keys: function() {
      return new eh(this, "keys")
    },
    values: function() {
      return new eh(this, "values")
    },
    entries: function() {
      return new eh(this, "entries")
    }
  }, {
    enumerable: true
  }), Chunk556585(eE, L, eE.entries, {
    name: "entries"
  }), Chunk556585(eE, "toString", function() {
    return j(this).serialize()
  }, {
    enumerable: true
  }), Chunk507604 && Chunk573078(eE, "size", {
    get: function() {
      return j(this).entries.length
    },
    configurable: true,
    enumerable: true
  }), Chunk25124(eg, x), Chunk98405({
    global: true,
    constructor: true,
    forced: !Chunk394227
  }, {
    URLSearchParams: eg
  }), !Chunk394227 && Chunk880181(Z)) {
  var eb = Chunk46015(V.has),
    ey = Chunk46015(V.set),
    eO = function(e) {
      if (I(e)) {
        var t, n = e.body;
        if (O(n) === x) return eb(t = e.headers ? new Z(e.headers) : new Z, "content-type") || ey(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), S(e, {
          body: A(0, T(n)),
          headers: A(0, t)
        })
      }
      return e
    };
  if (Chunk880181(G) && Chunk98405({
      global: true,
      enumerable: true,
      dontCallGetSet: true,
      forced: true
    }, {
      fetch: function(e) {
        return G(e, arguments.length > 1 ? eO(arguments[1]) : {})
      }
    }), Chunk880181(B)) {
    var ev = function(e) {
      return g(this, F), new B(e, arguments.length > 1 ? eO(arguments[1]) : {})
    };
    F.constructor = ev, ev.prototype = F, Chunk98405({
      global: true,
      constructor: true,
      dontCallGetSet: true,
      forced: true
    }, {
      Request: ev
    })
  }
}
module.exports = {
  URLSearchParams: eg,
  getState: j
}