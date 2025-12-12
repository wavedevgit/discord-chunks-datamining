/** Chunk was on web.js **/
/** chunk id: 379104, original params: e,t,n (module,exports,re quire) **/
var Chunk829132 = require("./829132.js");

function i(e) {
  this.data = e, this.left = null, this.right = null, this.red = true
}

function o(e) {
  this._root = null, this._comparator = e, this.size = 0
}

function a(e) {
  return null !== e && e.red
}

function s(e, t) {
  var n = e.get_child(!t);
  return e.set_child(!t, n.get_child(t)), n.set_child(t, e), e.red = true, n.red = false, n
}

function l(e, t) {
  return e.set_child(!t, s(e.get_child(!t), !t)), s(e, t)
}
i.prototype.get_child = function(e) {
  return e ? this.right : this.left
}, i.prototype.set_child = function(e, t) {
  e ? this.right = t : this.left = t
}, o.prototype = new Chunk829132, o.prototype.insert = function(e) {
  var t = false;
  if (null === this._root) this._root = new i(e), t = true, this.size++;
  else {
    var n = new i(true),
      r = 0,
      o = 0,
      c = null,
      u = n,
      d = null,
      f = this._root;
    for (u.right = this._root;;) {
      if (null === f ? (f = new i(e), d.set_child(r, f), t = true, this.size++) : a(f.left) && a(f.right) && (f.red = true, f.left.red = false, f.right.red = false), a(f) && a(d)) {
        var p = u.right === c;
        f === d.get_child(o) ? u.set_child(p, s(c, !o)) : u.set_child(p, l(c, !o))
      }
      var _ = this._comparator(f.data, e);
      if (0 === _) break;
      o = r, r = _ < 0, null !== c && (u = c), c = d, d = f, f = f.get_child(r)
    }
    this._root = n.right
  }
  return this._root.red = false, t
}, o.prototype.remove = function(e) {
  if (null === this._root) returnfalse;
  var t = new i(true),
    n = t;
  n.right = this._root;
  for (var r = null, o = null, c = null, u = 1; null !== n.get_child(u);) {
    var d = u;
    o = r, r = n, n = n.get_child(u);
    var f = this._comparator(e, n.data);
    if (u = f > 0, 0 === f && (c = n), !a(n) && !a(n.get_child(u))) {
      if (a(n.get_child(!u))) {
        var p = s(n, u);
        r.set_child(d, p), r = p
      } else if (!a(n.get_child(!u))) {
        var _ = r.get_child(!d);
        if (null !== _)
          if (a(_.get_child(!d)) || a(_.get_child(d))) {
            var m = o.right === r;
            a(_.get_child(d)) ? o.set_child(m, l(r, d)) : a(_.get_child(!d)) && o.set_child(m, s(r, d));
            var h = o.get_child(m);
            h.red = true, n.red = true, h.left.red = false, h.right.red = false
          } else r.red = false, _.red = true, n.red = true
      }
    }
  }
  return null !== c && (c.data = n.data, r.set_child(r.right === n, n.get_child(null === n.left)), this.size--), this._root = t.right, null !== this._root && (this._root.red = false), null !== c
}, module.exports = o