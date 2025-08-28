/** Chunk was on 44234 **/
/** chunk id: 166516, original params: e (module,exports,require) **/
! function() {
  var t = function(e) {
    "use strict";
    e = e || {};
    var t, r, n, o, i, a, s, c, l, d, p, u, h, f, y, g, w = {
      bgColor: "#d00",
      textColor: "#fff",
      fontFamily: "sans-serif",
      fontStyle: "bold",
      type: "circle",
      position: "down",
      animation: "slide",
      elementId: false,
      dataUrl: false,
      win: window
    };
    (h = {}).ff = "undefined" != typeof InstallTrigger, h.chrome = !!window.chrome, h.opera = !!window.opera || navigator.userAgent.indexOf("Opera") >= 0, h.ie = false, h.safari = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0, h.supported = h.chrome || h.ff || h.opera;
    var m = [];
    p = function() {}, c = u = false;
    var x = {};
    x.ready = function() {
      c = true, x.reset(), p()
    }, x.reset = function() {
      c && (m = [], l = false, d = false, a.clearRect(0, 0, o, n), a.drawImage(s, 0, 0, o, n), C.setIcon(i), window.clearTimeout(f), window.clearTimeout(y))
    }, x.start = function() {
      if (c && !d) {
        var e = function() {
          l = m[0], d = false, m.length > 0 && (m.shift(), x.start())
        };
        if (m.length > 0) {
          d = true;
          var r = function() {
            ["type", "animation", "bgColor", "textColor", "fontFamily", "fontStyle"].forEach(function(e) {
              e in m[0].options && (t[e] = m[0].options[e])
            }), T.run(m[0].options, function() {
              e()
            }, false)
          };
          l ? T.run(l.options, function() {
            r()
          }, true) : r()
        }
      }
    };
    var b = {},
      v = function(e) {
        return e.n = "number" == typeof e.n ? Math.abs(0 | e.n) : e.n, e.x = o * e.x, e.y = n * e.y, e.w = o * e.w, e.h = n * e.h, e.len = ("" + e.n).length, e
      };

    function E(e) {
      if (e.paused || e.ended || u) returnfalse;
      try {
        a.clearRect(0, 0, o, n), a.drawImage(e, 0, 0, o, n)
      } catch (e) {}
      y = setTimeout(function() {
        E(e)
      }, T.duration), C.setIcon(i)
    }
    b.circle = function(e) {
      e = v(e);
      var r = false;
      2 === e.len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w, r = true) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w, r = true), a.clearRect(0, 0, o, n), a.drawImage(s, 0, 0, o, n), a.beginPath(), a.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .85 : 1)) + "px " + t.fontFamily, a.textAlign = "center", r ? (a.moveTo(e.x + e.w / 2, e.y), a.lineTo(e.x + e.w - e.h / 2, e.y), a.quadraticCurveTo(e.x + e.w, e.y, e.x + e.w, e.y + e.h / 2), a.lineTo(e.x + e.w, e.y + e.h - e.h / 2), a.quadraticCurveTo(e.x + e.w, e.y + e.h, e.x + e.w - e.h / 2, e.y + e.h), a.lineTo(e.x + e.h / 2, e.y + e.h), a.quadraticCurveTo(e.x, e.y + e.h, e.x, e.y + e.h - e.h / 2), a.lineTo(e.x, e.y + e.h / 2), a.quadraticCurveTo(e.x, e.y, e.x + e.h / 2, e.y)) : a.arc(e.x + e.w / 2, e.y + e.h / 2, e.h / 2, 0, 2 * Math.PI), a.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")", a.fill(), a.closePath(), a.beginPath(), a.stroke(), a.fillStyle = "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? a.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : a.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), a.closePath()
    }, b.rectangle = function(e) {
      e = v(e);
      2 === e.len ? (e.x = e.x - .4 * e.w, e.w = 1.4 * e.w) : e.len >= 3 && (e.x = e.x - .65 * e.w, e.w = 1.65 * e.w), a.clearRect(0, 0, o, n), a.drawImage(s, 0, 0, o, n), a.beginPath(), a.font = t.fontStyle + " " + Math.floor(e.h * (e.n > 99 ? .9 : 1)) + "px " + t.fontFamily, a.textAlign = "center", a.fillStyle = "rgba(" + t.bgColor.r + "," + t.bgColor.g + "," + t.bgColor.b + "," + e.o + ")", a.fillRect(e.x, e.y, e.w, e.h), a.fillStyle = "rgba(" + t.textColor.r + "," + t.textColor.g + "," + t.textColor.b + "," + e.o + ")", "number" == typeof e.n && e.n > 999 ? a.fillText((e.n > 9999 ? 9 : Math.floor(e.n / 1e3)) + "k+", Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .2 * e.h)) : a.fillText(e.n, Math.floor(e.x + e.w / 2), Math.floor(e.y + e.h - .15 * e.h)), a.closePath()
    };
    var C = {};

    function R(e) {
      e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, r, n) {
        return t + t + r + r + n + n
      });
      var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
      return !!t && {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
      }
    }

    function A(e, t) {
      var r, n = {};
      for (r in e) n[r] = e[r];
      for (r in t) n[r] = t[r];
      return n
    }
    C.getIcon = function() {
      var e = false;
      return t.element ? e = t.element : t.elementId ? (e = g.getElementById(t.elementId)).setAttribute("href", e.getAttribute("src")) : false === (e = function() {
        for (var e = g.getElementsByTagName("head")[0].getElementsByTagName("link"), t = e.length, r = t - 1; r >= 0; r--)
          if (/(^|\s)icon(\s|$)/i.test(e[r].getAttribute("rel"))) return e[r];
        returnfalse
      }()) && ((e = g.createElement("link")).setAttribute("rel", "icon"), g.getElementsByTagName("head")[0].appendChild(e)), e.setAttribute("type", "image/png"), e
    }, C.setIcon = function(e) {
      var n = e.toDataURL("image/png");
      if (t.dataUrl && t.dataUrl(n), t.element) t.element.setAttribute("href", n), t.element.setAttribute("src", n);
      else if (t.elementId) {
        var o = g.getElementById(t.elementId);
        o.setAttribute("href", n), o.setAttribute("src", n)
      } else if (h.ff || h.opera) {
        var i = r;
        r = g.createElement("link"), h.opera && r.setAttribute("rel", "icon"), r.setAttribute("rel", "icon"), r.setAttribute("type", "image/png"), g.getElementsByTagName("head")[0].appendChild(r), r.setAttribute("href", n), i.parentNode && i.parentNode.removeChild(i)
      } else r.setAttribute("href", n)
    };
    var T = {};
    T.duration = 40, T.types = {}, T.types.fade = [{
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
    }], T.types.none = [{
      x: .4,
      y: .4,
      w: .6,
      h: .6,
      o: 1
    }], T.types.pop = [{
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
    }], T.types.popFade = [{
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
    }], T.types.slide = [{
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
    }], T.run = function(e, r, n, o) {
      var a = T.types[g.hidden || g.msHidden || g.webkitHidden || g.mozHidden ? "none" : t.animation];
      if (o = true === n ? true !== o ? o : a.length - 1 : true !== o ? o : 0, r = r || function() {}, !(o < a.length) || !(o >= 0)) return void r();
      b[t.type](A(e, a[o])), f = setTimeout(function() {
        n ? o -= 1 : o += 1, T.run(e, r, n, o)
      }, T.duration), C.setIcon(i)
    }, (t = A(w, e)).bgColor = R(t.bgColor), t.textColor = R(t.textColor), t.position = t.position.toLowerCase(), t.animation = T.types["" + t.animation] ? t.animation : w.animation, g = t.win.document;
    var _ = t.position.indexOf("up") > false,
      I = t.position.indexOf("left") > false;
    if (_ || I)
      for (var M = 0; M < T.types["" + t.animation].length; M++) {
        var U = T.types["" + t.animation][M];
        _ && (U.y < .6 ? U.y = U.y - .4 : U.y = U.y - 2 * U.y + (1 - U.w)), I && (U.x < .6 ? U.x = U.x - .4 : U.x = U.x - 2 * U.x + (1 - U.h)), T.types["" + t.animation][M] = U
      }
    return t.type = b["" + t.type] ? t.type : w.type, r = C.getIcon(), i = document.createElement("canvas"), s = document.createElement("img"), r.hasAttribute("href") ? (s.setAttribute("crossOrigin", "anonymous"), s.onload = function() {
      n = s.height > 0 ? s.height : 32, o = s.width > 0 ? s.width : 32, i.height = n, i.width = o, a = i.getContext("2d"), x.ready()
    }, s.setAttribute("src", r.getAttribute("href"))) : (s.onload = function() {
      n = 32, o = 32, s.height = n, s.width = o, i.height = n, i.width = o, a = i.getContext("2d"), x.ready()
    }, s.setAttribute("src", "")), {
      badge: function(e, t) {
        t = ("string" == typeof t ? {
          animation: t
        } : t) || {}, p = function() {
          try {
            if ("number" == typeof e ? e > 0 : "" !== e) {
              var r = {
                type: "badge",
                options: {
                  n: e
                }
              };
              if ("animation" in t && T.types["" + t.animation] && (r.options.animation = "" + t.animation), "type" in t && b["" + t.type] && (r.options.type = "" + t.type), ["bgColor", "textColor"].forEach(function(e) {
                  e in t && (r.options[e] = R(t[e]))
                }), ["fontStyle", "fontFamily"].forEach(function(e) {
                  e in t && (r.options[e] = t[e])
                }), m.push(r), m.length > 100) throw Error("Too many badges requests in queue.");
              x.start()
            } else x.reset()
          } catch (e) {
            throw Error("Error setting badge. Message: " + e.message)
          }
        }, c && p()
      },
      video: function(e) {
        p = function() {
          try {
            if ("stop" === e) {
              u = true, x.reset(), u = false;
              return
            }
            e.addEventListener("play", function() {
              E(this)
            }, false)
          } catch (e) {
            throw Error("Error setting video. Message: " + e.message)
          }
        }, c && p()
      },
      image: function(e) {
        p = function() {
          try {
            var t = e.width,
              r = e.height,
              s = document.createElement("img"),
              c = t / o < r / n ? t / o : r / n;
            s.setAttribute("crossOrigin", "anonymous"), s.onload = function() {
              a.clearRect(0, 0, o, n), a.drawImage(s, 0, 0, o, n), C.setIcon(i)
            }, s.setAttribute("src", e.getAttribute("src")), s.height = r / c, s.width = t / c
          } catch (e) {
            throw Error("Error setting image. Message: " + e.message)
          }
        }, c && p()
      },
      webcam: function(e) {
        if (window.URL && window.URL.createObjectURL || (window.URL = window.URL || {}, window.URL.createObjectURL = function(e) {
            return e
          }), h.supported) {
          var t = false;
          navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia, p = function() {
            try {
              if ("stop" === e) {
                u = true, x.reset(), u = false;
                return
              }(t = document.createElement("video")).width = o, t.height = n, navigator.getUserMedia({
                video: true,
                audio: false
              }, function(e) {
                t.src = URL.createObjectURL(e), t.play(), E(t)
              }, function() {})
            } catch (e) {
              throw Error("Error setting webcam. Message: " + e.message)
            }
          }, c && p()
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
  }) : module.exports ? module.exports = t : this.Favico = t
}()