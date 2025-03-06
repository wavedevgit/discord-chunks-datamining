/** Chunk was on 3464 **/ ! function() {
  var t = function(e) {
    "use strict";
    e = e || {};
    var t, n, r, o, i, a, c, s, l, p, d, u, h, f, y, w, g = {
      bgColor: "#d00",
      textColor: "#fff",
      fontFamily: "sans-serif",
      fontStyle: "bold",
      type: "circle",
      position: "down",
      animation: "slide",
      elementId: !1,
      dataUrl: !1,
      win: window
    };
    (h = {}).ff = "undefined" != typeof InstallTrigger, h.chrome = !!window.chrome, h.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0, h.ie = !1, h.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, h.supported = h.chrome || h.ff || h.opera;
    var m = [];
    d = function() {}, s = u = !1;
    var x = {};
    x.ready = function() {
      s = !0, x.reset(), d()
    }, x.reset = function() {
      s && (m = [], l = !1, p = !1, a.clearRect(0, 0, o, r), a.drawImage(c, 0, 0, o, r), C.setIcon(i), window.clearTimeout(f), window.clearTimeout(y))
    }, x.start = function() {
      if (s && !p) {
        var e = function() {
          l = m[0], p = !1, m.length > 0 && (m.shift(), x.start())
        };
        if (m.length > 0) {
          p = !0;
          var n = function() {
            ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(function(e) {
              e in m[0].options && (t[e] = m[0].options[e])
            }), _.run(m[0].options, function() {
              e()
            }, !1)
          };
          l ? _.run(l.options, function() {
            n()
          }, !0) : n()
        }
      }
    };
    var b = {},
      v = function(e) {
        return e.n = "number" == typeof e.n ? Math.abs(0 | e.n) : e.n, e.x = o * e.x, e.y = r * e.y, e.w = o * e.w, e.h = r * e.h, e.len = ("" + e.n).length, e
      };

    function E(e) {
      if (e.paused || e.ended || u) return !1;
      try {
        a.clearRect(0, 0, o, r), a.drawImage(e, 0, 0, o, r)
      } catch (e) {}
      y = setTimeout(function() {
        E(e)
      }, _.duration), C.setIcon(i)
    }
    b.circle = function(e) {
      e = v(e);
      var n = !1;
      2 === e.len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w, n = !0) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w, n = !0), a.clearRect(0, 0, o, r), a.drawImage(c, 0, 0, o, r), a.beginPath(), a.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .85 : 1)) + "px " + t.fontFamily, a.textAlign = "center", n ? (a.moveTo(e.x + e.w / 2, e.y), a.lineTo(e.x + e.w - e.h / 2, e.y), a.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2), a.lineTo(e.x + e.w, e.y + e.h - e.h / 2), a.quadraticCurveTo(e.x + e.w, e.y + e.h, e.x + e.w - e.h / 2, e.y + e.h), a.lineTo(e.x + e.h / 2, e.y + e.h), a.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2), a.lineTo(e.x, e.y + e.h / 2), a.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y)) : a.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI), a.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")", a.fill(), a.closePath(), a.beginPath(), a.stroke(), a.fillStyle = "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? a.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : a.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), a.closePath()
    }, b.rectangle = function(e) {
      e = v(e);
      2 === e.len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w), a.clearRect(0, 0, o, r), a.drawImage(c, 0, 0, o, r), a.beginPath(), a.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .9 : 1)) + "px " + t.fontFamily, a.textAlign = "center", a.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")", a.fillRect(e.x, e.y, e.w, e.h), a.fillStyle = "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? a.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : a.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), a.closePath()
    };
    var C = {};

    function R(e) {
      e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
        return t + t + n + n + r + r
      });
      var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return !!t && {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
      }
    }

    function T(e, t) {
      var n, r = {};
      for (n in e) r[n] = e[n];
      for (n in t) r[n] = t[n];
      return r
    }
    C.getIcon = function() {
      var e = !1;
      return t.element ? e = t.element : t.elementId ? (e = w.getElementById(t.elementId)).setAttribute("href", e.getAttribute("src")) : !1 === (e = function() {
        for (var e = w.getElementsByTagName("head")[0].getElementsByTagName("link"), t = e.length, n = t - 1; n >= 0; n--)
          if (/(^|\s)icon(\s|$)/i.test(e[n].getAttribute("rel"))) return e[n];
        return !1
      }()) && ((e = w.createElement("link")).setAttribute("rel", "icon"), w.getElementsByTagName("head")[0].appendChild(e)), e.setAttribute("type", "image/png"), e
    }, C.setIcon = function(e) {
      var r = e.toDataURL("image/png");
      if (t.dataUrl && t.dataUrl(r), t.element) t.element.setAttribute("href", r), t.element.setAttribute("src", r);
      else if (t.elementId) {
        var o = w.getElementById(t.elementId);
        o.setAttribute("href", r), o.setAttribute("src", r)
      } else if (h.ff || h.opera) {
        var i = n;
        n = w.createElement("link"), h.opera && n.setAttribute("rel", "icon"), n.setAttribute("rel", "icon"), n.setAttribute("type", "image/png"), w.getElementsByTagName("head")[0].appendChild(n), n.setAttribute("href", r), i.parentNode && i.parentNode.removeChild(i)
      } else n.setAttribute("href", r)
    };
    var _ = {};
    return _.duration = 40, _.types = {}, _.types.fade = [{
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 0
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .1
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .2
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .3
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .4
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .5
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .6
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .7
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .8
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: .9
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], _.types.none = [{
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], _.types.pop = [{
      x: 1,
      y: 1,
      w: 0,
      h: 0,
      o: 1
    }, {
      x: .9,
      y: .9,
      w: .1,
      h: .1,
      o: 1
    }, {
      x: .8,
      y: .8,
      w: .2,
      h: .2,
      o: 1
    }, {
      x: .7,
      y: .7,
      w: .3,
      h: .3,
      o: 1
    }, {
      x: .6,
      y: .6,
      w: .4,
      h: .4,
      o: 1
    }, {
      x: .5,
      y: .5,
      w: .5,
      h: .5,
      o: 1
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], _.types.popFade = [{
      x: .75,
      y: .75,
      w: 0,
      h: 0,
      o: 0
    }, {
      x: .65,
      y: .65,
      w: .1,
      h: .1,
      o: .2
    }, {
      x: .6,
      y: .6,
      w: .2,
      h: .2,
      o: .4
    }, {
      x: .55,
      y: .55,
      w: .3,
      h: .3,
      o: .6
    }, {
      x: .5,
      y: .5,
      w: .4,
      h: .4,
      o: .8
    }, {
      x: .45,
      y: .45,
      w: .5,
      h: .5,
      o: .9
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], _.types.slide = [{
      x: .4,
      y: 1,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .9,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .9,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .8,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .7,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .6,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .5,
      w: .6,
      h: .6,
      o: 1
    }, {
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], _.run = function(e, n, r, o) {
      var a = _.types[w.hidden || w.msHidden || w.webkitHidden || w.mozHidden ? "none" : t.animation];
      if (o = !0 === r ? void 0 !== o ? o : a.length - 1 : void 0 !== o ? o : 0, n = n || function() {}, o < a.length && o >= 0) b[t.type](T(e, a[o])), f = setTimeout(function() {
        r ? o -= 1 : o += 1, _.run(e, n, r, o)
      }, _.duration), C.setIcon(i);
      else {
        n();
        return
      }
    }, ! function() {
      (t = T(g, e)).bgColor = R(t.bgColor), t.textColor = R(t.textColor), t.position = t.position.toLowerCase(), t.animation = _.types["" + t.animation] ? t.animation : g.animation, w = t.win.document;
      var s = t.position.indexOf("up") > -1,
        l = t.position.indexOf("left") > -1;
      if (s || l)
        for (var p = 0; p < _.types["" + t.animation].length; p++) {
          var d = _.types["" + t.animation][p];
          s && (d.y < .6 ? d.y = d.y - .4 : d.y = d.y - 2 * d.y + (1 - d.w)), l && (d.x < .6 ? d.x = d.x - .4 : d.x = d.x - 2 * d.x + (1 - d.h)), _.types["" + t.animation][p] = d
        }
      t.type = b["" + t.type] ? t.type : g.type, n = C.getIcon(), i = document.createElement("canvas"), c = document.createElement("img"), n.hasAttribute("href") ? (c.setAttribute("crossOrigin", "anonymous"), c.onload = function() {
        r = c.height > 0 ? c.height : 32, o = c.width > 0 ? c.width : 32, i.height = r, i.width = o, a = i.getContext("2d"), x.ready()
      }, c.setAttribute("src", n.getAttribute("href"))) : (c.onload = function() {
        r = 32, o = 32, c.height = r, c.width = o, i.height = r, i.width = o, a = i.getContext("2d"), x.ready()
      }, c.setAttribute("src", ""))
    }(), {
      badge: function(e, t) {
        t = ("string" == typeof t ? {
          animation: t
        } : t) || {}, d = function() {
          try {
            if ("number" == typeof e ? e > 0 : "" !== e) {
              var n = {
                type: "badge",
                options: {
                  n: e
                }
              };
              if ("animation" in t && _.types["" + t.animation] && (n.options.animation = "" + t.animation), "type" in t && b["" + t.type] && (n.options.type = "" + t.type), ["bgColor", "textColor"].forEach(function(e) {
                  e in t && (n.options[e] = R(t[e]))
                }), ["fontStyle", "fontFamily"].forEach(function(e) {
                  e in t && (n.options[e] = t[e])
                }), m.push(n), m.length > 100) throw Error("Too many badges requests in queue.");
              x.start()
            } else x.reset()
          } catch (e) {
            throw Error("Error setting badge. Message: " + e.message)
          }
        }, s && d()
      },
      video: function(e) {
        d = function() {
          try {
            if ("stop" === e) {
              u = !0, x.reset(), u = !1;
              return
            }
            e.addEventListener("play", function() {
              E(this)
            }, !1)
          } catch (e) {
            throw Error("Error setting video. Message: " + e.message)
          }
        }, s && d()
      },
      image: function(e) {
        d = function() {
          try {
            var t = e.width,
              n = e.height,
              c = document.createElement("img"),
              s = t / o < n / r ? t / o : n / r;
            c.setAttribute("crossOrigin", "anonymous"), c.onload = function() {
              a.clearRect(0, 0, o, r), a.drawImage(c, 0, 0, o, r), C.setIcon(i)
            }, c.setAttribute("src", e.getAttribute("src")), c.height = n / s, c.width = t / s
          } catch (e) {
            throw Error("Error setting image. Message: " + e.message)
          }
        }, s && d()
      },
      webcam: function(e) {
        if (window.URL && window.URL.createObjectURL || (window.URL = window.URL || {}, window.URL.createObjectURL = function(e) {
            return e
          }), h.supported) {
          var t = !1;
          navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia, d = function() {
            try {
              if ("stop" === e) {
                u = !0, x.reset(), u = !1;
                return
              }(t = document.createElement("video")).width = o, t.height = r, navigator.getUserMedia({
                video: !0,
                audio: !1
              }, function(e) {
                t.src = URL.createObjectURL(e), t.play(), E(t)
              }, function() {})
            } catch (e) {
              throw Error("Error setting webcam. Message: " + e.message)
            }
          }, s && d()
        }
      },
      reset: x.reset,
      browser: {
        supported: h.supported
      }
    }
  };
  "undefined" != typeof define && define.amd ? define([], function() {
    return t
  }) : e.exports ? e.exports = t : this.Favico = t
}()