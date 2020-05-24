(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.symbol_torse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// protagoniste
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996400").s().p("AgBAGQgQgEgMgJIAAAAIAOAHIAPADIAOADIAQACIAAAAIgIAAQgNAAgKgCg");
	this.shape.setTransform(0.6,-12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC8700").s().p("Ag4BcQgFAAAAgGIgFheQgEgzgLgjQAJAYAaAyQA1BpApgDIAigBQgBAKgJABQggADgfAAQggAAghgDg");
	this.shape_1.setTransform(-1.1,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AARAHIgYAAIgFAeAgHAHIAGgnIASAA");
	this.shape_2.setTransform(6.4,-3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFA800").s().p("Ag7CeQgFAAAAgFQgDhBgDgeQgDgzgLgjQgLgkAYgsQAbgxAugEQAOAAARAJQAUALAGACQAYAGAEBYQAFBRgOBwQgBAKgJABQggADgeAAQghAAgggEg");
	this.shape_3.setTransform(-0.6,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_torse, rect = new cjs.Rectangle(-9.5,-15,18.6,32.4), [rect]);


(lib.symbol_tete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tete
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595959").s().p("AgFASQgIgCgEgDQABgGAMgIIAWgRQgNAMgEALQgDAMAIABQgCABgDAAIgGgBg");
	this.shape.setTransform(-11.3,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3).p("AANgCQABAGgNADQgEABgEgBQgEgCgBgCQgBgDAEgCQADgCAGgBQAEgCAFACQAEABAAACg");
	this.shape_1.setTransform(-2.6,-11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ABAB99").s().p("AgHAGQgEgBgBgCQgBgDAEgCQADgCAGgBQAEgCAFACQAEABAAACQABAGgNACIgEABIgEgBg");
	this.shape_2.setTransform(-2.6,-11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.3).p("AgkgjQAVABAVASQAaAVAFAj");
	this.shape_3.setTransform(1.6,-7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.3).p("AgYgoQAKAEAPAUQAWAdACAh");
	this.shape_4.setTransform(-0.2,-6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.3).p("AALg2QgQAagDAdQgDAcAJAa");
	this.shape_5.setTransform(-4.1,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3).p("AAagxQgkAZgJAbQgHAUAHAf");
	this.shape_6.setTransform(-6.2,-6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.3).p("AhGAxQgCgBAAgCQgJgfgBgKQAAgVARgNQAKgIAlgPIACAAQAVgFAiAFIAFACQAXAOAPAzQABABgCABQhhA2g2gWg");
	this.shape_7.setTransform(-1.8,-6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595959").s().p("AhGAxQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgJgfgBgKQAAgVARgNQAKgIAlgPIACAAQAVgFAiAFIAFACQAXAOAPAzQABAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQhFAmgvAAQgTAAgQgGg");
	this.shape_8.setTransform(-1.8,-6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.3).p("AgyAJIAsgiQAPAFAlgBQgbAfgTAKQgaANgXgQQgCgCgBgCQAAgDACgBg");
	this.shape_9.setTransform(-8.4,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#262626").s().p("AguARQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAAAIAsgiQAPAFAlgBQgaAfgVAKQgKAGgLAAQgOAAgNgJg");
	this.shape_10.setTransform(-8.7,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgHgGQABgFAGgBIAJACIgJAAQgEABgBAEIgBAIIABAKQgFgMADgHg");
	this.shape_11.setTransform(6,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdAQIgEgKQgDgGACgDIhKAAIAAgFIBLAAIAGgHQAIgDAIADIACACQADAPgDAOQgFACgFAAQgFAAgFgCg");
	this.shape_12.setTransform(2.3,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5A3825").s().p("AhFAJIAQgjQAKgTAOgOQBKgBAZAVQgVAIgOgEQABANgNAPQgQARgCAFQgHgPgLgBQgKAAgFAIQgMAbAtAKIgaAQQgtgYgDgbg");
	this.shape_13.setTransform(-0.8,-1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AD8E63").s().p("AAAASIgHgnIAHAAQgDAaAMARg");
	this.shape_14.setTransform(-2.6,5.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EAC086").s().p("AgFA2QgUgHgEgMQgDgQgRgkQgKgXAKgEQA4gTAhAJQAMAlgJAKQgDADACAEIANAUQgFAFgHAAQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAABIACAPQAAAIgCADQgLADgKAAQgNAAgLgEg");
	this.shape_15.setTransform(2.2,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EAC086").s().p("AgPA4QgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQgKg0gCgWQgCglAPgFIAwBTIAAArQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQgYgCgTgHg");
	this.shape_16.setTransform(-0.9,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_tete, rect = new cjs.Rectangle(-14.6,-13.1,22.4,21.5), [rect]);


(lib.symbol_piedGauche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// protagoniste
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.3).p("AhIAFQBBAhBPg3");
	this.shape.setTransform(1.4,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhJAdQgBgSABgPQAAgTAEgEQAdgVAiATQAEANAYAEQASADAXgDQATAOgNAHQgrAegtAAQgaAAgcgKg");
	this.shape_1.setTransform(1.2,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_piedGauche, rect = new cjs.Rectangle(-6.9,-4.4,16.6,8.5), [rect]);


(lib.symbol_piedDroit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// protagoniste
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.3).p("AhGgQQA9AwBSgZ");
	this.shape.setTransform(-0.1,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhKANQAEgQAGgPQAHgSAEgDQAtgTAmAlQADATAkASQANATgPADQgaAIgYAAQgxAAgqghg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_piedDroit, rect = new cjs.Rectangle(-8.2,-4.6,16.4,9.9), [rect]);


(lib.symbol_molletGauche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// protagoniste
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("AgjBcQgFgOAPgQQgWgngJgoQgKgpAFgeIA9gIQARAPAUA3QAUA3AHA4QgfAMgeAAQgTAAgTgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_molletGauche, rect = new cjs.Rectangle(-6.3,-9.7,12.8,19.5), [rect]);


(lib.symbol_molletDroit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// protagoniste
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414241").s().p("AhHBwQgggLgGgcQAHgOANgOQAQgTAOgDQAZg3BAhUQAzgRAdAlQgQAwgwBAQguA9gJAuQgzgIgLgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_molletDroit, rect = new cjs.Rectangle(-11,-12.2,22,24.5), [rect]);


(lib.symbol_cuisseGauche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// protagoniste
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#232323").s().p("AAUBeQgQgmgrhFQgog+gKgKQgIgIBHgDQBFgDAHAOQAmBcACBDQgVAXgcAAQgKAAgLgDg");
	this.shape.setTransform(-2.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_cuisseGauche, rect = new cjs.Rectangle(-11.5,-9.7,18.1,19.5), [rect]);


(lib.symbol_cuisseDroit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// protagoniste
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAXQgDgDACgDQAPgRADgUQABgDAEAAQADABAAAEQgFAWgPATIgDABIgCgBg");
	this.shape.setTransform(2.5,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414241").s().p("AAKgTQgEAUgPATg");
	this.shape_1.setTransform(2.5,-3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414241").s().p("AhUA+QAIgYAIg0QAIgwAGgPQAHgPA+AAQA+AAAIAPQgkBNgMAYQgZAzgQARIgRABQg0AAgLgfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_cuisseDroit, rect = new cjs.Rectangle(-8.5,-9.2,17,18.6), [rect]);


(lib.symbol_coeur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3/3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AgkgyQAoAHAPAUQASAXgOAtQAcgtgJgdQgJgagngTg");
	this.shape.setTransform(15.8,-8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQgIQgQgVgogHIAegXQAoATAIAaQAKAdgdAtQAOgtgRgXg");
	this.shape_1.setTransform(16.2,-10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("AgIDiQCYhQBAhtQA2hcgXhRQgWhMhHgLQhNgMhNBSQhRhOhHAPQhAAOgQBOQgRBRA0BaQA+BqCHBJg");
	this.shape_2.setTransform(0,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B90004").s().p("AjNAvQg0haARhRQAQhOBAgOQBHgPBRBOQBNhSBNAMQBHALAWBMQAXBRg2BcQhABtiYBQQiHhJg+hqg");
	this.shape_3.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_coeur, rect = new cjs.Rectangle(-25.5,-23,51.3,47.2), [rect]);


(lib.symbol_brasGauche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// protagoniste
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996400").s().p("AhNAKQgVgKAGgBIBAAFQgCACA/gNIA+gNQhQAhhAAJQgIgDgUgJg");
	this.shape.setTransform(15.4,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC8500").s().p("AiRAFQgFgDgBgHQgBgoAhgUQAGgDAIADQBKAjArAhQASgNAngEIBDgGQAKgBAFAKQAEANgJAQQgCAFgFACQhLAhhEAKQhSgTg7gsg");
	this.shape_1.setTransform(11,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_brasGauche, rect = new cjs.Rectangle(-4.2,-4.6,30.4,13.6), [rect]);


(lib.symbol_brasDroit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// protagoniste
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996400").s().p("AglgwQACgFAGABQAsADBbgNQhMAXg6ADQgEAXgaAbIgvAxQA6hYAKgXg");
	this.shape.setTransform(-8.2,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC8500").s().p("AhwBnQgMgGgFgTQgBgFADgFQAihJAtg1QBLgpBHgFQAHgBAFAFQAcAdgMAlQgDAHgHACQhMAXg6ACQgEAXgaAdIgvAwQgEAFgGAAQgDAAgEgCg");
	this.shape_1.setTransform(-9.2,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#996A02").ss(0.3).p("AgHgLQAEANAPAG");
	this.shape_2.setTransform(-23.1,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E1E01").s().p("AgZArQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgJAKgPQgGAGgHACQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQACgJAJgIIgEACQgHADgEgGQAAgHAVgNIABgBQAKgRAMgHIADAAQAPAEAMANIABACIgBANQgDAHAFAGQADAEABAFQABAGgDADQgDAEgEgDIgHgIQgDgFgBgIQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBABAAAAQgMAmgLAEQgHgBADgKIACgFQgGAMgJAFIgCABIgCgBg");
	this.shape_3.setTransform(-22.8,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_brasDroit, rect = new cjs.Rectangle(-26.9,-3.9,30.7,26.9), [rect]);


(lib.symbol_boss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#324D31").s().p("AicgRQhIhgC6hCQiIBEBMBkQBABSDXBtQkNhyhAhTg");
	this.shape.setTransform(-85.5,-134.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#324D31").s().p("AgVmjQhUIQDLE3Qk9kUDGozg");
	this.shape_1.setTransform(25.4,-105.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#324D31").s().p("Am+DDQhziThilHQC1GbE7B9QCEA1CLgGQCCgGByg2QBvg1BHhTQBIhVANheQAMhmg7hbQhChkiShLQCFAFBMBhQBGBYAVCqQghD2iqCCQiaB2kRAZQk0gdiojYg");
	this.shape_2.setTransform(26.2,-46.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#86CC82").s().p("AENPyQkVgpi6kTQhjiShNjhQgwiNhfioQg1hehqg/QgdgQgbgMQgXgKg7gUQg0gSgdgOQgqgVgegdQghgigLgnQgMgsATguQARgtAngaQAegUAmgGQAkgGAkAJQAcAHAfAeIAzAzQAkAdA+AcIBnAuQABAAABAAQAAAAABAAQAAAAAAgBQABgBAAAAIgBh6QADhtAXhQQAchfA9hIQBAhMBGgJQBHgJBKA+QArAlA2A7IBcBnQAJAJALAOIAQAVIACABQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAUgwAnhgQAjhUAcg5QAfg9BFggQBJgjA8AdQAbAOAUAZQAUAZAHAfQANA+ghA6QgSAhgtAqQg2A0gPATQg2BFgTB+Qg2FZBVE3QAWBRA7BiQAaAtAzAQQAxAPA3gQQA1gQAggoQAhgpgCgzQgCghgigoQgFgGgUACQgVADgEAGQgNAXgIA1QgCAGAEAKIAGASIgBADQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgxgFgaglQgaglAIgzQAQhdBNgpQBOgoBWApQB8A6A1CgQA0CaguCWQguCXiBBeQjjCmjkAAQguAAgugGgAi6nAQgWAOgLAZQgJAVAJAUQAGAMASAZQAHAMAGASIAKAgQAVBGAdBGQAvBwAagFQAAgBABAAQAAAAAAgBQABAAgBgBQAAAAAAAAQgYhQgGhoQgChggDgTQgBgMACgnQABgngIgSQgMgaglgDIgFAAQgXAAgUANgAkupPQgPAZAAAXQAdAXAOAxQAMAoAFgCQACAAADgjQAEgiABgBQAMg8g4hRQACAdgNAYgAirrtQgHAOADAzQABAbAEAjQACAYAPAOQAHAFAJAFIABAAQADACARAYQAYAYAoABIACgBQAAgBABAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQgqg+ALg2IAAgCQgBgCgrgjQgigbgHgnQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgBAAIgCABg");
	this.shape_3.setTransform(-6,-101.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjHGVIAAspIGPAAIAAMpg");
	this.shape_4.setTransform(-25.8,-136.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_boss, rect = new cjs.Rectangle(-107.2,-203,202.5,203.2), [rect]);


(lib.symbol_antagoniste = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhEiuQAFCRAfBPQAiBZBFAQQgygHgUAbQhQiHALjWg");
	this.shape.setTransform(-24.8,-20.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1).p("AAhgcIhBA5");
	this.shape_1.setTransform(-3.1,-56.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1).p("AgZgcIAzA5");
	this.shape_2.setTransform(-14.4,-56.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAXQgKgIgBgNQAAgMAIgJQAIgKANgBQAMAAAJAIQAKAJABAMQAAAMgIAKQgJAJgMABIgCAAQgLAAgIgIg");
	this.shape_3.setTransform(-1.2,-51);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAfQgNgBgIgKQgIgKAAgLQABgNAKgIQAKgIALAAQANABAIAKQAJAJgBAMQgBANgKAIQgIAIgMAAIgBAAg");
	this.shape_4.setTransform(-16.6,-51.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").p("AjmGAQgdASghhxQgih1gCiOQgDinAyhtQA8iDB/gRQDIgZAuC1QAOA3AEBhQADBiAGAXQAUBVAgA4QAhA4AzAkQAYAQgQAHQgLAEgsACQh9AHgoASQgpAUgWAkQgNAXgngEQgWgCghgJQgxgPgFgBQhAgPgtAdg");
	this.shape_5.setTransform(-0.7,-39.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMGNQgWgCghgJIg2gQQhAgPgtAdQgdASghhxQgih1gCiOQgDinAyhtQA8iDB/gRQDIgZAuC1QAOA3AEBhQADBiAGAXQAUBVAgA4QAhA4AzAkQAYAQgQAHQgLAEgsACQh9AHgoASQgpAUgWAkQgLAUgfAAIgKgBg");
	this.shape_6.setTransform(-0.7,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbol_antagoniste, rect = new cjs.Rectangle(-34.6,-80.3,71,83.1), [rect]);


(lib.fusil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{normal:0,tire:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// protagoniste
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E1E01").s().p("AAIAJIgSgFQgDgBgBgDQgCgBABgDQABgCACgCIAFAAIATAFQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQABACgBACQgBAGgEAAIgDgBg");
	this.shape.setTransform(-12,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E1E01").s().p("AAEAKIgOgGQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAEgHQAAgBABgBQAAAAABAAQAAAAABAAQABAAAAABIAOAIQAAAAABABQAAAAAAABQABAAgBABQAAAAAAABIgEAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_1.setTransform(-13.1,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E1E01").s().p("AgYABQARgVAUACQAFABAEAFIABACQAGAZgKgBQgEgCgCgDQgEgIgBACIgDAGQgDAGgHAEg");
	this.shape_2.setTransform(-15.1,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E1E01").s().p("AgQACQgBgGAHgBIATgCQAHgBABAHQAAACgCACQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgTADIgCAAQgFAAgBgGg");
	this.shape_3.setTransform(-11.9,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2E1E01").s().p("AgSABQAAgGAGAAIAYgBQAHAAAAAGQAAAGgGAAIgYABQgGAAgBgGg");
	this.shape_4.setTransform(-11.6,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCEE21").s().p("AAAAAIAAgXIABAXIgBAYQAAgMAAgMg");
	this.shape_5.setTransform(-1.8,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFBE17").s().p("AgBAXIAAgtQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAtQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_6.setTransform(-1.8,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCEE21").s().p("AAAAAIAAgfIABAfIgBAgQAAgPAAgRg");
	this.shape_7.setTransform(-4.4,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBE17").s().p("AgCAiIAAhDQAAgBAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABABQABAAAAAAQABABAAAAQAAABAAABIABBDQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_8.setTransform(-4.4,-0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCEE21").s().p("AgCAAQAAgaACgNQABANACAaQAAAWgDASQgCgUAAgUg");
	this.shape_9.setTransform(-7,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBE17").s().p("AgCArIgBhVQAAgEADAAQADAAAAAEIABBVQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_10.setTransform(-7.1,-1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAAIAAgGIABAGIgBAHg");
	this.shape_11.setTransform(0,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FBB03B").s().p("AgDAIIAAgOQAAgDADgBQAEAAAAAEIAAAOQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQgCAAgBgDg");
	this.shape_12.setTransform(0,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AAAAJQg0gEgogOIBcAJIBdADQgeAHgkAAIgbgBg");
	this.shape_13.setTransform(-9.3,-0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhcgGIC5ALQgaACgbAAQhAAAhEgNg");
	this.shape_14.setTransform(-9.3,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#80BAFF").s().p("AhYARQBhhOBQBTQhWgqhbAlg");
	this.shape_15.setTransform(-9.3,-3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2E8EFF").s().p("AgCArQgvgHgrgnQBlhSBUBWIAAAPQgmAcgpAAIgQgBg");
	this.shape_16.setTransform(-9.3,-1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE517").s().p("AgEgBQgagBgPAFQAbgLAWgBQAbgBAPAQQgPgBgPAFQAGgKgagBg");
	this.shape_17.setTransform(-13.6,-6.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFBE17").s().p("AgzgDQBDgfAkAlIg6APQgBgOgsgHg");
	this.shape_18.setTransform(-13.4,-5.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFBE17").s().p("AgPArQgYgGAPgKQARgigKglIAwAXQgeAdgBAbQAGAKgJAAQgEAAgIgCg");
	this.shape_19.setTransform(-13.8,4.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2E1E01").s().p("AgTAQIgCgDQgEgNADgTQBCgZgdBFQgEABgEAAQgMAAgOgKg");
	this.shape_20.setTransform(-15.4,5.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2E1E01").s().p("AgJAUQgGgFgCgHIgBgIQgCgHAEgHQAFgGAHgCQAHgBAHAEQAGAEACAIIABAHQACAIgEAHQgFAGgHACIgEAAQgFAAgFgDg");
	this.shape_21.setTransform(-14.5,5.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#33FFFF").s().p("AgCArQgvgHgrgnQBlhSBUBWIAAAPQgmAcgpAAIgQgBg");
	this.shape_22.setTransform(-9.3,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_22},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.6,-7.3,19,16);
p.frameBounds = [rect, rect];


(lib.anim_roue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ANIM
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AAEgDQgHgKgNAAQAOgHAMAPQALANgIAIIgJgTg");
	this.shape.setTransform(17.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAEgDQgHgKgNAAQAOgHAMAPQALANgIAIIgJgTg");
	this.shape_1.setTransform(-17.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},5).wait(1));

	// ANIM
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AAEgDQgHgKgNAAQAOgHAMAPQALANgIAIIgJgTg");
	this.shape_2.setTransform(17.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AAEgDQgHgKgNAAQAOgHAMAPQALANgIAIIgJgTg");
	this.shape_3.setTransform(-17.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},1).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19.1,-1.6,38.3,3.3);
p.frameBounds = [rect, rect=null, rect, rect, rect, new cjs.Rectangle(-19.1,-1.6,38.3,3.3)];


(lib.clipDecorMobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"1F":0,"2F":1});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B3104").s().p("AktChQgIgCAAgIQABgJAIgBQD9giCrg8QAMgFAJgKQAIgLACgNQAOhWg4hEQgFgFADgHQACgGAHgBQBbgOBGAdQATAIAEAUQARBVgkBqQgGATgSAEQi2AziFARQhLALg+AAQg9AAgxgKg");
	this.shape.setTransform(636.9,141.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A39248").s().p("AgJAMQgFgFAAgGQgBgGAEgFQAFgFAGAAQAFAAAFAEQAFAEABAHQAAAFgEAFQgFAFgGABQgGAAgEgEg");
	this.shape_1.setTransform(653.3,79.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A39248").s().p("AgEAGQgFgFAEgFQAFgGAFAFQADACAAADQAAADgCACQgCADgDAAQgDAAgCgCg");
	this.shape_2.setTransform(652.1,78);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A39248").s().p("AhHhDQBCgrA7A3QAxBghSAuQA4iPiUgLg");
	this.shape_3.setTransform(661.7,74.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9DF6E").s().p("AAABkQhEgKgTgZQgMgQAAgxQAAgxAdgbQAagYAsAAQAgAAAgAeQAkAgAAAmQAAAwgjAeQgaAXgcAAIgLgBg");
	this.shape_4.setTransform(659.9,74.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AguFlQgMADgIgRQgHAAAAgFQgHAFgGgGQgFAAgCgEQgCgEADgEQACgCACgGIAEgHQgBgKgBgRIgCgbQgBgDAAgEIABgGIgCgVQgFgYgNgWQgBgEgEgDIgHgFQgCgBgDgGQgDgEgCgBIgLgNQgEgKgJgEQgIgJgGgCQgLgEgFgDQgJgEgLAFQgJADgFAIQgFAJAAAJQABAEgEgBIgDgMIgIAGIgIAGQgDgCAEgEIAGgGQABgEAEgCQAGgDABgCIAHgHQAEgFgFgCQgDgBgEgEQgEgFAFgBQACADANAFQADgCAFgCIAIgDQACgBgCgFIAAgGQgBgDABgCQAEAAAAAGQABAHACABQAEAHAPADQAMADAAgEIgBgYIgKgLQgDgFAFACQAEACACACQADAFADgEQADgFACABQABAGgBANQACAZAMALQAJAFAFAHQACAEAFACQAGADAAgGQgGggAAgLIABgHQABgEgCgBQgCgDAAgGIAAgJIAAgcQgBgRgCgLQgCgIgGgEQgDgCgFABIgJADQgMgCgDgHIgCgIQgBgGgCgCIgDgUQgDgagOgMQgDgDgFgCIgJgDQgCgDgHgDQgHgDgCgCQgEgEAEAAQAEgBACADQABABAAAAQAAABABAAQAAAAABAAQAAAAAAgBIADgCIAGAHQAEAEAEgBQAFACgBgEIgCgIQgEgHgDgIQgIgSgDgKQABgEADADQADAEAAADIAIAPQACABAAgMIACgIQABgGAEACQABAGgDAMIgCAJIAAAIQADAOANATIAGAHQADAEAEgBQgCgJABgRQgEgNABgGQgBgEABgEQACgFADAFQgBAEAEAMQAAAHADgHQAJgKACgHQAAgKAEgQQAFgNgFgFQgIgRAFgJQADgBABAFIgBAIQAAAEADAFIAFAHIAEgIQACgFADgCQAAgBABgBQAAAAABAAQAAAAABAAQAAAAABABQAAABAAAAQAAABAAABQgBAAAAAAQgBABAAAAQgHAPgEAOQgGAJAEAJQABgDAOgMQAOgNABgFQAGgDgBAGQAAAFgEADIgWAYIgOAPQgIAKgBAJQgDACgBAFIgDAKQACAFgCAJQgCAKAAAEQAAARAJANQACAAgBgMQAAgMAJgQIAJgMQAFgDAAgEIAAgIIABgJQAAgFACgDQAAgIAHgHIAigeQgLgFgCgDQgFgGAAgKQgBgNgBgEQgDgHgCgOQAAgLgCgGQgDgLAAgGQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABIADAEQADAGAAAPQAAAGAHAJQAIgMACgMQABgFAFgFIAHgIQACgEAAgJIABgOQABgFACACQADADgCACQAAAMACgEQAHgMAAgEQADgFACAEQACADgDACQgEAHAHgHIAGgGQADgCAAAEIgGAHIgIAHQgEAEgEAIIgGANQAAAAAAABQABAAAAAAQABAAABAAQABgBABAAIAGgFQAEgDALgEIAFgIQAEgEAEAAQABADgFAFQgEAFAEACQAHAEAKABQADgCACADQABAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgEACgFgCIgJgDQgEgBgOABIgIAFQgFAEgEAAQgKACgDAJQgCAKgDAFQgCAIgHAGIACANQgBABAAABQAAAAABABQAAAAAAAAQAAAAABAAIADgDIAEgIQADgFADgCQACADgCAFIgFAHIgFAJQgDAFAEADIAIAEQAEADACgDQAKgLADgMIAAgPQgDgLABgFQAEgCABAFIABAIQACACAAAGQAAAHABABQANgJAFgLQADgDABgGQACgGACgCQAEgBgBADIgCAGQACgCAEgBQAEgCgCAEQgGADgCADIgJAMQgDAFgHAIQgIAHgDAFQgDAJgIAKQAPAGAGAEQADADACgDIACgGQAGgMABgBQAHgHAEgNQAIgRAIgJQACgGABgKIAIgcQAEgMABgPQACgCgCgEQgCgDACgDQADgDAEADQADADACgCIAJgHQAFgEgBgEIgDgKQgCgGACgEQAEgDABAGQABAGACABQACgBACgFIADgIQAAgFAFgBQAFgBAAAFQgDADgCAGIgEALQAAADgEADQgDAEAAACQgCAFgGAGIgJAKQgDAFgCAJIgDAOQgCAFADgCQAEgBACgCQAFgHAIgPQACgDAGgCQAGgCABgCQAFgDABgFIACgKQgBgFAEgFIAFgJIACgHQAAgFADABQACAEgBAFIgDAIIgEAIQgDAFACADQACABAEgDIAFgFQAEgEACgGIADgKIAIgUQADABAAAFQAAAEgCADQAAAAABAAQAAAAAAAAQABAAABAAQABgBABAAIAGgDQAGgCAJgJQABAAAAABQABAAAAABQAAAAAAABQgBAAAAABIgEAFQgFACAEABIAHABQAFACgEACQgFACgDgCQgHgCgNAHQgEACgCAFIgDAJIAIgHQAGgFARAAQAEACADgDIAGgGQAEgBADgEIAEgHQAFAAgBAEQgCAGACABQALAEALgCQAEgBAGgEIAJgFQAEgBgCAEIgFAEQgEADAHgBQAFgBAAADQgBAEgEgBIgJABQgFABAAADQAGADARAAQAJABAGgLQAEgDAAAEQAAAEgCACQANAEgHADQgXABgHACIAHAHQAGAEACADQADAIAJAGIARAGQAEAAACADQADACgEABIgSgGQACAGAHAJIAGAGQADAEgEABQgEgCgIgJQgKgQgDgCQgCAFADAMQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAAAABgBIgEgSQACgKgMgJIgJgFQgFgEgCgDQAAACAEAFQAEAFABADQAEADgEACQgEADgCgFQgHgNgJgKQgKgIgQACQgEABgEACQgFACACACIAKABQAGACgEADQgKACgHgDQgFgCgLACQgLAFgNAMQgFADAKAEIAIAEQAEACAEgCQAPgGATgBQADgBAGADQAFACADgCIAKgBQAGAAADADQABADgHAAQgHAAAAACIAJAFQAFACADAEQADAEgFgBQgEAAgCgDQgNgEgFgGIgVgCQgEAAgGACQgGACgEgBQABADACABIAGABIALAEIALACIAIACQAFACAAADIgJAAQgGgCgDABQgBAEAKAIQACAEgEgBQgEAAgBgDQgLgLgCgDQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgEABgGgDQgGgDgDAAQgIAAgUgIQgDgCgDABIgGAEQgIAEgFAIQgJAJgEAIQgCADgIAFQgHAFgCAEQgBAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAQABAAAAAAQAFABAEgEIAIgGQAMgEgBAFIAGAAQABABABAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgEAFgFIAHgHQAAgEAEAAQABAAAAABQABAAAAABQAAAAAAABQgBABAAABQgHAFgDALQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIAGgDQAEABgEAEQgEAEgDAAQgFgBgBAGQgCAHgCABIgKALIgJALQgIAHgCAOQgBAFACAFQACAFAGgDQAPgJABgQQgBgFAFgFIAJgHQAAgDAEgEIAGgGQABgDAEgCQAEgCgBAFQAHgEALgJQAJAAgNAKQgEAEgMAGQgFADgGALQgKAIAAAGQAFAAAGgDIAKgFQAKgGAFgHQAKgIAFABQACADgFADQgGAFAAACQgFAGALgDQAAAAABAAQABAAAAAAQABAAAAgBQAAgBABAAIACgFQAEADAEgDQASgLAEgFQADgHAGgJIAEgIIAFgHQAAgBABAAQAAgBABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABIgHAOQgFAIgBAGQAHABAMgCIASgEIAKgIIALgIQANgJAAAHIgJAGQgGADgDAEQAMABAMgDQAFgCAAAEQgBADgFABQgEAAACACIAFADIAIAFQAHAEgBABQgBADgGgDIgKgHIgMgGQgIgBgNAEIgIADIgIADQAAACALACQAFACAKgBQAKgBAEABQAFACgEACQgEACgDgBQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABIADAEQAGAAgBAJQAAAIgHgMIgEgGIgFgFQgOABgNgDQgWgFgJADIgSANQgFACABACQABACAFAAQAFABAFgDIAIgGQAFgBgDAEIgCAGQAGACANAAQAFgBgFAEQgPADgGgDQgDgDgFACQgGACAFAFIAGAFQADAEgEACQgDgCgGgGQgFgGgEgDQgEgBgOABQgPACgTAJQgFABgDAEQgEAEAHAAQACgBAGABQAFACACgCQABAAABgBQABAAAAAAQABAAAAABQABAAAAABQAAAEgEAAQgFACgKgBQgKgBgFACQgPAHgLAOIAOADQAIACAIgGQAAgBABAAQAAgBABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgBAEAFABIAIABQAEgBABADQAAAAAAABQAAABgBAAQAAAAgBAAQgBAAgBAAIgQgDQgEgDABAEQAAAEADACIAGAGQADAEAAAEQgEABACAFQgBAEgCAEQgCAEgBgFIAAgKQABgGgDgEQgKgMgHgCQgGgEgMAGIgJACQgGACgCADIgMAKQgCACgDAFQgDAFgEAAQgEAEgIAMQgSAggCAUQABAJgJAYIgCAGQgBAFAEgCIAUgSQAJgJABgGQAAgEAEgDQAEgEAAAGIgJAUQgCAFgIAHIgIAJIgIAIIgJAQQgHAIgBAHQABAGgDAKQgCALAAAGQACAFAFAhQACAPAJAIQACADAGADIAJAGQANANACAaQABAEgCAFQgDAGABADQgBAIgFAPQgBAOAIAbQACAXAPAqQACAEgDABQgGgGgCADQgEAGgHAAQAAAEgFADIgEABIgEgBgAhOhEIgEAQQgCAJgDAGQgGAIgCAQQgDAPAIAVQACgBACgFQACgGABgCIAIgdQgBgDADgMIAEgTQABgKgJgFgAiAhBQgBAEgBAKQgBANACAEQABADAFACIAIADQACgDAGgCQAGgCACgCQAEgFADgJIAFgPQADgHgHAHQgMAGgJgCQgEgCgCgFIgCgJQgEAEgEAHgAhchzQAEACgCAFQgCAGgOAKQgEABgBAEIACAHQgBAFAFABQADAAAEgDIASgKQAEgDAAgHIAAgMQABgFACADQADADgBACQABAFACgEIACgGIABgKQABgGACgDQAEAAAAAGIgBAIQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIABgDQAFgKADADQAAAFgFAGIgIAKIgFAIQgDAFgBADQABACAJAHQAAABABAAQABABAAAAQABAAABgBQAAAAABgBQACgBABgFQABgFABgBQAJgQgGgXIgCgIQgBgEgDgBQgHgJgLAAIgDABIgSASIgOAMQgCABgCAFIgEAHQgCADACADQABAFAAACQAIgHAHgIQABgEACAAIADABgAAOjLQACACgDAGQgEAGABADQgBAHgNACQgLAHgCACIgJAQQgEAIABASQAAAFADgBQADAAAEgDIAHgGQAFgEAEgBQAGgEALgMQAIgJgBgRIABgVQgCgGACgNQgBgFAEACIADAQQACACADgDIAGgGIAIgLIAIgLQACgDgEAAIgIgBQgHABgIAIQgCAEgHACQgIACgCACQgKAKgHAUIgCADQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAJABACgIIAEgHQACgEADAAIABAAg");
	this.shape_5.setTransform(620.5,109.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#492103").s().p("AlJDEQgNgDgJgLQgJgKgBgOIgSjmQBPhZDYggQDugkDiBIQgGBfgNCQQgBANgIAKQgIAJgMAEQixA0i6AXQhpANhNAAQhFAAgvgKg");
	this.shape_6.setTransform(633.2,141.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATCnQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgDAAgCgCQAAgBgBAAQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAABAAQAHgUABgLIACgKIABgJIgCgLQgDgFABgDQABgNAGgGIAIgFQADgDACgIQABgNACgFIgBgIIAAgHIgEgIIgFgHIgHgIQgEgCgBgDIgEgKQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAABIACADQAAADAFAEIAJAIQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBgBgBQgEgMABgDQgBgHgJgSIgGgHIgDgDIgCgDIgFgEQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgEgBQgFgCgDABQgEACgFAFIgBAFIAAAEQAAABAAAAQAAABAAAAQgBAAAAgBQAAAAAAAAIgBgEQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAIADgEQAAgBABgBQAAgBAAAAQAAAAAAAAQgBAAAAABIgIABQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAHAAgBgDQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQADAEAEgBIAHgCQgGgHgHgDIgHAAQgEAAgDgBQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIADAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAAAQgJgFgHAAQgGgBgDABIgJAHQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAIADgDQABAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgDABgHgCIgBAAQgBgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAJgBIgBgDQgBAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAQAGAFACgBIADgBQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBgBAAIgIgGQgEgBgLACIgMABIgFAFQgDAFAAgDQgBgEADgBIACgBQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgJAAAFgCQAFgBAJABQAFgCAAgBIgHgCQgGgCgEAAQgIAEgCADIgEgBIAHgEIACgCQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAABABAAQAFABAGgBIgIgGQAAgDAGAEIAKAIIAIACIAJAAIgGgNQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAABABQAAAAAAAAIAFAHIAEAIIAKAHQABABAAAAQAAAAABAAQAAAAABAAQAAAAABgBIABACQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAGABgDgDIgDgDQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQACgBAFAEQADAEAFACIAJAEQAAgDgEgDIgFgHIgIgFQgFgFADAAIAIAHQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIACADIADADIACADIAEADQACACAAADQAAAHAIAEQAAABABAAQAAAAABAAQAAAAAAgBQABAAAAgBIABgEQgBgHgEgDIgJgKIgCgEQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAIgEgCQAAgBgBAAQAAAAAAgBQAAAAAAAAQABAAAAAAQABAAABABQABAAAAAAQABAAAAAAQABAAAAAAQgCgGgDgCQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAABABIADADIACAEQABACAEgBQgBgDAHACIADADQABABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgEgFIgFgEIgFgHQgEgEgDgCQgEgDgBACIgNADQgGADgDAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAIgGAHQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAABgBIADgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBQgGACgCgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAEgBIAKgDQABgBABAAQAAAAABAAQAAgBABAAQAAAAAAgBIgEAAIgFgBIgKABIgJAFQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBABAAQACgDAGgDQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQgBAAAAgBQAAAAAAAAQgBAAABgBQACgBAHABIAEgBIAEgBQAJAAAGAEQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAEgCQAFgCgDgCIgLgIQgFgBgCACQgEABgEgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABAAABAAIAEgBQACgBgHgCQgIgBgEAEQgCACgGAJQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAEgFAAgCIgIAGQgFAEABAEIgCAJQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBABAAIAAgIIgGAIQgDAEgCABQgBAAAAAAQAAAAAAgBQAAAAABgBQAAgBACgBQADgDABgFIgIADQgBAAAAAAQAAAAAAAAQgBgBABAAQAAAAAAAAIADgCIAIgCQAEgDACgEIADgDIAEgEIgOgBQgBgBgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAIAEgBIgBgDQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQADAFAEgBQAIAAADgBQABgCgHAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQgBAAAAgBIgCgCQgBAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAIAEACQADADACAAQAEAAAGgBQAAAAAAgBQABAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAFAFIADADQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQAIAAADACIAEADQgDgHgCgBQgFgDgEABQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAABAAQAAAAABgBQAGAAgDgCIgCgCQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIAHAFIADACIACAAIgBgDQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIADAJIAFAKQAEAEABgBIAAgEIgCgDQgDgGABgCQAAAAABAAQAAAAAAAAQAAAAAAABQABAAAAABIABADIADAEQAAABAAAAQAAABABABQAAAAAAABQAAAAAAABQABAHACABIAEADQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAHAKIACABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgEgNQgGgGgCgEQgDgDAAgDQgCgHgCgCQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIACAEIACACQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAABQACADgDAGQgBADAHAEQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAGACAHIADANQAAAEACAEQAEAEADAIQACAFADAEIAEAGIABADQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAgBIAKgFIgGgJQgHgHgCgEIgEgGIgEgDQgBAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIACACIgBgDQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAIACAEQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQACAFAGAEIACgHIAAgEQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAABQABACgCAFIAAAHQABAEAFAHQAAABABAAQAAAAAAAAQABAAAAAAQABAAABgBIADgCQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgDgEIgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQADABACAGQAAABABAAQAAABAAAAQABAAAAAAQAAgBAAgBIAAgGQgDgDgBgEIgCgHQgCgEgEgBIgEgCIgEgCQgGgBgDABIgIACQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAABAAQAAABABAAQAGgBACgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQACAAAFAGIAHADIADACQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAABgBQgDgIgEgDIgHgHQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAABIADACQAAAAABABQAAAAAAAAQABAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABABIADAIQAAAAAAAAQABAAAAAAQAAgBAAgBQAAgBAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQABABAAAAQAAAAAAABIACANIADAEIACAEQACAGAEAFQADgFgBgCQABgIABgBQABgBAAgBQAAAAABgBQAAAAAAAAQAAAAAAABIgCAQQgBAHgBACIgBAIQAAAFgCADQgDACgEABIAQAPQAEACAAAFQABABAAAHIAAADQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAFAFQAEAIAAAGIAAAFQAEgGAAgIQgCgJABgEIgBgFQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgEgEgFIgGgHIgLgLIgCgEQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABABQABACAHAGIAHAHQACgFgDgEIgFgNQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAEAIIADgIIAAgEQAAAAAAgBQAAAAABAAQAAgBAAAAQABABAAAAQACADgDAJQgDACACAGQADAKgBACQABAEAEAEQACAEAAgEIABgHQACgEABAHIgCAJIAAANQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAgBIADgDQAGgIACgHIgBgIQgCgGABgDQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIABAEIABAFIAEgHQgBgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAABABAAIgIAUIgBAEQgBAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIAEgBIADgEIABABIACAAQABgBABAAQABAAAAAAQAAAAAAAAQAAABAAAAIgJAGQgGACgCACQgHAGgBALIgBAKIgDAHQgBAEgGAAIgEgBIgEABQgCABgBAEIgCANIAAANQAAAHgBABIAAAGIgCAUQgBAAABABQAAAAAAABQAAAAABAAQAAAAABAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBABAAQACgEAEgCQAGgFABgMIgBgJQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAAAABAAQAAAAAAAAQABgBAAAAQABgBABgBQABAAAAAAQABAAAAAAQAAABAAAAIgFAGIgBALQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAABAAIADAAQAHgBACgEIABgDQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAIAAAIIAIADIAHgDQAAAAABAAQAAAAAAABQAAAAAAAAQAAABgBAAIgDACQgBABAAAAQgBAAAAABQAAAAABABQAAAAAAABIAEADIADACQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAIADADQAAABABAAQAAAAAAABQAAAAAAAAQAAAAAAABIgIgGIgBAGQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgKgJgDQgEgDgFACIgIAEIgGAFQgEACgCAEIgFAGIgFAGQgFADgBADQgGAKgCALIgBAKIAAAGIgCAZIAEAIQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQgCADgEgCQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgEAIgGgCIgCABIgBgBgAAhgZIACAKIABAHIADANQACABACAFQADgLgBgFQAAgGgDgGIgFgOIAAgBIAAAAQgEACAAAFgAAqgdIAFANQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAEACIADgBQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQACgDgBgFIgBgHQgCgDgCgCQgCAHgCABQgEABgGgDIgCgBIABABgAAkgzQAAAJACACIAJAFQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQACgFgDAAQgHgGgBgCQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAAAABQAAAAABABIAHAHQACgEgCgCQgCgFgBgBIgHgFIgIgJIgCAAQgGAAgCAEQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIgBAEQgDAKAEAIIABADQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQABAAAAAAQABgBAAAAIAEgFQgDgEAAgDQgHgGAAgEQAAAAABAAQAAAAAAAAQABABAAAAQABABABABIABACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBgEQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAQACACAAAGQAAACAAAAQABABAAABQAAAAABAAQAAAAAAgBIACgDIAAABgAgJhlIAAAJIABAJQgBAIAEAEQAEAFADADQADABAFAEQAFAFgBgFQABgIgCgEIgEgIQgBgCgFgCQgGgBAAgEIgCgEQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAABABAAIACAEQAAAEAEgBQABAAgBgBIAAgBQgEgJgEgFQgHgCgCgDQgEgEgDAAIgDABQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAABAAIAHAKQAFAFAAgBIACgIQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABg");
	this.shape_7.setTransform(649,112.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BAB9B9").s().p("AAAABIgEgBIABAAIgEgCIAGABIABgBIACACIAGABIgEAAIAAACg");
	this.shape_8.setTransform(662.7,91.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BAB9B9").s().p("AgDAEIgJgCIAHgFIgBgJIAHAFIAIgDIgCAJIAGAFIgJABIgEAIg");
	this.shape_9.setTransform(662.2,94.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BAB9B9").s().p("AgDAPIgRAGIAGgRIgMgPIATABIAKgQIAFASIASAGIgPAKIAAASg");
	this.shape_10.setTransform(639.3,114.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BAB9B9").s().p("AgFALIgSADIAJgOIgHgQIARAEIALgMIACARIAPAHIgQAHIgDASg");
	this.shape_11.setTransform(600.5,109.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BAB9B9").s().p("AgFAHIgNgBIAJgJIgEgOIANAGIAKgHIgBANIAKAIIgNAEIgFAMg");
	this.shape_12.setTransform(616.1,88.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BAB9B9").s().p("AgCAEIgGABIADgFIgCgGIAGACIAFgFIAAAHIAGADIgHACIgCAGg");
	this.shape_13.setTransform(645,67.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BAB9B9").s().p("AAAAJIgIAFIACgKIgIgGIAKgCIAEgJIAEAJIALACIgIAGIACAKg");
	this.shape_14.setTransform(606.4,73.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B215E").s().p("AlHHnQgNgDgJgLQgJgKgBgOQggmnABiIQAAkLBJgfQB1hACwgSQCVgPDSASQAMABAIAIQAJAHACAMQAdCYgEDmQgDCvgYETQgBANgIAKQgIAJgMAEQiyA0i6AXQhoANhNAAQhGAAgvgKg");
	this.shape_15.setTransform(632.9,112.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF9F3").s().p("AlHHnQgNgDgJgLQgJgKgBgOQggmnABiIQAAkLBJgfQB1hACwgSQCVgPDSASQAMABAIAIQAJAHACAMQAdCYgEDmQgDCvgYETQgBANgIAKQgIAJgMAEQiyA0i6AXQhoANhNAAQhGAAgvgKg");
	this.shape_16.setTransform(632.9,112.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BCA68B").s().p("AlJINQgcACgWgSQgUgSAAgbQhTmnBTmuQAAgdAUgWQAVgVAegDQFBhaFiAfQAbgCAUARQAUASAAAZQA3IBg3FjQAAAYgRASQgRASgZACQkNBDj7AAQhTAAhRgHg");
	this.shape_17.setTransform(632.9,111.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.5).p("AmumoQhaHXBaHMQAAAdAWATQAWAUAegDQFhAgGChgQAbgDATgTQASgUAAgaQA7mDg7owQAAgcgWgTQgVgSgdACQmAgilZBiQggADgXAXQgVAYAAAgg");
	this.shape_18.setTransform(632.4,110.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A3310").s().p("AlkI8QgeADgWgUQgXgTAAgdQhanMBanXQAAggAXgYQAWgXAhgDQFZhiF/AiQAdgCAVASQAWATAAAcQA7Iwg7GDQAAAagSAUQgTATgbADQkjBIkOAAQhaAAhYgIg");
	this.shape_19.setTransform(632.4,110.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CBCED3").s().p("AANDKIgCgCQgbgugnAAIgEgBIgBgBQgCgEABgCIAEgKIAAgBQgFgRgMgFQgNgHgcAKQgEACgDgDIgBAAQgDgCAAgFQAEgYgMgRQgHgJgKgFQgEgCgCABIgZAIQgFABgCgEQgDgEADgEQAOgPAEgOQAEgRgJgYQgBgEACgCQADgEADABIAJABIAEAAQATgIAGgQQAEgQgJgQQgDgDACgEQABgEAFgBIAGAAQANgBAFgEQANgJAIgaIgBgDIgDgGQgCgDACgDQADgEAEABQAPAFANgJQAQgLAQgdQADgDADAAIADABQACACAAADIAEAsIABADQANAKAOgDQAMgCAUgOQAEgCAEACIABAAQADACAAADQAEAaAQAHQAIADATgBIAGgBQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQADACAAAEIAAAEQgBAQADAJQAFARAUAKIAEAAIAbgJQAEgBACACIACACQADAEgDAEQgPAXgEAPQgFARAIAPQABAEgCADQgCAEgEgBIgGgBQgLgBgJAGQgJAHgDAKIAAACQgCANAKAUQACADgCAEIgBABQgBACgEABQgYADgLAOQgGAHgDAOQgCAFACAEIADAFQABADgBADIgBABIgEADQgWADgRAMQgPAKgKASQgBAEgEAAgAAQCkIACAUIABABIACAAQAHgKANgLQAPgLAVgEQAEgBgCgEIgBgBQgBgDgEgBQgegEgYAYIgBAAQgCACAAADgAguCLIgEACQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQATACAPAKQAKAGAKAOQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgIQAAgFgEgHQgOgZgKgDIgEAAQgKAAgOAKgAAQB3QgDAEAAAEIABAQQABABAAAAQAAABABAAQAAAAAAAAQABAAAAgBQAXgSAaABIACgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgKgSIgBAAQgHgDgHAAQgQAAgLAPgAgPB2QALADAJANIABAAIABgBIAAgFQgBgIgCgDIAAAAQgEgNgLgEQgKgDgNAHQgDACgCADIgEAMIAAABIACAAQAKgFAJAAIAHABgABhBHQgPACgIAMQgGAIgCAJQgBADACADIAIANIABABIACgCQACgHAEgGIADgEQALgNATgFIABgCIgBgBIgOgKQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgCABgAhFBmQAJAEAHALIACABIABgBIAGgPQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgFgPgKgEQgJgEgOAGQgLAGgEAEIgCACIAAACIABABIAFAAIAHgBQAKAAAHAEgAALBPQgCADABADIABAVIABABQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAKgKAOgBIAKgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIgMgUQgCgDgCAAIgGgBQgJAAgIAKgAgIBbQAHADADAEQABAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIgBgQIgBgDQgCgJgHgBQgGgCgJAGIAAABQgCAAgCAEIgFANIAAACIABAAQAHgCAGAAQAFAAAEABgAh5AoIgPAFQgBABAAAAQAAAAgBABQAAAAABAAQAAABABAAQAGAFAFAHQAMAQAAAUIABACIACgBIAPgOQACgCABgEQAEgSgIgJQgEgEgLgEIgEgBIgDgBIgDAAgAAtBCIAAABIABAEIALAUQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABgBIAFgJQAIgMAOgFQABgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBIgTgMQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQgSADgBAPgAg3BJQAJAEAGAKIABAAIABgBIAFgNQAEgJgHgGIgDgDQgGgDgJAEIgBAAQgCABgDADIgKAJQgBAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIACAAQAGAAAGACgABtATQgOAJgBAKQgCAKAJAMQAGAHAGAEIAFADQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABgCQgEgMACgMQABgNALgLIAAgCIgBgBIgRgCgAAHAoQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIACAaIABABIABAAQAJgIALABQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAgBgBIgGgLQgCgEgEgCIgJgFIgBAAIgCABgAhPAbIgVAHIgBABIABABQAHADAEAFQAJAJgBAOIABABIABAAIAQgPQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQABgHgDgGQgEgHgIgCIgBgBIgBAAIgBAAgAgFA9IAFADQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIgBgTQAAgEgEABIgFAEQgGAEgCAGIgDAGIAAACIACAAQAEgCAFAAIAEAAgAAeAcQgBAEABAGQAAAGAEAHIAEAHQABAAAAABQAAAAAAAAQABAAAAAAQAAgBAAAAIADgFQAFgHAIgDIABgBIAAgBIgWgPIgDgBQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABgAgdAeIgQAPQgBABAAAAQAAABAAAAQAAAAABAAQAAAAABAAQADAAAFADQAGADACADQAAABAAAAQABAAAAAAQAAAAAAAAQABAAAAgBIAFgNQABgEgBgEIgCgEQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgDABgABLAPQgKAEgCAGQgBAHAGAHIAEAFIALAHIABAAIABgCQgCgGABgHQADgKAHgHIABgCIgBgBIgOgCIgFABgAingUQAHAZgEARQgDAMgKANIAAACIACABIATgGIABgCQAFgJABgNQABgTgMgTIAAAAQgCgDgEgBQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABAAAAgAg5AUIgJADQgBAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAKAHACALQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAgBIATgRIABgEQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgJgCgGAAIgGABgAgEAUQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABIgGAPQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAMgIAMAEIABAAIAAgBIgIgNQgCgCgDAAQgCAAgEACgAiSgSIAAACQANAZgHAbIAAACIACAAIAOgFQAGgBADgIQADgKgBgGQAAgKgIgKQgDgEgEAAIgRgCIAAAAIgBAAgAAtAMIgGADQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAQALIABAAIABgBIAAgHQACgGAFgEQAAgBABAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgHgCIgDAAQgEAAgEACgAAOAPIACAEIAGAMQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABgNANgIQABAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgRgDIgBAAQgGAEAAAGgAgbAKIgKAEQAAAAgBAAQAAABAAAAQAAAAAAAAQABAAAAAAQANACAGAMIABABIABgBIADgJQACgDgCgEQgDgDgEgBIgHABgAhtgMIAAABQALARgHATQAAABAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAPgFQAJgDADgJQADgKgHgHIAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgWgEIgBAAIgBABgACvg1IgOAEQgFACgDAEQgPAUgCAJQgDANAOAOQACADAEABIAHABQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgJgaAXglQABAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgCgBIgBAAgAhIgHIAAABQAEAGAAAHIgBAHQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIARgFQAFgCADgFIABgDQABgDgEgBIgagDIgBAAIgBAAgAgLAFIAAABQADADACAFIABAAIACgBIABgBIgBgIIgBgBgACFgoIgFACQgIADgGAEQgMAJgBAKQgBALAKAKIAFACIAOACIABgBIAAgBQgIgMADgPQACgLAIgLQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBgBIgBAAgAAEAAIAAABIAAAKIABACIACAAIACgBQABgHAFgDQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBAAIgBgBIgBgBgABegbIgNAEIgFADQgIAFAAAHQAAAGAEADQADAEAFABIAPACQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgCQgHgKACgJQABgHADgFIAAgCIgBAAIgBAAgAglgVIAAABQADAIAAAIIgCAIIAAABIABAAIAHgDQAFgBABgDQACgEgCgEIgDgEIgLgHIAAAAIgBAAgAA+gRIgUAHQgEABACAEIADAEQACACAEABIAOACQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBgBAAQgCgEAAgGQAAgEACgDQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAgAAfgaIgJAIIgEAFQgBADABAEQACAFAEAAIALABQABAAAAAAQAAAAAAAAQABAAgBAAQAAAAAAgBQgIgMAEgMIAAgCIgBABgAgPgKIAAAIQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAKgDIAAgBIAAgIIgCAAQgEADgFgBQAAAAAAAAQAAAAgBABQAAAAAAAAQABAAAAAAgAACgMIABAEQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIAFgCQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgHAAIgBgBIgBACgAg9gjQABAHgFAHIgEAEIAAABIABABIAYAEQAEAAgBgEIgDgGIAAgBQgFgIgGgEIgEgCIgBgBIgBACgAgIgiQgHAJgLABQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAJAGIABAAQAIACAEgHIgBgMIgBgBIgBABgAhZg2QACAHgDAJQgDAJgIAHIgBABIABABIANACQAHABAGgDQAFgEACgHQACgGgDgFQgBgCgDgCIgOgKIgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAABgAA1gvIgBABQgJAIgEALIAAAAIgCAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIAYgIIABgBIgBgBQgGgEgCgGQgBgCgBgGIgBgCIgBABgAABgkIAAALQABAFAEABQACABAFgBIAJgIQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQgLgBgIgHIgBAAIAAAAgAh3hMIAAACQACANgDALIgGALQgEAHgGAEQAAABAAAAQgBABAAAAQABAAAAABQAAAAABAAQAfACAGgSQADgJgIgNQgDgFgEgDIgHgFIgBAAIgBAAgABRhJIgRAPIgCAFQgEAPARAIIACAAIAXgHQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQgPgLgCgVIgBgBIgBAAgAgpg7QgEAGgEAEQgDADgFABIAAABIAAABIAOAJIAHADIAIABQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgOgXIgBgBIgBABgAAchCIgLAcQgBADAEABQAGAAAEgCIADgBIAPgPQABAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIgIgCQgFgDgFgHIgBgBIgBABgAgdg6IALATIADACQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIAEgGIABgDIgCgTIgBgBIgBABQgFAFgGABQgDABgDgBQAAAAgBAAQAAAAgBABQAAAAAAAAQAAAAABABgAgBhBIABAOQAAADACADIAEAEQADAEACgFIAIgUIAAgCIgBAAIgIACQgGgBgEgDIAAAAIgBABgABuhkIgPAOQgDACAAADQgBAKADAJQAFANAOAGQAAABABAAQABAAAAAAQABAAAAAAQABAAAAgBIASgFQABgBAAAAQAAAAAAgBQABAAgBAAQAAAAgBgBQgYgRABgfIgBgCIgBABgAg8hbQgFAMgLAHQgFADgGACIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIATAMIAFACQAPAAAEgSQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBAAIgLgVIgCgBIgBABgAAohiIgHASQAAABgBABQAAAAAAABQAAAAAAABQABABAAAAQAHARAQgCIADgCIAPgOQAAAAAAAAQAAAAAAAAQABgBgBAAQAAAAAAAAIgBgBQgIABgGgDQgLgFgGgNIgBgBIgBABgAguhYIAAACIAHAMIADADQAHAGAGgBQAHgCAEgJQACgDAAgDIgBgOIgBgBIgCABQgIAIgKABQgGABgGgCIAAAAIgCABgAgDhiIgBABIACAOQABAKAHADIAEABQAHAAAHgHQACgCAAgDIAFgNIAAgBIgCAAQgGADgGAAQgKABgIgHIgBAAIgBAAgAhOh7IgBABQgJAVgMAIQgGAFgLACIgBABIAAABIAOAJQACACAEgBIAAAAQAagDAGgZQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgJgQIgBAAIgBAAgAA2iHIgEAMQgDAGACAGQACASALAEQAHADAMgCIAEgBQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAIAPgOIAAgBIgBgBQgNABgKgFQgQgGgHgTIgBgBIgCABgAhDh9QAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIAEAHQADAEAGAGQALAKAKgBQALgBAJgNIABgFIgBgQIgBgBIgCAAQgLAKgPABQgLABgMgEIAAAAIgBAAgAgHiFIACASQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQAKALALAAQAKAAAJgMIABAAQAEgHACgFIAFgNIAAgCIgCAAQgdASgVgMIgCAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAgAhMiQQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAQAUAKANgCQAMgBANgNQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIgDgfQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQgNAVgOAKQgMAIgMgBQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABg");
	this.shape_20.setTransform(898.8,178.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CBCED3").s().p("AiJD5QgDgCAAgCIgBgEQABgmgKgZQgKgZgYgQIgDgEIgBgDQAAgEAEgDIALgIIABgBQAHgYgIgPQgMgTgngJQgFAAgDgGIAAgBQgCgFAEgFQAXgagCgbQgBgRgIgNQgBgEgFgBIgigKQgHgCAAgHQAAgHAHgCQAcgHAOgNQARgQAKgkQABgFAFgCQAFgCAEAEIAJAIIAFACQAcAGATgPQASgPAAgZQABgGAEgDQAFgDAFABIAJAFQANAIAMAAQAVgBAbgXQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIABgIQABgGAEgCQAGgCAEAEQAPARAVAAQAaAAApgWQAFgDAFAFIACACQABAEgCAEIgdA2QgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAIAXATAHQAPAHAigBQAGAAAEAGIABABQABAEgBAEQgQAgANAVQAJAMAVAKQAGADABACIAEAEQACAGgDAFIgDAEQgNARgEAMQgHAZAPAaQAAAAABABQAAAAABAAQAAABABAAQAAAAABABIAnALQAFABABAEIABAEQAAAHgGACQghAOgSAPQgUATgCAWQAAAFgGACIAAABQgGACgEgEIgGgGQgMgKgPABQgQAAgLALIgBACQgNAPgDAdQgBAGgFACIgBABQgFACgEgDQgdgOgYAHQgNAFgNANQgFAEgBAHIgCAIQAAAEgEACIgBABQgEABgDgBQgcgOgdACQgZAAgZAOIgEABIgFgBgAgZDpQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgCQgBgGgDgCQgfgcgvAJQgFABgCADIgMAYQAAAAgBAAQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAQASgHAVgBIAGAAQAYAAAXAJgAinB+QgBAAAAABQgBAAAAABQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQATASAKAWQAHAOACAZQAAABAAABQABAAAAABQAAAAABAAQAAABABAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAFgJQAEgIABgJIAAgBQABgVgBgJQgBgOgHgHQgKgLgeAAgAATCcQgMAEgJAKQgDADAAAEIgBAVQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABABIADgBQAHgGAJgEIAGgCQAWgIAbAJQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgJgWQgCgEgEgCIgBgBQgKgEgKAAQgJAAgIADgAgVDHIADABIABgCIABgdQgIgLgLgGQgSgIgUAHQgHACgDAGIgKATQgCAEAEAAIALAAQAhAAAaARgABOB1QgKALACAUQAAALAFALIADAHIACABQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAGgTAKgLQALgNAWgGIABgCIAAgCIgSgPIgEgCIgCAAQgVAAgJAKgAiCBiIgOAKIgBACIACABQAVADAMAMQALAMACAWIABACIACgBIADgGQAEgGABgJIAAAAQAEgTgJgNQgIgLgWgCQgFAAgEADgAARBnQgLABgGAJIAAAAQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABIgCAgQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAQAEgEAIgDQASgIAUAFQAEAAgCgDIgMgdQgCgEgCAAQgHgEgHAAIgFABgAgeCNIAMAIQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCIACgfQAAgFgDgDQgGgHgKgBQgIgCgJADQgEACgCAEIgOAaIAAACIACABIAKgBQAOAAAMAGgADSBDQghAMgKAJQgNANAEAcQABAFAEAEIAIAHQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAKgmA3gZQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgTgFIgGgBIgHABgAA0BPQgFAFAAAOIACAJIAHAQIACABIABgBQADgJAHgGQAJgKAQgDIABgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgPgMQgCgDgFgBIgGAAQgJAAgGAEgAhbBGIgQALIgBACIABABQASAFAIALQAFAHADAJIABABIACgBIAKgTIACgEQACgNgGgGQgGgHgOABIgBAAIgBAAQgEAAgDACgACbAzQgUABgKALQgJAMADAVQABAEADACIAOANQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCQABgWAOgPQAJgIATgJIACgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgIgCQgJgDgJAAIgDAAgAAMA5QgEADgEAIQgEAIAAAKIgBAMQAAAAAAABQABAAAAABQAAAAAAAAQAAAAABgBIAGgDQALgFANADQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIgOgiQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgDACgAi7AjIgDABQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQABABAAAAIAGADQASAJAHANQAIANgBARQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIARgMQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAGgUgJgNQgHgMgVgDIAAAAIgOgBIgMABgAgOBhQABABAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIABgSIgCgLQgDgIgEgEQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABIgSAgQgBABAAAAQAAABABAAQAAAAAAABQABAAABAAIAHgBQAMAAAJAHgABnAjQgNABgGAIQgEAFAAAJQABAHAFAEIAQAPQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCQABgQAIgLQAGgHAIgEIABgCIgBgCIgSgFIgGAAIgCAAgAAcAzQgBABAAAAQAAABAAAAQAAABAAABQAAAAABABIAKAYIABABIACgBQACgEADgDQAGgGAKgBQABAAABAAQAAgBAAAAQAAAAAAgBQgBAAAAgBIgIgHQgGgGgIAAIgJgBQgBAAAAAAQgBAAgBABQAAAAAAAAQgBABAAAAgAhAAyIgIAGIgBACIACABQAKACAGAGIAFAIQAAAAAAABQABAAAAAAQAAAAABAAQAAgBABAAIAMgXQABgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgJgBQgKAAgHAFgAh2AXIgSAEIgBABIABACQAJAFAFAIQAIAMgBAPIABACQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAQgMQALgHgDgNIgBgFQgFgJgNgCIgCAAIgFgBIgEAAgAADAeQgBACAAADIgBATIABABIABAAQALgOAVAAIABgBIAAgBIgSgQIAAAAIgDAAQgJAAgDAHgAAxAYIABAIQABAGADADIAPANIABAAIABgBQABgIAEgHQAEgFAEgCIABgCIgBgBIgdgIIgBAAQgFAAAAAEgAgWAVIgCABIgTANIAAABIABABQAVACAKANIABAAIABgBIABgVQgDgJgKAAIgBAAgADLgfIgcAEQgFABgCAEQgJAKgDAMQgEATALASQABACADABIAZAHIACgBQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgPgnAZgiQAAgBABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgBgBIgBAAgAg7ANIgeAFIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAFAEADAFQAEAGAAAIIABACIABgBIARgLQAFgDAAgGIABgGQAAgBAAAAQAAgBAAgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIgBAAgACUgWIgeAFQgEABgDADQgGAGgBAIQgCALAHALIACABIAhAJQADABgBgDQgJgaANgYQAAgBAAAAQABgBgBAAQAAgBAAAAQAAAAgBAAIgBAAgAjFgxQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAEAMAAALQACAZgQAYIAAADQABABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAcgFQAGgBADgEQASgRgCgPQgCgKgKgLIgDgFIAAAAQgDgEgEgBIgVgGIgBAAIgCABgAAngDIgJADQgFADAAADQgDAHAGAEIALAKIABABIABgBQAAgUAPgLIAAgBIgBgBgAg5gLIAAACQAOAMgCASQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABgBIALgIQAEgDABgGQAAgFgFgDIAAAAQgEgDgFgBIgPgEIAAAAIgBAAgAACAFIgGANIAAACIABACQAAAAABAAQAAABAAAAQABAAAAgBQABAAAAAAQAEgGALgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgEIgBgBIgMgDIgBgBIAAABgABfgNQgSAEgMAIIgBABIgFADQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAhAKQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQgDgJACgIQABgGACgFQABAAAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAgAiSgjIAAACQAGAJABAJQADAPgLAQIAAACQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAegFIAEgCQAGgIABgIQABgMgHgIIgBgBIgDgDIgdgIIgBAAIgBABgAgUAAQACAFgBAHIABABIADABIABgBIAGgLIgBgBIgJgCIgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAgAhigUQAGAOgHAOQgBABAAAAQAAABAAAAQABAAAAABQABAAAAAAIAjgGQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAAAgBAAQAAgBAAAAQgPgPgIgDIgNgEQgBAAgBAAQAAABAAAAQgBAAAAABQAAAAABABgAALgLIgCAEQgBABAAAAQAAAAAAABQAAAAABAAQAAABABAAIAIACIADAAIAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgEgCgDgEIgBgCIgCACgAgMgXQgBAGgEAEIABACIANADIABAAIAEgKQABAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgGAAgFgEIgBgBIgBABgAAbgoIgHANQgDAFAEAGQABADAGACQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAIAMgCIABgBIgBgBQgMgIgEgQIgBgBIgBAAgAgdgzQgCALgHAKQgEAFgFADQAAAAgBABQAAAAAAAAQAAAAABABQAAAAAAAAIALADQAGACAFgEQAGgDAAgGIgBgHIgHgQIgBgBIgBABgABSg2IgiAYQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAABQAGAEAIACIAEAAIAcgFQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAgBgBIgGgIQgFgJAAgLIgBgBIAAgBIgBABgAhPg+IgBABQAAAKgGAJIgGAHQ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");
	this.shape_21.setTransform(880.8,168.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CBCED3").s().p("AhFB/IgDgCIAAgCQABgmgWgPIgCgCIAAgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAFgFIABAAQADgNgFgHQgFgKgUgEQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBIgBAAQAAgDABgCQANgNgCgOQAAgFgEgKQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgSgFQgDgBgBgEQAAgDAFgBQAOgEAHgGQAJgJAFgSQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAIAFAEQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAQAPADAKgHQAJgIAAgNQAAgDACgCQADgBADABIAEACQAHAEAGAAQALgBANgLIACgDIAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQABABAAAAQAIAJALAAQAMAAAWgLQACgCADACIABACQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgPAcQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAFAMAJAEQAIADARAAQADAAACADIAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgHARAGAKQAEAGAMAFIADADIACACQABADgBACIgCADQgGAHgDAHQgDANAIANIACACIATAFIAEADIABACQgBADgDABIAAAAQgSAIgIAIQgKAIgCAMQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgDABgDgCIgCgDQgHgFgIABQgHAAgGAGIgBAAQgGAIgCAPQAAACgDACIgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgXgLgRAQQgCACgBAEIgBAEIgCAEIAAAAIgEAAQgOgHgPABQgOAAgMAHIgCABIgCgBgAgMB3QAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIAAgBIgCgFQgQgOgYAFQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIgGAMIAAACIACAAQAJgEALAAQAOAAANAFgAhVBAIgCACIABACQAJAKAGALQADAFACAPQAAAAAAABQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIADgEIACgJQACgUgGgGQgFgGgPAAIgBAAgAAJBPQgCABgIAGQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIgBALIABABIABAAQAEgDAEgCIAEgBQALgEANAEIACAAIAAgBIgFgMQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQgGgCgFAAQgEAAgFABgAgLBmQABAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIABgPIAAAAQgLgPgSAGQgEABgBADIgGAKQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIAGAAQARAAAMAJgAAoA7QgFAFAAALIAEALIABAEIABABIABgBQADgKAFgFQAGgHALgDIABgBIAAgBIgJgIIgDgBIgCAAQgJAAgFAFgAhCAyIgIAFQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQALACAGAGQAGAFABAMQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIACgDIACgIQADgJgFgHQgFgGgLgBIgEACgAgBA8IgBAQQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAgBIAGgDQAJgEAKACQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgGgPIgDgDQgMgEgGAIIAAAAgAgOBIIAFAEQABAAAAAAQAAABABgBQAAAAAAAAQAAAAAAgBIABgQIgBgEQgHgHgKADQgBABAAAAQAAAAgBAAQAAABgBAAQAAABgBAAIgHANQAAABAAAAQAAABAAAAQAAAAAAAAQABAAABAAIAEAAQAIAAAHADgABrAiQgQAGgFAFQgHAGACAOQAAADADACIADAEQABABABAAQAAAAABAAQAAAAAAgBQABgBAAgBQAFgTAcgNIABgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAgBIgKgCIgCgBIgFABgAAbAoQgDACAAAIIABAEIAEAIQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABgBQABgEADgDQAFgFAIgCQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgIgGQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIgFAAQgEAAgCACgAguAjIgJAGQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAQAJACAEAGQADAEABAEQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAgBIAGgKIABgCQABgHgDgDQgDgDgHAAIgBAAIgBAAIgDABgABPAaQgJAAgGAGQgEAGABALIACADIAHAGQABABAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBQABgLAHgHQAFgFAKgEQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgFgBIgIgBIgDAAgAAGAcIgEAGQgCAFAAAEIAAAGQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAgBIAEgCQAHgCAFACQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAgBgBIgHgRQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgCABgAhiAUIAEACQAIAEAFAHQAEAHAAAIQAAABAAAAQAAABAAAAQAAAAABAAQAAAAABAAIAIgHIABgBQADgLgEgGQgFgGgKgBQgHgCgGACIgCAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAgAgGAxQAAABAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAIAAgKIAAgFIgFgHQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgJARQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIAEAAQAGAAAFADgAArAWQgCADAAAEQAAADADADIAIAHQABABAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBQABgIAEgFIAHgGQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgJgCIgEgBIgBAAQgGAAgDAFgAAOAcIAGANQAAAAAAABQAAAAAAAAQAAAAAAAAQABgBAAAAIACgEQAEgDAFgBIABAAIgBgBIgEgEIgHgDIgFAAQAAAAgBAAQgBAAAAABQAAAAAAABQAAABAAAAgAggAZIgFADQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAAAQAFABADADIACAEQABAAAAABQAAAAABAAQAAAAAAAAQAAgBAAAAIAGgMQABgBAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAIgEAAQgGAAgDACgAhFANQgBAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAQAFACACAFQAEAFAAAIQAAABAAAAQAAABAAAAQAAAAAAAAQABAAAAgBIAJgGQAFgEgCgGIgBgDQgCgEgHgBIAAAAIgEgBgAACAPIgBACIgBAKQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAABgBQAGgHAKABIAAgBIgJgJIAAAAIgCAAQgEAAgBAEgAAZAMIAAAEQAAABABABQAAAAAAABQAAAAABABQAAAAABAAIAHAHQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIADgHIAEgEIAAgBIAAAAIgOgEIgCAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABgAgMALIgJAGIAAABQALABAFAHIABAAIABgLQgCgFgGAAgABZgOIgDACQgNAOALAQIACACIAMADQABABAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBQgIgTANgSQAAAAABAAQAAAAAAgBQgBAAAAAAQAAAAgBAAgAgdAGIgQADQgBAAAAABQgBAAAAAAQAAAAABAAQAAAAAAAAIAFAFQACADAAAEIAAABIABAAIAIgGQADgCAAgDIAAgDQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgBAAgAA8gJIgDACQgIAHAHALIABABIARAFQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQgGgNAIgMQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAgAhlgYIADAMQAAANgHALIAAACIABAAIAOgCQAEAAABgDQAJgJgBgHQgBgFgFgGIgBgCIgEgDIgLgDQgBAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAgAAUgCIgFACQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAAAABQgBADADACIAFAGIABgBQAAgKAIgFIgBgBgAABACIgDAHQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIABABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQADgEAEAAIABgBIAAgCIgBgBIgFgBgAgdgFQAHAGAAAJQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAFgEQACgCABgDQgBgCgCgBIAAgBIgFgCIgHgCQAAAAgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAgAAhAAIgCABQgBABgBAAQAAABAAAAQAAABABAAQABABABAAIARAEQAAABAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBQgCgFABgDIABgGIAAgBIgBAAQgJACgHAFgAhKgRQADAEAAAFQACAIgGAIQAAAAgBABQAAAAAAAAQABAAAAAAQAAAAABAAIAQgDIABgBQAIgJgIgJIAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAIgQgEIAAAAIAAABgAgKAAIAAAGIABAAIADAAIADgFIgBgBIgFAAIAAAAIgBAAgAgygKQADAGgDAIIABABIASgDIABgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQgIgHgEgCIgHgCQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAgAAFgGIAAADQgBAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAIAEABIACAAQAAAAABgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgEgDIgBAAIgBAAgAgIgHIAAABIAHACIAAAAIACgFIgBgBQgCAAgCgCIgBAAgAAOgUIgEAGQgCADADADQAAAAAAABQABAAAAABQABAAAAAAQABAAABAAIABAAIAHgBIAAgBQgGgFgCgHIgBAAIAAAAgAgOgaQgBAGgEAEIgEAFIAAABIAFABQADABADgCQADgBAAgDIAAgBIgBgDIgDgIIgBAAIAAAAgAAqgcIgSAMQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAIADIABAAIAQgCIAAgCQgCgBgCgDQgCgFAAgFIAAgBIgBAAgAgogfQAAAEgEAFIgDAEQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIANAEQAEABADgCIACgBQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgOgNIgBAAIAAABgAA9gqIgLAIQAAABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQgDANAKAFIADAAIAOgDQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgGgEgCgDQgFgHACgKIgBgBIgBAAgAgHgYIADAHIABABQADADAFgCIADgHQABAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQgIACgGgDIgBAAIAAAAgABVg6IgHAFQgEACgDAFQgFALAFAHQADAEAIAEIADABIADABIAOgDQAAAAAAAAQABAAAAAAQAAAAAAAAQgBgBAAAAQgIgGgFgFQgGgKADgOIAAgBIgBAAIAAAAgAAXgnIgEAJIgBAFIABAEIABABQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABgBIAMgJIAAgBIAAAAIgFgDIgFgGIAAAAIgCAAgAg8gwQgBANgMAKQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAKADQAIACAFgFQAGgFgCgHIAAAAIgBgDIgMgKIgBgBIAAACgAgWgsQgDAEgFACIgEABQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAIANALQAAABABAAQAAAAABAAQAAAAAAgBQABAAAAgBIABgFQABgGgDgFIgBgDIAAgBIgBABgAAFgtIgBAPQAAABAAABQAAABAAAAQABAAAAAAQABAAAAAAIAGgCIABgCIAHgLQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIgJAAIgEgDIAAAAIAAABgAhRhCQgCAUgPANIAAACIALADQAFACAEgEQAMgKgBgOIgCgFIgJgIIgCAAIgBABgAgRgvIAFAKQAAACACADIAFADQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIABgTQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQgEADgEAAIgGAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAhchNQgFATgKAIQgGAGgKADIgCACIACABIANADIABAAQATgLABgaQABgCgCgDIgBAAIgBAAgAAig6IgEAIQgEAGAFAFIACACQAEADAGgCIAEgBIAHgGQABAAAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgEAAgFgDQgFgDgEgIIgBgBIgBABgAgghDQgDAHgEADQgEAEgJABQAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAHAHQAJAGAIgGQAEgDAAgEIgBgEIgEgMIgBAAIgBAAgAAFhFIAAAKIAAADQACAGAEACQAEACAHgDIAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAgBIAFgIQAAAAAAgBQABAAgBAAQAAAAAAAAQAAgBgBAAQgHACgIgDIgHgFIgBgBIgBABgAAvhRIgGALIAAADQACALAGADQAHAEAKgDIAIgEIAJgGQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQgZgCgIgPIgBAAIgBAAgAgbhIIAGAPIACADQAKAFAIgIIABgCIAAgRQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgIAFgIAAQgFAAgEgBQgBAAAAAAQAAAAAAAAQgBABABAAQAAAAAAAAgAgqhaQgDAIgHAGIgIAEIgKADIgBABIAAABQASANALgIQAFgFAAgKIgBgIIgCgFIgBgBIgBABgAAHhjIgBAGIABAJQADAKAHAEQAGADALgEIACgCIAGgKQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQgLABgIgEQgHgEgHgIIgBAAIAAABgAglhfIAEAKIAEAEQAQAIANgNQAAAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgNQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBABAAAAQgMAJgLAAQgHAAgGgDQAAAAgBABQAAAAAAAAQAAAAAAAAQAAABAAAAgAAKhzQAAABAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIAAAAQAJANAIAFQAIAEANgDIACgCIALgTIAAgCIgCgBQgRAIgMAAQgKAAgHgFIgBAAIgBAAg");
	this.shape_22.setTransform(549.9,12.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBCED3").s().p("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BIgCgBIAAAAgAirgdQAAAAAAAAQgBAAAAABQAAAAABAAQAAAAAAABQAIAKADAMQADARgIARQAAABAAABQAAAAAAAAQAAABABAAQABAAABAAIAYgGQAQgEADgPIAAgHQgBgLgOgJIgCgBQgEgDgGgCIgXgEIgBAAIgBABgAABAJIgNALIgBADIABACQAAABABAAQAAABAAAAQABAAAAAAQAAAAABAAQAJgFALAEQABAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIACgFQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgMgJIgBgBIgBABgAB6gXIgyAMQgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQgBADABACQAEAGAKAHIAEACIAkAIIACgBIAAgCQgDgIgBgFQgBgLAGgNQAAgBAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgBAAgAhxgRIAAACQAFAIABAGQAAAJgDAIQgBAEAEgBIAXgGQAIgCAEgGIADgGQADgHgHgCIgmgIIAAAAIgCABgAgVgHQgBAHgEAGQgBAAAAABQAAAAAAAAQAAAAAAABQABAAAAAAIADACIACAAIAMgKQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIgKgHIgBgBIgBACgAAUgGIgFAEQAAABgBAAQAAABAAAAQAAAAAAAAQABAAAAABIAIAGQABABAAAAQABAAAAAAQABAAAAAAQABAAABAAIAAAAQABgBAAAAQABAAAAgBQAAAAgBgBQAAAAAAgBQgFgEgBgFQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgCABgAg8gmQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAKAVgKAUQgBABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIAQgEQAHgCADgFQADgHgEgGIAAAAQgDgFgFgEIgQgMIgBAAIgBAAgAA0ggIgOALQgHAGADAIQAAAFAGADIAFACIAPADQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIAAgCQgLgOADgUIgBgCIgBAAIAAAAgAgBgeQgFAFgGADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIANAKQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIALgIQAAgBABAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgHgDgFgHIAAgBIgBABgAhmhGIgBABQAAAUgPAOQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAABABIABABIAsAJQADABABgCQACgDgBgDQgGgVgMgKIgNgKIgBgBIgCABgABbhAIgSAPQgFAEgCAGIgCAKQgBADADACQADACADgBIAlgIIABgCIgBgCQgGgEgDgGQgFgIgBgJQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgCABgAAHg9IgCACIABASIABACQAEALAPAAIAAAAIAQgNQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAIgCgBQgVgCgMgOIgBgBIAAAAgAgHhHQgKANgLAGQgHAEgHACQgBAAgBAAQAAAAAAAAQAAABAAAAQAAABABAAIALAJQAHAFAHgCQAIgCADgGQACgEAAgFIAAgWIgBgBIgBABgAiWhsQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAABABQACAOgDALQgEAUgVANIgBACIABACIAlAIIAGgBQALgGAFgKQAHgNgEgNIgBgCQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBIgfgXIgBgBIAAABgACHhkIgTAQQgOALAFAPIADAHQAFAKASACIAJAAIAXgGIACgCIgCgCQgKgHgGgIQgKgOgBgUIgBgCIgBAAIgBAAgAjLiUQAAAAgBAAQAAAAgBABQAAAAAAAAQAAABAAAAQgBAPgFAOQgLAfgcAVQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAIAkAIQAGABAGgCIABAAQAdgMAEgUQACgJgEgVIgCgHQgCgFgEgEIgWgRIgCgBIgBABgAA2hiIgRAkQgBACABADQACADADAAQAFABAHgBQAEAAACgCIAYgUQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgCgCQgMgBgHgIQgEgDgDgGQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgBABgAg+hrQgGAMgLAHIgJAFIgCACIABACIAZATQAHAGAKgCIAFgBQACAAACgDQABgDgCgDIgUgpIgBgCIgCACgAC2iLIgWATQgDACgBADQgGAbAMAOQALAPAaACQAKABAOgDIAXgGQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQg2gYgFgsQAAgBgBAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgBgBIgCABgAAFh8IgBACIABAbQAAAHADAGIAAABIAGAMQACADAEAAQAEgBACgDIAUgrIAAgCQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgMACgLgEQgIgCgFgEIgBgBIgCABgAgthvIASAmQAAAAABABQAAAAAAABQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIAGgKIAAAAQAIgNgBgOIAAgJIgBgCIgCAAQgKAIgPAAIgJgBQgBAAgBAAQAAABAAAAQgBAAAAABQAAAAABABgABNiWIgKAWQgCAEAAADQgBARAIAHQAHAIATgCIAAAAQAGgBAFgEIASgOQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBgBQgVgFgMgNQgGgGgEgLQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAgAhbilQgPAfgjALIgBABIAAACIAUAQQAOALARgGQARgFAEgRIABgCQABgDgCgDIgRgkIgCgBIgCABgAhHilIAAACIAKAVQAFAKALAFQALAEALgDQAKgDAFgKQACgEAAgFIgBgfQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBgBAAAAIgCABQgLAMgNADQgRAFgSgGIAAAAIgCABgAAFi+QAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIAAAmQAAAFAEADQAQAWAcgMQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIASglQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgWAFgUgJQgKgDgJgHIgCgBIgCAAgABtjZIgGAMQgGAMAAALIAAAAQgEAaANANQALAOAcAAQACAAAGgDIAVgRIABgDIgCgCQgagIgPgSQgLgOgIgXQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAABgAh5jgQgZAtgtAQIgCACIABADIAUAPQALAIALgEQARgGAJgGQAQgLAGgWQACgHgDgGIgNgbQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAIgDABgACCj6QgBAAAAAAQgBABAAAAQAAAAgBABQAAABAAAAIAAABQAHAlAPARQAPARAeAFQAFAAACgCIAqgiQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgtACgbgLQgWgJgMgSQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIgCABgAj2jLQAAABAAAAQAAABAAAAQAAAAABABQAAAAABABIAbAVIADAAQATgDARgLQAegSAQgjQACgGgCgHIgCgBIgDABQgcAkgeALQgUAIgbgCQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAgAhhjcQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAABABQAJAQALALQATAPATgFQASgFAKgXQAEgIAAgLIAAgOQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQgPARgVAGQgKADgLAAQgLAAgPgEIAAAAIgCABgAAEj8QAAAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAAcQABAGAEAEQAKANAQAGQAWAIAYgKQAFgBABgEIAOgdQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgmAJgZgKQgQgGgKgMIgCAAIgCAAg");
	this.shape_23.setTransform(273.5,113.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CBCED3").s().p("AiJD5QgDgCAAgCIgBgEQABgmgKgZQgKgZgYgQIgDgEIgBgDQAAgEAEgDIALgIIABgBQAHgYgIgPQgMgTgngJQgFAAgDgGIAAgBQgCgFAEgFQAXgagCgbQgBgRgIgNQgBgEgFgBIgigKQgHgCAAgHQAAgHAHgCQAcgHAOgNQARgQAKgkQABgFAFgCQAFgCAEAEIAJAIIAFACQAcAGATgPQASgPAAgZQABgGAEgDQAFgDAFABIAJAFQANAIAMAAQAVgBAbgXQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIABgIQABgGAEgCQAGgCAEAEQAPARAVAAQAaAAApgWQAFgDAFAFIACACQABAEgCAEIgdA2QgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAIAXATAHQAPAHAigBQAGAAAEAGIABABQABAEgBAEQgQAgANAVQAJAMAVAKQAGADABACIAEAEQACAGgDAFIgDAEQgNARgEAMQgHAZAPAaQABACADABIAnALQAFABABAEIABAEQAAAHgGACQghAOgSAPQgUATgCAWQAAAFgGACIAAABQgGACgEgEIgGgGQgMgKgPABQgQAAgLALIgBACQgNAPgDAdQgBAGgFACIgBABQgFACgEgDQgdgOgYAHQgNAFgNANQgFAEgBAHIgCAIQAAAEgEACIgBABQgEABgDgBQgcgOgdACQgZAAgZAOIgEABIgFgBgAgZDpQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgCQgBgGgDgCQgfgcgvAJQgFABgCADIgMAYQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQAAAAABAAQASgHAVgBIAGAAQAYAAAXAJgAinB+QgBAAAAABQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQATASAKAWQAHAOACAZQAAABAAABQABAAAAABQAAAAABAAQABABAAAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAFgJQAEgIABgJIAAgBQABgVgBgJQgBgOgHgHQgKgLgeAAgAATCcQgMAEgJAKQgDADAAAEIgBAVQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABABIADgBQAHgGAJgEIAGgCQAWgIAbAJQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgJgWQgCgEgEgCIgBgBQgKgEgKAAQgJAAgIADgAgVDHIADABIABgCIABgdQgIgLgLgGQgSgIgUAHQgHACgDAGIgKATQgCAEAEAAIALAAQAhAAAaARgABOB1QgKALACAUQAAALAFALIADAHIACABQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAGgTAKgLQALgNAWgGIABgCIAAgCIgSgPIgEgCIgCAAQgVAAgJAKgAiCBiIgOAKIgBACIACABQAVADAMAMQALAMACAWIABACIACgBIADgGQAEgGABgJIAAAAQAEgTgJgNQgIgLgWgCQgFAAgEADgAARBnQgLABgGAJIAAAAQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABIgCAgQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAQAEgEAIgDQASgIAUAFQAEAAgCgDIgMgdQgCgEgCAAQgHgEgHAAIgFABgAgeCNIAMAIQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCIACgfQAAgFgDgDQgGgHgKgBQgIgCgJADQgEACgCAEIgOAaIAAACIACABIAKgBQAOAAAMAGgADSBDQghAMgKAJQgNANAEAcQABAFAEAEIAIAHQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAKgmA3gZQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgTgFIgGgBIgHABgAA0BPQgFAFAAAOIACAJIAHAQIACABIABgBQADgJAHgGQAJgKAQgDIABgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgPgMQgCgDgFgBIgGAAQgJAAgGAEgAhbBGIgQALIgBACIABABQASAFAIALQAFAHADAJIABABIACgBIAKgTIACgEQACgNgGgGQgGgHgOABIgBAAIgBAAQgDAAgEACgACbAzQgUABgKALQgJAMADAVQABAEADACIAOANQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCQABgWAOgPQAJgIATgJIACgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgIgCQgJgDgJAAIgDAAgAAMA5QgEADgEAIQgEAIAAAKIgBAMQAAAAAAABQABAAAAABQAAAAAAAAQAAAAABgBIAGgDQALgFANADQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIgOgiQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgDACgAi7AjIgDABQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQABABAAAAIAGADQASAJAHANQAIANgBARQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIARgMQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAGgUgJgNQgHgMgVgDIAAAAIgOgBIgMABgAgOBhQABABAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIABgSIgCgLQgDgIgEgEQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABIgSAgQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIAHgBQAMAAAJAHgABnAjQgNABgGAIQgEAFAAAJQABAHAFAEIAQAPQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCQABgQAIgLQAGgHAIgEIABgCIgBgCIgSgFIgGAAIgCAAgAAcAzQAAABgBAAQAAABAAAAQAAABAAABQABAAAAABIAKAYIABABIACgBQACgEADgDQAGgGAKgBQABAAABAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIgIgHQgGgGgIAAIgJgBQgBAAAAAAQgBAAgBABQAAAAAAAAQgBABAAAAgAhAAyIgIAGIgBACIACABQAKACAGAGIAFAIQAAAAAAABQABAAAAAAQAAAAABAAQAAgBABAAIAMgXQAAgBABAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgJgBQgKAAgHAFgAh2AXIgSAEIgBABIABACQAJAFAFAIQAIAMgBAPIABACQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAQgMQALgHgDgNIgBgFQgFgJgNgCIgCAAIgFgBIgEAAgAADAeQgBACAAADIgBATIABABIABAAQALgOAVAAIABgBIAAgBIgSgQIAAAAIgDAAQgJAAgDAHgAAxAYIABAIQABAGADADIAPANIABAAIABgBQABgIAEgHQAEgFAEgCIABgCIgBgBIgdgIIgBAAQgFAAAAAEgAgWAVIgCABIgTANIAAABIABABQAVACAKANIABAAIABgBIABgVQgDgJgKAAIgBAAgADLgfIgcAEQgFABgCAEQgJAKgDAMQgEATALASQABACADABIAZAHIACgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgPgnAZgiQAAgBABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgBgBIgBAAgAg7ANIgeAFIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAFAEADAFQAEAGAAAIIABACIABgBIARgLQAFgDAAgGIABgGQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIgBAAgACUgWIgeAFQgEABgDADQgGAGgBAIQgCALAHALIACABIAhAJQADABgBgDQgJgaANgYQAAgBAAAAQABgBgBAAQAAgBAAAAQAAAAgBAAIgBAAgAjFgxQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAEAMAAALQACAZgQAYIAAADQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABAAIAcgFQAGgBADgEQASgRgCgPQgCgKgKgLIgDgFIAAAAQgDgEgEgBIgVgGIgBAAIgCABgAAngDIgJADQgFADAAADQgDAHAGAEIALAKIABABIABgBQAAgUAPgLIAAgBIgBgBgAg5gLIAAACQAOAMgCASQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABgBIALgIQAEgDABgGQAAgFgFgDIAAAAQgEgDgFgBIgPgEIAAAAIgBAAgAACAFIgGANIAAACIABACQABAAAAAAQAAABAAAAQABAAAAgBQABAAAAAAQAEgGALgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgEIgBgBIgMgDIgBgBIAAABgABfgNQgSAEgMAIIgBABIgFADQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAhAKQABAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQgDgJACgIQABgGACgFQABAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAgAiSgjIAAACQAGAJABAJQADAPgLAQIAAACQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAegFIAEgCQAGgIABgIQABgMgHgIIgBgBIgDgDIgdgIIgBAAIgBABgAgUAAQACAFgBAHIABABIADABIABgBIAGgLIgBgBIgJgCIgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAgAhigUQAGAOgHAOQgBABAAAAQAAABAAAAQABAAAAABQAAAAABAAIAjgGQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAAAgBAAQAAgBAAAAQgPgPgIgDIgNgEQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABgAALgLIgCAEQgBABAAAAQAAAAAAABQAAAAABAAQAAABABAAIAIACIADAAIAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgEgCgDgEIgBgCIgCACgAgMgXQgBAGgEAEIABACIANADIABAAIAEgKQABAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgGAAgFgEIgBgBIgBABgAAbgoIgHANQgDAFAEAGQABADAGACQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAIAMgCIABgBIgBgBQgMgIgEgQIgBgBIgBAAgAgdgzQgCALgHAKQgEAFgFADQgBAAAAABQAAAAAAAAQAAAAABABQAAAAAAAAIALADQAGACAFgEQAGgDAAgGIgBgHIgHgQIgBgBIgBABgABSg2IgiAYQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQAGAEAIACIAEAAIAcgFQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAgBgBIgGgIQgFgJAAgLIgBgBIAAgBIgBABgAhPg+IgBABQAAAKgGAJIgGAHQgBAAAAABQAAAAAAAAQAAABAAAAQ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");
	this.shape_24.setTransform(256.8,140.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CBCED3").s().p("AiJD5QgDgCAAgCIgBgEQABgmgKgZQgKgZgYgQIgDgEIgBgDQAAgEAEgDIALgIIABgBQAHgYgIgPQgMgTgngJQgFAAgDgGIAAgBQgCgFAEgFQAXgagCgbQgBgRgIgNQgBgEgFgBIgigKQgHgCAAgHQAAgHAHgCQAcgHAOgNQARgQAKgkQABgFAFgCQAFgCAEAEIAJAIIAFACQAcAGATgPQASgPAAgZQABgGAEgDQAFgDAFABIAJAFQANAIAMAAQAVgBAbgXQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIABgIQABgGAEgCQAGgCAEAEQAPARAVAAQAaAAApgWQAFgDAFAFIACACQABAEgCAEIgdA2QgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAIAXATAHQAPAHAigBQAGAAAEAGIABABQABAEgBAEQgQAgANAVQAJAMAVAKQAGADABACIAEAEQACAGgDAFIgDAEQgNARgEAMQgHAZAPAaQABACADABIAnALQAFABABAEIABAEQAAAHgGACQghAOgSAPQgUATgCAWQAAAFgGACIAAABQgGACgEgEIgGgGQgMgKgPABQgQAAgLALIgBACQgNAPgDAdQgBAGgFACIgBABQgFACgEgDQgdgOgYAHQgNAFgNANQgFAEgBAHIgCAIQAAAEgEACIgBABQgEABgDgBQgcgOgdACQgZAAgZAOIgEABIgFgBgAgZDpQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgCQgBgGgDgCQgfgcgvAJQgFABgCADIgMAYQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAQAAAAABAAQASgHAVgBIAGAAQAYAAAXAJgAinB+QgBAAAAABQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQATASAKAWQAHAOACAZQAAABAAABQABAAAAABQAAAAABAAQABABAAAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAIAFgJQAEgIABgJIAAgBQABgVgBgJQgBgOgHgHQgKgLgeAAgAATCcQgMAEgJAKQgDADAAAEIgBAVQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABABIADgBQAHgGAJgEIAGgCQAWgIAbAJQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgJgWQgCgEgEgCIgBgBQgKgEgKAAQgJAAgIADgAgVDHIADABIABgCIABgdQgIgLgLgGQgSgIgUAHQgHACgDAGIgKATQgCAEAEAAIALAAQAhAAAaARgABOB1QgKALACAUQAAALAFALIADAHIACABQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAGgTAKgLQALgNAWgGIABgCIAAgCIgSgPIgEgCIgCAAQgVAAgJAKgAiCBiIgOAKIgBACIACABQAVADAMAMQALAMACAWIABACIACgBIADgGQAEgGABgJIAAAAQAEgTgJgNQgIgLgWgCQgFAAgEADgAARBnQgLABgGAJIAAAAQAAABgBAAQAAABAAAAQAAABgBABQAAAAAAABIgCAgQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAQAEgEAIgDQASgIAUAFQAEAAgCgDIgMgdQgCgEgCAAQgHgEgHAAIgFABgAgeCNIAMAIQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCIACgfQAAgFgDgDQgGgHgKgBQgIgCgJADQgEACgCAEIgOAaIAAACIACABIAKgBQAOAAAMAGgADSBDQghAMgKAJQgNANAEAcQABAFAEAEIAIAHQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAKgmA3gZQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAIgTgFIgGgBIgHABgAA0BPQgFAFAAAOIACAJIAHAQIACABIABgBQADgJAHgGQAJgKAQgDIABgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgPgMQgCgDgFgBIgGAAQgKAAgFAEgAhbBGIgQALIgBACIABABQASAFAIALQAFAHADAJIABABIACgBIAKgTQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQACgNgGgGQgGgHgOABIgBAAIgBAAQgDAAgEACgACbAzQgUABgKALQgJAMADAVQABAEADACIAOANQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCQABgWAOgPQAJgIATgJIACgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgIgCQgJgDgJAAIgDAAgAAMA5QgEADgEAIQgEAIAAAKIgBAMQAAAAAAABQABAAAAABQAAAAAAAAQAAAAABgBIAGgDQALgFANADQAAAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIgOgiQgBgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgDACgAi7AjIgDABQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQABABAAAAIAGADQASAJAHANQAIANgBARQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIARgMQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBQAGgUgJgNQgHgMgVgDIAAAAIgOgBIgMABgAgOBhQABABAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIABgSIgCgLQgDgIgEgEQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABIgSAgQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIAHgBQAMAAAJAHgABnAjQgNABgGAIQgEAFAAAJQABAHAFAEIAQAPQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCQABgQAIgLQAGgHAIgEIABgCIgBgCIgSgFIgGAAIgCAAgAAcAzQAAABgBAAQAAABAAAAQAAABAAABQABAAAAABIAKAYIABABIACgBQACgEADgDQAGgGAKgBQABAAABAAQAAgBAAAAQAAAAAAgBQAAAAgBgBIgIgHQgGgGgIAAIgJgBQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAgAhAAyIgIAGIgBACIACABQAKACAGAGIAFAIQAAAAAAABQABAAAAAAQAAAAABAAQAAgBABAAIAMgXQAAgBABAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgJgBQgKAAgHAFgAh2AXIgSAEIgBABIABACQAJAFAFAIQAIAMgBAPIABACQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAQgMQALgHgDgNIgBgFQgFgJgNgCIgCAAIgFgBIgEAAgAADAeQgBACAAADIgBATIABABIABAAQALgOAVAAIABgBIAAgBIgSgQIAAAAIgDAAQgJAAgDAHgAAxAYIABAIQABAGADADIAPANIABAAIABgBQABgIAEgHQAEgFAEgCIABgCIgBgBIgdgIIgBAAQgFAAAAAEgAgWAVIgCABIgTANIAAABIABABQAVACAKANIABAAIABgBIABgVQgDgJgKAAIgBAAgADLgfIgcAEQgFABgCAEQgJAKgDAMQgEATALASQABACADABIAZAHIACgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgPgnAZgiQAAgBABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgBgBIgBAAgAg7ANIgeAFIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAFAEADAFQAEAGAAAIIABACIABgBIARgLQAFgDAAgGIABgGQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAIgBAAgACUgWIgeAFQgEABgDADQgGAGgBAIQgCALAHALIACABIAhAJQADABgBgDQgJgaANgYQAAgBAAAAQABgBgBAAQAAgBAAAAQAAAAgBAAIgBAAgAjFgxQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAEAMAAALQACAZgQAYIAAADQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABAAIAcgFQAGgBADgEQASgRgCgPQgCgKgKgLIgDgFIAAAAQgDgEgEgBIgVgGIgBAAIgCABgAAngDIgJADQgFADAAADQgDAHAGAEIALAKIABABIABgBQAAgUAPgLIAAgBIgBgBgAg5gLIAAACQAOAMgCASQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABgBIALgIQAEgDABgGQAAgFgFgDIAAAAQgEgDgFgBIgPgEIAAAAIgBAAgAACAFIgGANIAAACIABACQABAAAAAAQAAABABAAQAAAAAAgBQABAAAAAAQAEgGALgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgEIgBgBIgMgDIgBgBIAAABgABfgNQgSAEgMAIIgBABIgFADQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAAAIAhAKQABAAABAAQAAgBAAAAQABAAAAgBQAAAAgBgBQgDgJACgIQABgGACgFQABAAAAgBQAAAAgBgBQAAAAAAAAQgBAAgBAAgAiSgjIAAACQAGAJABAJQADAPgLAQIAAACQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAegFIAEgCQAGgIABgIQABgMgHgIIgBgBIgDgDIgdgIIgBAAIgBABgAgUAAQACAFgBAHIABABIADABIABgBIAGgLIgBgBIgJgCIgBAAQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAgAhigUQAGAOgHAOQgBABAAAAQAAABAAAAQABAAAAABQAAAAABAAIAjgGQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAAAgBAAQAAgBAAAAQgPgPgIgDIgNgEQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABgAALgLIgCAEQgBABAAAAQAAAAAAABQAAAAABAAQAAABABAAIAIACIADAAIAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgEgCgDgEIgBgCIgCACgAgMgXQgBAGgEAEIABACIANADIABAAIAEgKQABAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQgGAAgFgEIgBgBIgBABgAAbgoIgHANQgDAFAEAGQABADAGACQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAIAMgCIABgBIgBgBQgMgIgEgQIgBgBIgBAAgAgdgzQgCALgHAKQgEAFgFADQgBAAAAABQAAAAAAAAQAAAAABABQAAAAAAAAIALADQAGACAFgEQAGgDAAgGIgBgHIgHgQIgBgBIgBABgABSg2IgiAYQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQAGAEAIACIAEAAIAcgFQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAgBgBIgGgIQgFgJAAgLIgBgBIAAgBIgBABgAhPg+IgBABQAAAKgGAJIg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");
	this.shape_25.setTransform(1200.8,36.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_26.setTransform(1104.9,53);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_27.setTransform(1175.9,189);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_28.setTransform(1021.9,151);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_29.setTransform(1001.9,166);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_30.setTransform(845.9,109);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_31.setTransform(865.9,23);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_32.setTransform(845.9,8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_33.setTransform(687.9,53);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_34.setTransform(727.9,189);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_35.setTransform(628.9,147);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_36.setTransform(513.9,94);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_37.setTransform(537.9,109);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_38.setTransform(397.9,173);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_39.setTransform(377.9,188);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_40.setTransform(344.9,31);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_41.setTransform(175.9,86);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_42.setTransform(149.9,139);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_43.setTransform(48.9,46);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1C1E21").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_44.setTransform(122.4,124.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#332417").p("AAXAAQAAAPgHALQgGALgKAAQgJAAgGgLQgHgLAAgPQAAgPAHgKQAGgLAJAAQAKAAAGALQAHAKAAAPg");
	this.shape_45.setTransform(854.5,146.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgPAaQgHgLAAgPQAAgPAHgKQAHgLAIAAQAKAAAGALQAHAKgBAPQABAPgHALQgGALgKAAQgIAAgHgLg");
	this.shape_46.setTransform(854.5,146.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#332417").s().p("AAHA/QgHgPgKgKQgLgKgPgFIgFgBIABgFQAJgrAOgiQAKgXAIgNQANgSASgJQgRALgLASQgJAOgHAWQgLAegFAqQAPAEAMAKQAMALAJAQQAPAaAHAoIgUADQgFgogKgVg");
	this.shape_47.setTransform(894.7,126.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#332417").s().p("AghAlQALgGAHgJQAEgGAHgPIAKgVQAGgNALgIQAEgDAUgIIAXgIIAGATIgYAGQgPADgFAEQgKAFgGAJIgNAUQgHAOgGAHQgHAJgNAGIgtATg");
	this.shape_48.setTransform(859.9,178.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#332417").s().p("AgaB5QgWgJgNgIQgUgOgIgPQgDgGgCgOQgBgMAEgIQAFgRAPgRIAAgBIABAAQAVgEARgLQAQgMAMgSQASgdAGgxQgEAwgSAgQgLATgQANQgSAMgUAFQgMASgEANQgDAIABAJQACALADAFQAHAOASAKQAMAHAPAFQAFgSAJgOQALgVAQgNQAQgOAXgFQAUgFAYABIgBAUQgtgEgbAUQgbAUgOAsIgCAHg");
	this.shape_49.setTransform(874.2,114.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#332417").s().p("AAsA7QgGgLgBgEQgDgJAFgJQACgFAKgHQAGgEABgHQAAgLgMgPQgTgYgdgNQgegNgeAFIgDgTQAjgFAhASQAgARATAcQAMATgBANQgCAMgJAEQgJAHgCADQgHAJAKAUQAKAWgBAJQAAgJgLgVg");
	this.shape_50.setTransform(889.3,174.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#332417").s().p("AAAHXIgGh1IgDh2QgBgxABhFIACh2IAHnWIABAAIAHHWQADDFgBAnIgDB2IgGB1g");
	this.shape_51.setTransform(883.6,142.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#332417").s().p("AgHBHQgCggAAgnQAAgmACggQACgmAFghQAGAjABAkQADAeAAAoQAAAngCAgQgCAmgGAhQgFghgCgmg");
	this.shape_52.setTransform(897.9,143.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#332417").s().p("AgHB2QgCg0AAhCQAAhBACg0QACg/AFg4QAFA4ADA/QACA0AABBQAABCgCA0QgDA/gFA4QgFg4gCg/g");
	this.shape_53.setTransform(867.2,157.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#332417").s().p("AgLBHQgDghAAgmQAAglADghQADgmAIghQAIAbAEAsQADAkAAAiQAAAjgDAkQgEAsgIAbQgHghgEgmg");
	this.shape_54.setTransform(856.4,118.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#573E28").s().p("AkdmqQEVjjEaDcIAMPIIovAHg");
	this.shape_55.setTransform(876.2,141.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#1C1E21").ss(10).p("AESmlQkajWkVDdIALOtIIwgGg");
	this.shape_56.setTransform(876.2,140.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1C1E21").s().p("AkdmeQEVjdEaDWIAMOuIowAGg");
	this.shape_57.setTransform(876.2,140.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#332417").p("AAXAAQAAAPgHALQgHALgJAAQgJAAgGgLQgHgLAAgPQAAgPAHgKQAGgLAJAAQAJAAAHALQAHAKAAAPg");
	this.shape_58.setTransform(243.1,149.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgPAaQgHgLABgPQgBgPAHgKQAGgLAJAAQAJAAAHALQAHAKAAAPQAAAPgHALQgHALgJAAQgJAAgGgLg");
	this.shape_59.setTransform(243.1,149.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#332417").s().p("AAHA/QgHgPgKgKQgLgKgPgFIgFgBIABgFQAJgtAOggQAKgXAIgNQANgSASgJQgRALgLASQgJAOgHAWQgLAegFAqQAPAEAMAKQANALAIARQAPAZAHAoIgUADQgFgogKgVg");
	this.shape_60.setTransform(283.2,128.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#332417").s().p("AghAlQALgGAHgJQAEgGAHgPIAKgVQAGgMALgIQAHgGARgGIAXgIIAGATIgYAGQgPADgFAEQgKAGgGAJIgNATQgHAOgGAHQgHAJgNAGIgtATg");
	this.shape_61.setTransform(248.4,181);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#332417").s().p("AgaB5QgWgJgNgIQgTgNgJgQQgDgGgCgOQgBgMAEgIQAFgQAPgSIAAgBIACAAQAUgEARgLQAQgMAMgSQASgdAGgxQgDAwgTAgQgLATgRANQgRAMgUAFQgMASgEANQgDAIABAJQACALADAFQAHAOASAKQAMAHAPAFQAFgSAJgOQALgVAQgNQAQgOAXgFQAUgFAYABIgCAUQgtgEgaAUQgbAUgOAsIgCAHg");
	this.shape_62.setTransform(262.7,116.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#332417").s().p("AAsA7QgGgLAAgEQgDgJAEgJQADgFAKgHQAFgEABgHQAAgLgLgPQgTgYgegNQgdgNgeAFIgDgTQAigFAhASQAhARATAcQAMATgCANQgBALgJAFQgJAGgCAEQgHAJAJAUQAKAWAAAJQgBgJgLgVg");
	this.shape_63.setTransform(277.8,176.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#332417").s().p("AAAHYIgGh2IgDh2QgBgxABhFIACh2IAHnXIABAAIAHHXQADDEgBAoIgDB2IgGB2g");
	this.shape_64.setTransform(272.2,144.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#332417").s().p("AgHBHQgCggAAgnQAAgmACggQADgmAEghQAGAjACAkQABAQABA2QAAAngCAgQgCAmgGAhQgEghgDgmg");
	this.shape_65.setTransform(286.4,146.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#332417").s().p("AgHB2QgCg0AAhCQAAhBACg0QACg/AFg4QAGA8ACA7QACAxAABEQAABCgCA0QgDA/gFA4QgFg4gCg/g");
	this.shape_66.setTransform(255.8,159.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#332417").s().p("AgLBHQgDgiAAglQAAglADghQAEgmAHghQAIAbAEAsQADAjAAAjQAAAjgDAkQgEAsgIAbQgHghgEgmg");
	this.shape_67.setTransform(244.9,121.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#573E28").s().p("AkdmqQEVjjEaDcIAMPIIovAHg");
	this.shape_68.setTransform(264.8,144);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#1C1E21").ss(10).p("AESmmQkajWkVDdIALOuIIwgHg");
	this.shape_69.setTransform(264.8,142.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#1C1E21").s().p("AkdmeQEVjdEaDWIAMOuIowAHg");
	this.shape_70.setTransform(264.8,142.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CBCED3").s().p("AANDJIgCgCQgagsgogBIgEgBIgBgCQgCgDABgCIAEgKIAAgBQgFgRgMgGQgOgGgbAKQgDABgEgCIgBAAQgDgDAAgEQAEgYgMgRQgHgJgKgFQgEgCgCABIgZAIQgFABgCgEQgDgEADgEQAOgPAEgOQAEgRgJgYQgBgDACgDQADgEADABIAJACIAEgBQAUgIAFgQQAEgQgJgQQgCgDABgEQABgDAFgCIAGAAQALAAAHgFQANgJAIgZIgBgEIgDgFQgCgEACgDQADgDAEABQAPADANgIQAQgKAQgdQADgEADABIADABQACABAAADIAEAsIABADQANALAOgDQAMgCAUgOQAFgDADACIABABQADABAAAEQAEAaAQAGQALAEAQgCIAGgBIAEACQADACAAAEIAAAFQgBAPADAJQAFARAUAKIAEABIAbgJQAEgBACABIACACQADAEgDAEQgPAWgEAQQgFARAIAPQABAEgCADQgCAEgEgBIgGgBQgLgBgJAGQgJAGgDALIAAACQgCANAKAUQACADgCAEIgBABQgCADgDAAQgXACgMAPQgGAHgDAOQgCAFACAEIADAFQABADgBADIgBABIgEACQgWADgRAMQgPALgKASQgBADgEAAgAAQCkIACATIABACQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAIgKAMgKQARgMATgDQAEgBgCgEIgBgCQgCgDgDAAQgfgDgXAWIgBAAQgCACAAAEgAguCKIgEADQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQABABAAAAQASACAQAKQAKAGAKAOQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgIQAAgGgEgGQgHgOgEgEQgHgIgGgCIgEAAQgLAAgNAJgAAQB2QgDAEAAAFIABAQQABAAAAABQAAAAABAAQAAABAAAAQABAAAAgBQAXgRAaAAIACgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgKgRIgBgBQgHgCgHAAQgQAAgLAOgAgPB2QAKACAKANIABABIABgBIAAgFQgBgIgCgDQgFgOgKgDQgKgEgNAIQgDACgCADIgEAMIAAABIACAAQAJgFAKAAIAHABgABhBHQgPACgIAMQgHAIgBAIQgBAEACACIAIANIABABIACgBQADgIADgFIADgEQAMgOASgEIABgCIgBgCIgOgJQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgCABgAhFBmQAJAEAHALIACABIABgCIAGgOQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQgFgOgKgEQgJgEgOAGQgJAEgGAGIgCACIAAACQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAFgBIAGAAQAKAAAIAEgAALBPQgCADABACIABAWIABABIACAAQALgKANgCQAGgBAEABQABAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAAAIgMgUQgCgDgCAAIgGgBQgJAAgIAKgAgIBbQAFACAFAEIABABQABAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgPIgBgDQgCgJgHgCQgHgBgIAGIAAAAIgEAFIgFANIAAACIABAAQAHgDAGAAIAJACgAh5AoIgPAFQgBABAAAAQAAAAgBABQAAAAABAAQAAABABAAQAGAFAFAHQAMAQAAAUIABABQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAgBIAPgOQADgCAAgEQAEgSgIgJQgEgFgLgDIgEgBIgDgBIgDAAgABAAwQgHABgFAEQgHAFAAAIIAAABIABADIALAUIACABIABgBIAFgJQAIgNAOgEQABgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBIgTgMIgDgCIgBABgAg3BJQAJAEAGAKQAAAAABABQAAAAAAAAQABAAAAgBQAAAAAAgBIAFgNQAEgKgHgFIgDgDQgGgCgJADIgBAAQgDABgCACIgKAKIAAABIABABIACAAQAGAAAGACgABtATQgOAJgBAKQgDAKAKAMQAGAHAGAEIAFADIABAAIABgCQgEgMACgMQABgNALgLIAAgCIgBgBIgRgCIgBAAIgCAAgAAHAoQAAABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIACAaIABABIABAAQAJgIALABQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBgBAAIgGgLQgCgEgEgCIgJgFIgBAAIgCABgAhPAbIgVAHIgBABIABABQAHADAEAFQAJAJgBAOIABABIABAAIAQgPQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQABgHgDgGQgEgHgIgCIgBgBIgBAAIgBAAgAgFA9IAFADQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIgBgTQAAgEgEABIgFAEQgGADgCAGIgDAHQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAQAEgCAEAAIAFAAgAAeAcQgBAEABAGQAAAGAEAHIAEAHQABAAAAABQAAAAAAAAQABAAAAAAQAAgBAAAAIADgFQAFgHAIgDQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgWgPIgDgBQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABgAgdAeIgQAPQgBABAAAAQAAABAAAAQAAAAABAAQAAAAABAAIAIACQAFADADAEQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAABgBIAFgNQABgEgBgEIgCgEQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgDABgABLAPQgKAEgCAGQgBAHAGAHIAEAFIALAGQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgCgGABgHQADgKAHgHQABgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgOgCIgFABgAingVIAAABQAHAZgEARQgDAMgKANIAAACIACAAIATgGQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAFgJABgNQABgTgMgSIAAgBQgCgDgEAAIAAAAIgBAAgAg5AUIgJADQgBAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAKAHACALQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAgBIATgRIABgEQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgJgCgGAAIgGABgAgEAUIgBABIgGAQQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAAAAAQAMgIAMAEIABAAIAAgBIgIgNQgCgCgDAAQgCAAgEACgAiSgSIAAACQANAZgHAbIAAACIACAAIAOgFQAHgCACgHQADgKgBgGQAAgKgIgKIAAAAQgDgDgEgBIgRgCIAAAAIgBAAgAAtAMIgGADQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAQALIABAAIABgBIAAgHQACgGAFgEQAAgBABAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgHgCIgDAAQgEAAgEACgAAOAPIACAEIAGAMQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQABgNANgIQABAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAIgRgDIgBAAQgGAEAAAGgAgbAKIgKAEQAAAAgBAAQAAABAAAAQAAAAAAAAQABAAAAAAQANADAGALIABABIABgBIADgJQACgDgCgEQgDgDgEgBIgHABgAhtgLQALARgHATQAAABAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAPgFQAJgDADgJQADgKgHgHIAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgWgEQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABgACvg1IgOAEQgFACgDAEQgPATgCAKQgDANAOAOQACADAEABIAHABQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgJgaAXglQABAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgCgBIgBAAgAhIgHIAAABQAEAGAAAHIgBAHQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIARgFQAFgCADgFIABgDQABgDgEgBIgagDIgBAAIgBAAgAgLAFIAAABQADADACAFIABAAIACgBIABgBIgBgIIgBgBgACFgoIgFACQgIADgGAEQgMAJgBAKQgBALAKAKIAFACIAOACIABgBIAAgBQgIgMADgPQACgKAIgMQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBgBIgBAAgAAEAAIAAABIAAAKIABACIACAAIACgBQABgHAFgDQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAgBAAIgBgBIgBgBgABegbIgNAEIgFADQgIAFAAAHQAAAGAEADQADAEAFABIAPACQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgCQgHgKACgJQABgHADgFIAAgCIgBAAIgBAAgAglgVIAAABQADAIAAAIIgCAIQAAAAAAABQgBAAABAAQAAAAAAAAQAAAAABAAIAHgDQAFgBABgDQACgEgCgEIAAAAIgDgEIgLgHIAAAAIgBAAgAA+gRIgUAHQgEABACAEIADAEQACACAEABIAOACQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBgBAAQgCgDAAgHQAAgEACgDQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBAAgAAfgaIgJAIIgEAFQgBAEABADQACAFAEAAIALABIABAAIAAgBQgIgMAEgMIAAgCIgBABgAgPgKIAAAIQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAKgDIAAgBIAAgHQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQgEADgFgBQAAAAAAAAQAAAAgBABQAAAAAAAAQABAAAAAAgAACgMIABAEQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIAFgCQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBIAAAAIgBgBIgHgBIgBgBIgBACgAg9gjQABAHgFAHIgEAEIAAABIABABIAYAEQAEAAgBgEIgDgGQgEgIgHgEIgEgDIgBgBIgBACgAgIgiQgHAJgLABQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAJAGIABAAQAHACAFgHIAAAAIgBgMIgBgBIgBABgAhZg2QACAIgDAIQgDAJgIAHIgBABIABABIANACQAHABAGgDQAFgEACgGQACgHgDgFQgBgCgDgCIgOgJIgBgBIgBACgAA1gvIgBABQgJAIgEALIAAAAIgCAFQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIAYgIQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBgBAAQgGgEgCgGQgBgCgBgGIgBgCIgBABgAABgkIAAABIAAAKQABAFAEABQACABAFgBIAJgIQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQgKAAgJgIIgBAAIAAAAgAh3hLQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQACAOgDALIgGALIgKALQAAAAAAAAQgBABAAAAQABAAAAABQAAAAABAAQAfACAGgSQADgKgIgMQgDgFgEgDIgHgEIgBAAIgBAAgABRhJIgRAPIgCAFQgDAQAQAHIACAAIAXgHQABAAAAAAQABgBAAAAQAAAAgBgBQAAAAgBgBQgPgLgCgVIgBgBIgBAAIAAAAgAgpg7QgDAGgFAEIgIAEIAAABIAAABIAOAJIAHADIAIABQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgOgXIgBgBIgBABgAAchCIgLAcQgBADAEABQAGAAAEgCIADgBIAPgOQABgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgEgBgEgCQgFgDgFgHIgBgBIgBABgAgdg6IALAUQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIAEgGIABgDIgCgSIgBgBIgBAAQgGAGgFAAQgDABgDgBQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABAAAAgAgBhAIABANQAAAEACACIAEAEQADAEACgFIAIgUQABgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgIACQgFAAgFgEIAAAAIgBACgABuhkIgPAOQgDACAAADQgBAKADAJQAFANAOAGQAAABABAAQABAAAAAAQABAAAAAAQABAAAAgBIASgFQABgBAAAAQAAAAAAgBQABAAgBAAQAAAAgBgBQgYgRABgfQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgBABgAg8haQgGAMgKAGIgLAGIgBABIAAABIATANIAFABQAPgBAEgRQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIgLgVIgCgBIgBACgAAohhIgHASIAAAFQAIARAPgDIADgBIAPgPIAAgBIgBgBQgJAAgFgCQgMgFgFgMIgBgBIgBABgAguhYIAAACIAKAPQAIAGAFgBQAHgBAEgKIACgGIgBgNQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAABgBAAQgIAJgKAAQgHABgFgCIgCABgAgEhhIACAOQABAJAHAEIAEABQAHAAAHgHIACgEIAFgNIAAgCQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQgHADgFAAQgKABgIgHIgCAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAgAhPh6QgJAVgMAIQgHAGgKABIgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAOAJQADACADAAIAAAAQAagEAGgZQABgCgCgDIgJgPIgCgBIgBABgAA2iHIgEAMQgDAGACAHQACARALAEQAGADANgCIAEAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIAPgNIAAgCIgBgBQgNABgKgEQgQgHgHgTIgBgBIgCABgAhDh8QAAAAgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAEAHIAJALQALAJAKgBQAMgBAIgNQABgCAAgDIgBgQQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgMALgOAAQgKABgNgEIAAAAIgBABgAgHiEIACARQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQAKAMALgBQAKAAAJgMIABAAIAGgMIAFgNQABgDgDABQgdASgVgMIgBAAQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAABgAgXi4QgNAWgOAJQgLAIgNAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAUAJANgBQAMgCANgNQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBIgDgfQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgDABg");
	this.shape_71.setTransform(684,164.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CBCED3").s().p("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CgQgHgJQgHgIgTABIgBAAIgCAAQgEAAgEADgAChBRQgMAPAFAbQABAFADADIATAQQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQABgdATgSQANgMAXgKQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgKgDQgNgEgOAAQgbABgMAPgAAQBIQgGAFgFAKQgFAKAAANIgBAPIABACIABAAIAIgEQAPgGAQAEIACgBIAAgCIgSgsQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBAAIgDABgAjwAtIgFABQgBAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQABAAAAAAIAHAEQAXAMAKARQAKARgBAVQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAWgQQABgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAIgbgLgPQgKgQgagEIgRgBIgQABgAgSB9QABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAIABgXQABgIgDgGQgCgIgHgIQgCgCgDAAQgDABgBACIgXAqQgCADAEAAIAJgBQAQAAAMAKgABsA4QgFAGAAAMQABAJAHAGIAVASQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABgVALgNQAIgKALgFQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIgCgCIgXgHIgKgBQgSACgHAKgAApA/QgDAAgCADQgCADACADIANAfIACABIABgBQADgGAFgEQAHgHANgBQABgBAAAAQABAAAAgBQAAAAAAgBQAAgBgBAAIgLgKQgIgHgJAAIgJgBIgDAAgAhSBBIgLAHQgBAAAAABQAAABAAAAQAAABABAAQAAAAABABQAOACAHAJQAEAEACAFQAAABABAAQAAABABAAQAAAAABgBQAAAAABgBIAQgeQAAAAABgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgLgBIgBAAQgMAAgJAHgAiYAeIgXAEQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQALAGAIALQAKAQgBATIABACIACAAIAWgPQANgKgDgQIgCgGQgGgLgSgDIgBAAIgGgBIgGAAgAAEAnIgCAGIgBAYQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAgBABAAQAOgSAbABIACgBIgBgCIgXgUIAAAAIgDgBQgLAAgFAKgABCAaQgDACAAADIABALQABAGAFAFIATAQIACAAIABgBQABgLAFgIQAEgFAHgEIABgCIgCgCIglgLIgBAAIgEABgAgfAcIgYARQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAAAABIACABQAbABANASIABAAIABgBIACgcQgFgLgNAAgAEFgpIgkAHQgFAAgEAFQgeAlAYAnQABADAEABIAhAJQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIABgDQgSgwAfguIAAgDIgCgBIgBAAgAhMARIgnAHQgEABADADQAHAEAEAHQAEAIAAAKIABABQABAAAAABQAAAAABAAQAAAAAAAAQAAgBABAAIAUgPQAGgDACgIIABgIQAAgEgCgCQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAIgBAAgACYgWQgFABgEADQgIAJgCAKQgCAOAJAOIACACIArAMQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAIABgCQgMghARggIAAgCQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAgAj9hAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAFAOABAPQABAggTAgQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIAkgGQAHgBAFgFQAXgXgDgTQgCgLgNgRIgEgFIAAAAQgDgFgGgCIgbgIIgBAAIgCABgAAygEQgHACgEACQgGADgBAFQgDAIAHAGIAPANIABABIABgCQAAgZATgOQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIgCgBgAACAHIgIAQQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIACADQABAAAAAAQABABAAAAQABAAAAgBQAAAAABAAQAGgJANAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAIAAgFQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAgBAAIgOgEQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABgAhJgOQAAAAgBAAQAAAAAAABQAAAAAAAAQABAAAAABQARAQgCAXQAAAAAAABQAAAAAAAAQAAAAAAAAQABABAAAAIABgBIAOgJQAGgFABgHQAAgHgGgEIgBAAQgFgEgGgBIgTgGIAAAAIgBABgAB6gRQgXAEgPAMIgBAAIgHAEQgCADABADQAAADAEABIAqAMQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgEgLACgLQABgIADgGIAAgCIgCgBgAi8guQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAIAMABALQADAVgOAUIAAACQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAngGIAEgDQAIgKABgLQACgOgJgMIgBgBQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgmgKIgBgBIgBABgAgZgBIAAABQACAGgCAJQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIAEAAIACAAIAHgOQABgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgNgCIAAgBIgBABgAh+gdIgBACQAIATgJATQAAAAAAABQAAABAAAAQAAAAABAAQAAABABAAIAtgIQADgBABgDQABgCgCgCQgSgTgMgEIgQgEIgBAAIgBAAgAAOgPIgDAGQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABIAKADQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgBgBQgFgCgEgGIgCgBIgCABgAgOgeIgBABQgDAIgEAEQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAIARAFQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIAGgMIAAgBQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgIAAgHgFIgBgBIAAABgAAigzIgIAQ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");
	this.shape_72.setTransform(1074.6,39.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CBCED3").s().p("AioExQgDgCgCgDIAAgEQABgvgNgfQgMgfgdgTQgDgCgBgCIgBgEQAAgGAFgDIAOgKIAAgCQAJgdgKgSQgNgWgygMQgHgCgCgGIAAgBQgDgHAFgGQAcgggCggQgBgVgKgQQgCgFgGgCIgqgMQgIgBAAgKQAAgJAJgCQAhgIASgQQAWgVALgsQACgGAGgCQAGgCAFAFIALAJQACACAEABQAkAHAWgSQAWgSABgfQAAgHAGgEQAFgEAHACIAKAFQASALANgBQAZAAAjgdQACgCABgEIAAgKQAAgHAHgDQAHgCAEAFQASAUAbAAQAfAAAzgaQAIgEAEAGIACADQADAEgDAFIgkBCQgCACABAEQAJAbAXAKQAUAIApgBQAJAAAEAGIABACQACAFgDAFQgTAoARAZQAKAOAaANIAJAGQADACACADQACAHgDAGIgFAGQgQAUgEAQQgJAdATAgQABADAEABIAwAOQAFABACAFIABAEQABAIgIAEQgrARgUATQgYAWgDAbQAAAHgHADIAAAAQgHADgGgFIgHgHQgPgMgTABQgTABgNANIgCACQgPAQgFAmQAAAHgHADIgBAAQgFADgGgDQg4gcgpApQgHAFgBAIIgCAKQgBAFgEADIgBABQgEACgFgCQgigRgkACQggABgeAQIgFACQgCAAgDgCgAgfEeQACABADgCQACgBABgDIAAgDQgBgGgEgEQgmgig6ALQgGAAgCAGIgQAcQgBABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQAAAAABAAQAAABABAAQAAgBABAAQAYgJAXgBIAHAAQAdAAAeAMgAjOCbQgDABgBADQgBAEADACQAXAUANAdQAIASADAeQAAADAEABQADABACgEIAGgLQAGgKAAgLQACgZgCgMQgCgSgIgIQgNgOgkAAIgHABgAAXC/QgOAFgLAMQgEAEgBAFIgBAaQAAABAAAAQAAABAAAAQAAAAABABQAAAAABAAIADAAQAJgIAMgFIAHgDQAcgJAgALQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIgLgbQgEgGgEgCIgBAAQgNgGgMAAQgLAAgKAEgAgaD1QABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIACgiIgBgBQgKgNgOgHQgVgKgZAIQgIADgEAHIgNAYQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAIAOAAQAoAAAgAWgABgCPQgNAOADAYQACAQAFALIADAJQAAABABAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAHgXAMgOQAQgRAZgGIACgCIgBgDIgWgTQgBgBgEgBIgCAAQgZAAgMAMgAigB4IgRAMIgBACQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAQAbAEAOAOQAOAQABAaQAAABAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAgBIAEgHQAFgIACgKQAFgZgMgOQgLgPgagBQgHAAgEADgAAWB+QgOABgIALIAAABQgCACAAAEIgDAnQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAHgFAJgDQAWgKAYAGQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIgOgjQgBgDgFgDQgIgEgJAAIgFABgAgkCtIAOAJQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAIADgnQAAgGgEgDQgHgJgMgCQgKgBgLADQgFACgDAFIgRAgIAAADIACABIAOgCQAQAAAQAIgADOBsQgRAQAFAiIABAAQABAHAEAEIAKAIQACACADAAQADgBABgDQALguBFggQADgBgBgDQAAgEgDgBIgXgGQgJgDgIAEIAAAAQgnANgNAMgABBBhQgIAHABAQIACALIAIAUQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAEgMAHgHQAMgMATgEQABAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAIgBgDIgRgQQgEgDgFgBIgIAAQgMAAgFAFgAhwBWIgUAOIgBACQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAVAGALAOQAHAJACAKQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIACgBIANgYIABgFQAEgPgIgJQgHgIgSABIgBAAQgGAAgEADgAC/A/QgZAAgMAOQgMAPAFAZIAAABQAAADAEAEIASAQIADAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQABgcASgRQANgMAWgJQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgKgCQgLgDgKAAIgFAAgAAPBFQgGAGgEAIQgFAKAAAMIgBAPIABABQAAAAAAABQAAAAAAAAQAAAAABAAQAAgBAAAAIAIgEQANgFAQADQADABgBgDIgRgqQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIgBAAIgDABgAjmArIgEABQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAIAHADQAWAMAKAQQAJAQgBAUQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAIADAAIAVgPIACgDQAHgZgKgPQgKgPgZgEIgQgBIgQABgAgRB3QAAAAABAAQABABAAgBQAAAAABAAQAAgBAAgBIABgWQAAgHgCgGQgEgLgFgEQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDABgCACIgVAoIAAACIACABIAJgBQAOAAAMAJgABnA1QgEAHAAALQAAAHAHAHIAUARQAAAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAIACgCQABgVALgNQAGgIALgFQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIgCgCIgWgHIgKgBQgRADgHAIgAAiA/QgBADABADIANAdIABACQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQACgEAFgFQAHgHAMgBQAEAAgCgEIgLgJQgHgHgKAAIgLgBQgDAAgCADgAhPA+IgJAHIgBACIABABQAOADAGAIQAEAEACAFQAAAAABABQAAAAABAAQAAAAABAAQAAgBABAAIAPgdQAAAAABgBQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgMgBQgMAAgJAHgAiRAdIgWAEQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQAMAHAGAKQAJAOAAATIABACQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIAUgOQANgKgDgPIgCgGQgGgLgQgCIgCgBIgGgBIgFABgAAEAlIgCAGIgBAXQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIACAAQANgRAbAAIABgBIgBgBIgWgUIAAAAIgEAAQgKAAgEAJgAA/AZQgCACAAADIAAAKQABAFAFAFIASAQQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgBQABgLAFgHQAEgGAGgDIABgCIgCgCIgjgKIgBAAIgEABgAgeAbIgWAQQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABIABABQAaABAMARIACAAIABgBIABgbQgDgKgOAAgAD6gnIgjAGQgFABgEAEQgKANgEAPQgFAXANAWQACADAEABIAfAJQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAIABgCQgSgvAegrQAAgBABAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIgCgBIAAAAgAhIAQIgmAHQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIABACQAGAFAEAGQAEAIAAAJIABACQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAUgOQAGgFABgGIABgIQAAgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgBAAgAC2gbIglAGQgEABgEADQgIAIgBAKQgCANAIAOIACACIApALIACgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgLggARgeQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgCgBIgBAAgAjyg9QAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAFAMABARQABAfgSAdQgBABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIAigGQAGgBAGgFQAWgWgDgSQgCgNgMgNIgEgGQgDgFgGgBIgagIIgBAAIgCABgABDgHIgTADQgGABgFADQgFACgCAGQgCAHAHAGIANANQABAAAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQgBgYASgOQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgBAAIgBAAgAACAHIgHAPQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAIABADQABAAAAAAQABABAAAAQABAAAAgBQAAAAABAAQAGgJAMAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgEQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgOgEIgBgBIgBACgAhGgNIAAABQARAPgCAXIABABIABAAIANgJQAGgEAAgHQAAgHgFgEIgBAAQgEgDgGgCIgTgFIgBABgABJADQgCACAAAEQABADADABIApALIACgBIABgCQgEgKABgLQACgHADgGQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgCAAQgVADgQAMIgBAAgAizgrQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAABABQAHAMABAKQADATgNAUQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAlgGQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQAIgJABgLQABgOgJgKIgBgCIgDgCIgkgKIgBAAIgBABgAgYgBIAAABQACAHgCAIIABABIAEABIACgBIAHgNQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgMgCIAAgBIgBABgAh5gbIAAACQAHARgIASIAAACIACABIArgHQADgBABgDQABgCgCgCQgRgRgMgFIgQgEIAAAAIgCABgAAOgOIgDAGIAAACIABABIAKADQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIAAgBQABAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQgFgDgEgEIgCgBIgBABgAgOgcQgCAHgFAFIAAABIABABIAQAEIACAAIAFgMQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAQgIAAgGgFIgBAAIgBABgAAhgxIgIAPQgEAIAEAGQAEAEAGACIAFAAIAPgCIABgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQgPgJgEgVIgCgBIgBABgAgihAIgCABQgDAPgIAKQgGAHgFAEQgBAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAIAOAEQAHACAHgEQAGgEABgIQABgEgDgEIgIgUIgBgBIAAAAgABkhDIgpAdQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQAHAGAKACIAFAAIAjgGIACgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQgFgFgDgFQgGgLABgNIgBgCIgCAAIgBAAgAhhhNIgBACQgCAOgGAJQgDAEgFAEIAAADIABABIAeAIQAJADAJgFIADgDQADgCAAgCQAAgDgCgCIgigfIgBAAIgBAAgACThkIgaATQgEACgBAFQgDAMAEALQAEANANAGIAGABIAjgGIACgCIgBgDQgLgHgHgJQgMgRAFgXIgBgDIgBAAIgCABgAgSg7IAAACIAHAQIACACQAIAJAMgGIAAAAIAKgSQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQgTAGgQgJIgBAAIgBAAgACrhDQAGAIAUALIAGADQAEACAEgBIAhgFIACgCQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgTgLgLgPQgQgZAIghQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIgRAMQgJAGgFALIAAAAQgMAcALAQgAA5hdIgLAVQgDAEAAAHIAAAAIACAKQABADADABQADABADgCIAegWIABgCIgCgBQgHgCgFgDQgHgGgFgJIgBgBIgCABgAiRh3IgBACQgBAigdAWIgBACIACACIAYAGQAQAFAOgLQANgLgCgRIAAgCQAAgDgDgDIgegaIgBAAIgBAAgAg3hrQgGAKgOAGIgIADIgCABIABACIAeAbQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQACgDABgJQABgOgFgNIgDgIIgCgBIgCABgAAKhuIgCAnQAAADADACQACACADgBIALgFQADgBACgDIAPgbIgBgCQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgLADgKgEQgFgCgEgEIgCgBQgBAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAgAjDigQgGAygjAgIgBACIACACIAYAGQAMAEAJgIQAOgMAFgIQAKgQgBgWQgCgIgFgEIgVgUIgDgBQAAAAAAAAQgBABAAAAQAAAAAAABQgBAAAAABgAgqh0IAAACIAKAZQAEAHADAEQAGAGAFADQADACAEgCQADgCAAgDIADgvIgBgCIgDAAQgKAHgLAAQgGABgIgCIAAAAIgCABgAjei5QgMArgXAVQgQAQgZAHQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAABAAIAgAJIADAAQAQgKAMgQQAUgcACgmQAAgHgFgEIgCgBQgBAAAAAAQAAAAAAAAQgBABAAAAQAAABAAAAgABTiNIgLAVQgIAOAJANIAFAFQAKAHAQgEIAIgEIATgOIABgCIgCgCQgKgBgKgGQgPgJgIgSQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgCABgAhOihQgFAOgLAJQgNAKgTACIgBABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIARAPQAJAIALAAQAMABAIgIQAJgHAAgKQABgEgCgFIgMgcQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgCABgAAPioQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABIgBAXIABAHQAEAPAKAEQAKAFAQgJQAGgDACgFIALgUIAAgCQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgVAEgPgIQgJgFgHgHIgCgBIgBAAgABxjDIgOAaQgCAEABACQAEAaAQAKQAQAJAXgIQAMgDAJgHIAUgOQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIgCgCQgcgBgSgIQgWgKgMgVIgCgBIgCABgAhCivQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIAPAjQABAEAFACQAJAGALgBQANgBALgLQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAgBIABgoIgBgCQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgRALgXABQgJAAgNgDIgBAAIgBABgAhmjZQgIAUgRAOQgIAHgKADQgLAFgOABIgCACQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAABQAOALAPAFQAXAIAPgMQAOgKABgaQAAgKgDgIIgGgNQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABgAASjxQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAIgBAOQAAAMACALQAHAYAQAJQAQAHAZgJQAEgCACgEIANgYIAAgCQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgaADgWgLQgQgKgOgRIgCgBIgBAAgAhajoQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAABIALAYQACAFAGAEQApASAfgdQACgEAAgEIACgfQAAgEgEACQgeAVgbABQgPABgPgIIgBAAIgCABgAAYkUQgBAAAAABQAAAAgBAAQAAABAAABQAAAAABABIAAAAQAUAgAUAKQATAKAegHIAAAAQAEgBACgDIAZgvQAAAAABgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAABQgnASgeAAQgXAAgSgMIgCAAIgCABg");
	this.shape_73.setTransform(538.4,33.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CBCED3").s().p("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gUAOgTQAAAAAAgBQABAAAAAAQAAgBgBAAQAAAAAAgBIgCgBIAAAAgAirgeQAAABAAAAQgBAAAAABQAAAAABAAQAAABAAAAQAIAKADAMQADARgIARIAAACIADABIAYgGQAQgEADgQQABgDgBgDQgBgKgOgKIgCgBQgEgDgGgCIgXgFIgBAAIgBABgAABAJIgNALIgBACIABADQAAABABAAQAAABAAAAQABAAAAAAQAAAAABAAQAJgGALAFQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIABgEQABAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgMgJIgBAAIgBAAgABIgLQgCABgCACQgBADABACQAFAGAJAHIAEACIAkAHQADABgBgDQgDgIgBgFQgBgMAGgMQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAgAhxgRIAAACQAFAIABAGQAAAJgDAIQAAABAAAAQAAABAAAAQAAABABAAQABAAABAAIAXgGQAHgCAFgGIADgGQABgDgBgDQgBgCgDgBIgmgIIgCABgAgVgHQgBAHgEAGQgBABAAAAQAAAAAAAAQAAAAAAABQABAAAAAAIADACQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAMgKQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgKgHIgBgBIgBACgAAUgGIgFAEQAAAAgBABQAAAAAAABQAAAAAAAAQABAAAAABIAIAGQABABAAAAQABAAAAAAQABAAAAAAQABAAABAAIAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQgFgEgBgFQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIgCABgAg8gmQAAABAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAKAVgKAUIAAABIABABIAQgEQAHgCADgFQADgHgEgGQgCgFgGgEIgQgMIAAAAIgCAAgAAzggIgNALQgHAGACAIQABAFAGADIAFACIAPADQAAABAAAAQABAAAAAAQAAgBAAAAQAAAAABAAIAAgCQgLgOADgVIgBgBIgBAAIgBAAgAgBgeQgFAFgGADQAAABAAAAQgBAAAAAAQAAABABAAQAAAAAAAAIANALQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIAKgJIAAgBIgBgBQgHgDgFgHIAAgBIgBABgAhmhGIgBABQAAAUgPAOQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIACABIArAJQAEABABgCQACgDgBgDQgHgVgLgKIgNgKIgBAAIgCAAgABbhAIgSAPQgGAEgBAGIgCAJQgBAEADACQACACAEgBIAlgJIABgBIgBgCQgGgEgDgGQgGgIAAgJIgBgCIgBAAIgBAAgAAGg9IgBACIABASIABACQAEALAPAAIAAAAIAQgNQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAgBgBIgBgBQgVgCgMgOIgBgBIgBAAgAgHhHQgJAMgMAHQgEADgKADQgBAAgBAAQAAAAAAABQAAAAAAAAQAAABABAAIALAJQAHAFAHgCQAIgBADgHQACgEAAgFIAAgWIgBgBIgBABgAiWhsQgBAAAAAAQAAABAAAAQgBAAAAAAQAAABABAAQABAOgCALQgFAUgUANIgBACQAAABAAAAQAAAAAAABQABAAAAAAQAAAAAAAAIAlAIIAGgBQAKgGAGgKQAGgNgDgNIgBgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAgBgBIgegXIgBAAIAAAAgACHhjIgTAPQgNALAEAPIADAHQAGALAQABQAGABADgCIAYgFIACgCQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQgKgFgGgJQgKgOgBgUIgBgCIgBAAIgBABgAjLiUQAAABgBAAQAAAAgBAAQAAABAAAAQAAAAAAABQgBAPgFANQgLAfgcAVQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAQAAAAABAAIAjAIQAGABAGgCIABAAQAdgMAEgUQACgJgEgVIgDgHQgBgFgEgEIgWgRIgBAAIgCAAgAA2hiIgRAkQgBACACADQABADADAAQAFABAHgBQADAAADgCIAYgUQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgCgCQgMgBgHgIQgEgDgDgGIgBgBIgCABgAg+hrQgGAMgKAHIgKAFIgCACIABACIAYATQAIAGAKgCIAFgBQADAAABgDQABgDgCgDIgUgpIgBgCIgCACgAC3iLIgYATQgCACgBADQgGAbAMAOQALAPAaACQAKABANgDIAYgGQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQg1gYgHgsQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgBAAIgBAAgAAFh8IgBACIABAcQAAAGADAGIAAABIAGAMQACADAEAAQAEgBACgDIAUgrIAAgCQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgMACgLgEQgIgCgFgEIgBAAIgCAAgAgthxIAAACIASAmQAAAAABABQAAAAAAABQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIAHgKIAAAAQAIgNgBgOIAAgJIAAgBIgDAAQgLAHgOAAIgJAAIgBAAIgBAAgABNiVIgKAVQgBAEgBADQgBARAIAHQAIAIASgCIAAAAQAGgBAFgEIASgOQAAgBABAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgWgFgLgNQgFgGgFgLQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABgAhbilQgPAhgjAJIgBABIABACIATAQQAPALAQgGQARgFAFgRIAAgBQABgFgBgCIgSgkIgCgBIgCABgAhHilQAAABAAAAQgBAAAAAAQAAABABAAQAAAAAAAAIAKAVQAGAKAKAFQALAEALgDQAKgDAFgKQACgEAAgFIAAgfIgCgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgLAMgNADQgQAFgTgFIAAAAIgCAAgAAFi+QAAABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAAmQAAAFAEAEQARAVAbgMQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABgBIARglQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgWAEgTgIQgLgEgIgHIgDgBIgBAAgABtjZIgGANQgFALgCALQgDAbAMAMQAMAOAcAAQAEAAAEgDIAVgRIABgDIgCgCQgZgHgQgTQgMgPgHgWQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAgAh5jgQgZAugtAPIgCADIABACIAUAPQALAIALgEQASgGAJgGQAPgLAGgVIAAgBQACgGgDgHIgNgbQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAgACCj6QgBAAAAABQgBAAAAAAQAAABgBABQAAAAABABIAAAAQAGAmAPARQAPARAeAEQAEABADgCIAqgjQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQgtADgbgMQgWgJgLgSQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgCAAgAj2jKQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAbAVIAEABQATgDARgLQAegSAQgkQACgGgCgGIgCgCQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgbAkgfAMQgVAIgagDQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABgAhhjcIAAADQAIARAMAKQATAPATgFQATgFAJgXQAEgIAAgKIAAgPQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQgOAQgWAHQgKADgLAAQgNAAgNgDIAAAAIgCAAgAAEj8QAAABAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAIAAAcQABAHAEADIAAABQALAMAOAGQAXAJAYgKQAEgCACgEIAOgdQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQgmAIgZgJQgOgGgLgMIgCgBIgCAAg");
	this.shape_74.setTransform(72.7,42.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CBCED3").s().p("AiJD4QgDgCAAgCIgBgDQABgmgKgZQgKgZgYgQIgDgEIgBgDQAAgEAEgDIALgIIABgBQAHgYgIgPQgLgSgogKQgFAAgDgGIAAgBQgCgFAEgFQAXgagCgbQgBgPgIgPQgBgEgFgBIgigKQgHgBAAgIQAAgHAHgCQAcgGAOgOQARgQAKgkQABgFAFgCQAFgBAEADIAJAIIAFADQAcAFATgOQASgPAAgaQABgGAEgDQAFgDAFACQAEABAFAEQANAIAMAAQAVgBAbgYQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIABgJQABgGAEgBQAGgCAEAEQAOAQAWAAQAaAAApgVQAGgDAEAEIACADQABAEgCADIgdA2QgBABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAIAWATAIQAPAHAigBQAGAAAEAFIABACQABAEgBAEQgRAgAOAUQAIALAWALIAHAFIAEAFQACAFgDAFIgDAFQgNAPgEAOQgHAYAPAaQABACADABIAnALQAFABABAEIABAEQAAAHgGACQgjAOgQAPQgUATgCAVQAAAGgGACIAAAAQgFADgFgEIgGgGQgMgKgPABQgQAAgLALIgBACQgNAPgDAdQgBAFgFADIgBAAQgFADgEgDQgdgPgYAIQgNAEgNANQgGAFAAAGIgCAIQAAAFgEACIgBABQgDABgEgCQgdgNgcABQgbACgXANIgEAAIgFgBgAgZDoQAAAAABAAQAAABABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAAgCQgBgFgDgDQgegbgwAIQgEABgDAEIgMAYQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAUgHATgBIACAAQAaAAAZAJgAinB+QgBAAAAABQgBAAAAAAQgBABAAAAQgBABAAABQAAAAAAABQAAAAAAABQABAAAAABQAAABABAAQATARAKAXQAHAPACAYQAAAAAAABQABAAAAABQAAAAABABQABAAAAAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIAFgJQAEgHABgKQABgVgBgJQgBgOgHgHQgKgLgeAAgAATCcQgMAEgJAKQgDADAAAEIgBAVQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAgBQAAAAABAAQAHgGAJgEIAGgCQAYgIAZAJQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgJgVQgCgEgEgDIgBAAQgKgEgKAAQgJAAgIADgAgVDHQAEACAAgEIABgcQgIgLgLgGQgSgIgUAHQgHACgDAGIgKATIAAADIACABIALgBQAgAAAbASgABOB1QgKAKACAVQAAALAFALIADAHIACABQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAFgTALgLQAMgOAVgFIABgCIAAgCIgSgPQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAIgCAAQgVAAgJAKgAiCBiIgOAKIgBACIACABQAVADAMAMQALAMACAWIABACIACgBIADgGQAEgIABgHQAEgUgJgMQgIgLgWgCQgFAAgEADgAgCB2IgCAgIABACQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAEgEAIgDQATgIATAEQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAIgMgdQgBgEgDAAQgJgFgKACQgLABgGAJIAAAAIgCAFgAgeCNIAMAIQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCIACgfQAAgFgDgDQgGgHgKgBQgIgCgJADQgEACgCAEIgOAaIAAACIACABIAKgBQAOAAAMAGgADSBDQghAMgKAJQgNANAEAcQABAFAEAEIAIAHQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAKgmA3gZQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgTgFIgGgBIgHABgAA0BPQgFAFAAAOIACAJIAHAQQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAIABgBQAEgKAGgFQAJgKAQgDIABgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgPgMQgCgDgFgBIgGAAQgJAAgGAEgAhbBGIgQALIgBACIABABQASAFAIALQAFAHADAJIABABIACgBIAKgTIACgEQACgNgGgGQgGgHgOABIgBAAIgBgBQgDAAgEADgACbAzQgTABgLALQgJAMADAVQABAEADACIAOANQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCQAAgWAPgPQAJgIATgJIACgBQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBAAIgIgCQgJgDgJAAIgDAAgAAMA5QgEADgEAIQgEAIAAAKIgBAMIABABIABAAIAGgDQALgFANADQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIgOgiQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgDACgAi7AkIgDAAQgBAAAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAABIAGADQASAJAHANQAIANgBARQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIARgMQABgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAGgUgJgNQgHgMgVgDIAAAAIgMgBIgOACgAgOBhIACAAIABgBIABgSIgCgLQgDgIgEgEQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAABIgSAgQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAIAIgBQALAAAJAHgABUAsQgEAFAAAJQABAHAFAEIAQAPQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgCQABgRAIgKQAGgHAIgEIABgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAIgSgFIgIgBQgNABgGAIgAAcAzQAAABgBAAQAAABAAAAQAAABAAAAQABABAAABIAKAYIABABIACgBQACgEADgDQAGgGAKgBQABAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBgBIgIgHQgGgGgIAAIgJgBQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAgAhAAyIgIAGIgBACIACABQAKACAGAGIAFAIQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABgBIAMgXQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgJgBQgKAAgHAFgAh2AYIgSADIgBABIABACQAJAFAFAIQAIAMgBAPIABACQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAQgMQALgIgDgMIgBgFQgFgJgNgCIgCAAIgFgBIgEABgAADAeIgBAFIgBATIABABIABAAQALgOAVAAIABgBIAAgBIgSgQIAAAAIgDAAQgIAAgEAHgAAxAYIABAJQABAFADADIAPANIABAAIABgBQABgIAEgHQAEgFAEgCIABgCIgBgBIgdgIIgBgBQgFAAAAAFgAgYAWIgTANIAAABIABABQAVACAKANIABAAIABgBIABgVQgDgJgLAAgACvgaQgFABgCADQgYAdATAeQABACADABIAZAHIACAAIABgCQgPgnAZgiIAAgCIgCgBgAg7ANIgeAGIgBABIAAACQAFADADAGQAEAFAAAIQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIARgMQAFgEAAgFIABgGQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgBAAgAB2gQQgDAAgEADQgGAGgBAIQgCALAHALIACABIAhAJIACAAIAAgCQgKgaAOgYQABgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAgAjFgxQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAEALAAALQACAZgQAZQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAIAcgFQAGgBADgDQASgSgCgPQgCgJgKgMIgDgFQgDgEgEgBIgVgGIgBAAIgCABgAAngDQgFABgEACQgEACgBAEQgDAHAGAFIALAKIABAAIABgBQAAgUAPgLQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAgAg5gKIAAABQAOAMgCASQAAABAAAAQAAAAABABQAAAAAAAAQAAgBABAAIALgHQAEgEABgFQAAgGgFgDIAAAAQgEgDgFgBIgPgEIgBABgAACAGIgGAMIAAACIABACQABAAAAAAQAAABABAAQAAAAAAgBQABAAAAAAQAEgHALAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgDIgBgCIgMgDQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABgAA7ADQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAIAhAKIACgBIAAgBQgDgJACgJQABgGACgEQABgEgDABIgBAAQgRAEgNAJIgBAAgAiSgjIAAACQAGAJABAJQADAPgLARIAAABIABABIAegFQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAGgIABgIQABgMgHgIIgBgBIgDgDIgdgIIgBAAIgBABgAgUAAQACAFgBAHIABABIADABIABgBIAGgKQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgJgCQgBAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAgAhigWQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAGAOgHAPIAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIAjgGQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAgBQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQgPgPgIgDIgNgDIgBgBIgBABgAALgLIgCAFIAAABIABABIAIADIADgBIAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgEgCgDgEIgBgCIgCACgAgMgWQgCAGgDADQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABABAAIANAEIABgBIAEgJQAAgBABAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQgFAAgGgEIgBAAIgBABgAAbgnIgHAMQgDAGAEAGQACADAFABIAFAAIAMgCQAAAAABAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQgMgIgEgQIgBgBIgBABgAgdgzQgCAMgHAJQgDAEgGAEIgBABIABABIALADQAGACAFgDQAGgEAAgGIgBgHIgHgQIgBgBIgBABgABSg2IgiAYQgEAEAEADQAGAEAIACIAEAAIAcgFIACgBIgBgBIgGgJQgFgJAAgLQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgBABgAhQg9QAAAKgGAJQgCAEgEADQgBAAAAAAQAAABAAAAQAAABAAAAQABAAAAABIAZAHQAIACAGgEIADgDQAAAAABgBQAAAAAAAA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");
	this.shape_75.setTransform(56,69.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43,p:{x:48.9,y:46}},{t:this.shape_42,p:{x:149.9,y:139}},{t:this.shape_41,p:{x:175.9,y:86}},{t:this.shape_40,p:{x:344.9,y:31}},{t:this.shape_39,p:{x:377.9,y:188}},{t:this.shape_38,p:{x:397.9,y:173}},{t:this.shape_37,p:{x:537.9,y:109}},{t:this.shape_36,p:{x:513.9,y:94}},{t:this.shape_35,p:{x:628.9,y:147}},{t:this.shape_34,p:{x:727.9,y:189}},{t:this.shape_33,p:{x:687.9,y:53}},{t:this.shape_32,p:{x:845.9,y:8}},{t:this.shape_31,p:{x:865.9,y:23}},{t:this.shape_30,p:{x:845.9,y:109}},{t:this.shape_29,p:{x:1001.9,y:166}},{t:this.shape_28,p:{x:1021.9,y:151}},{t:this.shape_27,p:{x:1175.9,y:189}},{t:this.shape_26,p:{x:1104.9,y:53}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_43,p:{x:178.5,y:42.9}},{t:this.shape_42,p:{x:20,y:172.1}},{t:this.shape_41,p:{x:206,y:57.4}},{t:this.shape_40,p:{x:127,y:137.2}},{t:this.shape_39,p:{x:402,y:152.2}},{t:this.shape_38,p:{x:356,y:7.5}},{t:this.shape_37,p:{x:440,y:97.3}},{t:this.shape_36,p:{x:416,y:82.3}},{t:this.shape_35,p:{x:600,y:137.2}},{t:this.shape_34,p:{x:560,y:166.1}},{t:this.shape_33,p:{x:659,y:43.4}},{t:this.shape_32,p:{x:1046,y:144.2}},{t:this.shape_31,p:{x:1066,y:159.1}},{t:this.shape_30,p:{x:869,y:34.4}},{t:this.shape_29,p:{x:774,y:115.2}},{t:this.shape_28,p:{x:794,y:100.3}},{t:this.shape_27,p:{x:1167,y:84.3}},{t:this.shape_26,p:{x:973,y:88.3}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(28.9,0,1198.6,198.6);
p.frameBounds = [rect, new cjs.Rectangle(0,0,1187,200.3)];


(lib.clipDecorFixe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"1F":0,"2F":1});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("Eg+fAAAMB8/AAA");
	this.shape.setTransform(400,200);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2F35").s().p("Eg+fAPoIAA/PMB8/AAAIAAfPg");
	this.shape_1.setTransform(400,100);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#313951").s().p("Eg+fAfQMAAAg+fMB8/AAAMAAAA+fg");
	this.shape_2.setTransform(400,400);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0B0B14").s().p("Eg+fAPoIAA/PMB8/AAAIAAfPg");
	this.shape_3.setTransform(400.5,100);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B382F").s().p("Eg+fAfQMAAAg+fMB8/AAAMAAAA+fg");
	this.shape_4.setTransform(400.5,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:400}}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape,p:{x:400.5}}]},1).wait(1));

	// Calque 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3).p("Eg+fAAAMB8/AAA");
	this.shape_5.setTransform(400,200);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D2F35").s().p("Eg+fAPoIAA/PMB8/AAAIAAfPg");
	this.shape_6.setTransform(400,100);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#313951").s().p("Eg+fAfQMAAAg+fMB8/AAAMAAAA+fg");
	this.shape_7.setTransform(400,400);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0B0B14").s().p("Eg+fAPoIAA/PMB8/AAAIAAfPg");
	this.shape_8.setTransform(400,100);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#332A0E").s().p("Eg+fAfQMAAAg+fMB8/AAAMAAAA+fg");
	this.shape_9.setTransform(400,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,0,803,600);
p.frameBounds = [rect, new cjs.Rectangle(-1.5,0,803.5,600)];


(lib.clipProjectile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"normal":0});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7AE5E2").s().p("Ag0AMQgWgFAAgHQAAgGAWgFQAWgGAeAAQAfAAAWAGQAWAFAAAGQAAAHgWAFQgWAGgfAAQgeAAgWgGg");
	this.shape.setTransform(0.5,-0.1,2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipProjectile, rect = new cjs.Rectangle(-14.5,-3.6,30,7), [rect]);


(lib.clipPointContact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0099").s().p("AgoAoQgRgQAAgYQAAgXARgRQARgRAXAAQAYAAAQARQARARAAAXQAAAYgRAQQgQARgYAAQgXAAgRgRg");
	this.shape.setTransform(-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipPointContact, rect = new cjs.Rectangle(-6,-6,11.5,11.5), [rect]);


(lib.clipObstacle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"1F":0});

	// Calque 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8ED98A").s().p("AgiA7QgNgDgHgEQgFgCgFgFQgFgGADgFQAEgIALgJQAKgGAJgEQAKgFAbgKQAMgSAQgOQANgMAWgMQgRALgQAQQgNALgOAVIgBABQgZAJgMAGIgSALQgLAGgDAHQgDAHAMAHQAHAEANADQAUAGAUADQgbgDgOgDg");
	this.shape.setTransform(-9.7,-12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417345").s().p("AgKBFQhWgIgGgUQgGgRA5gaQAPgGAngjQAlggALAAQAlAAAKAUQAPAcgVBSQgWARgbADIgMABQgTAAgWgHg");
	this.shape_1.setTransform(-9,-12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8ED98A").s().p("ABWghQgygZirAGQDCgTA1ATQBFAZiDBaQBchEg4gcg");
	this.shape_2.setTransform(-15.1,-28.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8ED98A").s().p("ACABZQhTgDg8gvQgMgKgQgQQgLgLgUgBQgwgEgcgHQgogLgfgRQgjgVgVgeQAYAdAiARQAgARAnAIQAmAIAkACQAZACANAMQAMANAPAMQA4AtBRAFQAmADAlgDQAkgDAngIQglALglAFQgcAEgeAAIgSgBg");
	this.shape_3.setTransform(-58.5,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Calque 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#417345").s().p("AhZCwQgygShHgoQgWgLgVgEQhwgUg7gpQg1glAUg2QAVg2BHgMQMiiEAaBhQANA2jYB4QgZAOgOAUQgPAVACAVQAIBMjHAOQgMACgMAAQgkAAgugQg");
	this.shape_4.setTransform(-44.8,-17.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// FlashAICB
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#436641").s().p("AgiA7QgNgDgHgEQgFgCgFgFQgFgGADgFQAEgIALgJQAKgGAJgEQAKgFAbgKQAMgSAQgOQANgMAWgMQgRALgQAQQgNALgOAVIgBABQgZAJgMAGIgSALQgLAGgDAHQgDAHAMAHQAHAEANADQAUAGAUADQgbgDgOgDg");
	this.shape_5.setTransform(-9.7,-12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#213A23").s().p("AgKBFQhWgIgGgUQgGgRA5gaQAPgGAngjQAlggALAAQAlAAAKAUQAPAcgVBSQgWARgbADIgMABQgTAAgWgHg");
	this.shape_6.setTransform(-9,-12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#436641").s().p("ABWghQgygZirAGQDCgTA1ATQBFAZiDBaQBchEg4gcg");
	this.shape_7.setTransform(-15.1,-28.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#436641").s().p("ACABZQhTgDg8gvQgMgKgQgQQgLgLgUgBQgwgEgcgHQgogLgfgRQgjgVgVgeQAYAdAiARQAgARAnAIQAmAIAkACQAZACANAMQAMANAPAMQA4AtBRAFQAmADAlgDQAkgDAngIQglALglAFQgcAEgeAAIgSgBg");
	this.shape_8.setTransform(-58.5,-9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#213A23").s().p("AhZCwQgygShHgoQgWgLgVgEQhwgUg7gpQg1glAUg2QAVg2BHgMQMiiEAaBhQANA2jYB4QgZAOgOAUQgPAVACAVQAIBMjHAOQgMACgMAAQgkAAgugQg");
	this.shape_9.setTransform(-44.8,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipObstacle, rect = new cjs.Rectangle(-91.1,-36.9,92.7,38.4), [rect]);


(lib.clipAfficheurScore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"1":0});

	// / score
	this.total_txt = new cjs.Text(" / NaN", "21px 'Monster Hunter Staggered Rotalic'", "#FFFFFF");
	this.total_txt.name = "total_txt";
	this.total_txt.lineHeight = 25;
	this.total_txt.parent = this;
	this.total_txt.setTransform(42.3,4.1);

	this.timeline.addTween(cjs.Tween.get(this.total_txt).wait(1));

	// score
	this.score_txt = new cjs.Text("0", "21px 'Monster Hunter Staggered Rotalic'", "#FFFFFF");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "right";
	this.score_txt.lineHeight = 25;
	this.score_txt.lineWidth = 19;
	this.score_txt.parent = this;
	this.score_txt.setTransform(41.9,4.1);

	this.timeline.addTween(cjs.Tween.get(this.score_txt).wait(1));

	// fantome
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgTAUQgFgFAFgFIAdgdQAFgFAFAFQAGAFgGAFIgdAdQgCADgDAAQgDAAgCgDg");
	this.shape.setTransform(2.1,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AAKAUIgdgdQgFgFAFgFQAFgFAFAFIAdAdQAGAFgGAFQgCADgDAAQgDAAgCgDg");
	this.shape_1.setTransform(2.1,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgTAUQgFgFAFgFIAdgdQAFgFAFAFQAGAFgGAFIgdAdQgCADgDAAQgDAAgCgDg");
	this.shape_2.setTransform(-4.9,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AAKAUIgdgdQgFgFAFgFQAFgFAFAFIAdAdQAGAFgGAFQgCADgDAAQgDAAgCgDg");
	this.shape_3.setTransform(-4.9,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0068A3").p("AhTChQgKAIgNgwQgMgxgBg7QgCikBYgNQBIgLARBMQAJApABBJQAOBFAkAcQANALgeACQguACgPAIQgPAIgIAPQgFAKgNgCQgbgIgNgDQgXgGgRAMg");
	this.shape_4.setTransform(2,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDCmIgogLQgXgGgRAMQgKAIgNgwQgMgxgBg7QgCikBYgNQBIgLARBMQAJApABBJQAOBFAkAcQANALgeACQguACgPAIQgPAIgIAPQgEAIgLAAIgDAAg");
	this.shape_5.setTransform(2,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipAfficheurScore, rect = new cjs.Rectangle(-11,-1.2,108.9,35.6), [rect]);


(lib.clipTestAntagoniste = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// predateur
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjMDIIAAmPIGZAAIAAGPg");
	this.shape.setTransform(-20.4,-20);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipTestAntagoniste, rect = new cjs.Rectangle(-40.9,-40,41,40), [rect]);


(lib.clipBtX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AgDA1QgDAGgHAMIgWAeQgEAHgCABIgPAQIAIAdIgLAbQgDAGgEAFQgEAGgEAAIgnADQgFABgIgCQgGgCgHgEQgHgEgDgFQgEgFABgGIAbhdIAVgnIAYgQIAWghQgEgBgDgDIgggWQgCgCAAgCIgUhsIAAgLQABgJAHgEQAJgFAJgBQAGgCANgBIAvgFIAIgBIADAJIAFAlIgKAaQgCAEABACQADAUAIAEQAIAFAIgEQAKgDAIgJQAHgGAJgKIAKgPIgKgcIAKgaIAHgMQAFgGADAAIArgEQAGgBAIACQAIAAAHADQAHACAGAEQAFAEgBAFIg5CYIgdAWIAZAaIABACIACAFIAVB0IgBAKQgBAKgIADQgIADgKAAQgOAAgGgBIgMgBIgJABQgHACgKAFQgKAFgHABIgIABIgFgUQgBgIAAgEIgBgHIAFgaQABgEAAgDIABgFQABgDAAgFQABgIgCgMQgCgNgGgKg");
	this.shape.setTransform(29.3,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ah+DIQgGgCgHgEQgHgEgDgFQgEgFABgGIAbhdIAVgnIAYgQIAWghQgEgBgDgDIgggWIgCgEIgUhsIAAgLQABgJAHgEQAJgFAJgBIATgDIAvgFIAIgBIADAJIAFAlIgKAaQgCAEABACQADAUAIAEQAIAFAIgEQAKgDAIgJIAQgQIAKgPIgKgcIAKgaIAHgMQAFgGADAAIArgEQAGgBAIACQAIAAAHADQAHACAGAEQAFAEgBAFIg5CYIgdAWIAZAaIABACIACAFIAVB0IgBAKQgBAKgIADQgIADgKAAIgUgBIgMgBIgJABQgHACgKAFQgKAFgHABIgIABIgFgUIgBgMIgBgHIAFgaIABgHIABgFIABgIQABgIgCgMQgCgNgGgKIgKASIgWAeQgEAHgCABIgPAQIAIAdIgLAbQgDAGgEAFQgEAGgEAAIgnADIgCAAIgLgBg");
	this.shape_1.setTransform(29.3,33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah9DIIgOgGIgKgJQgEgFABgHIAbhcIAVgnIAYgQIAWghIgHgEIgKgIIgLgHIgHgFIgEgDIgCgDIgThsIgBgGIAAgFQABgJAIgEIASgHIASgCIAMAAIAJgCIANgBIAOgCIAIgBIACAIIADAOIACAOIABAJIgDAHIgEAKIgDAKIgBAGQACATAIAFQAIAFAIgEQAKgEAJgIIAPgQIALgPIgLgcIAFgNIAGgOIAHgMIAHgFIAsgEIANAAIAQAEIAMAFQAFAFAAAFIg5CYIgeAWIAZAaIACACIABAFIACAHIATBsIAAAGIAAAFQgBAJgIADIgTAEIgTgBIgMgBIgJABIgRAGIgRAHIgJAAIgCgHIgDgMIgBgMIgBgIIACgFIABgKIACgLIABgGIABgFIABgIIAAgUQgCgNgHgKIgJARIgMARIgKAOIgGAIIgPAQIAIAdIgFANIgHAOIgGALIgIAGIgnADg");
	this.shape_2.setTransform(32.3,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipBtX, rect = new cjs.Rectangle(0,0,54,72.7), [rect]);


(lib.clipBtStop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.text = new cjs.Text("Arrêter", "bold 16px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 79;
	this.text.parent = this;
	this.text.setTransform(-0.1,-13.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmgiMINBAAIAAEZItBAAg");
	this.shape.setTransform(0,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmgCNIAAkZINBAAIAAEZg");
	this.shape_1.setTransform(0,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipBtStop, rect = new cjs.Rectangle(-42.7,-16.9,85.5,51.6), [rect]);


(lib.clipBtStart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.text = new cjs.Text("Démarrer", "bold 16px 'Comic Sans MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 79;
	this.text.parent = this;
	this.text.setTransform(-0.1,-13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmgiMINBAAIAAEZItBAAg");
	this.shape.setTransform(-0.2,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AmgCNIAAkZINBAAIAAEZg");
	this.shape_1.setTransform(-0.2,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipBtStart, rect = new cjs.Rectangle(-42.9,-16.6,85.5,51.6), [rect]);


(lib.clipBtRecommencer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyhGIAGgUIAVgCIASgEIARgEIAVgDIANgBIAKABQAFAAACAEQACAEAAAHIgDA4IAAAFQgBAIgFAGIgJAJIgJAFQgEADAAADQgBAEAGAAIAMACIAMADQAGADgBAGIAAABIgFAUIgBAEIACAkIAAABIAAABQgNACgNAEQgMADgOABQgBABAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgBgGQABgJAEgLQAEgJACgKQABgHgEgDQgDgEgFgBIgKAAIgLABIgDAfIgCAeIgwAGgAgIg+IgFAvIAdgJIAFgpg");
	this.shape.setTransform(201.1,45.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6BmIAAgEIAAgKIAAgLIAAgKIAFgGIgBgLQgBgGABgHIABgLIABgIIABgMIABgMIABgIIADgCIADgDIADgFIACgDIAAgBIgBgBIgBgCIgCgCIgBgBIgEgEIgCgFIAFgqIADgEIAHAAIAKgBIAKgCIAIgFIBBgIQAAAHgEAHQgEAFAAAHIABADIABADIABADIAAAEIAAAEQgBADgDABIgUACQgJABgGAEQgGAEgFAGQgEAHAAALIAmgEIgEArIgpAEIgCAMIAAALQAAAEACAEQADACAGAAIAJgBIAOgBIANgCIAJgCIAAAIIAAAMIAAAMIgBAIIAAACIAAABIgDACIgEABIheANg");
	this.shape_1.setTransform(188.4,45.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BjQgGgGgBgNIAEgnIAAgFIACgPIACgOIABgMIABgJIAAgDIABgDIACgNIACgEIAGgGIAEgGIACgGIAAgBIgJgIIAAgEIADgDIAEgFIAFgDIADgCIAFgDIAGgEIAGgDIADgCIBVgLIADADIAAAFIAAALIgBANIAAALIAAADIgBAEIAAAFIAAADIgtAGQABgFAAgDQgBgDgCgCIgGgBIgHAAIgDAAIgFACIgDACIgEABIgDAGIgBAGIgCALQgCAFAAAFIACACIADAsIgJAeQAAABABAAQAAABAAAAQABABAAAAQABABAAAAIAHACIAIABIAGAAQACgBACgCIAEgFIACgGIABgFIApgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAAAEIgBACQAAALgEAHQgCAHgEAFQgGAFgHADIgQAIIgFABIgJABIgHABIgGAAIgmAEIgCABQgMAAgFgGg");
	this.shape_2.setTransform(175.2,45.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhOBpQgFgBgDgFQgDgEABgLIAKibIABgDIAAgEIAAgEIAAgDQAFAAADACIAGAEIAGADQAEACAEAAQAEgBABgDIADgGIADgGQACgDAGAAIAKgBIAKACIACAHIACALIADAMIACAHIAEAOIAGARIAGAPIACAHIADACIAEgGIABgHIADgRIADgTIADgRIADgdIADgEIAxgGIgHA2IgIA1IgOANIALALIgEAgIgDAhIgDACIgEACIgCgBIgGgBIgFgBIgDgBIgEgDIgHACIgFAFIgGAEIgGACQgDAAgDgDIgGgHIgFgLIgFgLIgEgKIgCgHIgEgIIgEgOIgEgPIgCgJIgCAAIgCABIgCACIgBABIgKBcIgSADIgJABIgFgBg");
	this.shape_3.setTransform(159.9,45.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6BmIAAgEIAAgKIAAgLIABgKIAEgGIgBgLQgBgGABgHIABgLIAAgIIACgMIABgMIABgIIADgCIADgDIAEgFIABgDIAAgBIAAgBIgCgCIgCgCIgCgBIgDgEIgCgFIAEgqIAEgEIAHAAIAKgBIAKgCIAIgFIBBgIQgBAHgDAHQgEAFAAAHIABADIABADIABADIAAAEIgBAEQAAADgDABIgUACQgJABgGAEQgGAEgEAGQgFAHAAALIAmgEIgEArIgpAEIgCAMIAAALQAAAEACAEQADACAGAAIAJgBIAOgBIANgCIAJgCIAAAIIAAAMIAAAMIgBAIIAAACIAAABIgDACIgEABIheANg");
	this.shape_4.setTransform(144.5,45.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhvBxIADgHIABgGIABgEIAAgCQABgGgBgEQgCgFABgFIABgEIADgGIAFgPIADgNIAEgNIAGgNIAAgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgDgCIgEgDQgBgBAAgDIADgLIADgLIADgLIADgKQABgJgBgIQgCgHABgKIABgFIABgFIADgDIA/gIIASBoIABAAIADgBIABgCIACgBIACgIIAEgLIAEgKIADgIIAEgHIADgFIAHgIIAFgJIAEgGIAAgDIAAgCIAAgCIAAgCIgCgDIgCgFIgBgBIAAgDIADgJQADgGAGgBIA2gGIAFAGIgDAeIgCAeIgBAdIgDAdIgGApIgGAoIgLAAIgKAAIgLgBIgNABIAMh2IgIAAIgBAFIgCAHIgBAHIgBAFIgFAMIgGAUIgHAVIgFANIgDAJIgFAKIgDAIIgCADIgbAEIgCgEIgDgLIgCgPIgEgRIgEgRIgCgOIAAgDIgBgHIgBgHIgBgFIgBgGIgBgDIgBgDIgCAAIgBAAIgCAEIgCADIgBAHIgBAJIgBAJIgBAHQgCAXAAAVQAAAVgDAXIg3AGg");
	this.shape_5.setTransform(127.2,45.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhuBxIABgHIACgGIAAgEIABgCQABgGgCgEQAAgFAAgFIAAgEIAEgGIAFgPIAEgNIADgNIAGgNIAAgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgEgCIgCgDQgCgBABgDIABgLIAEgLIAEgLIACgKQABgJgCgIQgBgHABgKIABgFIABgFIAEgDIA+gIIASBoIABAAIACgBIACgCIABgBIADgIIAEgLIAFgKIACgIIADgHIAFgFIAFgIIAGgJIADgGIABgDIAAgCIAAgCIgBgCIgCgDIgBgFIAAgBIgBgDIADgJQADgGAFgBIA2gGIAHAGIgEAeIgCAeIgCAdIgCAdIgHApIgGAoIgLAAIgJAAIgLgBIgOABIANh2IgIAAIgBAFIgBAHIgCAHIgCAFIgDAMIgHAUIgIAVIgEANIgEAJIgDAKIgEAIIgCADIgcAEIgBgEIgCgLIgEgPIgDgRIgDgRIgDgOIgBgDIgBgHIgBgHIAAgFIAAgGIgBgDIgCgDIgCAAIgCAAIgCAEIgBADIgBAHIgBAJIgBAJIgBAHQgDAXAAAVQABAVgDAXIg2AGg");
	this.shape_6.setTransform(105.6,45.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAHBoIgHgDIgHgEQgDgBgEAAQgFAAgFADQgEACgGABQgMACgIgEQgHgDgEgHQgEgHgBgKQgBgKACgMQAAgIADgHIAGgOIAGgPIAEgNIgBgHIgDgGIgDgFQgBgDABgEIAAgBIACgKIADgMIADgMIACgGIAEgJQACgFAFAAIApgKQAVgFAVgDQACAAADACIADACIAFADIgDAcQAIADAEAHQADAGAAAJIgBASIgDARIgCAYIgCAQIgCAQIgDARIgEAUQgHAMgKAEQgJAEgLABIgFAAIgGgBgAAPg2IgGAAIgEABIgGACQgCABgCAFIgBARIgDANIgEAMIgFAQIAAACQgCAMABANIAFAYIAEAAIAFgBIAEAAIAHgCQAFgCAAgFIALhqIgBgCIgBgBIgFABg");
	this.shape_7.setTransform(87.6,45.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhABjQgFgGgBgNIAEgnIAAgFIACgPIACgOIABgMIABgJIAAgDIABgDIACgNIACgEIAGgGIAEgGIACgGIAAgBIgJgIIAAgEIADgDIAEgFIAFgDIADgCIAFgDIAGgEIAGgDIADgCIBVgLIACADIAAAFIAAALIAAANIgBALIAAADIAAAEIAAAFIAAADIgtAGQABgFgBgDQAAgDgCgCIgGgBIgHAAIgDAAIgFACIgDACIgDABIgEAGIgBAGIgCALQgCAFAAAFIACACIADAsIgJAeQAAACAEACIAGACIAIABIAGAAQACgBACgCIAEgFIACgGIABgFIApgFQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABIAAAEIgBACQgBALgCAHQgDAHgEAFQgGAFgHADIgQAIIgFABIgJABIgHABIgFAAIgnAEIgCABQgMAAgGgGg");
	this.shape_8.setTransform(73.6,45.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6BmIAAgEIAAgKIAAgLIABgKIADgGIAAgLQgBgGABgHIAAgLIABgIIACgMIACgMIAAgIIADgCIADgDIAEgFIABgDIAAgBIAAgBIgCgCIgCgCIgCgBIgDgEIgCgFIAEgqIAEgEIAHAAIAKgBIAKgCIAIgFIBBgIQgBAHgDAHQgDAFgBAHIABADIAAADIACADIAAAEIgBAEQAAADgDABIgUACQgJABgGAEQgGAEgEAGQgFAHAAALIAmgEIgEArIgpAEIgCAMIgBALQABAEACAEQADACAGAAIAJgBIAOgBIANgCIAJgCIAAAIIAAAMIAAAMIgBAIIAAACIAAABIgDACIgDABIhfANg");
	this.shape_9.setTransform(60.5,45.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyhGIAGgUIAVgCIASgEIARgEIAVgDIANgBIAKABQAFAAACAEQACAEAAAHIgDA4IAAAFQgBAIgFAGIgJAJIgJAFQgEADAAADQgBAEAGAAIAMACIAMADQAGADgBAGIAAABIgFAUIgBAEIACAkIAAABIAAABQgNACgNAEQgMADgOABQgBABAAAAQgBAAgBAAQAAAAgBgBQAAAAAAgBIgBgGQABgJAEgLQAEgJACgKQABgHgEgDQgDgEgFgBIgKAAIgLABIgDAfIgCAeIgwAGgAgIg+IgFAvIAdgJIAFgpg");
	this.shape_10.setTransform(46.4,45.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").p("ASXGQMgkuAAAQghAAgXgXQgXgYAAghIAAqAQAAghAXgXQAXgXAhAAMAkuAAAQAhAAAYAXQAXAXAAAhIAAKAQAAAhgXAYQgYAXghAAg");
	this.shape_11.setTransform(125.5,45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#252526").s().p("AyWGQQgiAAgWgYQgYgXAAghIAAp/QAAgiAYgWQAWgYAiAAMAktAAAQAhAAAXAYQAYAWAAAiIAAJ/QAAAhgYAXQgXAYghAAg");
	this.shape_12.setTransform(125.5,45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CBCED3").s().p("AyVGQQgiAAgYgYQgXgYAAghIAAp+QAAghAXgYQAYgXAiAAMAkrAAAQAiAAAXAXQAYAYAAAhIAAJ+QAAAhgYAYQgXAYgiAAg");
	this.shape_13.setTransform(130.5,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipBtRecommencer, rect = new cjs.Rectangle(-1,0,257,86), [rect]);


(lib.clipBtPret = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5CVQABgqADgqIAJhTIgCgGIgBgHIAAgEIABgFIALgTIABgDIAAgCQAAgEgEgBIgVAEIgMgBIgHgEIgGgFIgHgDIgOAAIABgGIABgKIACgKIABgHIADgJQABgEACgCIDIgZIgDAgIgJAOIAFAFIAAARIgrAEIgFAFIgFAKIgEAJIgCAEQgLAvgGAxIgIBaQgHAIgIACIgTAFIgLABIgOABg");
	this.shape.setTransform(153,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXDFIAAgGIgBgPIABgRIABgPIAFgJIgBgQIAAgUIACgQIABgMIACgTIACgSIABgMIADgDIAGgGIAFgGIADgGIAAgBIgBAAIgDgDIgDgDIgBgBIgGgIIgDgGIAHhAIAFgFIALAAIAOgBIAPgEIANgGIBhgMQgBAKgEAJQgGAJAAAJQgBAGADADQADAEgBAGIgBAIQgBADgDACIgfADQgNACgKAGQgJAFgHAKQgFAKgCAQIA7gIIgHBDIg+AHIgCAQIgCARQAAAIAFAFQAEAEALgBIAMgBIAVgCIAUgDIANgCIAAAMIgBARIAAASIgBALIAAADIAAACIgFAEIgFACIiOASgAgdh3IgJgBIgDAAQgKAAAAgFIAEgHIALgNIAPgSIARgbIAGgDIAJgDIAKgDIAIgCIAUABIAIACIADAEIABAFIABAHIACAGIACADIABACIAAAHIAJAHIAGAGIAEAFIADAJIgwANIgHghIgFAGIgIAKIgIALIgEAIIgEACIgHgBIgJAAIgEABIgEABg");
	this.shape_1.setTransform(132.7,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLhoIAKgeIAfgDIAagGIAZgFIAfgFIATgCQAJgBAHACQAGACAEAFQADAGAAALIgEBSIgBAIQgBAMgHAIIgOANIgNAJQgHAEAAAFQAAAEAIACIASADIATAFQAIADgBAJIAAADIgIAdIgBAFIAEA2IAAADQgVACgTAGQgTAGgTACQgHABgBgDIAAgJQACgPAGgOQAGgOACgQQABgKgFgFQgEgEgIgCIgPgBIgRACIgDAtIgEAuIhIAIgAgNhcIgHBGIAtgNIAGg+g");
	this.shape_2.setTransform(111.4,44.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhlAlIAHgLIARikIARgCIAagEIAegFIAegFIAagEIARgCIAJgCIALABIAMAFIAKAGQAEAEgBAFIgOCNIgtAUIgBAFQgMAHgQADIgeAGQgOACgIAFQgIAEAFAKIgDADIgCACIgJBQIgEACIgJADIgLADIgJACIgIABIgLACIgLACIgIABgAAahzIgfAJIgUBUQgBAEAEACIAKABIAMAAIAGAAIAGgBIAKgDQAFgEABgGIAJhSIgCgCIgDgDIgCAAg");
	this.shape_3.setTransform(90.6,44.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").p("ASXGQMgkuAAAQghAAgXgXQgXgYAAghIAAqAQAAghAXgXQAXgXAhAAMAkuAAAQAhAAAYAXQAXAXAAAhIAAKAQAAAhgXAYQgYAXghAAg");
	this.shape_4.setTransform(125.5,45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#252526").s().p("AyWGQQgiAAgWgYQgYgXAAghIAAp/QAAgiAYgWQAWgYAiAAMAktAAAQAhAAAXAYQAYAWAAAiIAAJ/QAAAhgYAXQgXAYghAAg");
	this.shape_5.setTransform(125.5,45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBCED3").s().p("AyVGQQgiAAgYgYQgXgYAAghIAAp+QAAghAXgYQAYgXAiAAMAkrAAAQAiAAAXAXQAYAYAAAhIAAJ+QAAAhgYAYQgXAYgiAAg");
	this.shape_6.setTransform(130.5,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipBtPret, rect = new cjs.Rectangle(-1,0,257,86), [rect]);


(lib.clipBtDebut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLhoIAKgeIAfgDIAagGIAZgFIAfgFIATgCQAJgBAHACQAGACAEAFQADAGAAALIgEBSIgBAIQgBAMgHAIIgOANIgNAJQgHAEAAAFQAAAEAIACIASADIATAFQAIADgBAJIAAADIgIAdIgBAFIAEA2IAAADQgVACgTAGQgTAGgTACQgHABgBgDIAAgJQACgPAGgOQAGgOACgQQABgKgFgFQgEgEgIgCIgPgBIgRACIgDAtIgEAuIhIAIgAgNhcIgHBGIAtgNIAGg+g");
	this.shape.setTransform(161.3,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXCYIAAgGIAAgPIAAgRIABgPIAHgJIgBgQIgBgTIACgQIABgMIACgTIABgRIADgMIADgDIAEgFIAGgHIACgFIAAgBIgBgCIgCgCIgDgDIgCgCIgFgHIgDgGIAGg/IAGgFIALgBIAOgBIAOgDIAOgHIBggMQgCALgEAJQgGAJgBAJQAAAFADAEQADADAAAGIgCAHQgBAEgEACIgdADQgNACgKAGQgKAFgGAKQgGAKgBARIA6gIIgHBBIg+AIIgCAQIgBAQQAAAHAFAFQAEAEAKgBIANgBIAUgCIAUgDIANgCIAAAMIgBARIAAARIAAAMIgBAEIAAABIgFADIgFADIiNASg");
	this.shape_1.setTransform(142.4,44.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhwBvIABgJIABgKQACgSAGgQQAGgRADgQIAAgCIgFgDIgEgBIAKiOQABgEADgBIAGgBIAFgBIALAAIARgBIARgBIALAAIgHBAIACAEIACAEIgBAIIgBAMIgBAMIgBAIIgCASIgBAcIgCAcIgBATIAFAFIAIACIAJAAIAHgBIAFAAIAFgCIACgFIACgJIAVjJIACgFIAEgGIABAAIAIAAIAGABIAGABIAIAAIAWgFQALgEALgBIACgBIACARIgBAPIgCALIgJALIgVDJIgLARIgJAOIgIALIgDADIgCACIghAIIgeAFIgRACQg1AAgagwg");
	this.shape_2.setTransform(122.8,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKCaIgLgFIgKgFQgGgDgFABQgIABgGADQgGAEgJABQgTACgLgEQgLgFgGgKQgGgLgBgPQgBgPACgSQABgLAEgLIAJgVIAJgWIAFgVIgBgKIgEgIIgEgIIgCgJIABgDIADgOIAFgTIAFgRIADgKIAEgMQAEgHAIgBIA9gOQAegIAggEIADABIAEACIAFADIAIAEIgFAqQAMAEAFAKQAFAKAAANIgCAaIgDAZIgEAkIgDAZIgEAXIgEAaIgGAeIgLAOIgMAJIgPAFIgQACIgGABQgGAAgEgCgAANhRIgGABIgJADQgEACgEAHIAAAOIgBAMIgCAOIgEANIgFAPIgGATIAAADQgDASACATQACASAFARIAGAAIAIgBIAGAAIAKgEQAGgCABgHIARieIgBgDIgDgBg");
	this.shape_3.setTransform(100.5,44.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhICZQgTgEgIgMQgHgLAAgTIADgrIAIgJIgEggQAIgKAHgEQAIgEAKgBIAEgBIAGAAIAFAAIADgBIAOADIAMAnIgJAcIADAJIAGAJIAJAHIAHADQAEgBACgDIACgJIABgKIACgJIAGhdIAOgxIACgFIADgFIACgFIAAgFIgDgBIgLgBIgNACQgEAAAAADIAAABQAAAFgCADIgIAFIgIADIgIACQgGABgFgCIgMgLIABgOIABgNIABgNIABgIIAFgFICJgRIAJAWIgHBAIgDAUIgPAdIABATIABAPIgDAoIAAAQQgCAQgFAMQgGAMgIAIQgJAJgMAHIgaANIgMgFIgUAJQgSADgOAAQgMAAgJgCg");
	this.shape_4.setTransform(80.1,44.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").p("ASXGQMgkuAAAQghAAgXgXQgXgYAAghIAAqAQAAghAXgXQAXgXAhAAMAkuAAAQAhAAAYAXQAXAXAAAhIAAKAQAAAhgXAYQgYAXghAAg");
	this.shape_5.setTransform(125.5,45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#252526").s().p("AyWGQQgiAAgWgYQgYgXAAghIAAp/QAAgiAYgWQAWgYAiAAMAktAAAQAhAAAXAYQAYAWAAAiIAAJ/QAAAhgYAXQgXAYghAAg");
	this.shape_6.setTransform(125.5,45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CBCED3").s().p("AyVGQQgiAAgYgYQgXgYAAghIAAp+QAAghAXgYQAYgXAiAAMAkrAAAQAiAAAXAXQAYAYAAAhIAAJ+QAAAhgYAYQgXAYgiAAg");
	this.shape_7.setTransform(130.5,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipBtDebut, rect = new cjs.Rectangle(-1,0,257,86), [rect]);


(lib.clipBtControle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAyQgJgCgIgEIgEAHIgKAAIgBgeIAKAAQADAHAJAHQAKAGAQAAIAKAAQAFgBAFgDQAEgDAAgGQAAgFgEgDIgTgGIgZgIQgKgDgHgGQgIgHAAgLQAAgNANgJQAMgIAVAAQAMAAAIADIANAEIACgGIAKAAIAAAbIgKAAQgBgFgEgDQgFgEgIgDQgHgCgJAAQgJAAgHABQgIACAAAHQAAABAAAAQAAABAAAAQAAABAAAAQABABAAABIAFADIAOADIAKAEQAUAEAMAIQAMAGAAARQAAAKgGAIQgGAGgKAEQgLAEgNAAQgJAAgJgCg");
	this.shape.setTransform(124.3,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAwQgLgEgIgHQgIgGgEgKQgEgJAAgLQAAgNAHgMQAHgNAMgGQANgIAQAAQAQAAALAHQALAHAFALQAFALAAAMIhHAAIABAJQAAAHADAIQADAIAHAEQAFAGAMAAQAGAAAJgEQAJgCAGgKIAJAHQgOAWgeAAQgMAAgLgEgAAXgNQAAgbgVAAQgJAAgFAIQgGAGgBANIAqAAIAAAAg");
	this.shape_1.setTransform(112.5,27.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghBRIAAgLIAFAAQAHAAADgCQADgCABgDIABgKIAAhjQAAgIgEgDQgEgCgMAAIAAgLIAxgKIAACFIABAKQAAADAEACQADACAGAAIAEAAIAAALg");
	this.shape_2.setTransform(102.5,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbBKQgNgFgIgMQgJgMAAgRQAAgZARgMQASgOAXAAQASAAAMAHQANAIAHAKQAHAMAAAOQAAAQgIAMQgIAMgNAGQgNAGgQABQgOAAgNgHgAgPgHQgFAEgCAIQgDAKAAAOQAAATAFAKQAFAMAPAAQALgBAGgFQAFgHACgJQABgJAAgLQAAgVgFgIQgFgLgPAAQgJAAgGAFgAAbgjIgbgaIgbAaIgGAAIAUgsIAbAAIAUAsg");
	this.shape_3.setTransform(92.1,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzAyIAAgLIAGAAQAKAAACgEQADgDgBgKIAAghQAAgIgBgDQgCgEgEgBIgNgBIAAgLIAugKQACAGABAUQACgIAFgFQAGgGAHgEQAGgDAHAAQAJAAAGAFQAGAGAAAIQAAAGgEAEQgEAEgGAAQgHABgFgHIgEgFIgEgBQgJAAgFAKQgFAKAAAJIAAAVQAAAKACADQACAEALAAIAHAAIAAALg");
	this.shape_4.setTransform(80.2,27.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNA7QgGgFgCgHQgBgHAAgJIAAg1IgSAAIAAgLQALAAAIgFQAIgEAFgHQAFgHABgJIAJAAIAAAgIAhAAIAAALIghAAIAAA2QAAAKABAFQACAFAFgBQAFABAEgFIAHgLIAKAEQgGAOgJAFQgIAHgLAAQgNAAgHgHg");
	this.shape_5.setTransform(70.5,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAGAyIAAgLQAHAAADgCQADgBAAgEIABgLIAAggQAAgKgDgHQgDgFgJgBQgLAAgGAKQgGAKAAAMIAAAZQAAAKADADQACADAJAAIAAALIg+AAIAAgLIAMgBQADgBABgEQACgDAAgIIAAgkQAAgJgEgDQgDgCgLAAIAAgLIAugKIABANIAAACIAAADQAHgIAIgFQAHgFAMAAQAKAAAIAEQAIADAFAIQAEAHAAAKIAAAnQAAAKADADQADAEALAAIAAALg");
	this.shape_6.setTransform(59,27.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbAuQgNgFgIgMQgJgMAAgRQAAgZARgNQASgNAXAAQASAAAMAHQANAHAHAMQAHAMAAANQAAAQgIAMQgIALgNAHQgNAGgQAAQgOAAgNgGgAgPgkQgFAFgCAJQgDAJAAAOQAAASAFALQAFALAPAAQALAAAGgGQAFgGACgJQABgJAAgLQAAgUgFgKQgFgKgPAAQgJAAgGAEg");
	this.shape_7.setTransform(45.1,27.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiBIQgSgLgLgSQgLgTAAgXQAAgQAGgPQAGgPALgMQAKgLAQgHQAPgGARAAQAeAAATATIAFgPIALAAIACA7IgMAAQgDgPgIgMQgIgLgLgGQgLgHgMAAQgMAAgLAIQgKAHgGAPQgGAPAAAWQAAAVAFAPQAFAOAHAIQAIAHAHADQAHACAGAAQAPAAALgHQAMgIAHgMQAHgMADgLIALAAIAAA8IgLAAQgCgKgGgIQgJAJgLAHQgMAGgTAAQgVAAgSgKg");
	this.shape_8.setTransform(29.3,24.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").p("AKhD9I1BAAQghAAgXgYQgYgYAAggIAAlZQAAghAYgXQAXgYAhAAIVBAAQAhAAAXAYQAYAXAAAhIAAFZQAAAggYAYQgXAYghAAg");
	this.shape_9.setTransform(75.3,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#252526").s().p("AqgD9QghgBgXgXQgXgYAAggIAAlZQAAghAXgXQAXgXAhAAIVBAAQAgAAAYAXQAXAXABAhIAAFZQgBAggXAYQgYAXggABg");
	this.shape_10.setTransform(75.3,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipBtControle, rect = new cjs.Rectangle(-1,-1.4,152.5,53), [rect]);


(lib.planche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{avance:0,frein:1});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay('avance');
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// roue_tourne
	this.instance = new lib.anim_roue();
	this.instance.parent = this;
	this.instance.setTransform(0,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Planche
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594006").s().p("Aj6AjIgogGQgUgGAAgIQACgnAmgKQhMA4CGAJQBIAFCQgFIBhACQBKABArgDQCFgJhSg4QAJAAALAIQANAIAHAOQAIAQgZANQgTAKgOAAg");
	this.shape.setTransform(0,-3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_1.setTransform(0.4,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_2.setTransform(2.4,-3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_3.setTransform(-4.6,-2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_4.setTransform(-2.6,-3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.3).p("AkOgiQgmAKgCAnQAAAJAUAFIAoAGIH9AAQAOAAATgKQAZgNgIgQQgHgNgNgJQgLgIgJAAQgFAAgUAFQgUAFgFAAInBAAQgcgNgMADg");
	this.shape_5.setTransform(0,-3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#93690A").s().p("Aj6AjIgogGQgUgFAAgJQACgnAmgKQAMgDAcANIHBAAQAFAAAUgFQAUgFAFAAQAJAAALAIQANAJAHANQAIAQgZANQgTAKgOAAg");
	this.shape_6.setTransform(0,-3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#363636").s().p("AgNAOQgGgGAAgIQAAgHAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAHQAAAIgGAGQgFAGgJAAQgIAAgFgGg");
	this.shape_7.setTransform(15.9,5.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1D1D1E").ss(0.3).p("AAjAAQAAgNgKgLQgKgKgPAAQgNAAgLAKQgKALAAANQAAAPAKAKQALAKANAAQAPAAAKgKQAKgKAAgPg");
	this.shape_8.setTransform(16.4,4.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#595959").s().p("AgYAYQgKgKAAgOQAAgNAKgLQAKgKAOAAQAPAAAKAKQAKALAAANQAAAOgKAKQgKALgPAAQgOAAgKgLg");
	this.shape_9.setTransform(16.4,4.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1.5).p("AgOAKIAdgT");
	this.shape_10.setTransform(18.9,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1.5).p("AAAgOIAAAd");
	this.shape_11.setTransform(17.9,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#1D1D1E").ss(0.3).p("AAeAAQAAgLgJgJQgIgJgNAAQgMAAgIAJQgJAJAAALQAAANAJAIQAIAJAMAAQANAAAIgJQAJgIAAgNg");
	this.shape_12.setTransform(19.9,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#595959").s().p("AgVAVQgIgIAAgNQAAgLAIgKQAJgIAMAAQAMAAAJAIQAJAKAAALQAAANgJAIQgJAJgMAAQgMAAgJgJg");
	this.shape_13.setTransform(19.9,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#363636").s().p("AgNAOQgGgGAAgIQAAgHAGgHQAFgFAIAAQAJAAAFAFQAGAHAAAHQAAAIgGAGQgFAGgJAAQgIAAgFgGg");
	this.shape_14.setTransform(-19.1,5.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#1D1D1E").ss(0.3).p("AAjAAQAAgNgKgLQgKgKgPAAQgNAAgLAKQgKALAAANQAAAPAKAKQALAKANAAQAPAAAKgKQAKgKAAgPg");
	this.shape_15.setTransform(-18.6,4.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#595959").s().p("AgYAYQgKgKAAgOQAAgNAKgLQAKgKAOAAQAPAAAKAKQAKALAAANQAAAOgKAKQgKALgPAAQgOAAgKgLg");
	this.shape_16.setTransform(-18.6,4.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1.5).p("AgOAKIAdgT");
	this.shape_17.setTransform(-16.1,1.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1.5).p("AAAgOIAAAd");
	this.shape_18.setTransform(-17.1,0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#1D1D1E").ss(0.3).p("AAeAAQAAgLgJgJQgIgJgNAAQgLAAgJAJQgJAJAAALQAAANAJAIQAJAJALAAQANAAAIgJQAJgIAAgNg");
	this.shape_19.setTransform(-15.1,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#595959").s().p("AgUAVQgJgIAAgNQAAgLAJgKQAJgIALAAQAMAAAJAIQAJAKAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape_20.setTransform(-15.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.1,-8,64.2,17.1);
p.frameBounds = [rect, rect];


(lib.anim_protagonisteRetourNormal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"frein":0});

	// fusil
	this.fusil_mc = new lib.fusil();
	this.fusil_mc.name = "fusil_mc";
	this.fusil_mc.parent = this;
	this.fusil_mc.setTransform(23.5,-67.9,1,1,-4.6,0,0,-8.3,0.2);

	this.timeline.addTween(cjs.Tween.get(this.fusil_mc).wait(1).to({regX:-9.1,regY:0.7,rotation:-4,x:24.1,y:-67.5},0).wait(1).to({rotation:-3.4,x:25.5,y:-67.6},0).wait(1).to({rotation:-2.7,x:26.9,y:-67.7},0).wait(1).to({rotation:-2,x:28.3,y:-67.9},0).wait(1).to({rotation:-1.3,x:29.7,y:-68},0).wait(1).to({rotation:-0.7,x:31.1,y:-68.2},0).wait(1).to({rotation:0,x:32.5,y:-68.3},0).wait(1));

	// tete
	this.instance = new lib.symbol_tete();
	this.instance.parent = this;
	this.instance.setTransform(-10.3,-71.8,1,1,-2.5,0,0,-0.2,4.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-3.2,regY:-2.2,rotation:-2.1,x:-11.9,y:-79},0).wait(1).to({rotation:-1.6,x:-10.1,y:-79.2},0).wait(1).to({rotation:-1,x:-8.3,y:-79.6},0).wait(1).to({rotation:-0.5,x:-6.6,y:-79.8},0).wait(1).to({rotation:0,x:-4.8,y:-80.2},0).wait(1).to({rotation:0.6,x:-3.1,y:-80.5},0).wait(1).to({rotation:1.1,x:-1.3,y:-80.7},0).wait(1));

	// bras_droit
	this.instance_1 = new lib.symbol_brasDroit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11.3,-65.3,0.999,0.999,-10,0,0,0.3,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-11.6,regY:9.5,scaleX:1,scaleY:1,rotation:-8.6,x:-20,y:-53.6},0).wait(1).to({rotation:-7.2,x:-18.7,y:-54.3},0).wait(1).to({rotation:-5.7,x:-17.5,y:-54.9},0).wait(1).to({rotation:-4.3,x:-16.3,y:-55.6},0).wait(1).to({rotation:-2.9,x:-15,y:-56.2},0).wait(1).to({rotation:-1.4,x:-13.8,y:-56.9},0).wait(1).to({rotation:0,x:-12.5,y:-57.5},0).wait(1));

	// torse
	this.instance_2 = new lib.symbol_torse();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-9.4,-46.5,1,1,-5.3,0,0,-0.8,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.6,regY:1.1,rotation:-4.7,x:-8.6,y:-56.2},0).wait(1).to({rotation:-3.9,x:-7.1,y:-56.5},0).wait(1).to({rotation:-3.1,x:-5.6,y:-56.8},0).wait(1).to({rotation:-2.3,x:-4.1,y:-57.1},0).wait(1).to({rotation:-1.6,x:-2.6,y:-57.3},0).wait(1).to({rotation:-0.8,x:-1.1,y:-57.6},0).wait(1).to({rotation:0,x:0.4,y:-57.9},0).wait(1));

	// bras_gauche
	this.instance_3 = new lib.symbol_brasGauche();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-13.9,-69.8,1,1,0,0,0,-4.2,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:11,regY:2.1,x:2.7,y:-63.2},0).wait(1).to({x:4.1,y:-63.4},0).wait(1).to({x:5.5,y:-63.6},0).wait(1).to({x:6.9,y:-63.8},0).wait(1).to({x:8.3,y:-64},0).wait(1).to({x:9.7,y:-64.2},0).wait(1).to({x:11,y:-64.5},0).wait(1));

	// cuisse_droit
	this.instance_4 = new lib.symbol_cuisseDroit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-10.7,-41.1,0.999,0.999,-11.3,0,0,0.1,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-9.8,x:-8.1,y:-34.1},0).wait(1).to({rotation:-8.2,x:-6.9,y:-34.5},0).wait(1).to({rotation:-6.6,x:-5.7,y:-34.9},0).wait(1).to({rotation:-4.9,x:-4.5,y:-35.2},0).wait(1).to({rotation:-3.3,x:-3.3,y:-35.6},0).wait(1).to({rotation:-1.6,x:-2,y:-36},0).wait(1).to({rotation:0,x:-0.8,y:-36.4},0).wait(1));

	// cuisse_gauche
	this.instance_5 = new lib.symbol_cuisseGauche();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6.7,-41.3,0.999,0.999,-25.8,0,0,-2.9,-8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-2.4,regY:0,scaleX:1,scaleY:1,rotation:-22.1,x:-1.9,y:-34},0).wait(1).to({rotation:-18.4,x:-1.2},0).wait(1).to({rotation:-14.7,x:-0.5},0).wait(1).to({rotation:-11,x:0.2,y:-34.1},0).wait(1).to({rotation:-7.4,x:0.9,y:-34.2},0).wait(1).to({rotation:-3.7,x:1.6,y:-34.3},0).wait(1).to({rotation:0,x:2.3,y:-34.4},0).wait(1));

	// mollet_droit
	this.instance_6 = new lib.symbol_molletDroit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-18.7,-7.8,1,1,-14.8,0,0,-6.5,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,rotation:-12.6,x:-14.2,y:-19.1},0).wait(1).to({rotation:-10.5,x:-13.6,y:-19.4},0).wait(1).to({rotation:-8.4,x:-12.9,y:-19.7},0).wait(1).to({rotation:-6.3,x:-12.3,y:-20},0).wait(1).to({rotation:-4.2,x:-11.7,y:-20.2},0).wait(1).to({rotation:-2.1,x:-11,y:-20.5},0).wait(1).to({rotation:0,x:-10.4,y:-20.7},0).wait(1));

	// mollet_gauche
	this.instance_7 = new lib.symbol_molletGauche();
	this.instance_7.parent = this;
	this.instance_7.setTransform(7.8,-31.2,1,1,7.8,0,0,0.2,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,rotation:6.8,x:6.9,y:-21.7},0).wait(1).to({rotation:5.7,x:7.4,y:-21.2},0).wait(1).to({rotation:4.5,x:8,y:-20.7},0).wait(1).to({rotation:3.4,x:8.6,y:-20.1},0).wait(1).to({rotation:2.3,x:9.1,y:-19.6},0).wait(1).to({rotation:1.1,x:9.7,y:-19.1},0).wait(1).to({rotation:0,x:10.2,y:-18.6},0).wait(1));

	// pied_droit
	this.instance_8 = new lib.symbol_piedDroit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-15.9,-4.7,0.999,0.999,-29.9,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-25.7,x:-15.8,y:-5.2},0).wait(1).to({rotation:-21.4,y:-5.7},0).wait(1).to({rotation:-17.1,y:-6.3},0).wait(1).to({rotation:-12.9,y:-6.8},0).wait(1).to({rotation:-8.6,y:-7.3},0).wait(1).to({rotation:-4.3,y:-7.8},0).wait(1).to({rotation:0,y:-8.4},0).wait(1));

	// pied_gauche
	this.instance_9 = new lib.symbol_piedGauche();
	this.instance_9.parent = this;
	this.instance_9.setTransform(12.4,-11.3,0.999,0.999,-14.8,0,0,1.2,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:1.3,scaleX:1,scaleY:1,rotation:-12.9,x:12.9,y:-10.9},0).wait(1).to({rotation:-10.7,x:13.3,y:-10.5},0).wait(1).to({rotation:-8.6,x:13.8,y:-10.1},0).wait(1).to({rotation:-6.4,x:14.2,y:-9.7},0).wait(1).to({rotation:-4.3,x:14.5,y:-9.2},0).wait(1).to({rotation:-2.1,x:15,y:-8.8},0).wait(1).to({rotation:0,x:15.4,y:-8.4},0).wait(1));

	// planche
	this.instance_10 = new lib.planche();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.1,-1.7,0.999,0.999,-14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regY:0.5,scaleX:1,scaleY:1,rotation:-12.9,x:0,y:-1.2},0).wait(1).to({rotation:-10.7},0).wait(1).to({rotation:-8.6},0).wait(1).to({rotation:-6.4},0).wait(1).to({rotation:-4.3},0).wait(1).to({rotation:-2.1,x:-0.1},0).wait(1).to({rotation:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.3,-88.8,67.5,100.6);
p.frameBounds = [rect, new cjs.Rectangle(-33.6,-89.8,67.1,101.1), new cjs.Rectangle(-32.7,-90.1,67.6,100.8), new cjs.Rectangle(-32,-90.5,68.3,100.6), new cjs.Rectangle(-32.1,-90.7,69.9,100.1), new cjs.Rectangle(-32.1,-91,71.2,99.8), new cjs.Rectangle(-32.1,-91.3,72.6,99.4), new cjs.Rectangle(-32.1,-91.6,74,99.1)];


(lib.anim_protagonisteNormal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fusil
	this.fusil_mc = new lib.fusil();
	this.fusil_mc.name = "fusil_mc";
	this.fusil_mc.parent = this;
	this.fusil_mc.setTransform(33.2,-68.8,1,1,0,0,0,-9.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.fusil_mc).wait(1).to({regX:-9.1,rotation:-0.7,y:-68.7},0).wait(1).to({rotation:-1.3,x:33.1,y:-68.6},0).wait(1).to({rotation:-2,x:33,y:-68.4},0).wait(1).to({rotation:-2.7,y:-68.3},0).wait(1).to({rotation:-3.4,x:32.9,y:-68.1},0).wait(1).to({rotation:-4,x:32.8,y:-68},0).wait(1).to({rotation:-4.7,x:32.7,y:-67.9},0).wait(1).to({rotation:-4,x:32.8,y:-68},0).wait(1).to({rotation:-3.4,x:32.9,y:-68.1},0).wait(1).to({rotation:-2.7,x:33,y:-68.3},0).wait(1).to({rotation:-2,y:-68.4},0).wait(1).to({rotation:-1.3,x:33.1,y:-68.6},0).wait(1).to({rotation:-0.7,x:33.2,y:-68.7},0).wait(1).to({rotation:0,x:33.3,y:-68.8},0).wait(1));

	// tete
	this.instance = new lib.symbol_tete();
	this.instance.parent = this;
	this.instance.setTransform(1.5,-73.8,1,1,1,0,0,0.2,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-3.2,regY:-2.2,rotation:0.6,x:-2.2,y:-80.9},0).wait(1).to({rotation:0,x:-2.6,y:-80.6},0).wait(1).to({rotation:-0.5,x:-3.1,y:-80.3},0).wait(1).to({rotation:-1,x:-3.5,y:-80},0).wait(1).to({rotation:-1.6,x:-3.9,y:-79.7},0).wait(1).to({rotation:-2.1,x:-4.4,y:-79.4},0).wait(1).to({rotation:-2.7,x:-4.8,y:-79.1},0).wait(1).to({rotation:-2.1,x:-4.4,y:-79.4},0).wait(1).to({rotation:-1.6,x:-3.9,y:-79.7},0).wait(1).to({rotation:-1,x:-3.5,y:-80},0).wait(1).to({rotation:-0.5,x:-3.1,y:-80.3},0).wait(1).to({rotation:0,x:-2.6,y:-80.6},0).wait(1).to({rotation:0.6,x:-2.2,y:-80.9},0).wait(1).to({rotation:1.1,x:-1.7,y:-81.2},0).wait(1));

	// bras_droit
	this.instance_1 = new lib.symbol_brasDroit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.8,-68,1,1,0,0,0,0.8,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-11.6,regY:9.5,rotation:-1.4,x:-13.1,y:-56.9},0).wait(1).to({rotation:-2.9,x:-13,y:-56.2},0).wait(1).to({rotation:-4.3,x:-12.9,y:-55.6},0).wait(1).to({rotation:-5.7,y:-54.9},0).wait(1).to({rotation:-7.2,x:-12.7,y:-54.2},0).wait(1).to({rotation:-8.6,y:-53.6},0).wait(1).to({rotation:-10.1,x:-12.5,y:-53},0).wait(1).to({rotation:-8.6,x:-12.7,y:-53.6},0).wait(1).to({rotation:-7.2,y:-54.2},0).wait(1).to({rotation:-5.7,x:-12.9,y:-54.9},0).wait(1).to({rotation:-4.3,y:-55.6},0).wait(1).to({rotation:-2.9,x:-13,y:-56.2},0).wait(1).to({rotation:-1.4,x:-13.1,y:-56.9},0).wait(1).to({rotation:0,x:-13.2,y:-57.6},0).wait(1));

	// torse
	this.instance_2 = new lib.symbol_torse();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,-48.4,1,1,0,0,0,-0.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.6,regY:1.1,rotation:-0.8,x:-0.3,y:-58.2},0).wait(1).to({rotation:-1.6,x:-0.4,y:-58},0).wait(1).to({rotation:-2.3,x:-0.6,y:-57.7},0).wait(1).to({rotation:-3.1,x:-0.8,y:-57.4},0).wait(1).to({rotation:-3.9,x:-1,y:-57.1},0).wait(1).to({rotation:-4.7,x:-1.2,y:-56.8},0).wait(1).to({rotation:-5.4,x:-1.4,y:-56.5},0).wait(1).to({rotation:-4.7,x:-1.2,y:-56.8},0).wait(1).to({rotation:-3.9,x:-1,y:-57.1},0).wait(1).to({rotation:-3.1,x:-0.8,y:-57.4},0).wait(1).to({rotation:-2.3,x:-0.6,y:-57.7},0).wait(1).to({rotation:-1.6,x:-0.4,y:-58},0).wait(1).to({rotation:-0.8,x:-0.3,y:-58.2},0).wait(1).to({rotation:0,x:0,y:-58.5},0).wait(1));

	// bras_gauche
	this.instance_3 = new lib.symbol_brasGauche();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-4.2,-71.3,1,1,0,0,0,-4.2,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:11,regY:2.1,x:11,y:-64.2},0).wait(1).to({x:10.9,y:-64},0).wait(1).to({x:10.8,y:-63.8},0).wait(1).to({y:-63.6},0).wait(1).to({x:10.7,y:-63.4},0).wait(1).to({x:10.6,y:-63.2},0).wait(1).to({x:10.5,y:-63},0).wait(1).to({x:10.6,y:-63.2},0).wait(1).to({x:10.7,y:-63.4},0).wait(1).to({x:10.8,y:-63.6},0).wait(1).to({y:-63.8},0).wait(1).to({x:10.9,y:-64},0).wait(1).to({x:11,y:-64.2},0).wait(1).to({y:-64.5},0).wait(1));

	// cuisse_droit
	this.instance_4 = new lib.symbol_cuisseDroit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.7,-43.9,1,1,0,0,0,0,-7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:0,rotation:-1.6,x:-0.5,y:-36},0).wait(1).to({rotation:-3.3,x:-0.3,y:-35.7},0).wait(1).to({rotation:-4.9,x:0,y:-35.4},0).wait(1).to({rotation:-6.6,x:0.2,y:-35.2},0).wait(1).to({rotation:-8.2,x:0.4,y:-34.9},0).wait(1).to({rotation:-9.8,x:0.6,y:-34.6},0).wait(1).to({rotation:-11.5,x:0.8,y:-34.4},0).wait(1).to({rotation:-9.8,x:0.6,y:-34.6},0).wait(1).to({rotation:-8.2,x:0.4,y:-34.9},0).wait(1).to({rotation:-6.6,x:0.2,y:-35.2},0).wait(1).to({rotation:-4.9,x:0,y:-35.4},0).wait(1).to({rotation:-3.3,x:-0.3,y:-35.7},0).wait(1).to({rotation:-1.6,x:-0.5,y:-36},0).wait(1).to({rotation:0,x:-0.7,y:-36.2},0).wait(1));

	// cuisse_gauche
	this.instance_5 = new lib.symbol_cuisseGauche();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.8,-42.8,1,1,0,0,0,-2.9,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-2.4,regY:0,rotation:-1.5,x:2.5,y:-34.2},0).wait(1).to({rotation:-3.1,x:2.7,y:-34},0).wait(1).to({rotation:-4.6,x:2.9,y:-33.8},0).wait(1).to({rotation:-6.2,x:3.1,y:-33.7},0).wait(1).to({rotation:-7.7,x:3.4,y:-33.5},0).wait(1).to({rotation:-9.3,x:3.6,y:-33.3},0).wait(1).to({rotation:-10.8,x:3.8,y:-33.1},0).wait(1).to({rotation:-9.3,x:3.6,y:-33.3},0).wait(1).to({rotation:-7.7,x:3.4,y:-33.5},0).wait(1).to({rotation:-6.2,x:3.1,y:-33.7},0).wait(1).to({rotation:-4.6,x:2.9,y:-33.8},0).wait(1).to({rotation:-3.1,x:2.7,y:-34},0).wait(1).to({rotation:-1.5,x:2.5,y:-34.2},0).wait(1).to({rotation:0,x:2.3,y:-34.4},0).wait(1));

	// mollet_droit
	this.instance_6 = new lib.symbol_molletDroit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-16.9,-11,1,1,0,0,0,-6.5,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,rotation:1.2,x:-10.2,y:-20.7},0).wait(1).to({rotation:2.5,x:-10,y:-20.6},0).wait(1).to({rotation:3.7,x:-9.8,y:-20.4},0).wait(1).to({rotation:5,x:-9.6,y:-20.2},0).wait(1).to({rotation:6.2,x:-9.4,y:-20.1},0).wait(1).to({rotation:7.5,x:-9.2,y:-19.9},0).wait(1).to({rotation:8.7,x:-9,y:-19.7},0).wait(1).to({rotation:7.5,x:-9.2,y:-19.9},0).wait(1).to({rotation:6.2,x:-9.4,y:-20.1},0).wait(1).to({rotation:5,x:-9.6,y:-20.2},0).wait(1).to({rotation:3.7,x:-9.8,y:-20.4},0).wait(1).to({rotation:2.5,x:-10,y:-20.6},0).wait(1).to({rotation:1.2,x:-10.2,y:-20.7},0).wait(1).to({rotation:0,x:-10.4,y:-20.8},0).wait(1));

	// mollet_gauche
	this.instance_7 = new lib.symbol_molletGauche();
	this.instance_7.parent = this;
	this.instance_7.setTransform(10.6,-27.7,1,1,0,0,0,0.1,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,rotation:1.1,x:10.7,y:-18.2},0).wait(1).to({rotation:2.3,x:10.9,y:-18.4},0).wait(1).to({rotation:3.4,x:11.1,y:-18.5},0).wait(1).to({rotation:4.5,x:11.3,y:-18.7},0).wait(1).to({rotation:5.7,x:11.5,y:-18.9},0).wait(1).to({rotation:6.8,x:11.7,y:-19},0).wait(1).to({rotation:8,x:11.9,y:-19.2},0).wait(1).to({rotation:6.8,x:11.7,y:-19},0).wait(1).to({rotation:5.7,x:11.5,y:-18.9},0).wait(1).to({rotation:4.5,x:11.3,y:-18.7},0).wait(1).to({rotation:3.4,x:11.1,y:-18.5},0).wait(1).to({rotation:2.3,x:10.9,y:-18.4},0).wait(1).to({rotation:1.1,x:10.7,y:-18.2},0).wait(1).to({rotation:0,x:10.5,y:-18},0).wait(1));

	// pied_droit
	this.instance_8 = new lib.symbol_piedDroit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-16,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(15));

	// pied_gauche
	this.instance_9 = new lib.symbol_piedGauche();
	this.instance_9.parent = this;
	this.instance_9.setTransform(15.3,-8.5,1,1,0,0,0,1.2,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:1.3,regY:-0.5,x:15.4,y:-8.4},0).wait(14));

	// planche
	this.instance_10 = new lib.planche();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.1,-1.8,1,1,0,0,0,0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:0,x:-0.2},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.4,-91.2,74.2,97.1);
p.frameBounds = [rect, new cjs.Rectangle(-32.3,-91.8,75.1,98.6), new cjs.Rectangle(-32.3,-91.6,74.9,98.4), new cjs.Rectangle(-32.3,-91.2,74.9,98), new cjs.Rectangle(-32.3,-90.9,74.8,97.7), new cjs.Rectangle(-32.3,-90.6,74.6,97.4), new cjs.Rectangle(-32.3,-90.3,74.6,97.1), new cjs.Rectangle(-32.3,-90,74.4,96.8), new cjs.Rectangle(-32.3,-90.3,74.6,97.1), new cjs.Rectangle(-32.3,-90.6,74.6,97.4), new cjs.Rectangle(-32.3,-90.9,74.8,97.7), new cjs.Rectangle(-32.3,-91.2,74.9,98), new cjs.Rectangle(-32.3,-91.6,74.9,98.4), new cjs.Rectangle(-32.3,-91.8,75.1,98.6), new cjs.Rectangle(-32.3,-92,75.1,98.8)];


(lib.anim_protagonisteMort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// tete
	this.instance = new lib.symbol_tete();
	this.instance.parent = this;
	this.instance.setTransform(1.9,-80.3,1,1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-3.2,regY:-2.2,rotation:0.1,x:-1.3,y:-78.8},0).wait(1).to({rotation:-0.9,x:-1.4,y:-75.1},0).wait(1).to({rotation:-1.9,x:-1.5,y:-71.4},0).wait(1).to({rotation:-2.8,x:-1.6,y:-67.7},0).wait(1).to({rotation:-3.8,x:-1.7,y:-64},0).wait(1).to({rotation:-4.8,x:-1.8,y:-60.3},0).wait(1).to({rotation:-5.7,y:-56.6},0).wait(1).to({rotation:0.8,x:3,y:-55},0).wait(1).to({rotation:7.4,x:7.9,y:-53.3},0).wait(1).to({rotation:14,x:12.8,y:-51.6},0).wait(1).to({rotation:20.6,x:17.8,y:-49.9},0).wait(1).to({rotation:27.1,x:22.8,y:-48.2},0).wait(1).to({rotation:33.7,x:27.8,y:-46.4},0).wait(1).to({rotation:40.3,x:32.8,y:-44.5},0).wait(1).to({rotation:46.9,x:37.9,y:-42.7},0).wait(1).to({rotation:53.4,x:41.1,y:-38.6},0).wait(1).to({rotation:60,x:44.3,y:-34.6},0).wait(1).to({rotation:66.6,x:47.5,y:-30.5},0).wait(1).to({rotation:73.2,x:50.7,y:-26.4},0).wait(1).to({rotation:79.7,x:53.9,y:-22.2},0).wait(1).to({rotation:86.3,x:57,y:-17.9},0).wait(1).to({rotation:92.9,x:60.1,y:-13.6},0).wait(1).to({rotation:99.5,x:63.3,y:-9.3},0).wait(1));

	// bras_droit
	this.instance_1 = new lib.symbol_brasDroit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.8,-68,1,1,0,0,0,0.8,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-11.6,regY:9.5,rotation:-9.6,x:-10.9,y:-51.8},0).wait(1).to({rotation:-19.2,x:-8.3,y:-46.5},0).wait(1).to({rotation:-28.8,x:-5.5,y:-41.5},0).wait(1).to({rotation:-38.4,x:-2.6,y:-36.9},0).wait(1).to({rotation:-48,x:0.5,y:-32.8},0).wait(1).to({rotation:-57.6,x:3.6,y:-29},0).wait(1).to({rotation:-67.2,x:6.6,y:-25.8},0).wait(1).to({rotation:-62.2,x:8.1,y:-23.5},0).wait(1).to({rotation:-57.1,x:9.6,y:-21.4},0).wait(1).to({rotation:-52,x:11,y:-19.3},0).wait(1).to({rotation:-47,x:12.5,y:-17.4},0).wait(1).to({rotation:-41.9,x:14,y:-15.7},0).wait(1).to({rotation:-36.9,x:15.4,y:-14},0).wait(1).to({rotation:-31.8,x:17,y:-12.5},0).wait(1).to({rotation:-26.7,x:18.5,y:-11},0).wait(1).to({rotation:-21.7,x:20.1,y:-9.7},0).wait(1).to({rotation:-16.6,x:21.8,y:-8.6},0).wait(1).to({rotation:-11.6,x:23.5,y:-7.5},0).wait(1).to({rotation:-6.5,x:25.3,y:-6.5},0).wait(1).to({rotation:-1.4,x:27.3,y:-5.6},0).wait(1).to({rotation:3.6,x:29.2,y:-4.8},0).wait(1).to({rotation:8.7,x:31.3,y:-4},0).wait(1).to({rotation:13.7,x:33.6,y:-3.3},0).wait(1));

	// torse
	this.instance_2 = new lib.symbol_torse();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,-48.4,1,1,0,0,0,-0.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.6,regY:1.1,rotation:-2.1,x:0.5,y:-54.9},0).wait(1).to({rotation:-4.3,x:1.1,y:-51.3},0).wait(1).to({rotation:-6.4,x:1.6,y:-47.6},0).wait(1).to({rotation:-8.6,x:2.2,y:-43.9},0).wait(1).to({rotation:-10.7,x:2.8,y:-40.3},0).wait(1).to({rotation:-12.9,x:3.4,y:-36.6},0).wait(1).to({rotation:-15,x:3.9,y:-32.9},0).wait(1).to({rotation:-8.7,x:6.4,y:-32.1},0).wait(1).to({rotation:-2.5,x:8.9,y:-31.2},0).wait(1).to({rotation:3.8,x:11.4,y:-30.2},0).wait(1).to({rotation:10.1,x:13.8,y:-29},0).wait(1).to({rotation:16.3,x:16.3,y:-27.8},0).wait(1).to({rotation:22.6,x:18.8,y:-26.4},0).wait(1).to({rotation:28.8,x:21.1,y:-24.9},0).wait(1).to({rotation:35.1,x:23.4,y:-23.3},0).wait(1).to({rotation:41.4,x:25.7,y:-21.6},0).wait(1).to({rotation:47.6,x:27.9,y:-19.8},0).wait(1).to({rotation:53.9,x:30,y:-17.9},0).wait(1).to({rotation:60.2,x:32,y:-15.9},0).wait(1).to({rotation:66.4,x:33.9,y:-13.9},0).wait(1).to({rotation:72.7,x:35.7,y:-11.8},0).wait(1).to({rotation:78.9,x:37.4,y:-9.8},0).wait(1).to({rotation:85.2,x:38.9,y:-7.6},0).wait(1));

	// cuisse_droit
	this.instance_3 = new lib.symbol_cuisseDroit();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.8,-28,1,1,0,0,0,1.2,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,rotation:-2.1,y:-33.5},0).wait(1).to({rotation:-4.3,x:2,y:-29.8},0).wait(1).to({rotation:-6.4,x:3.2,y:-26.1},0).wait(1).to({rotation:-8.6,x:4.4,y:-22.4},0).wait(1).to({rotation:-10.7,x:5.6,y:-18.7},0).wait(1).to({rotation:-12.9,x:6.9,y:-14.9},0).wait(1).to({rotation:-15,x:8.1,y:-11.2},0).wait(1).to({rotation:-10.3,x:8.8,y:-11.1},0).wait(1).to({rotation:-5.6,x:9.4,y:-11},0).wait(1).to({rotation:-0.9,x:10.1,y:-10.9},0).wait(1).to({rotation:3.8,x:10.8,y:-10.7},0).wait(1).to({rotation:8.5,x:11.5,y:-10.4},0).wait(1).to({rotation:13.2,x:12.2,y:-10},0).wait(1).to({rotation:17.9,x:12.9,y:-9.6},0).wait(1).to({rotation:22.6,x:13.6,y:-9.2},0).wait(1).to({rotation:27.3,x:14.2,y:-8.7},0).wait(1).to({rotation:32,x:14.9,y:-8.1},0).wait(1).to({rotation:36.7,x:15.5,y:-7.4},0).wait(1).to({rotation:41.4,x:16.1,y:-6.7},0).wait(1).to({rotation:46.1,x:16.6,y:-6},0).wait(1).to({rotation:50.8,x:17.2,y:-5.2},0).wait(1).to({rotation:55.5,x:17.6,y:-4.4},0).wait(1).to({rotation:60.2,x:18.1,y:-3.5},0).wait(1));

	// cuisse_gauche
	this.instance_4 = new lib.symbol_cuisseGauche();
	this.instance_4.parent = this;
	this.instance_4.setTransform(2.2,-24.6,1,1,0,0,0,-2.5,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-2.4,regY:0,rotation:-1.3,x:3.7,y:-31},0).wait(1).to({rotation:-2.6,x:5.1,y:-27.5},0).wait(1).to({rotation:-3.9,x:6.5,y:-24.1},0).wait(1).to({rotation:-5.3,x:8,y:-20.7},0).wait(1).to({rotation:-6.6,x:9.4,y:-17.2},0).wait(1).to({rotation:-7.9,x:10.8,y:-13.7},0).wait(1).to({rotation:-9.2,x:12.3,y:-10.3},0).wait(1).to({rotation:-2.1,x:13.3,y:-10.9},0).wait(1).to({rotation:5.1,x:14.4,y:-11.3},0).wait(1).to({rotation:12.2,x:15.4,y:-11.6},0).wait(1).to({rotation:19.3,x:16.4,y:-11.7},0).wait(1).to({rotation:26.5,x:17.4},0).wait(1).to({rotation:33.6,x:18.3,y:-11.5},0).wait(1).to({rotation:40.8,x:19.1,y:-11.2},0).wait(1).to({rotation:47.9,x:19.8,y:-10.9},0).wait(1).to({rotation:55,x:20.3,y:-10.4},0).wait(1).to({rotation:62.2,x:20.8,y:-9.8},0).wait(1).to({rotation:69.3,x:21.1,y:-9.1},0).wait(1).to({rotation:76.4,x:21.4,y:-8.5},0).wait(1).to({rotation:83.6,y:-7.7},0).wait(1).to({rotation:90.7,x:21.3,y:-7},0).wait(1).to({rotation:97.9,x:21,y:-6.2},0).wait(1).to({rotation:105,x:20.6,y:-5.5},0).wait(1));

	// mollet_droit
	this.instance_5 = new lib.symbol_molletDroit();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16.9,-11,1,1,0,0,0,-6.5,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0,regY:0,rotation:7.7,x:-9.1,y:-18.6},0).wait(1).to({rotation:15.5,x:-8,y:-16.2},0).wait(1).to({rotation:23.2,x:-7,y:-13.7},0).wait(1).to({rotation:31,x:-6.1,y:-11.1},0).wait(1).to({rotation:38.7,x:-5.5,y:-8.4},0).wait(1).to({rotation:46.5,x:-5.1,y:-5.6},0).wait(1).to({rotation:54.2,x:-4.8,y:-2.7},0).wait(17));

	// mollet_gauche
	this.instance_6 = new lib.symbol_molletGauche();
	this.instance_6.parent = this;
	this.instance_6.setTransform(10.5,-8.2,1,1,0,0,0,0,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:0,rotation:14.1,x:11.1,y:-17.3},0).wait(1).to({rotation:28.2,x:11.7,y:-15.9},0).wait(1).to({rotation:42.3,x:12,y:-14},0).wait(1).to({rotation:56.4,x:11.8,y:-11.7},0).wait(1).to({rotation:70.5,x:11.2,y:-9.1},0).wait(1).to({rotation:84.6,x:10,y:-6.3},0).wait(1).to({rotation:98.7,x:8.3,y:-3.4},0).wait(17));

	// pied_droit
	this.instance_7 = new lib.symbol_piedDroit();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-16,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({rotation:12.9,x:-16.3,y:-7.2},0).wait(1).to({rotation:25.7,x:-16.7,y:-6},0).wait(1).to({rotation:38.6,x:-17,y:-4.7},0).wait(1).to({rotation:51.4,x:-17.4,y:-3.5},0).wait(1).to({rotation:64.3,x:-17.7,y:-2.2},0).wait(1).to({rotation:77.1,x:-18.1,y:-1},0).wait(1).to({rotation:90,x:-18.4,y:0.3},0).wait(17));

	// pied_gauche
	this.instance_8 = new lib.symbol_piedGauche();
	this.instance_8.parent = this;
	this.instance_8.setTransform(15.3,-8.5,1,1,0,0,0,1.2,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:1.3,regY:-0.5,rotation:12.9,x:13.1,y:-7.1},0).wait(1).to({rotation:25.7,x:10.8,y:-5.8},0).wait(1).to({rotation:38.6,x:8.5,y:-4.6},0).wait(1).to({rotation:51.4,x:6.2,y:-3.3},0).wait(1).to({rotation:64.3,x:3.9,y:-2},0).wait(1).to({rotation:77.1,x:1.7,y:-0.8},0).wait(1).to({rotation:90,x:-0.6,y:0.5},0).wait(17));

	// bras_gauche
	this.instance_9 = new lib.symbol_brasGauche();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-4.2,-71.3,1,1,0,0,0,-4.2,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:11,regY:2.1,rotation:5.6,x:10.9,y:-59.6},0).wait(1).to({rotation:11.1,x:10.6,y:-54.8},0).wait(1).to({rotation:16.7,x:10.2,y:-50},0).wait(1).to({rotation:22.3,x:9.7,y:-45.4},0).wait(1).to({rotation:27.8,x:9.1,y:-40.8},0).wait(1).to({rotation:33.4,x:8.4,y:-36.5},0).wait(1).to({rotation:39,x:7.6,y:-32.2},0).wait(1).to({rotation:46.2,x:8.7,y:-28.8},0).wait(1).to({rotation:53.4,x:9.7,y:-25.7},0).wait(1).to({rotation:60.6,x:10.7,y:-22.8},0).wait(1).to({rotation:67.8,x:11.7,y:-20.2},0).wait(1).to({rotation:75,x:12.6,y:-17.8},0).wait(1).to({rotation:82.3,x:13.6,y:-15.7},0).wait(1).to({rotation:89.5,x:14.7,y:-14},0).wait(1).to({rotation:96.7,x:15.8,y:-12.4},0).wait(1).to({rotation:103.9,x:17.2,y:-10.9},0).wait(1).to({rotation:111.1,x:18.7,y:-9.8},0).wait(1).to({rotation:118.3,x:20.3,y:-8.8},0).wait(1).to({rotation:125.6,x:22.2,y:-8},0).wait(1).to({rotation:132.8,x:24.3,y:-7.4},0).wait(1).to({rotation:140,x:26.7,y:-6.8},0).wait(1).to({rotation:147.2,x:29.2,y:-6.3},0).wait(1).to({rotation:154.4,x:32.1,y:-5.8},0).wait(1));

	// fusil
	this.instance_10 = new lib.fusil();
	this.instance_10.parent = this;
	this.instance_10.setTransform(33.3,-68.8,1,1,0,0,0,-9.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({rotation:4.3,x:32.5,y:-62.3},0).wait(1).to({rotation:8.6,x:31.7,y:-55.8},0).wait(1).to({rotation:12.9,x:31,y:-49.2},0).wait(1).to({rotation:17.1,x:30.1,y:-42.8},0).wait(1).to({rotation:21.4,x:29.4,y:-36.2},0).wait(1).to({rotation:25.7,x:28.6,y:-29.7},0).wait(1).to({rotation:30,x:27.8,y:-23.2},0).wait(1).to({rotation:35.6,x:27.1,y:-21.6},0).wait(1).to({rotation:41.2,x:26.5,y:-20},0).wait(1).to({rotation:46.8,x:25.9,y:-18.5},0).wait(1).to({rotation:52.5,x:25.2,y:-16.9},0).wait(1).to({rotation:58.1,x:24.6,y:-15.3},0).wait(1).to({rotation:63.7,x:23.9,y:-13.8},0).wait(1).to({rotation:69.3,x:23.3,y:-12.2},0).wait(1).to({rotation:74.9,x:22.6,y:-10.6},0).wait(1).to({rotation:80.5,x:22,y:-9.1},0).wait(1).to({rotation:86.2,x:21.3,y:-7.6},0).wait(1).to({rotation:91.8,x:20.7,y:-6},0).wait(1).to({rotation:97.4,x:20,y:-4.4},0).wait(1).to({rotation:103,x:19.4,y:-2.8},0).wait(1).to({rotation:108.6,x:18.8,y:-1.2},0).wait(1).to({rotation:114.2,x:18.1,y:0.3},0).wait(1).to({rotation:119.9,x:17.5,y:1.9},0).wait(1));

	// planche
	this.instance_11 = new lib.planche();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-0.1,-1.8,1,1,0,0,0,0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:0,x:-3.5},0).wait(1).to({x:-6.9},0).wait(1).to({x:-10.2},0).wait(1).to({x:-13.6},0).wait(1).to({x:-17},0).wait(1).to({x:-20.3},0).wait(1).to({x:-23.7},0).wait(1).to({x:-27.1},0).wait(1).to({x:-30.4},0).wait(1).to({x:-33.8},0).wait(1).to({x:-37.2},0).wait(1).to({x:-40.5},0).wait(1).to({x:-43.9},0).wait(1).to({x:-47.3},0).wait(1).to({x:-50.6},0).wait(1).to({x:-54},0).wait(1).to({x:-57.4},0).wait(1).to({x:-60.7},0).wait(1).to({x:-64.1},0).wait(1).to({x:-67.5},0).wait(1).to({x:-70.8},0).wait(1).to({x:-74.2},0).wait(1).to({x:-77.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.4,-92.6,82.2,104.3);
p.frameBounds = [rect, new cjs.Rectangle(-35.6,-89.9,81.8,99.6), new cjs.Rectangle(-39,-86.2,84.4,95.9), new cjs.Rectangle(-42.3,-82.4,86.6,92.2), new cjs.Rectangle(-45.7,-78.7,89.1,88.5), new cjs.Rectangle(-49.1,-75.1,91.3,84.8), new cjs.Rectangle(-52.4,-71.4,93.7,82), new cjs.Rectangle(-55.8,-67.6,96.2,78.9), new cjs.Rectangle(-59.2,-66,98.8,77.2), new cjs.Rectangle(-62.5,-64.1,100.6,75.4), new cjs.Rectangle(-65.9,-62.1,103.4,73.4), new cjs.Rectangle(-69.3,-60,106.3,71.3), new cjs.Rectangle(-72.6,-57.9,110,69.2), new cjs.Rectangle(-76,-55.9,119.4,67.2), new cjs.Rectangle(-79.4,-54,128.1,65.3), new cjs.Rectangle(-82.7,-52.1,136,63.4), new cjs.Rectangle(-86.1,-48,143,59.3), new cjs.Rectangle(-89.5,-43.8,149.2,55.8), new cjs.Rectangle(-92.8,-39.5,155.4,51.4), new cjs.Rectangle(-96.2,-36,161.7,47.8), new cjs.Rectangle(-99.6,-32.6,167.9,44.3), new cjs.Rectangle(-102.9,-29,174.7,40.9), new cjs.Rectangle(-106.3,-25.2,181.6,37.3), new cjs.Rectangle(-109.7,-21.3,186.7,34.9)];


(lib.anim_protagonisteHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndStop('normal')
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// fusil
	this.fusil_mc = new lib.fusil();
	this.fusil_mc.name = "fusil_mc";
	this.fusil_mc.parent = this;
	this.fusil_mc.setTransform(33.2,-68.8,1,1,0,0,0,-9.2,0.7);
	this.fusil_mc.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.fusil_mc).wait(1).to({regX:-9.1,rotation:-5.5,x:33.8,y:-67,alpha:0.378},0).wait(1).to({rotation:-11,x:34.2,y:-65.2,alpha:0.407},0).wait(1).to({rotation:-10.4,y:-65.4,alpha:0.435},0).wait(1).to({rotation:-9.7,x:34.1,y:-65.6,alpha:0.463},0).wait(1).to({rotation:-9.1,y:-65.8,alpha:0.491},0).wait(1).to({rotation:-8.4,x:34,y:-66,alpha:0.52},0).wait(1).to({rotation:-7.8,y:-66.2,alpha:0.548},0).wait(1).to({rotation:-7.1,x:33.9,y:-66.5,alpha:0.576},0).wait(1).to({rotation:-6.5,y:-66.7,alpha:0.604},0).wait(1).to({rotation:-5.8,x:33.8,y:-66.9,alpha:0.633},0).wait(1).to({rotation:-5.2,x:33.7,y:-67.1,alpha:0.661},0).wait(1).to({rotation:-4.5,y:-67.3,alpha:0.689},0).wait(1).to({rotation:-3.9,x:33.6,y:-67.5,alpha:0.717},0).wait(1).to({rotation:-3.2,y:-67.8,alpha:0.746},0).wait(1).to({rotation:-2.6,x:33.5,y:-68,alpha:0.774},0).wait(1).to({rotation:-1.9,x:33.4,y:-68.2,alpha:0.802},0).wait(1).to({rotation:-1.3,y:-68.4,alpha:0.83},0).wait(1).to({rotation:-0.6,x:33.3,y:-68.6,alpha:0.859},0).wait(1).to({rotation:0,y:-68.8,alpha:0.887},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.943},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:1},0).wait(1));

	// tete
	this.instance = new lib.symbol_tete();
	this.instance.parent = this;
	this.instance.setTransform(1.5,-80,1,1,1);
	this.instance.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-3.2,regY:-2.2,rotation:-4,x:-5.5,y:-81.6,alpha:0.378},0).wait(1).to({rotation:-9,x:-9.3,y:-80.9,alpha:0.407},0).wait(1).to({rotation:-8.4,x:-8.8,y:-81,alpha:0.435},0).wait(1).to({rotation:-7.8,x:-8.4,alpha:0.463},0).wait(1).to({rotation:-7.2,x:-7.9,y:-81.1,alpha:0.491},0).wait(1).to({rotation:-6.6,x:-7.5,y:-81.2,alpha:0.52},0).wait(1).to({rotation:-6.1,x:-7.1,alpha:0.548},0).wait(1).to({rotation:-5.5,x:-6.6,y:-81.3,alpha:0.576},0).wait(1).to({rotation:-4.9,x:-6.1,y:-81.4,alpha:0.604},0).wait(1).to({rotation:-4.3,x:-5.6,alpha:0.633},0).wait(1).to({rotation:-3.7,x:-5.2,y:-81.5,alpha:0.661},0).wait(1).to({rotation:-3.1,x:-4.7,alpha:0.689},0).wait(1).to({rotation:-2.5,x:-4.3,y:-81.6,alpha:0.717},0).wait(1).to({rotation:-1.9,x:-3.8,y:-81.7,alpha:0.746},0).wait(1).to({rotation:-1.3,x:-3.4,alpha:0.774},0).wait(1).to({rotation:-0.7,x:-3,y:-81.8,alpha:0.802},0).wait(1).to({rotation:-0.1,x:-2.5,alpha:0.83},0).wait(1).to({rotation:0.5,x:-2,y:-81.9,alpha:0.859},0).wait(1).to({rotation:1.1,x:-1.5,y:-82,alpha:0.887},0).wait(1).to({x:-1.6,alpha:0.915},0).wait(1).to({y:-82.1,alpha:0.943},0).wait(1).to({alpha:0.972},0).wait(1).to({y:-82.2,alpha:1},0).wait(1));

	// bras_droit
	this.instance_1 = new lib.symbol_brasDroit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.8,-68,1,1,0,0,0,0.8,-0.9);
	this.instance_1.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-11.6,regY:9.5,rotation:-8.3,x:-13.8,y:-55.3,alpha:0.35},0).wait(1).to({rotation:-16.5,x:-14.1,y:-53.2},0).wait(1).to({rotation:-15.6,x:-14,y:-53.4},0).wait(1).to({rotation:-14.6,y:-53.7},0).wait(1).to({rotation:-13.6,x:-13.9,y:-53.9},0).wait(1).to({rotation:-12.7,y:-54.1},0).wait(1).to({rotation:-11.7,y:-54.4},0).wait(1).to({rotation:-10.7,y:-54.6},0).wait(1).to({rotation:-9.7,x:-13.8,y:-54.9},0).wait(1).to({rotation:-8.8,x:-13.7,y:-55.1},0).wait(1).to({rotation:-7.8,y:-55.4},0).wait(1).to({rotation:-6.8,x:-13.6,y:-55.6},0).wait(1).to({rotation:-5.8,y:-55.9},0).wait(1).to({rotation:-4.9,x:-13.5,y:-56.2},0).wait(1).to({rotation:-3.9,x:-13.4,y:-56.4},0).wait(1).to({rotation:-2.9,y:-56.7},0).wait(1).to({rotation:-1.9,x:-13.3,y:-57},0).wait(1).to({rotation:-1,x:-13.2,y:-57.3},0).wait(1).to({rotation:0,y:-57.6},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:1},0).wait(1));

	// torse
	this.instance_2 = new lib.symbol_torse();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,-48.4,1,1,0,0,0,-0.4,11.2);
	this.instance_2.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.6,regY:1.1,rotation:-5.9,x:-1.7,y:-58.4,alpha:0.341},0).wait(1).to({rotation:-11.8,x:-3.3,y:-58.1},0).wait(1).to({rotation:-11.1,x:-3.1,y:-58.2,alpha:0.342},0).wait(1).to({rotation:-10.4,x:-2.9},0).wait(1).to({rotation:-9.7,x:-2.7,alpha:0.343},0).wait(1).to({rotation:-9,x:-2.6},0).wait(1).to({rotation:-8.3,x:-2.4,y:-58.3,alpha:0.344},0).wait(1).to({rotation:-7.6,x:-2.1},0).wait(1).to({rotation:-6.9,x:-1.9,y:-58.4,alpha:0.345},0).wait(1).to({rotation:-6.2,x:-1.8},0).wait(1).to({rotation:-5.5,x:-1.6,alpha:0.346},0).wait(1).to({rotation:-4.9,x:-1.4},0).wait(1).to({rotation:-4.2,x:-1.2,alpha:0.347},0).wait(1).to({rotation:-3.5,x:-1},0).wait(1).to({rotation:-2.8,x:-0.8,alpha:0.348},0).wait(1).to({rotation:-2.1,x:-0.6,y:-58.5},0).wait(1).to({rotation:-1.4,x:-0.4,alpha:0.349},0).wait(1).to({rotation:-0.7,x:-0.3},0).wait(1).to({rotation:0,x:0,alpha:0.35},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:1},0).wait(1));

	// bras_gauche
	this.instance_3 = new lib.symbol_brasGauche();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-4.2,-71.3,1,1,0,0,0,-4.2,-4.7);
	this.instance_3.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:11,regY:2.1,rotation:4.2,x:12.3,y:-62.9,alpha:0.35},0).wait(1).to({rotation:8.5,x:13.7,y:-61.4},0).wait(1).to({rotation:8,x:13.5,y:-61.6},0).wait(1).to({rotation:7.5,x:13.4,y:-61.7},0).wait(1).to({rotation:7,x:13.2,y:-61.9},0).wait(1).to({rotation:6.5,x:13.1,y:-62.1},0).wait(1).to({rotation:6,x:12.9,y:-62.3},0).wait(1).to({rotation:5.5,x:12.7,y:-62.5},0).wait(1).to({rotation:5,x:12.6,y:-62.7},0).wait(1).to({rotation:4.5,x:12.4,y:-62.8},0).wait(1).to({rotation:4,x:12.3,y:-63},0).wait(1).to({rotation:3.5,x:12.1,y:-63.2},0).wait(1).to({rotation:3,x:12,y:-63.4},0).wait(1).to({rotation:2.5,x:11.8,y:-63.5},0).wait(1).to({rotation:2,x:11.7,y:-63.7},0).wait(1).to({rotation:1.5,x:11.5,y:-63.9},0).wait(1).to({rotation:1,x:11.3,y:-64.1},0).wait(1).to({rotation:0.5,x:11.2,y:-64.3},0).wait(1).to({rotation:0,x:11,y:-64.5},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:1},0).wait(1));

	// cuisse_droit
	this.instance_4 = new lib.symbol_cuisseDroit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.7,-43.9,1,1,0,0,0,0,-7.7);
	this.instance_4.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:0,rotation:-5.7,x:0.1,y:-35.3,alpha:0.35},0).wait(1).to({rotation:-11.5,x:0.8,y:-34.4},0).wait(1).to({rotation:-10.8,x:0.7,y:-34.5},0).wait(1).to({rotation:-10.1,x:0.6,y:-34.6},0).wait(1).to({rotation:-9.4,y:-34.7},0).wait(1).to({rotation:-8.8,x:0.5,y:-34.8},0).wait(1).to({rotation:-8.1,x:0.4,y:-34.9},0).wait(1).to({rotation:-7.4,x:0.3,y:-35},0).wait(1).to({rotation:-6.7,x:0.2,y:-35.1},0).wait(1).to({rotation:-6.1,x:0.1,y:-35.2},0).wait(1).to({rotation:-5.4,x:0,y:-35.3},0).wait(1).to({rotation:-4.7,x:-0.1,y:-35.5},0).wait(1).to({rotation:-4,x:-0.2,y:-35.6},0).wait(1).to({rotation:-3.4,y:-35.7},0).wait(1).to({rotation:-2.7,x:-0.3,y:-35.8},0).wait(1).to({rotation:-2,x:-0.4,y:-35.9},0).wait(1).to({rotation:-1.3,x:-0.5,y:-36},0).wait(1).to({rotation:-0.7,x:-0.6,y:-36.1},0).wait(1).to({rotation:0,x:-0.7,y:-36.2},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:1},0).wait(1));

	// cuisse_gauche
	this.instance_5 = new lib.symbol_cuisseGauche();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.8,-42.8,1,1,0,0,0,-2.9,-8.4);
	this.instance_5.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-2.4,regY:0,rotation:-5.4,x:3,y:-33.7,alpha:0.35},0).wait(1).to({rotation:-10.8,x:3.8,y:-33.1},0).wait(1).to({rotation:-10.2,x:3.7,y:-33.2},0).wait(1).to({rotation:-9.5,y:-33.3},0).wait(1).to({rotation:-8.9,x:3.6,y:-33.4},0).wait(1).to({rotation:-8.3,x:3.4},0).wait(1).to({rotation:-7.6,x:3.3,y:-33.5},0).wait(1).to({rotation:-7},0).wait(1).to({rotation:-6.4,x:3.2,y:-33.6},0).wait(1).to({rotation:-5.7,x:3.1,y:-33.7},0).wait(1).to({rotation:-5.1,x:3,y:-33.8},0).wait(1).to({rotation:-4.4,x:2.9},0).wait(1).to({rotation:-3.8,x:2.8,y:-33.9},0).wait(1).to({rotation:-3.2,x:2.7,y:-34},0).wait(1).to({rotation:-2.5,x:2.6,y:-34.1},0).wait(1).to({rotation:-1.9,x:2.5},0).wait(1).to({rotation:-1.3,x:2.4,y:-34.2},0).wait(1).to({rotation:-0.6,x:2.3,y:-34.3},0).wait(1).to({rotation:0,y:-34.4},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:1},0).wait(1));

	// mollet_droit
	this.instance_6 = new lib.symbol_molletDroit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-16.9,-11,1,1,0,0,0,-6.5,9.8);
	this.instance_6.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,rotation:4.4,x:-9.7,y:-20.3,alpha:0.35},0).wait(1).to({rotation:8.7,x:-9,y:-19.7},0).wait(1).to({rotation:8.2,x:-9.1,y:-19.8},0).wait(1).to({rotation:7.7,x:-9.2,y:-19.9},0).wait(1).to({rotation:7.2,x:-9.3,y:-20},0).wait(1).to({rotation:6.7,x:-9.4},0).wait(1).to({rotation:6.2,y:-20.1},0).wait(1).to({rotation:5.7,x:-9.5,y:-20.2},0).wait(1).to({rotation:5.1,x:-9.6},0).wait(1).to({rotation:4.6,x:-9.7,y:-20.3},0).wait(1).to({rotation:4.1,x:-9.8,y:-20.4},0).wait(1).to({rotation:3.6,x:-9.9},0).wait(1).to({rotation:3.1,y:-20.5},0).wait(1).to({rotation:2.6,x:-10},0).wait(1).to({rotation:2.1,x:-10.1,y:-20.6},0).wait(1).to({rotation:1.5,x:-10.2,y:-20.7},0).wait(1).to({rotation:1,x:-10.3},0).wait(1).to({rotation:0.5,x:-10.4,y:-20.8},0).wait(1).to({rotation:0},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:1},0).wait(1));

	// mollet_gauche
	this.instance_7 = new lib.symbol_molletGauche();
	this.instance_7.parent = this;
	this.instance_7.setTransform(10.6,-27.7,1,1,0,0,0,0.1,-9.7);
	this.instance_7.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,rotation:4,x:11.2,y:-18.6,alpha:0.35},0).wait(1).to({rotation:8,x:11.9,y:-19.2},0).wait(1).to({rotation:7.5,x:11.8,y:-19.1},0).wait(1).to({rotation:7,x:11.7},0).wait(1).to({rotation:6.6,y:-19},0).wait(1).to({rotation:6.1,x:11.6,y:-18.9},0).wait(1).to({rotation:5.6,x:11.5,y:-18.8},0).wait(1).to({rotation:5.1,x:11.4},0).wait(1).to({rotation:4.7,x:11.3,y:-18.7},0).wait(1).to({rotation:4.2,x:11.2,y:-18.6},0).wait(1).to({rotation:3.7,x:11.1},0).wait(1).to({rotation:3.3,y:-18.5},0).wait(1).to({rotation:2.8,x:11,y:-18.4},0).wait(1).to({rotation:2.3,x:10.9},0).wait(1).to({rotation:1.9,x:10.8,y:-18.3},0).wait(1).to({rotation:1.4,x:10.7,y:-18.2},0).wait(1).to({rotation:0.9,x:10.6},0).wait(1).to({rotation:0.5,x:10.5,y:-18.1},0).wait(1).to({rotation:0,y:-18},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:1},0).wait(1));

	// pied_droit
	this.instance_8 = new lib.symbol_piedDroit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-16,-8.5);
	this.instance_8.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({alpha:0.35},0).wait(19).to({alpha:0.512},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:1},0).wait(1));

	// pied_gauche
	this.instance_9 = new lib.symbol_piedGauche();
	this.instance_9.parent = this;
	this.instance_9.setTransform(15.3,-8.5,1,1,0,0,0,1.2,-0.6);
	this.instance_9.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:1.3,regY:-0.5,x:15.4,y:-8.4,alpha:0.35},0).wait(19).to({alpha:0.512},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:1},0).wait(1));

	// planche
	this.instance_10 = new lib.planche();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.1,-1.8,1,1,0,0,0,0.1,0.5);
	this.instance_10.alpha = 0.352;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:0,x:-0.2,alpha:0.35},0).wait(19).to({alpha:0.512},0).wait(1).to({alpha:0.675},0).wait(1).to({alpha:0.837},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.4,-92.3,82.2,103.9);
p.frameBounds = [rect, new cjs.Rectangle(-32.3,-92.5,79.9,102.3), new cjs.Rectangle(-32.3,-91.9,79.9,101.6), new cjs.Rectangle(-32.3,-92,79.9,101.8), new cjs.Rectangle(-32.3,-92.1,79.9,101.8), new cjs.Rectangle(-32.3,-92,79.9,101.8), new cjs.Rectangle(-32.3,-92.1,79.9,101.9), new cjs.Rectangle(-32.3,-92.2,79.9,101.9), new cjs.Rectangle(-32.3,-92.3,79.9,102), new cjs.Rectangle(-32.3,-92.3,79.9,102.1), new cjs.Rectangle(-32.3,-92.4,79.9,102.1), rect=new cjs.Rectangle(-32.3,-92.5,79.9,102.2), rect, new cjs.Rectangle(-32.3,-92.5,79.9,102.3), rect=new cjs.Rectangle(-32.3,-92.6,78.9,102.4), rect, new cjs.Rectangle(-32.3,-92.8,78.9,102.5), new cjs.Rectangle(-32.3,-92.8,79,102.5), new cjs.Rectangle(-32.3,-92.9,78.9,102.6), new cjs.Rectangle(-32.3,-92.8,79.1,102.6), new cjs.Rectangle(-32.3,-92.9,79.1,102.7), new cjs.Rectangle(-32.3,-93,79.1,102.7), new cjs.Rectangle(-32.3,-93,79.1,102.8), new cjs.Rectangle(-32.3,-93.1,79.1,102.8)];


(lib.anim_protagonisteFrein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"frein":0});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// fusil
	this.fusil_mc = new lib.fusil();
	this.fusil_mc.name = "fusil_mc";
	this.fusil_mc.parent = this;
	this.fusil_mc.setTransform(33.2,-68.8,1,1,0,0,0,-9.2,0.7);

	this.timeline.addTween(cjs.Tween.get(this.fusil_mc).wait(1).to({regX:-9.1,rotation:-0.7,x:31.9,y:-68.7},0).wait(1).to({rotation:-1.3,x:30.5,y:-68.6},0).wait(1).to({rotation:-2,x:29,y:-68.4},0).wait(1).to({rotation:-2.7,x:27.7,y:-68.3},0).wait(1).to({rotation:-3.4,x:26.3,y:-68.1},0).wait(1).to({rotation:-4,x:24.8,y:-68},0).wait(1).to({rotation:-4.7,x:23.5,y:-67.9},0).wait(1));

	// tete
	this.instance = new lib.symbol_tete();
	this.instance.parent = this;
	this.instance.setTransform(1.5,-73.7,1,1,1,0,0,0.2,5.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-3.2,regY:-2.2,rotation:0.6,x:-3.5,y:-80.8},0).wait(1).to({rotation:0,x:-5.2,y:-80.5},0).wait(1).to({rotation:-0.5,x:-7,y:-80.1},0).wait(1).to({rotation:-1,x:-8.8,y:-79.9},0).wait(1).to({rotation:-1.6,x:-10.5,y:-79.5},0).wait(1).to({rotation:-2.1,x:-12.3,y:-79.3},0).wait(1).to({rotation:-2.7,x:-14,y:-78.9},0).wait(1));

	// bras_droit
	this.instance_1 = new lib.symbol_brasDroit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.8,-68,1,1,0,0,0,0.8,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-11.6,regY:9.5,rotation:-1.4,x:-14.4,y:-56.9},0).wait(1).to({rotation:-2.9,x:-15.6,y:-56.2},0).wait(1).to({rotation:-4.3,x:-16.9,y:-55.6},0).wait(1).to({rotation:-5.7,x:-18.1,y:-54.9},0).wait(1).to({rotation:-7.2,x:-19.3,y:-54.2},0).wait(1).to({rotation:-8.6,x:-20.6,y:-53.6},0).wait(1).to({rotation:-10.1,x:-21.8,y:-53},0).wait(1));

	// torse
	this.instance_2 = new lib.symbol_torse();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.2,-48.4,1,1,0,0,0,-0.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.6,regY:1.1,rotation:-0.8,x:-1.5,y:-58.2},0).wait(1).to({rotation:-1.6,x:-3,y:-58},0).wait(1).to({rotation:-2.3,x:-4.5,y:-57.7},0).wait(1).to({rotation:-3.1,x:-6.1,y:-57.4},0).wait(1).to({rotation:-3.9,x:-7.6,y:-57.1},0).wait(1).to({rotation:-4.7,x:-9.1,y:-56.8},0).wait(1).to({rotation:-5.4,x:-10.6,y:-56.5},0).wait(1));

	// bras_gauche
	this.instance_3 = new lib.symbol_brasGauche();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-4.2,-71.3,1,1,0,0,0,-4.2,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:11,regY:2.1,x:9.7,y:-64.2},0).wait(1).to({x:8.3,y:-64},0).wait(1).to({x:6.9,y:-63.8},0).wait(1).to({x:5.5,y:-63.6},0).wait(1).to({x:4.1,y:-63.4},0).wait(1).to({x:2.7,y:-63.2},0).wait(1).to({x:1.3,y:-63},0).wait(1));

	// cuisse_droit
	this.instance_4 = new lib.symbol_cuisseDroit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.7,-43.9,1,1,0,0,0,0,-7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:0,rotation:-1.6,x:-1.9,y:-35.9},0).wait(1).to({rotation:-3.3,x:-3.1,y:-35.5},0).wait(1).to({rotation:-4.9,x:-4.3,y:-35.1},0).wait(1).to({rotation:-6.6,x:-5.5,y:-34.8},0).wait(1).to({rotation:-8.2,x:-6.8,y:-34.4},0).wait(1).to({rotation:-9.8,x:-8,y:-34},0).wait(1).to({rotation:-11.5,x:-9.2,y:-33.7},0).wait(1));

	// cuisse_gauche
	this.instance_5 = new lib.symbol_cuisseGauche();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.8,-42.8,1,1,0,0,0,-2.9,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-2.4,regY:0,rotation:-3.7,x:1.6,y:-34.2},0).wait(1).to({rotation:-7.4,x:0.9,y:-34.1},0).wait(1).to({rotation:-11,x:0.2,y:-34},0).wait(1).to({rotation:-14.7,x:-0.5},0).wait(1).to({rotation:-18.4,x:-1.2,y:-33.9},0).wait(1).to({rotation:-22.1,x:-1.9},0).wait(1).to({rotation:-25.8,x:-2.6},0).wait(1));

	// mollet_droit
	this.instance_6 = new lib.symbol_molletDroit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-16.9,-11,1,1,0,0,0,-6.5,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0,regY:0,rotation:-2.1,x:-11.1,y:-20.6},0).wait(1).to({rotation:-4.2,x:-11.7,y:-20.4},0).wait(1).to({rotation:-6.3,x:-12.3,y:-20.1},0).wait(1).to({rotation:-8.4,x:-12.9,y:-19.8},0).wait(1).to({rotation:-10.5,x:-13.6,y:-19.6},0).wait(1).to({rotation:-12.6,x:-14.2,y:-19.3},0).wait(1).to({rotation:-14.8,x:-14.9,y:-18.9},0).wait(1));

	// mollet_gauche
	this.instance_7 = new lib.symbol_molletGauche();
	this.instance_7.parent = this;
	this.instance_7.setTransform(10.6,-27.7,1,1,0,0,0,0.1,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,rotation:1.1,x:9.9,y:-18.6},0).wait(1).to({rotation:2.3,x:9.3,y:-19.1},0).wait(1).to({rotation:3.4,x:8.7,y:-19.6},0).wait(1).to({rotation:4.5,x:8.2,y:-20.1},0).wait(1).to({rotation:5.7,x:7.6,y:-20.6},0).wait(1).to({rotation:6.8,x:7,y:-21.2},0).wait(1).to({rotation:8,x:6.5,y:-21.7},0).wait(1));

	// pied_droit
	this.instance_8 = new lib.symbol_piedDroit();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-16,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({rotation:-4.3,y:-8},0).wait(1).to({rotation:-8.6,y:-7.4},0).wait(1).to({rotation:-12.9,y:-6.9},0).wait(1).to({rotation:-17.1,y:-6.4},0).wait(1).to({rotation:-21.4,y:-5.8},0).wait(1).to({rotation:-25.7,y:-5.3},0).wait(1).to({rotation:-30,y:-4.7},0).wait(1));

	// pied_gauche
	this.instance_9 = new lib.symbol_piedGauche();
	this.instance_9.parent = this;
	this.instance_9.setTransform(15.3,-8.5,1,1,0,0,0,1.2,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:1.3,regY:-0.5,rotation:-2.1,x:15,y:-8.8},0).wait(1).to({rotation:-4.3,x:14.5,y:-9.2},0).wait(1).to({rotation:-6.4,x:14.1,y:-9.6},0).wait(1).to({rotation:-8.6,x:13.7,y:-10},0).wait(1).to({rotation:-10.7,x:13.3,y:-10.4},0).wait(1).to({rotation:-12.9,x:12.9,y:-10.8},0).wait(1).to({rotation:-15,x:12.4,y:-11.3},0).wait(1));

	// planche
	this.instance_10 = new lib.planche();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-0.1,-1.8,1,1,0,0,0,0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:0,rotation:-2.1,x:-0.2,y:-1.7},0).wait(1).to({rotation:-4.3,x:-0.1},0).wait(1).to({rotation:-6.4,x:-0.2},0).wait(1).to({rotation:-8.6},0).wait(1).to({rotation:-10.7,x:-0.1},0).wait(1).to({rotation:-12.9,x:-0.2},0).wait(1).to({rotation:-15,x:-0.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.4,-91.1,74.2,96.9);
p.frameBounds = [rect, new cjs.Rectangle(-32.3,-91.7,73.7,99.2), new cjs.Rectangle(-32.3,-91.4,72.3,99.6), new cjs.Rectangle(-32.4,-91.1,71,99.9), new cjs.Rectangle(-32.4,-90.8,69.6,100.4), new cjs.Rectangle(-33.4,-90.4,69.2,100.6), new cjs.Rectangle(-34.3,-90.1,68.7,101), new cjs.Rectangle(-35.2,-89.8,68.2,101.3)];


(lib.anim_bossNormal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.symbol_boss();
	this.instance.parent = this;
	this.instance.setTransform(0.7,-38.5,1,1,0,0,0,1.2,-38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-6,regY:-101.4,x:-6.5,y:-101.6},0).wait(1).to({y:-101.9},0).wait(1).to({y:-102.2},0).wait(1).to({y:-102.6},0).wait(1).to({y:-102.9},0).wait(1).to({y:-103.2},0).wait(1).to({y:-103.5},0).wait(1).to({y:-103.8},0).wait(1).to({y:-103},0).wait(1).to({y:-102.2},0).wait(1).to({y:-101.4},0).wait(1).to({y:-100.7},0).wait(1).to({y:-99.9},0).wait(1).to({y:-99.1},0).wait(1).to({y:-98.3},0).wait(1).to({y:-97.5},0).wait(1).to({y:-98.1},0).wait(1).to({y:-98.6},0).wait(1).to({y:-99.2},0).wait(1).to({y:-99.7},0).wait(1).to({y:-100.3},0).wait(1).to({y:-100.8},0).wait(1).to({y:-101.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.8,-202.9,202.5,203.2);
p.frameBounds = [rect, new cjs.Rectangle(-107.8,-203.2,202.5,203.2), new cjs.Rectangle(-107.8,-203.5,202.5,203.2), new cjs.Rectangle(-107.8,-203.8,202.5,203.2), new cjs.Rectangle(-107.8,-204.2,202.5,203.2), new cjs.Rectangle(-107.8,-204.5,202.5,203.2), new cjs.Rectangle(-107.8,-204.8,202.5,203.2), new cjs.Rectangle(-107.8,-205.1,202.5,203.2), new cjs.Rectangle(-107.8,-205.4,202.5,203.2), new cjs.Rectangle(-107.8,-204.6,202.5,203.2), new cjs.Rectangle(-107.8,-203.8,202.5,203.2), new cjs.Rectangle(-107.8,-203,202.5,203.2), new cjs.Rectangle(-107.8,-202.3,202.5,203.2), new cjs.Rectangle(-107.8,-201.5,202.5,203.2), new cjs.Rectangle(-107.8,-200.7,202.5,203.2), new cjs.Rectangle(-107.8,-199.9,202.5,203.2), new cjs.Rectangle(-107.8,-199.1,202.5,203.2), new cjs.Rectangle(-107.8,-199.7,202.5,203.2), new cjs.Rectangle(-107.8,-200.2,202.5,203.2), new cjs.Rectangle(-107.8,-200.8,202.5,203.2), new cjs.Rectangle(-107.8,-201.3,202.5,203.2), new cjs.Rectangle(-107.8,-201.9,202.5,203.2), new cjs.Rectangle(-107.8,-202.4,202.5,203.2), new cjs.Rectangle(-107.8,-202.9,202.5,203.2)];


(lib.anim_bossMort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.symbol_boss();
	this.instance.parent = this;
	this.instance.setTransform(0.7,-38.5,1,1,0,0,0,1.2,-38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-6,regY:-101.4,x:-6.5,y:-101.3,alpha:0},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:1},0).wait(4).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-6.7,y:-103.5,alpha:0.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-6.8,y:-105.7,alpha:1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-7,y:-107.8,alpha:0.833},0).wait(1).to({scaleX:1.09,scaleY:1.08,x:-7.1,y:-110,alpha:0.667},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-7.3,y:-112.1,alpha:0.5},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-7.4,y:-114.3,alpha:0.333},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:-7.6,y:-116.5,alpha:0.167},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-7.7,y:-118.7,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-107.8,-202.9,208,209);
p.frameBounds = [rect, rect=new cjs.Rectangle(-107.8,-202.9,205,206), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-110,-207.2,210,211), new cjs.Rectangle(-112.3,-211.5,214,215), new cjs.Rectangle(-114.6,-215.8,218,219), new cjs.Rectangle(-116.9,-220.1,222,224), new cjs.Rectangle(-119.2,-224.4,227,228), new cjs.Rectangle(-121.5,-228.8,231,232), new cjs.Rectangle(-123.8,-233.1,235,237), new cjs.Rectangle(-126.1,-237.4,240,241)];


(lib.clipBarrePdV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{pdv_10:0,pdv_9:1,pdv_8:2,pdv_7:3,pdv_6:4,pdv_5:5,pdv_4:6,pdv_3:7,pdv_2:8,pdv_1:9,pdv_0:10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1));

	// barre
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B90004").s().p("ArtBkIAAjHIXbAAIAADHg");
	this.shape.setTransform(135.6,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B90004").s().p("AqiBkIAAjHIVFAAIAADHg");
	this.shape_1.setTransform(128.1,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B90004").s().p("ApXBkIAAjHISvAAIAADHg");
	this.shape_2.setTransform(120.6,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B90004").s().p("AoMBkIAAjHIQZAAIAADHg");
	this.shape_3.setTransform(113.1,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B90004").s().p("AnBBkIAAjHIODAAIAADHg");
	this.shape_4.setTransform(105.6,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B90004").s().p("Al2BkIAAjHILtAAIAADHg");
	this.shape_5.setTransform(98.1,24.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B90004").s().p("AkrBkIAAjHIJXAAIAADHg");
	this.shape_6.setTransform(90.6,24.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B90004").s().p("AjgBkIAAjHIHBAAIAADHg");
	this.shape_7.setTransform(83.1,24.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B90004").s().p("AiVBkIAAjHIErAAIAADHg");
	this.shape_8.setTransform(75.6,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B90004").s().p("AhKBkIAAjHICVAAIAADHg");
	this.shape_9.setTransform(68.1,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(1));

	// coeur
	this.instance = new lib.symbol_coeur();
	this.instance.parent = this;
	this.instance.setTransform(24.9,22.6,1,1,0,0,0,0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:20.5},0).wait(1).to({y:22.6},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.5,-0.6,211.1,46.4);
p.frameBounds = [rect, new cjs.Rectangle(-0.5,-0.6,196.1,46.4), new cjs.Rectangle(-0.5,-0.6,181.1,46.4), new cjs.Rectangle(-0.5,-2.7,166.1,46.4), new cjs.Rectangle(-0.5,-0.6,151.1,46.4), new cjs.Rectangle(-0.5,-0.6,136.1,46.4), new cjs.Rectangle(-0.5,-0.6,121.1,46.4), new cjs.Rectangle(-0.5,-0.6,106.1,46.4), new cjs.Rectangle(-0.5,-0.6,91.1,46.4), new cjs.Rectangle(-0.5,-0.6,76.1,46.4), new cjs.Rectangle(-0.5,-0.6,54,49)];


(lib.anim_antagonisteNormal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.symbol_antagoniste();
	this.instance.parent = this;
	this.instance.setTransform(0.7,-38.5,1,1,0,0,0,1.2,-38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.7,regY:-39.5,x:-1.2,y:-39.7},0).wait(1).to({y:-40},0).wait(1).to({y:-40.3},0).wait(1).to({y:-40.7},0).wait(1).to({y:-41},0).wait(1).to({y:-41.3},0).wait(1).to({y:-41.6},0).wait(1).to({y:-41.9},0).wait(1).to({y:-41.1},0).wait(1).to({y:-40.3},0).wait(1).to({y:-39.5},0).wait(1).to({y:-38.8},0).wait(1).to({y:-38},0).wait(1).to({y:-37.2},0).wait(1).to({y:-36.4},0).wait(1).to({y:-35.6},0).wait(1).to({y:-36.2},0).wait(1).to({y:-36.7},0).wait(1).to({y:-37.3},0).wait(1).to({y:-37.8},0).wait(1).to({y:-38.4},0).wait(1).to({y:-38.9},0).wait(1).to({y:-39.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.6,-79.9,70.5,82.8);
p.frameBounds = [rect, new cjs.Rectangle(-35.1,-80.5,71,83.1), new cjs.Rectangle(-35.1,-80.8,71,83.1), new cjs.Rectangle(-35.1,-81.1,71,83.1), new cjs.Rectangle(-35.1,-81.5,71,83.1), new cjs.Rectangle(-35.1,-81.8,71,83.1), new cjs.Rectangle(-35.1,-82.1,71,83.1), new cjs.Rectangle(-35.1,-82.4,71,83.1), new cjs.Rectangle(-35.1,-82.7,71,83.1), new cjs.Rectangle(-35.1,-81.9,71,83.1), new cjs.Rectangle(-35.1,-81.1,71,83.1), new cjs.Rectangle(-35.1,-80.3,71,83.1), new cjs.Rectangle(-35.1,-79.6,71,83.1), new cjs.Rectangle(-35.1,-78.8,71,83.1), new cjs.Rectangle(-35.1,-78,71,83.1), new cjs.Rectangle(-35.1,-77.2,71,83.1), new cjs.Rectangle(-35.1,-76.4,71,83.1), new cjs.Rectangle(-35.1,-77,71,83.1), new cjs.Rectangle(-35.1,-77.5,71,83.1), new cjs.Rectangle(-35.1,-78.1,71,83.1), new cjs.Rectangle(-35.1,-78.6,71,83.1), new cjs.Rectangle(-35.1,-79.2,71,83.1), new cjs.Rectangle(-35.1,-79.7,71,83.1), new cjs.Rectangle(-35.1,-80.2,71,83.1)];


(lib.anim_antagonisteMort = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.symbol_antagoniste();
	this.instance.parent = this;
	this.instance.setTransform(0.7,-38.5,1,1,0,0,0,1.2,-38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.7,regY:-39.5,x:-1.2,y:-39.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-1.3,y:-42,alpha:0.857},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-1.4,y:-44.5,alpha:0.714},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:-1.6,y:-47,alpha:0.571},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:-1.7,y:-49.5,alpha:0.429},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-1.8,y:-51.9,alpha:0.286},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-1.9,y:-54.4,alpha:0.143},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:-2,y:-56.9,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-34.6,-79.9,76,88);
p.frameBounds = [rect, rect=new cjs.Rectangle(-35.1,-80.2,74,86), rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-37.2,-85.2,79,91), new cjs.Rectangle(-39.5,-90.2,79,97), new cjs.Rectangle(-41.7,-95.3,83,101), new cjs.Rectangle(-43.8,-100.3,87,105), new cjs.Rectangle(-46,-105.3,97,112), new cjs.Rectangle(-48.2,-110.3,99,118), new cjs.Rectangle(-50.4,-115.3,101,123)];


(lib.clipProtagoniste2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"normal":0,pertePdV:1});

	// pointsContact
	this.mc_p4 = new lib.clipPointContact();
	this.mc_p4.name = "mc_p4";
	this.mc_p4.parent = this;
	this.mc_p4.setTransform(37.6,-4.7,1,1,0,0,0,-0.2,-0.2);

	this.mc_p3 = new lib.clipPointContact();
	this.mc_p3.name = "mc_p3";
	this.mc_p3.parent = this;
	this.mc_p3.setTransform(49.1,-43.7,1,1,0,0,0,-0.2,-0.2);

	this.mc_p2 = new lib.clipPointContact();
	this.mc_p2.name = "mc_p2";
	this.mc_p2.parent = this;
	this.mc_p2.setTransform(20.6,-62.4,1,1,0,0,0,-0.2,-0.2);

	this.mc_p1 = new lib.clipPointContact();
	this.mc_p1.name = "mc_p1";
	this.mc_p1.parent = this;
	this.mc_p1.setTransform(-0.8,-85.9,1,1,0,0,0,-0.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_p1},{t:this.mc_p2},{t:this.mc_p3},{t:this.mc_p4}]}).to({state:[{t:this.mc_p1},{t:this.mc_p2},{t:this.mc_p3},{t:this.mc_p4}]},1).wait(1));

	// protagoniste
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2F35").s().p("AC5G9InzAAIigAAIAAhGIM9AAIAABGgAC5A3IjlAAIAAhFIDlAAIEiAAIAABFgAiwimQgSgSgLgUQgTgiAAgrQAAhEAwgvQAvgwBEAAQBCAAAvAwQAwAvAABEQAAArgTAiQgLAUgSASQgvAvhCAAQhEAAgvgvg");
	this.shape.setTransform(5.5,-45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Aj5FFIAAAAIHzAAIAAAAgAj5D0IAAo4IBtAAQALAUASASQAvAvBDAAQBDAAAvgvQASgSALgUIBoAAIAAC+IjmAAIAABGIDmAAIAAE0g");
	this.shape_1.setTransform(-1,-33.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Ak6G9IAAAAIigAAIAAhHIM9AAIAABHIiqAAIAAAAgAk6FsIAAo4IBtAAQgTgjAAgrQAAhDAwgwQAvgvBEAAQBCAAAvAvQAwAwAABDQAAArgTAjIBoAAIAAC+IEiAAIAABFIkiAAIAAE1g");
	this.shape_2.setTransform(5.5,-45.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-42,-91.7,96.8,92.8);
p.frameBounds = [rect, rect];


(lib.clipInterface = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{acceuil:0,controles:1,"2F":2,victoire:3,mort:4});

	// FlashAICB
	this.btDebut_mc = new lib.clipBtDebut();
	this.btDebut_mc.name = "btDebut_mc";
	this.btDebut_mc.parent = this;
	this.btDebut_mc.setTransform(633.1,476.5,1.004,1.004,0,0,0,127.8,42.9);

	this.btControles_mc = new lib.clipBtControle();
	this.btControles_mc.name = "btControles_mc";
	this.btControles_mc.parent = this;
	this.btControles_mc.setTransform(629,353.1,1.004,1.004,0,0,0,75.2,24.8);

	this.btRetour_mc = new lib.clipBtX();
	this.btRetour_mc.name = "btRetour_mc";
	this.btRetour_mc.parent = this;
	this.btRetour_mc.setTransform(752,53.3,1,1,0,0,0,27,36.3);

	this.btPret_mc = new lib.clipBtPret();
	this.btPret_mc.name = "btPret_mc";
	this.btPret_mc.parent = this;
	this.btPret_mc.setTransform(613.9,383.2,1.004,1.004,0,0,0,127.8,42.9);

	this.btRecommencerVictoire_mc = new lib.clipBtRecommencer();
	this.btRecommencerVictoire_mc.name = "btRecommencerVictoire_mc";
	this.btRecommencerVictoire_mc.parent = this;
	this.btRecommencerVictoire_mc.setTransform(402.3,535.3,1.004,1.004,0,0,0,127.8,42.8);

	this.btRecommencerMort_mc = new lib.clipBtRecommencer();
	this.btRecommencerMort_mc.name = "btRecommencerMort_mc";
	this.btRecommencerMort_mc.parent = this;
	this.btRecommencerMort_mc.setTransform(417.3,517.2,1.004,1.004,0,0,0,127.8,42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btControles_mc},{t:this.btDebut_mc}]}).to({state:[{t:this.btRetour_mc}]},1).to({state:[{t:this.btPret_mc}]},1).to({state:[{t:this.btRecommencerVictoire_mc}]},1).to({state:[{t:this.btRecommencerMort_mc}]},1).wait(1));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#324D31").s().p("Ah5ARQhAg6B8hIQiiB6FvBpQjQgtg5g0g");
	this.shape.setTransform(224.4,355.3,1.004,1.004);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#324D31").s().p("AhckkQAMGHC6DCQkHibBBmug");
	this.shape_1.setTransform(309.4,361.7,1.004,1.004);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#324D31").s().p("AkNDiQhmhahyjdQC5EODyAwQDKAoClh3QBIg1AohFQAohGgEhFQgJijjhhCQC5gbBOD1QAJC1hoBzQheBpjBA2QgeADgdAAQi5AAiBhyg");
	this.shape_2.setTransform(313.4,401.8,1.004,1.004);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#86CC82").s().p("Ag1I9QhahbhViXQg1hehbhtQg0g9hTgeQgWgIgWgFQgRgEgugGQgngGgXgHQhKgUgZgzQgPgeAHgjQAHgjAYgYQATgSAagKQAagJAaACQAVABAaASIAsAdQAeAQAvAMIBRATQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIgRhXQgMhOAGg8QAHhJAhg7QAkg/AxgQQAygQA9AjQAkAUAvAjIBQA9QANAJARATIACAAIABgBIAYhvQAOhCAMgsQAOgwAtggQAvgiAvAMQAWAGASAQQARAPAJAWQASApgQAvQgIAagbAlQggAsgIAPQgdA3ADBfQAID/BmDSQAZA0A4BBQAaAdAmAFQAlAEAmgTQAjgTASghQASgigIgkQgFgWgfgZQgEgEgOAFQgPAEgCAGQgGARABAnQAAAFADAHIAHAMQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgkACgXgXQgYgXgBglQgBhFAygnQAygnBDARQBgAZA8BsQA6BngNBxQgNByhQBVQioC0jKAIIgTAAQjCAAihikgAinkFQgTACgOANQgOAOgEASQgEARAJANQAGAIAQAPQAHAIAHAMIALAWQAYAtAfAwQAwBJASgHQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQgcg0gThKQgOhEgEgNQgEgLgDgaQgEgdgIgLQgKgPgVAAIgIABgAkulNQgIAUAEARQAXAMARAhQAOAbADgBQABgBgCgZIgBgaQABgsgzgzQAFAUgGATgAjlnPQgEAKAJAlIAMAsQAFARANAHIANAGQACABAQAPQAUANAdgEQABgBAAAAQAAAAABgBQAAAAAAgBQgBAAAAgBQgmgmAAgpIAAgBIgkgUQgdgPgKgbIgBgBIgCABg");
	this.shape_3.setTransform(286.1,364.6,1.004,1.004);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjEkGIEdg2IBtJDIkeA2g");
	this.shape_4.setTransform(266.4,347.2,1.004,1.004);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Agth0QAHDIBVAUQghgEgOARQg0haAHiPg");
	this.shape_5.setTransform(405.4,485.5,1.004,1.004);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1).p("AAWgTIgrAm");
	this.shape_6.setTransform(419.9,459.3,1.004,1.004);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1).p("AgQgTIAhAm");
	this.shape_7.setTransform(412.4,459.3,1.004,1.004);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAPQgGgGAAgHQgBgIAFgHQAGgGAJgBQAHAAAGAFQAHAGAAAJQABAHgFAGQgHAHgIAAIgBABQgHAAgGgGg");
	this.shape_8.setTransform(421.2,463.3,1.004,1.004);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAUQgJAAgFgHQgGgGAAgIQABgIAHgGQAGgFAHAAQAJABAFAGQAGAHgBAHQAAAJgHAFQgFAGgHAAIgBgBg");
	this.shape_9.setTransform(410.9,463,1.004,1.004);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").p("AiZEAQgUAMgWhLQgXhOgBhfQgBhvAhhJQAohYBVgLQCFgRAfB5QAJAlACBBQADBBADAPQANA5AWAlQAWAmAiAXQAQALgKAFQgIADgdABQhTAFgbAMQgcANgOAYQgJAQgagDQgxgMgXgGQgrgKgeATg");
	this.shape_10.setTransform(421.6,473,1.004,1.004);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIEJIhIgSQgrgKgeATQgUAMgWhLQgXhOgBhfQgBhvAhhJQAohYBVgLQCFgRAfB5QAJAlACBBQADBBADAPQANA5AWAlQAWAmAiAXQAQALgKAFQgIADgdABQhTAFgbAMQgcANgOAYQgIAOgUAAIgHgBg");
	this.shape_11.setTransform(421.6,473,1.004,1.004);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AhEiuQAFCQAfBQQAiBZBFAQQgygGgUAaQhQiIALjVg");
	this.shape_12.setTransform(313.1,535.7,1.004,1.004);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1).p("AAhgcIhBA5");
	this.shape_13.setTransform(334.8,499.4,1.004,1.004);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1).p("AgZgcIAzA5");
	this.shape_14.setTransform(323.5,499.4,1.004,1.004);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAXQgJgIgBgNQgCgLAJgKQAIgJANgCQALgBAKAJQAKAIAAANQACAMgJAJQgJAKgMAAIgCABQgKAAgJgIg");
	this.shape_15.setTransform(336.7,505.4,1.004,1.004);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBAfQgNgBgIgKQgIgKAAgLQABgNAKgIQAKgIALAAQANABAIAKQAJAJgBAMQgBANgKAIQgIAIgMAAIgBAAg");
	this.shape_16.setTransform(321.3,505.1,1.004,1.004);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").p("AjmGAQgdASghhxQgih1gCiOQgDinAyhtQA8iEB/gQQDIgZAuC1QAOA3AEBhQADBiAGAXQAUBVAgA4QAhA4AzAkQAYAQgQAHQgLAEgsACQh9AHgoASQgpAUgWAkQgNAXgngEQgWgCghgJQgxgPgFgBQhAgPgtAdg");
	this.shape_17.setTransform(337.3,516.9,1.004,1.004);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMGNQgWgCghgJIg2gQQhAgPgtAdQgdASghhxQgih1gCiOQgDinAyhtQA8iEB/gQQDIgZAuC1QAOA3AEBhQADBiAGAXQAUBVAgA4QAhA4AzAkQAYAQgQAHQgLAEgsACQh9AHgoASQgpAUgWAkQgLAUgfAAIgKgBg");
	this.shape_18.setTransform(337.3,516.9,1.004,1.004);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#595959").s().p("AgKAgQgOgEgHgFQADgLAVgPQAHgGAggXQgXAVgHATQgFAVAPADQgEABgFAAQgFAAgIgBg");
	this.shape_19.setTransform(121.4,416.5,1.004,1.004);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.3).p("AAXgDQABAEgGAEQgGAFgKACQgIACgIgDQgHgCgBgFQgBgEAGgEQAHgFAJgCQAJgBAHACQAIACAAAFg");
	this.shape_20.setTransform(136.9,393.5,1.004,1.004);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ABAB99").s().p("AgOALQgHgCgBgFQgBgEAGgEQAHgFAJgCQAJgBAHACQAIACAAAFQABAEgGAEQgGAFgKACIgHABIgJgCg");
	this.shape_21.setTransform(136.9,393.5,1.004,1.004);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.3).p("AhAhAQAlACAlAgQAvAmAIA9");
	this.shape_22.setTransform(144.2,400.3,1.004,1.004);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(0.3).p("AgrhKQAQAHAcAlQApAzACA6");
	this.shape_23.setTransform(141,401.8,1.004,1.004);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.3).p("AAShhQgcAugGA1QgFAyARAu");
	this.shape_24.setTransform(134.2,403,1.004,1.004);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.3).p("AAthZQhAArgRAxQgMAkAMA3");
	this.shape_25.setTransform(130.5,402.8,1.004,1.004);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.3).p("Ah8BWQgDgBgCgEQgQg3AAgRQgCglAggYQATgQA/gYIAFgBQAngIA6AJQAEAAAGADQAXAOARAhQANAYAOAsQABADgDACQhTAsg9APQhIASg0gWg");
	this.shape_26.setTransform(138.1,403.2,1.004,1.004);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#595959").s().p("Ah8BWQgDgBgCgEQgQg3AAgRQgCglAggYQATgQA/gYIAFgBQAngIA6AJQAEAAAGADQAXAOARAhQANAYAOAsQABADgDACQhTAsg9APQgfAIgdAAQgjAAgdgMg");
	this.shape_27.setTransform(138.1,403.2,1.004,1.004);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.3).p("AhWAQIBMg8QASAFAaABQATABAggBQgwA4glASQgtAWgpgdQgDgCgBgEQAAgFAEgCg");
	this.shape_28.setTransform(126.3,416.2,1.004,1.004);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#262626").s().p("AhTAdQgDgCgBgEQAAgFAEgCIBMg8QASAFAaABQATABAggBQgwA4glASQgTAJgTAAQgYAAgYgQg");
	this.shape_29.setTransform(126,416.3,1.004,1.004);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCCCC").s().p("AgPAGQgBgJACgIQADgKALgBQAGAAAKADQgLgCgFABQgJACgDAIQgCAGABAKIACARQgEgJAAgIg");
	this.shape_30.setTransform(152.2,411.7,1.004,1.004);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AA0AcIgIgSQgEgKADgHIiEAAIAAgJICGAAIAKgMQAOgFAPAFIADAEQAGAcgGAYQgJADgJAAQgJAAgIgDg");
	this.shape_31.setTransform(145.5,411.8,1.004,1.004);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5A3825").s().p("Ah7AQIAcg+QASgjAZgZQCEAAAsAjQgjAPgbgGQADAWgYAaQgeAggCAHQgOgagUgCQgRgBgIAQQgIASANASQAPAVAnAJIgvAdQhPgrgGgwg");
	this.shape_32.setTransform(140,411.1,1.004,1.004);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AD8E63").s().p("AgBAhIgNhGIANAAQgDAwATAbIgQgFg");
	this.shape_33.setTransform(136.7,423.7,1.004,1.004);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EAC086").s().p("AgKBfQgigMgIgVQgFgdgehAQgTgpATgGQBkgjA6ARQAKAfACASQACAXgJAMQgFAFAEAHIAWAkQgGAGgEACIgKABQgGABAAAFIACAcQACANgEAGQgUAFgSAAQgXAAgUgIg");
	this.shape_34.setTransform(145.3,413.6,1.004,1.004);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EAC086").s().p("AAxBzQgsgDghgNQgEgBgBgFQgRhegDgmQgGhBAbgKIBXCTIAABMQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABIgDABIgBAAg");
	this.shape_35.setTransform(139.8,417.2,1.004,1.004);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#996400").s().p("AiHAfQA6hbALgZQADgIAKAAQBPAGChgYQhDAVgxAKQg+ANg7ADQgIApguAyQgaAcg4A4IAzhQg");
	this.shape_36.setTransform(119.9,454.3,1.004,1.004);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC8500").s().p("AjGC3QgWgNgIggQgCgIAEgJQA7iBBShgQCDhICAgJQAMgBAJAIQAyA0gWBBQgEANgOADQhDAUgxAKQg+ANg7ADQgIApguAyQgaAdg4A4QgGAHgIACIgFAAQgGAAgFgDg");
	this.shape_37.setTransform(118.1,447.6,1.004,1.004);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#996A02").ss(0.3).p("AgPgSQAJAYAZAK");
	this.shape_38.setTransform(93.6,468,1.004,1.004);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2E1E01").s().p("AgsBNQgEgCgBgEQgCgRASgZQgLAKgLAEQgEABgCgDQgDgCAAgEQADgPARgPIgIAEQgNAFgGgKQAAgIALgKQAHgHATgLQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBQASgdAWgMIAGgBQAaAIAUAWQAAAAABAAQAAABAAAAQAAABAAAAQABABAAABQABANgDAKQgDAMAIALQAGAHABAKQABAKgFAGQgFAGgHgFQgFgDgIgLQgFgKgBgNIgBgBQgBAAAAgBQAAAAAAABQAAAAgBAAQAAAAAAAAQgKAigIAQQgLAVgMAEQgNAAAFgTIAFgPQgMAZgPAMIgEABIgDgBg");
	this.shape_39.setTransform(93.9,469,1.004,1.004);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#996400").s().p("AgCAKQgcgHgWgQIAAgBIAZAOQAOAFAMACQALAEAPABIAcACIgQABQgVAAgSgFg");
	this.shape_40.setTransform(140,428.4,1.004,1.004);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CC8700").s().p("AhjCoQgIgBgBgJQgFhzgEg0QgHhbgTg/QgEgNACAFIALAaQAbBAAZAyQBfC7BJgHIA9gBQgBAJgGAFQgFAGgHABQg4AEg2AAQg7AAg6gFg");
	this.shape_41.setTransform(137,463.5,1.004,1.004);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").p("AAdALIgsAAIAAAAIgCANAgPALIALhGIAhAAAgXBAIAGgoIACgN");
	this.shape_42.setTransform(150.4,444.5,1.004,1.004);

	this.text = new cjs.Text("", "21px 'MonsterHunterStaggeredRotalic'");
	this.text.lineHeight = 25;
	this.text.lineWidth = 13;
	this.text.parent = this;
	this.text.setTransform(144.4,-19);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC8600").s().p("Ag6AmQAjgnABgwQAuAMAjgSIgMBvIgOABQgqAAgxgTg");
	this.shape_43.setTransform(147.6,465.7,1.004,1.004);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFA800").s().p("AhpEZQgJgBgBgJQgFhzgEg1QgGhbgTg+QgUhAArhOQAvhWBSgHQAZAAAeAQQAkAUAKACQAqALAJCbQAHCQgXDGQgBAJgFAFQgFAGgIABQg3AEg2AAQg7AAg5gFg");
	this.shape_44.setTransform(137.8,452.2,1.004,1.004);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgTAmQgDgDADgDQAbggAGgkQAAAAABgBQAAgBABAAQAAAAABAAQAAAAABAAQAEABgBADQgGAlgdAjIgDABIgCgBg");
	this.shape_45.setTransform(140,487.4,1.004,1.004);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#414241").s().p("AASgjQgGAlgdAhg");
	this.shape_46.setTransform(140,487.4,1.004,1.004);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#414241").s().p("AiWBuQAPgsAPhbQAOhWAJgaQAOgaBtAAQBvAAAOAaQg+CHgWAtQgvBbgcAdIggABQhaAAgUg2g");
	this.shape_47.setTransform(135.5,494.1,1.004,1.004);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#414241").s().p("Ah+DFQg4gTgMgyQAMgXAYgaQAdggAYgHQAshfByiYQBagcA0BAQgbBVhXByQhRBrgRBSQhYgMgVgIg");
	this.shape_48.setTransform(116.9,522.4,1.004,1.004);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(0.3).p("Ah+gcQBsBVCSgs");
	this.shape_49.setTransform(106.5,548,1.004,1.004);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AiDAXQAHgcAKgbQAMggAHgFQBPgjBFBDQADATATARQAQAOAeAQQAYAigaAFQgvAOgqAAQhYAAhJg7g");
	this.shape_50.setTransform(106.6,543.3,1.004,1.004);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2E1E01").s().p("AgbALQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgJQAAgIAGAAIAtAAQAIAAgBAGIABAKQAAAGgHABIgtABQgCAAgDgCg");
	this.shape_51.setTransform(191.8,428.7,1.004,1.004);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2E1E01").s().p("AgQALQgEgBAAgEIACgPQABgGAGACIAcAIQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAIgDAJQgCAFgGAAg");
	this.shape_52.setTransform(190.5,431.1,1.004,1.004);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2E1E01").s().p("AgsAQQATguAjgGQALgCAIAHIACADQAYAogRAEQgIAAgFgGQgLgMgCAFQgBACABAJQgDAKgKANg");
	this.shape_53.setTransform(185.1,424.9,1.004,1.004);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2E1E01").s().p("AgYAQIgEgJQgDgGAGgCIAqgSQAGgDADAGIADAKQADAGgGACIgqASIgDABQgDAAgCgFg");
	this.shape_54.setTransform(190.5,424.2,1.004,1.004);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2E1E01").s().p("AgeAQIgDgKQgCgGAGgCIAzgRQAHgCACAHIADAKQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgCADgCAAIgzARIgCAAQgFAAgCgEg");
	this.shape_55.setTransform(191.7,426.2,1.004,1.004);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCEE21").s().p("AAAAAIgMgnIAZBPIgNgog");
	this.shape_56.setTransform(205.6,411.8,1.004,1.004);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFBE17").s().p("AAKApIgZhPQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBABAAIACgBQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAYBPQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABIgDABIgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_57.setTransform(205.6,411.8,1.004,1.004);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FCEE21").s().p("AgQg1IARA1IAQA2g");
	this.shape_58.setTransform(200.8,412.1,1.004,1.004);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFBE17").s().p("AANA+Igkh3QAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAABgBIAEgBQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABIAlB4QABAAAAABQAAABgBAAQAAABgBAAQAAAAgBABIgFABIgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_59.setTransform(200.8,412.1,1.004,1.004);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FCEE21").s().p("AgCABIgShDQAMAdAKAlQAMAmAHAeQgKgZgNgqg");
	this.shape_60.setTransform(196.2,412.9,1.004,1.004);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFBE17").s().p("AASBOIgviXQgBgDAEgBIAFgCQADgBACAEIAuCWQABADgDABIgGACIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_61.setTransform(196.2,412.9,1.004,1.004);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAAAAIgDgLIAEALIADAMg");
	this.shape_62.setTransform(208.8,411.2,1.004,1.004);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FBB03B").s().p("AgBARIgJgdQgBgEADgBIAGgCQACgBABAEIAKAdQABAEgDABIgGACIgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAgBgBg");
	this.shape_63.setTransform(208.9,411.2,1.004,1.004);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CCCCCC").s().p("AhPAYQAkgGAtgKQAmgIAqgMIBPgYIgmARIgnAPQgkALgsALQglAIgsAGQgvAFgkAAIBRgNg");
	this.shape_64.setTransform(192.7,414.9,1.004,1.004);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AChgkQiXA8iqANg");
	this.shape_65.setTransform(192.7,414.9,1.004,1.004);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#80BAFF").s().p("ACZgWQiogeiIBvQB9i3CzBmg");
	this.shape_66.setTransform(192.5,412.5,1.004,1.004);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2E8EFF").s().p("AiiAsQA/hcBLgXQBRgZBiA3IAIAZQg9BQhYANQgSADgSAAQhCAAhKgkg");
	this.shape_67.setTransform(192.9,414.1,1.004,1.004);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFE517").s().p("AAAgUQAsgOAjAUQgaAGgWAPQADgTguALQgrAKgXASQAogiAmgNg");
	this.shape_68.setTransform(182.8,408,1.004,1.004);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFBE17").s().p("AgfAUQgVgCglAEQBjhXBQAtIhcA4QgEgOgZgCg");
	this.shape_69.setTransform(183.1,408.8,1.004,1.004);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFBE17").s().p("AgWBFQgJgGAJgLQAMhCgkg8IBdAQQgjBCAKAsQALAKgIAGQgIAGgQABQgOgBgJgFg");
	this.shape_70.setTransform(186.8,426.1,1.004,1.004);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2E1E01").s().p("AgUAoQgDAAgCgDQgNgUgGgkQAwgkAWAMQAYAMgHBEQgNAKgSAAQgOAAgSgHg");
	this.shape_71.setTransform(185.1,428.4,1.004,1.004);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2E1E01").s().p("AgHAsQgIgCgEgHIgUgmQgEgGACgIQADgIAGgDIAagOQAGgEAIACQAHADAEAHIAVAmQAEAHgDAHQgCAIgHADIgaAOQgEACgDABIgGgCg");
	this.shape_72.setTransform(187.1,428.7,1.004,1.004);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#996400").s().p("Ah4BDQgqgGAKgFIBugYQAAAEBjg3IBig1QhzBghrAxQgTAAgigGg");
	this.shape_73.setTransform(167.1,440.7,1.004,1.004);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CC8500").s().p("AjvBMQgMgEgEgLQgYhDAvgyQAKgKANACQBGALAwALQA/AOA3AWQAXgiA/gaQAkgPBLgdQAIgDAIACQAIACAFAHQAQAVgIAgQgBAJgHAGQhsBdhzA0QgbACgaAAQh2AAhiglg");
	this.shape_74.setTransform(157.3,436.9,1.004,1.004);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#232323").s().p("AhACiQgIgZAbgbQgnhGgRhHQgRhJAKg0IBqgPQAgAbAkBhQAjBgAMBkQg3AXg1AAQgiAAgjgKg");
	this.shape_75.setTransform(156.7,524.2,1.004,1.004);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#232323").s().p("AAlCnQgdhDhNh7QhGhtgSgTQgQgPB+gFQB8gEANAYQAgBPAQA8QAVBLABBFQgnAogwAAQgRAAgTgFg");
	this.shape_76.setTransform(141.6,495.5,1.004,1.004);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(0.3).p("AiAAIQB1A8CLhj");
	this.shape_77.setTransform(164.5,545.7,1.004,1.004);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AiBAyQgDgdABgdQACghAGgIQA1gkA7AhQAHAXAqAHQAhAFApgFQAhAYgWANQhNA2hQAAQgvAAgwgTg");
	this.shape_78.setTransform(164.2,542.4,1.004,1.004);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#999999").s().p("AAHgGQgMgRgXAAQAZgNAUAaQAVAYgOAPQgMgdgFgGg");
	this.shape_79.setTransform(167.8,559.1,1.004,1.004);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#999999").s().p("AAHgGQgMgRgXAAQAZgNAUAaQAVAYgOAPQgLgcgGgHg");
	this.shape_80.setTransform(105.6,559.1,1.004,1.004);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#594006").s().p("Am7A+IhGgLQgjgJgBgPQAEhGBCgSQiGBkDtARQCAAJD/gLQAnAACEAEQCDADBNgFQDrgRiRhkQAPAAAUANQAXAQANAYQAPAegsAWQgiASgaAAg");
	this.shape_81.setTransform(136.6,546.9,1.004,1.004);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_82.setTransform(137.3,548.6,1.004,1.004);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgIAAQAAgCACgDQAEgDACAAQAEAAADADQACADAAACQAAAJgJAAQgIAAAAgJg");
	this.shape_83.setTransform(140.8,546,1.004,1.004);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_84.setTransform(128.4,548.6,1.004,1.004);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgIAAQAAgCACgDQADgDADAAQAEAAACADQADADAAACQAAAJgJAAQgIAAAAgJg");
	this.shape_85.setTransform(132,546,1.004,1.004);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(0.3).p("Anfg8QhCARgEBGQABAQAjAIQAIACA+AJIOFAAQAaAAAigRQAsgXgPgdQgNgZgXgPQgUgNgPAAQgJAAgjAJQgkAIgJAAIsbAAQgbgLgKgDQgUgGgOADg");
	this.shape_86.setTransform(136.6,546.8,1.004,1.004);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#93690A").s().p("Am7A+IhGgLQgjgIgBgQQAEhGBCgRQAOgDAUAGIAlAOIMbAAQAJAAAkgIQAjgJAJAAQAPAAAUANQAXAPANAZQAPAdgsAXQgiARgaAAg");
	this.shape_87.setTransform(136.6,546.8,1.004,1.004);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#363636").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAOAAALAKQALAKAAAOQAAAOgLALQgLAKgOAAQgNAAgLgKg");
	this.shape_88.setTransform(164.8,562,1.004,1.004);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#1D1D1E").ss(0.3).p("AA+AAQAAgZgSgSQgTgSgZAAQgZAAgSASQgSASAAAZQAAAaASASQASASAZAAQAZAAATgSQASgSAAgag");
	this.shape_89.setTransform(165.7,561.1,1.004,1.004);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#595959").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSASgaAAQgZAAgSgSg");
	this.shape_90.setTransform(165.7,561.1,1.004,1.004);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(1.5).p("AgZASIA0gj");
	this.shape_91.setTransform(170.2,555.7,1.004,1.004);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1.5).p("AAAgaIAAA0");
	this.shape_92.setTransform(168.4,554,1.004,1.004);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#1D1D1E").ss(0.3).p("AA1AAQAAgVgPgPQgQgQgWAAQgVAAgQAQQgPAPAAAVQAAAWAPAQQAQAPAVAAQAWAAAQgPQAPgQAAgWg");
	this.shape_93.setTransform(171.9,554.9,1.004,1.004);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#595959").s().p("AglAmQgPgQAAgWQAAgVAPgQQAQgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgVAAgQgPg");
	this.shape_94.setTransform(171.9,554.9,1.004,1.004);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#363636").s().p("AgYAZQgLgLAAgOQAAgOALgKQALgKANAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgKAKgPAAQgNAAgLgKg");
	this.shape_95.setTransform(102.7,562,1.004,1.004);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#1D1D1E").ss(0.3).p("AA+AAQAAgZgSgSQgTgSgZAAQgZAAgSASQgSASAAAZQAAAaASASQASASAZAAQAZAAATgSQASgSAAgag");
	this.shape_96.setTransform(103.6,561.1,1.004,1.004);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#595959").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAZAAATASQASASAAAZQAAAagSASQgTASgZAAQgZAAgSgSg");
	this.shape_97.setTransform(103.6,561.1,1.004,1.004);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1.5).p("AgaASIA1gj");
	this.shape_98.setTransform(108,555.7,1.004,1.004);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(1.5).p("AAAgaIAAA0");
	this.shape_99.setTransform(106.2,554,1.004,1.004);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#1D1D1E").ss(0.3).p("AA1AAQAAgVgPgPQgQgQgWAAQgVAAgQAQQgPAPAAAVQAAAWAPAQQAQAPAVAAQAWAAAQgPQAPgQAAgWg");
	this.shape_100.setTransform(109.8,554.9,1.004,1.004);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#595959").s().p("AgkAmQgQgQAAgWQAAgVAQgQQAPgPAVAAQAWAAAPAPQAQAQAAAVQAAAWgQAQQgPAPgWAAQgVAAgPgPg");
	this.shape_101.setTransform(109.8,554.9,1.004,1.004);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgHAIQgDgEgBgEQABgCABgCQABgDADgCQADgBACgBQAFABADADQADADABAEQgBAEgDAEQgDADgFABQgEgBgDgDg");
	this.shape_102.setTransform(511.2,263.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AghAlIANgwIADgKIgBgCIgCgBQgDAAgEAFIgFAIIgIAAQAFgKAGgFQAEgGAFgCQAFgCAEAAQAHAAADAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAHAAACAEQACADAAAEQAAAGgDAEQgDAEgEAAQgFAAgDgEQgCgDgDAAQgCAAgEAEIgIAMIgIAQQgFAKgDAKIAAADg");
	this.shape_103.setTransform(506.2,260.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgSA7QgDgEAAgFQAAgFADgKIALgeIACgFIgBgCIgCAAQgDAAgDADIgFAIIgIAAQAFgKAIgHQAIgGAIAAQAFAAAEADQAFADAAAFQAAAEgCAFIgOAkIAAAHIAAACIABAAQADABADgDIAHgKIAHAAQgDAHgHAIQgIAIgKAAQgHAAgEgDgAAIgpQgDgEAAgEQAAgFADgDQAEgEAFAAQADAAADACIAEAEQABADAAADQAAAEgDAEQgDADgFAAQgFAAgEgDg");
	this.shape_104.setTransform(499.6,258.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgYAiQgIgDgEgIQgFgHABgJQgBgLAHgKQAGgLAMgGQALgHAMAAQALABAIAEQAIAEADAHQAFAHAAAJQgBAHgDAJQgDAIgHAGQgHAHgIAEQgJADgKABQgKAAgIgFgAgEgZQgFAEgDAIQgEAIgCAGQgBAIAAAFQAAAHADAFQAEAFAFAAQAHAAAFgFQAGgFADgHQADgIACgGIABgNQAAgIgDgEQgEgFgGAAQgHAAgEAFg");
	this.shape_105.setTransform(491.6,260.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_106.setTransform(481.7,260.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAEAhQgDgGAAgHQgGAIgHAFQgHAGgJAAQgFAAgDgEQgEgCgBgFQgCgFAAgGQAAgLAGgMQAGgNALgKQAKgIALgBQAGAAADACIAEAFIACAHIADgMIAUAAIgQA1IgCAHIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFABQgJgBgCgFgAgIgWQgGAHgEAMQgEAJAAAHQAAALAHAAQAEAAAFgEQAFgEADgIQAFgHACgGQACgIAAgGQAAgFgBgDQgCgDgEAAQgGABgGAHg");
	this.shape_107.setTransform(471.8,260.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAqAiQgEgDAAgFIACgKIAGgVIADgKQAAgDgCgCQgCgCgDAAQgIAAgIAJQgIAIgIAMQgHANgDANIgBAEIgVAAIANgrIACgJQAAgDgBgCQgCgCgDAAQgGAAgHAGQgGAFgGAIQgFAHgFAKIgIAUIgBADIgVAAIAPgyIADgKIgBgCIgCgBIgDABIgFAEIgEAJIgIAAQAEgKAHgHQAHgIALAAIAHACQADABACADQACADAAAEQAAAFgDAKIgDAIQAFgIAGgHQAGgHAGgEQAGgFAGgCQAFgDAFAAQAHAAAEAEQAFAEAAAGQAAAFgCAJIgDAIIAMgRQAHgIAIgFQAJgGAJAAQAGAAADADQAEACACADIABAGIAAAFIgCAIIgJAaIgBAHQAAABAAABQAAAAABAAQAAABAAAAQABAAAAAAQADAAAEgCQADgDAFgHIAIAAQgNAYgTAAQgHAAgDgEg");
	this.shape_108.setTransform(458.4,260.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAFAiQgEgFgBgJIgEgLIgTAVQgIAIgGABQgIgBAAgJQAAgIADgIIAKAAIgEAMQAAABAAABQABAAAAAAQAAABAAAAQABAAAAAAQACAAADgEIAWgXIgEgNIgCgGIgCgEIgDAAQgFgBgDANIgIAAQACgJAEgGQAEgGAEgDQAFgEAFAAQAHAAADAGQAEAEADAJIABAFIAOgQQAIgHAGgBQAGAAACAFIACAIIgCALIgIAAQACgHAAgEIgBgDQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBgBAAIgCABIgFAFIgQASIAHAVIADAHQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAQADAAACgEIAEgIIAIAAQgDAJgEAGQgEAGgFADQgFACgEABQgHgBgEgEg");
	this.shape_109.setTransform(440.4,260.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIAAgGIADgIIACgKQgJAQgJAKQgKALgMAAQgGAAgEgDQgDgEAAgFIACgMIAJgdIACgHIgBgDIgCgBQgFAAgIANIgIAAQAGgJAHgIQAIgHALAAQAFAAAEACQAEADAAAHQAAAFgBADIgHAXQgDAHAAAFIABADQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAQAEAAAGgGQAFgHAHgMQAHgOAHgUIAVAAIgQA1IgCAHIABACIACABQADAAADgEIAFgJIAJAAQgEAIgHAIQgHAIgLAAQgIAAgCgEg");
	this.shape_110.setTransform(430,260.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLAEQgKADgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAJQgMAHgOABQgKgBgIgFgAACgbQgEAFgEAGQgDAFgCAGIgDAHQARgDAJgGQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAEg");
	this.shape_111.setTransform(420.9,260.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgRA7QgEgEAAgFQAAgFADgKIAMgeIABgFIgBgCIgBAAQgEAAgDADIgGAIIgHAAQAFgKAIgHQAJgGAHAAQAGAAAEADQADADAAAFQAAAEgCAFIgNAkIgBAHIABACIABAAQACABADgDIAHgKIAIAAQgDAHgHAIQgHAIgKAAQgIAAgDgDgAAJgpQgEgEAAgEQAAgFAEgDQADgEAEAAQAEAAACACIAFAEQABADAAADQAAAEgEAEQgCADgGAAQgEAAgDgDg");
	this.shape_112.setTransform(414.1,258.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgYAlQgEgCgEgEQgDgEAAgHQAAgIAEgHQAFgFAIgGIAKgJIAEgIQgGAEgGAAQgFAAgEgDIgFgBQgEAAgBAFIgIAAQAGgUAMAAQAGAAAHAHIAEABIACABQAEAAABgEQABgFACAAQAAAAAAABQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABQAAAFgDAFIgGALIgJARQgDAGAAAFQAAAFADADQAEACAEAAQAIAAAHgGQAJgHAEgIQAFgIAAgHIgBgJIgBgIQAAgGACgCQADgCADgBQAEABACADQADAEAAAGQAAAKgFALQgFAKgIAKQgJAKgLAFQgKAHgKAAQgFgBgFgBg");
	this.shape_113.setTransform(406.1,260.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLAEQgKADgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAJQgMAHgOABQgKgBgIgFgAACgbQgEAFgEAGQgDAFgCAGIgDAHQARgDAJgGQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAEg");
	this.shape_114.setTransform(392.8,260.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgWA7QgEgEAAgFQAAgEADgKIAXhIIABgKQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAgBAAIgJgBIACgIIAIAAIALgBIAKgCIAGAAIgeBkIgCAKIABACIABAAQADAAADgDQAEgEACgGIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgDg");
	this.shape_115.setTransform(386.2,258.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgfAgQgHgGAAgGQAAgEADgDQADgDAEAAQAJAAABAMQAAAEADADQACADAHAAQAFAAADgDQAFgDAAgEIgCgGIgFgFIgLgLIgHgHQgCgFAAgEQAAgFADgEQACgFAHgEQAIgDAMgBQAIABAGABIAIAEQADACABACIABAGQAAADgDADQgCADgEAAQgDgBgCgBIgDgDIgCgGIgDgGQgCgBgFAAQgFAAgDACQgDADAAAEIABAEIADAFIAHAGQAIAHAEAEQAFAFAAAHQgBAGgDAFQgDAFgIADQgIAEgLAAQgRgBgHgGg");
	this.shape_116.setTransform(374.4,260.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_117.setTransform(365,260.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAEAhQgDgGAAgHQgGAIgHAFQgHAGgJAAQgFAAgDgEQgEgCgBgFQgCgFAAgGQAAgLAGgMQAGgNALgKQAKgIALgBQAGAAADACIAEAFIACAHIADgMIAUAAIgQA1IgCAHIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFABQgJgBgCgFgAgIgWQgGAHgEAMQgEAJAAAHQAAALAHAAQAEAAAFgEQAFgEADgIQAFgHACgGQACgIAAgGQAAgFgBgDQgCgDgEAAQgGABgGAHg");
	this.shape_118.setTransform(355.2,260.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAAAtIAAgBIAAgBIgIAJQgFAFgGACQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgHAJgFQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgBIgHAAIACgIIAOgBIAJAAIAHgCIAGAAIgfBlIgCAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQADAAADgDQAEgDADgGIAIAAIgFAKQgEAFgGAEQgGAEgIAAQgOAAAAgRgAgPAAQgHAHgEALQgEAKAAAJQAAAGACACQADADAEAAQAGAAAGgEQAFgFAEgHQAEgGADgIQACgHAAgGQAAgFgDgDQgDgEgDAAQgIAAgHAHg");
	this.shape_119.setTransform(345.6,258.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLAEQgKADgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAJQgMAHgOABQgKgBgIgFgAACgbQgEAFgEAGQgDAFgCAGIgDAHQARgDAJgGQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAEg");
	this.shape_120.setTransform(331.3,260.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AghAlIANgwIADgKIgBgCIgCgBQgDAAgEAFIgFAIIgIAAQAFgKAGgFQAFgGAEgCQAFgCAEAAQAHAAADAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAHAAACAEQACADAAAEQAAAGgDAEQgDAEgEAAQgFAAgDgEQgDgDgCAAQgCAAgEAEIgIAMIgIAQQgEAKgDAKIgBADg");
	this.shape_121.setTransform(323.4,260.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgVAuQgEgEAAgHQAAgFACgJIALgkIgPAAIACgIIAQAAIAJgbIATAAIgIAbIASAAIgDAIIgRAAIgNArIgBAHIABADIADABQAEAAAEgEIAHgLIAIAAQgFALgGAGQgGAGgFACQgFACgEAAQgIAAgEgFg");
	this.shape_122.setTransform(316.7,259.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgfA2QgHgGAAgLQAAgNAHgNQAIgMANgIQALgIAQAAQAMAAAFAEQAFAEAAAHQAAACgCAFQgCAFgGAFQgGAFgLAEQgKAEgQACIgCAAIgBAHQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAIgOAAQgKAAgIgFgAACgGQgEAEgEAFQgDAGgCAGIgDAHQARgDAJgHQAJgHAAgIQAAgCgCgDQgCgCgEAAQgGAAgFAEgAARgcIgZgeIAWAAIAKAeg");
	this.shape_123.setTransform(309.2,258.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_124.setTransform(299.7,260.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgfA2QgHgGAAgLQAAgNAHgNQAIgMANgIQALgIAQAAQAMAAAFAEQAFAEAAAHQAAACgCAFQgCAFgGAFQgGAFgLAEQgKAEgQACIgCAAIgBAHQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAIgOAAQgKAAgIgFgAACgGQgEAEgEAFQgDAGgCAGIgDAHQARgDAJgHQAJgHAAgIQAAgCgCgDQgCgCgEAAQgGAAgFAEgAABgcIAJgeIAXAAIgaAeg");
	this.shape_125.setTransform(290.3,258.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("Ag7A6IADgIIADAAIAJAAQADgBABgDIAEgJIAWhKIACgGIgBgDIgCgBQgCAAgDADQgEADgDAJIgIAAIAFgLQACgFAHgFQAFgEAIAAQAOAAAAAPQAOgPAPAAQAJAAAGAEQAFAFACAGQADAGAAAFQAAAJgEAJQgEAJgGAHQgGAHgJAEQgJAFgKAAQgHAAgFgDQgEgCgDgFIgKAfIgBAFQAAADADABIAKABIAFAAIgDAIgAAPgqQgGAFgEAJIgFAKIgBAKIgBAHQAAAFACAEQAEAEAFAAQAJAAAGgIQAHgHADgLQAEgLgBgIQABgGgDgEQgDgEgGAAQgFAAgGAFg");
	this.shape_126.setTransform(279.5,262.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgYAiQgIgDgEgIQgFgHABgJQgBgLAHgKQAGgLAMgHQALgFAMgBQALAAAHAFQAJAEADAHQAFAHAAAJQgBAHgDAJQgDAIgHAGQgHAHgIAEQgJADgKABQgKAAgIgFgAgEgZQgFAFgDAHQgEAIgCAGQgBAHAAAGQgBAHAEAGQAEAEAFAAQAHAAAFgEQAGgGADgHQADgHACgHIABgNQAAgIgDgEQgEgFgGAAQgHAAgEAFg");
	this.shape_127.setTransform(676.5,231.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAAAuIAAgCIAAgBIgIAJQgFAEgGADQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgHAJgFQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgBIgHAAIACgIIAOgBIAJAAIAHgCIAGAAIgfBlIgCAIQAAABAAAAQABABAAAAQAAABABAAQABAAAAAAQADAAADgDQAEgDADgGIAIAAIgFAKQgEAFgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgHAHgEALQgEAKAAAJQAAAGACADQADACAEAAQAGAAAGgEQAFgEAEgIQAEgGADgHQACgIAAgGQAAgFgDgDQgDgEgDAAQgIAAgHAHg");
	this.shape_128.setTransform(667.2,229.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLADQgKAEgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOAAQgKgBgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgCAJgHQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_129.setTransform(657.4,231.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AghAlIANgwIADgKIgBgCIgCgBQgDAAgDAFIgGAIIgIAAQAFgKAFgFQAGgGAEgCQAGgCADAAQAIAAACAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAHAAACAEQACADAAAEQAAAGgDAEQgDAEgFAAQgEAAgEgEQgBgDgCAAQgDAAgEAEIgJAMIgHAQQgFAKgDAKIgBADg");
	this.shape_130.setTransform(649.5,231.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("Ag4BPQgFgFAAgFQAAgEADgDQADgDAEAAQAFAAACADIACAHQABAGAEAAQAFAAADgFQADgFADgKIAXhPIgOAAIACgIIAPAAIABgGIAIgVQAEgJAIgHQAIgHAMAAQAFAAAEACQAEACADACQACADAAAEQAAAEgCADQgDADgEAAQgEAAgBgDQgCgCgCgFIgBgEIgDgBQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIgCAFIgLAjIAPAAIgCAIIgPAAIgPAxQgGATgEAMQgFALgJAIQgJAIgOAAQgJAAgGgEg");
	this.shape_131.setTransform(642.2,231.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgEADgIIAXhJIABgKQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAAAgBAAIgJgBIACgIIAIAAIALgBIAKgCIAGAAIgeBkIgCAKIABABIABABQADAAADgDQAEgFACgFIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_132.setTransform(637.6,229.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAEA9IADgIQAGAAAEgCQADgBACgFQACgEAAgIIAAgPIglAAIgMATQgFAHAAADQAAAGALAAIAEAAIgCAIIgrAAIADgIQAGgBAGgFQAGgGAHgKIBAhbIAPAAIgBBjIABAJQABACAEACIAJABIgDAIgAgHAKIAfAAIABgtg");
	this.shape_133.setTransform(628.1,229.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgQATQAOgDAFgGQAGgHAAgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgCgBQgEAAgDgDQgDgDAAgGQAAgFADgDQACgDAFAAQAHAAADAFQAEAGAAAHQAAAHgFAHQgEAIgJAGQgIAGgNABg");
	this.shape_134.setTransform(615.2,236.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLADQgKAEgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOAAQgKgBgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgCAJgHQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_135.setTransform(609.8,231.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgVAuQgEgEgBgHQABgFACgJIAMgkIgQAAIACgIIAQAAIAJgbIATAAIgIAbIARAAIgCAIIgRAAIgNArIgBAHIABADIADABQAEAAAEgEIAHgLIAIAAQgFALgGAGQgGAGgFACQgFACgEAAQgIAAgEgFg");
	this.shape_136.setTransform(603,230.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgVAuQgEgEAAgHQAAgFACgJIALgkIgPAAIACgIIAQAAIAJgbIATAAIgIAbIARAAIgCAIIgRAAIgNArIgBAHIABADIADABQAEAAAEgEIAHgLIAIAAQgFALgGAGQgGAGgFACQgFACgEAAQgIAAgEgFg");
	this.shape_137.setTransform(597,230.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLADQgKAEgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOAAQgKgBgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgCAJgHQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_138.setTransform(589.5,231.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgEADgIIAXhJIABgKQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAAAgBAAIgJgBIACgIIAIAAIALgBIAKgCIAGAAIgeBkIgCAKIABABIABABQADAAADgDQAEgFACgFIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_139.setTransform(582.9,229.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIAAgGIADgIIACgKQgJAQgJAKQgKALgMAAQgGAAgEgEQgDgDAAgFIACgMIAJgdIACgHIgBgDIgCgBQgFAAgIANIgIAAQAGgKAHgHQAIgHALAAQAFAAAEACQAEADAAAHQAAAFgBADIgHAXQgDAHAAAEIABAEQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAEAAAGgGQAFgHAHgMQAHgNAHgVIAVAAIgQA1IgCAHIABACIACABQADAAADgEIAFgJIAJAAQgEAIgHAIQgHAIgLAAQgIAAgCgEg");
	this.shape_140.setTransform(574.2,231.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgYAiQgHgDgFgIQgEgHAAgJQAAgLAGgKQAHgLALgHQALgFAMgBQALAAAHAFQAIAEAFAHQADAHAAAJQAAAHgDAJQgDAIgHAGQgGAHgJAEQgKADgJABQgKAAgIgFgAgEgZQgFAFgDAHQgEAIgCAGQgCAHAAAGQAAAHAEAGQADAEAHAAQAGAAAFgEQAFgGAEgHQAEgHABgHIACgNQgBgIgDgEQgEgFgGAAQgHAAgEAFg");
	this.shape_141.setTransform(564.3,231.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AghAlIAOgwIACgKIgBgCIgBgBQgEAAgEAFIgFAIIgIAAQAFgKAGgFQAFgGAFgCQAEgCAEAAQAHAAADAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAHAAACAEQACADAAAEQAAAGgDAEQgDAEgEAAQgFAAgDgEQgDgDgCAAQgCAAgEAEIgIAMIgIAQQgEAKgDAKIgBADg");
	this.shape_142.setTransform(556,231.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAEA2QgDgGAAgIQgGAJgHAFQgHAFgJAAQgFAAgDgDQgEgCgBgFQgCgFAAgGQAAgLAGgOQAGgNALgIQAKgJALAAQAGAAADACIAEAFIACAGIADgLIAUAAIgQA1IgCAHIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFAAQgJAAgCgFgAgIgBQgGAGgEALQgEALAAAHQAAALAHAAQAEAAAFgEQAFgFADgHQAFgHACgIQACgHAAgGQAAgEgBgDQgCgDgEAAQgGAAgGAIgAAQgcIgZgeIAWAAIAKAeg");
	this.shape_143.setTransform(542.8,229.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLADQgKAEgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOAAQgKgBgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgCAJgHQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_144.setTransform(529.2,231.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAIA6QgEgDAAgFIABgEIABgGIAGgWQADgHAAgEIgBgDIgCgCIgDgBQgHAAgHALQgJALgDAJIgJAWIgBAGIgVAAIAehhIABgIQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBIgHgBIgCAAIACgIQAVAAAHgCIAGAAIgWBKIALgOQADgEAIgFQAHgEAJAAQAHAAAEADQADADAAAFQAAADgDAKIgIAdIgCAHIABACIABABQAFAAAJgNIAJAAQgGAKgIAHQgIAHgKAAQgHAAgDgDg");
	this.shape_145.setTransform(519.8,229.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgfAgQgGgFAAgLQAAgMAHgMQAHgNAMgIQAMgJAPAAQAFAAAEACQAFABADADQADADABADIABAHQAAAFgDAEQgDADgFABQgEAAgCgCQgCgDAAgDIAAgFIABgEQAAgEgDgCIgFgBQgIAAgFAIQgHAJgEALQgEALAAAGQAAAJAEACQAEACAEAAQAHAAAGgEQAHgFAEgFIAKAAQgHAJgLAIQgLAHgNABQgMAAgHgHg");
	this.shape_146.setTransform(510.7,231.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_147.setTransform(501.2,231.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAEAhQgDgGAAgHQgGAIgHAFQgHAGgJAAQgFAAgDgDQgEgDgBgFQgCgFAAgFQAAgMAGgMQAGgNALgKQAKgIALgBQAGAAADADIAEAEIACAHIADgLIAUAAIgQA1IgCAGIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFABQgJgBgCgFgAgIgWQgGAHgEALQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgGQACgIAAgGQAAgEgBgDQgCgEgEAAQgGAAgGAIg");
	this.shape_148.setTransform(491.4,231.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgEADgIIAXhJIABgKQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAAAgBAAIgJgBIACgIIAIAAIALgBIAKgCIAGAAIgeBkIgCAKIABABIABABQADAAADgDQAEgFACgFIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_149.setTransform(484.1,229.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("Ag6A6IACgIIAEAAIAIAAQADgBABgDIADgJIAYhKIAAgGIAAgDIgCgBQgDAAgDADQgDADgDAJIgJAAIAFgLQAEgFAFgFQAGgEAJAAQANAAAAAPQAOgPAPAAQAJAAAFAEQAGAFADAGQABAGAAAFQAAAJgDAJQgEAJgGAHQgGAHgJAEQgJAFgJAAQgJAAgEgDQgDgCgEgFIgJAfIgCAFQABADADABIAJABIAEAAIgCAIgAAPgqQgGAFgEAJIgEAKIgCAKIgBAHQAAAFADAEQACAEAHAAQAHAAAHgIQAHgHADgLQAEgLAAgIQAAgGgDgEQgDgEgGAAQgGAAgFAFg");
	this.shape_150.setTransform(474.3,233.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLADQgKAEgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOAAQgKgBgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgCAJgHQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_151.setTransform(461.9,231.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgEADgIIAXhJIABgKQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAAAgBAAIgJgBIACgIIAIAAIALgBIAKgCIAGAAIgeBkIgCAKIABABIABABQADAAADgDQAEgFACgFIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_152.setTransform(455.3,229.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgfA2QgHgGAAgLQAAgNAHgNQAIgMANgIQALgIAQAAQAMAAAFAEQAFAEAAAHQAAACgCAFQgCAFgGAFQgGAFgLAEQgKAEgQACIgCAAIgBAHQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAIgOAAQgKAAgIgFgAACgGQgEAEgEAFQgDAGgCAGIgDAHQARgDAJgHQAJgHAAgIQAAgCgCgDQgCgCgEAAQgGAAgFAEgAARgcIgZgeIAWAAIAKAeg");
	this.shape_153.setTransform(447.9,229.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAAAuIAAgCIAAgBIgIAJQgFAEgGADQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgHAJgFQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgBIgHAAIACgIIAOgBIAJAAIAHgCIAGAAIgfBlIgCAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQADAAADgDQAEgDADgGIAIAAIgFAKQgEAFgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgHAHgEALQgEAKAAAJQAAAGACADQADACAEAAQAGAAAGgEQAFgEAEgIQAEgGADgHQACgIAAgGQAAgFgDgDQgDgEgDAAQgIAAgHAHg");
	this.shape_154.setTransform(439,229.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgRA6QgEgDAAgGQAAgEADgKIAMgfIABgEIgBgCIgBgBQgDABgEADIgGAJIgHAAQAFgLAIgGQAJgHAHAAQAGAAADADQAEADAAAFQAAADgCAFIgNAlIAAAHIAAABIABABQADABACgDIAHgKIAIAAQgDAHgHAIQgHAIgKAAQgIAAgDgEgAAJgpQgEgDAAgFQAAgFAEgEQADgDAFAAQADAAACACIAFAEQABADAAADQAAAFgEADQgDADgEAAQgFAAgDgDg");
	this.shape_155.setTransform(430.9,229.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("Ag4BPQgFgFAAgFQAAgEADgDQADgDAEAAQAFAAACADIACAHQABAGAEAAQAFAAADgFQADgFADgKIAXhPIgOAAIACgIIAPAAIABgGIAIgVQAEgJAIgHQAIgHAMAAQAFAAAEACQAEACADACQACADAAAEQAAAEgCADQgDADgEAAQgEAAgBgDQgCgCgCgFIgBgEIgDgBQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIgCAFIgLAjIAPAAIgCAIIgPAAIgPAxQgGATgEAMQgFALgJAIQgJAIgOAAQgJAAgGgEg");
	this.shape_156.setTransform(424.6,231.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AAEAhQgDgGAAgHQgGAIgHAFQgHAGgJAAQgFAAgDgDQgEgDgBgFQgCgFAAgFQAAgMAGgMQAGgNALgKQAKgIALgBQAGAAADADIAEAEIACAHIADgLIAUAAIgQA1IgCAGIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFABQgJgBgCgFgAgIgWQgGAHgEALQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgGQACgIAAgGQAAgEgBgDQgCgEgEAAQgGAAgGAIg");
	this.shape_157.setTransform(413.2,231.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgfAgQgHgGAAgGQAAgEADgDQADgDAEAAQAJAAABAMQAAAEADADQACADAHAAQAGAAADgDQADgDAAgEIgBgGIgFgFIgLgLIgHgHQgCgFgBgEQAAgFAEgEQACgFAIgEQAHgEAMAAQAIAAAFACIAJAEQADACABACIABAGQAAADgCADQgDACgEAAQgDAAgCgBIgDgDIgCgGIgDgGQgCgBgFAAQgEAAgEACQgDACAAAFIABAFIADAEIAHAGQAJAHADAEQAEAFABAHQAAAFgEAGQgDAFgIAEQgHADgLAAQgSgBgHgGg");
	this.shape_158.setTransform(404.2,231.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLADQgKAEgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOAAQgKgBgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgCAJgHQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_159.setTransform(391.5,231.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAAAuIAAgCIAAgBIgIAJQgFAEgGADQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgHAJgFQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgBIgHAAIACgIIAOgBIAJAAIAHgCIAGAAIgfBlIgCAIQAAABAAAAQABABAAAAQAAABABAAQABAAAAAAQADAAADgDQAEgDADgGIAIAAIgFAKQgEAFgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgHAHgEALQgEAKAAAJQAAAGACADQADACAEAAQAGAAAGgEQAFgEAEgIQAEgGADgHQACgIAAgGQAAgFgDgDQgDgEgDAAQgIAAgHAHg");
	this.shape_160.setTransform(382.5,229.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgVAuQgFgEAAgHQABgFADgJIAKgkIgQAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgSAAIgLArIgCAHIABADIADABQAEAAAEgEIAHgLIAJAAQgFALgHAGQgGAGgFACQgFACgFAAQgHAAgEgFg");
	this.shape_161.setTransform(369.8,230.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLADQgKAEgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOAAQgKgBgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgCAJgHQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_162.setTransform(362.3,231.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AghAlIAOgwIACgKIgBgCIgBgBQgEAAgEAFIgFAIIgIAAQAFgKAGgFQAEgGAGgCQAFgCAEAAQAGAAADAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAGAAADAEQACADAAAEQAAAGgDAEQgDAEgEAAQgFAAgDgEQgDgDgCAAQgCAAgEAEIgIAMIgIAQQgEAKgDAKIgBADg");
	this.shape_163.setTransform(349.8,231.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLADQgKAEgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOAAQgKgBgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgCAJgHQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_164.setTransform(341.6,231.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgfAgQgHgGAAgGQAAgEADgDQADgDAEAAQAJAAABAMQAAAEADADQACADAHAAQAGAAACgDQAEgDAAgEIgBgGIgFgFIgLgLIgHgHQgDgFAAgEQAAgFAEgEQACgFAIgEQAHgEAMAAQAIAAAGACIAIAEQADACABACIABAGQAAADgCADQgDACgEAAQgDAAgCgBIgDgDIgCgGIgDgGQgCgBgFAAQgEAAgEACQgDACAAAFIABAFIADAEIAHAGQAJAHADAEQAFAFAAAHQAAAFgEAGQgDAFgIAEQgHADgLAAQgSgBgHgGg");
	this.shape_165.setTransform(333.2,231.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAEAhQgDgGAAgHQgGAIgHAFQgHAGgJAAQgFAAgDgDQgEgDgBgFQgCgFAAgFQAAgMAGgMQAGgNALgKQAKgIALgBQAGAAADADIAEAEIACAHIADgLIAUAAIgQA1IgCAGIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFABQgJgBgCgFgAgIgWQgGAHgEALQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgGQACgIAAgGQAAgEgBgDQgCgEgEAAQgGAAgGAIg");
	this.shape_166.setTransform(324.5,231.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgEADgIIAXhJIABgKQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAAAgBAAIgJgBIACgIIAIAAIALgBIAKgCIAGAAIgeBkIgCAKIABABIABABQADAAADgDQAEgFACgFIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_167.setTransform(317.2,229.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgEADgIIAXhJIABgKQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAAAgBAAIgJgBIACgIIAIAAIALgBIAKgCIAGAAIgeBkIgCAKIABABIABABQADAAADgDQAEgFACgFIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_168.setTransform(307.1,229.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgRA6QgEgDAAgGQAAgEADgKIAMgfIABgEIgBgCIgBgBQgDABgEADIgFAJIgIAAQAFgLAIgGQAJgHAHAAQAGAAADADQAEADABAFQgBADgCAFIgNAlIAAAHIAAABIABABQADABADgDIAGgKIAIAAQgDAHgHAIQgHAIgKAAQgIAAgDgEgAAJgpQgEgDAAgFQAAgFAEgEQADgDAFAAQADAAACACIAFAEQABADAAADQAAAFgDADQgEADgEAAQgFAAgDgDg");
	this.shape_169.setTransform(301.4,229.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgfAgQgHgGAAgGQAAgEADgDQADgDAEAAQAJAAABAMQAAAEADADQACADAHAAQAGAAACgDQAEgDABgEIgCgGIgFgFIgLgLIgHgHQgDgFAAgEQABgFADgEQACgFAIgEQAHgEAMAAQAIAAAGACIAIAEQADACABACIABAGQAAADgCADQgDACgEAAQgDAAgCgBIgDgDIgCgGIgDgGQgCgBgFAAQgEAAgEACQgDACAAAFIABAFIADAEIAHAGQAJAHADAEQAFAFAAAHQgBAFgDAGQgDAFgIAEQgIADgLAAQgRgBgHgGg");
	this.shape_170.setTransform(294.2,231.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIAAgGIADgIIACgKQgJAQgJAKQgKALgMAAQgGAAgEgEQgDgDAAgFIACgMIAJgdIACgHIgBgDIgCgBQgFAAgIANIgIAAQAGgKAHgHQAIgHALAAQAFAAAEACQAEADAAAHQAAAFgBADIgHAXQgDAHAAAEIABAEQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAEAAAGgGQAFgHAHgMQAHgNAHgVIAVAAIgQA1IgCAHIABACIACABQADAAADgEIAFgJIAJAAQgEAIgHAIQgHAIgLAAQgIAAgCgEg");
	this.shape_171.setTransform(284.6,231.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("Ag4BPQgFgFAAgFQAAgEADgDQADgDAEAAQAFAAACADIACAHQABAGAEAAQAFAAADgFQADgFADgKIAXhPIgOAAIACgIIAPAAIABgGIAIgVQAEgJAIgHQAIgHAMAAQAFAAAEACQAEACADACQACADAAAEQAAAEgCADQgDADgEAAQgEAAgBgDQgCgCgCgFIgBgEIgDgBQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIgCAFIgLAjIAPAAIgCAIIgPAAIgPAxQgGATgEAMQgFALgJAIQgJAIgOAAQgJAAgGgEg");
	this.shape_172.setTransform(276.4,231.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_173.setTransform(264.5,231.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgYAiQgIgDgEgIQgEgHgBgJQABgLAGgKQAHgLALgHQALgFAMgBQALAAAHAFQAIAEAFAHQADAHAAAJQABAHgEAJQgDAIgHAGQgGAHgJAEQgKADgJABQgKAAgIgFgAgEgZQgFAFgEAHQgDAIgBAGQgDAHAAAGQAAAHAEAGQADAEAHAAQAGAAAFgEQAFgGAEgHQADgHACgHIACgNQgBgIgDgEQgEgFgGAAQgHAAgEAFg");
	this.shape_174.setTransform(254.4,231.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgfAgQgHgGAAgGQAAgEACgDQAEgDAEAAQAJAAABAMQABAEACADQACADAHAAQAGAAADgDQADgDAAgEIgBgGIgFgFIgLgLIgHgHQgCgFgBgEQAAgFADgEQADgFAHgEQAIgEAMAAQAIAAAFACIAJAEQADACABACIABAGQAAADgDADQgCACgEAAQgDAAgCgBIgCgDIgDgGIgDgGQgCgBgFAAQgEAAgEACQgDACAAAFIABAFIAEAEIAGAGQAJAHAEAEQADAFAAAHQABAFgEAGQgDAFgIAEQgIADgKAAQgSgBgHgGg");
	this.shape_175.setTransform(245.6,231.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLADQgKAEgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOAAQgKgBgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgCAJgHQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_176.setTransform(232.9,231.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAAAuIAAgCIAAgBIgIAJQgFAEgGADQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgHAJgFQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgBIgHAAIACgIIAOgBIAJAAIAHgCIAGAAIgfBlIgCAIQAAABAAAAQABABAAAAQAAABABAAQABAAAAAAQADAAADgDQAEgDADgGIAIAAIgFAKQgEAFgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgHAHgEALQgEAKAAAJQAAAGACADQADACAEAAQAGAAAGgEQAFgEAEgIQAEgGADgHQACgIAAgGQAAgFgDgDQgDgEgDAAQgIAAgHAHg");
	this.shape_177.setTransform(223.9,229.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgfA2QgHgGAAgLQAAgNAHgNQAIgMANgIQALgIAQAAQAMAAAFAEQAFAEAAAHQAAACgCAFQgCAFgGAFQgGAFgLAEQgKAEgQACIgCAAIgBAHQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAIgOAAQgKAAgIgFgAACgGQgEAEgEAFQgDAGgCAGIgDAHQARgDAJgHQAJgHAAgIQAAgCgCgDQgCgCgEAAQgGAAgFAEgAABgcIAJgeIAXAAIgaAeg");
	this.shape_178.setTransform(209.7,229.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AApAiQgDgDAAgFIABgKIAIgVIACgKQAAgDgCgCQgCgCgDAAQgIAAgIAJQgJAIgGAMQgIANgDANIgBAEIgVAAIAOgrIACgJQgBgDgBgCQgCgCgDAAQgGAAgGAGQgHAFgGAIQgFAHgGAKIgHAUIgBADIgVAAIAQgyIACgKIgBgCIgCgBIgDABIgEAEIgGAJIgHAAQAEgKAHgHQAHgIALAAIAHACQADABACADQACADAAAEQAAAFgDAKIgCAIQAEgIAHgHQAFgHAGgEQAGgFAFgCQAGgDAGAAQAGAAAFAEQAEAEAAAGQAAAFgDAJIgCAIIAMgRQAGgIAKgFQAIgGAKAAQAFAAAEADQADACACADIACAGIgBAFIgCAIIgJAaIgBAHQAAABAAABQAAAAABAAQAAABAAAAQABAAABAAQACAAADgCQAEgDAEgHIAJAAQgNAYgTAAQgHAAgEgEg");
	this.shape_179.setTransform(196.9,231.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AghAlIANgwIADgKIgBgCIgCgBQgDAAgDAFIgGAIIgIAAQAFgKAFgFQAGgGAEgCQAGgCADAAQAIAAACAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAHAAACAEQACADAAAEQAAAGgDAEQgDAEgFAAQgEAAgEgEQgBgDgCAAQgDAAgEAEIgJAMIgHAQQgFAKgDAKIgBADg");
	this.shape_180.setTransform(184.6,231.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AAEAhQgDgGAAgHQgGAIgHAFQgHAGgJAAQgFAAgDgDQgEgDgBgFQgCgFAAgFQAAgMAGgMQAGgNALgKQAKgIALgBQAGAAADADIAEAEIACAHIADgLIAUAAIgQA1IgCAGIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFABQgJgBgCgFgAgIgWQgGAHgEALQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgGQACgIAAgGQAAgEgBgDQgCgEgEAAQgGAAgGAIg");
	this.shape_181.setTransform(175.9,231.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgQATQAOgDAFgGQAGgHAAgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgCgBQgEAAgDgDQgDgDAAgGQAAgFADgDQACgDAFAAQAHAAADAFQAEAGAAAHQAAAHgFAHQgEAIgJAGQgIAGgNABg");
	this.shape_182.setTransform(162.8,236.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLADQgKAEgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOAAQgKgBgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgCAJgHQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_183.setTransform(157.5,231.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AghAlIANgwIADgKIgBgCIgCgBQgDAAgDAFIgGAIIgIAAQAFgKAFgFQAGgGAEgCQAGgCADAAQAIAAACAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAHAAACAEQACADAAAEQAAAGgDAEQgDAEgEAAQgFAAgEgEQgBgDgCAAQgDAAgEAEIgJAMIgHAQQgFAKgDAKIgBADg");
	this.shape_184.setTransform(149.5,231.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AAAAuIAAgCIAAgBIgIAJQgFAEgGADQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgHAJgFQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgBIgHAAIACgIIAOgBIAJAAIAHgCIAGAAIgfBlIgCAIQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQADAAADgDQAEgDADgGIAIAAIgFAKQgEAFgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgHAHgEALQgEAKAAAJQAAAGACADQADACAEAAQAGAAAGgEQAFgEAEgIQAEgGADgHQACgIAAgGQAAgFgDgDQgDgEgDAAQgIAAgHAHg");
	this.shape_185.setTransform(140.7,229.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AghAlIAOgwIACgKIgBgCIgBgBQgEAAgDAFIgGAIIgIAAQAFgKAGgFQAEgGAGgCQAEgCAFAAQAGAAADAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAGAAADAEQACADAAAEQAAAGgDAEQgDAEgFAAQgDAAgFgEQgCgDgCAAQgCAAgEAEIgJAMIgHAQQgEAKgDAKIgCADg");
	this.shape_186.setTransform(131.4,231.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMAAAFAFQAFAEAAAGQAAAEgCAFQgCAEgGAGQgGAEgLADQgKAEgQACIgCABIgBAGQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOAAQgKgBgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgCAJgHQAJgIAAgIQAAgDgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_187.setTransform(123.1,231.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("Ag6A6IACgIIADAAIAJAAQADgBABgDIADgJIAYhKIABgGIgBgDIgCgBQgCAAgDADQgDADgEAJIgJAAIAGgLQACgFAHgFQAFgEAIAAQAOAAAAAPQAOgPAPAAQAJAAAGAEQAFAFADAGQACAGAAAFQgBAJgDAJQgEAJgGAHQgHAHgIAEQgJAFgJAAQgJAAgEgDQgEgCgDgFIgKAfIgBAFQAAADAEABIAJABIAEAAIgCAIgAAPgqQgFAFgFAJIgFAKIgBAKIgBAHQAAAFACAEQAEAEAFAAQAJAAAGgIQAGgHAEgLQADgLAAgIQAAgGgCgEQgDgEgGAAQgFAAgGAFg");
	this.shape_188.setTransform(112.3,233.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AAEA2QgDgGAAgIQgGAJgHAFQgHAFgJAAQgFAAgDgDQgEgCgBgFQgCgFAAgGQAAgLAGgOQAGgNALgIQAKgJALAAQAGAAADACIAEAFIACAGIADgLIAUAAIgQA1IgCAHIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFAAQgJAAgCgFgAgIgBQgGAGgEALQgEALAAAHQAAALAHAAQAEAAAFgEQAFgFADgHQAFgHACgIQACgHAAgGQAAgEgBgDQgCgDgEAAQgGAAgGAIgAAQgcIgZgeIAWAAIAKAeg");
	this.shape_189.setTransform(684.7,201.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgfAgQgHgGAAgGQAAgEACgDQADgDAFAAQAJAAABALQABAFACADQACADAHAAQAFAAAEgDQADgDAAgFIgBgEIgFgGIgLgLIgHgHQgDgFABgEQAAgFACgEQADgFAHgEQAIgEAMAAQAIAAAFACIAJAEQADACABADIABAEQAAAEgDADQgCACgEAAQgDABgCgCIgCgDIgDgGIgDgGQgCgBgFAAQgEAAgEACQgDADAAADIABAGIAEAEIAGAGQAIAHAFAEQADAFAAAHQABAFgEAGQgDAFgIAEQgHACgMAAQgRAAgHgGg");
	this.shape_190.setTransform(671.2,203.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("Ag7A6IADgIIAEAAIAIAAQADgBABgDIAEgJIAWhKIABgGIAAgDIgCgBQgDAAgCADQgDADgEAJIgIAAIAEgLQAEgFAFgFQAGgEAJAAQANAAAAAPQAOgPAPAAQAJAAAFAEQAGAFACAGQACAGABAFQAAAJgEAJQgEAJgGAHQgGAHgJAEQgJAFgKAAQgHAAgFgDQgDgCgEgFIgKAfIAAAFQAAADACABIAKABIAFAAIgDAIgAAPgqQgGAFgEAJIgFAKIgBAKIgBAHQAAAFACAEQAEAEAGAAQAIAAAGgIQAHgHADgLQADgLAAgIQABgGgDgEQgDgEgFAAQgGAAgGAFg");
	this.shape_191.setTransform(660.6,205.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAqAiQgEgDAAgFIACgKIAGgVIADgKQAAgDgCgCQgCgCgDAAQgIAAgIAJQgJAIgHAMQgGANgEANIgBAEIgVAAIANgrIACgJQAAgDgBgCQgCgCgDAAQgGAAgHAGQgGAFgGAIQgFAHgFAKIgIAUIgBADIgVAAIAPgyIADgKIgBgCIgCgBIgDABIgFAEIgEAJIgIAAQAEgKAHgHQAHgIALAAIAHACQADABACADQACADAAAEQAAAFgDAKIgDAIQAFgIAGgHQAGgHAGgEQAGgFAGgCQAFgDAFAAQAHAAAEAEQAFAEAAAGQAAAFgCAJIgDAIIAMgRQAHgIAIgFQAJgGAJAAQAGAAADADQAEACACADIABAGIAAAFIgCAIIgJAaIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAQADAAAEgCQADgDAFgHIAIAAQgNAYgTAAQgHAAgDgEg");
	this.shape_192.setTransform(648.3,203.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMABAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAEgQACIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgDAJgGQAJgIAAgJQAAgCgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_193.setTransform(635.6,203.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgVAuQgFgEABgHQAAgFACgJIALgkIgQAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAHIABADIADABQAEAAAEgEIAHgLIAIAAQgEALgHAGQgGAGgFACQgFACgFAAQgHAAgEgFg");
	this.shape_194.setTransform(628.8,201.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMABAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAEgQACIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgDAJgGQAJgIAAgJQAAgCgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_195.setTransform(616.8,203.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AAAAuIAAgBIAAgCIgIAJQgFAEgGADQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgIAJgEQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgBIgHAAIACgJIAOAAIAJAAIAHgCIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQADAAADgDQAEgDADgGIAIAAIgFAJQgEAGgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgHAHgEALQgEALAAAIQAAAGACADQADACAEAAQAGAAAGgEQAFgEAEgIQAEgGADgHQACgIAAgGQAAgFgDgEQgDgDgDAAQgIAAgHAHg");
	this.shape_196.setTransform(607.8,200.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgfAgQgHgGAAgGQAAgEADgDQACgDAFAAQAJAAABALQAAAFADADQACADAHAAQAFAAADgDQAFgDAAgFIgCgEIgFgGIgLgLIgHgHQgCgFAAgEQAAgFACgEQADgFAHgEQAIgEAMAAQAIAAAGACIAIAEQADACABADIABAEQAAAEgDADQgCACgEAAQgDABgCgCIgCgDIgDgGIgDgGQgCgBgFAAQgFAAgDACQgDADAAADIABAGIADAEIAHAGQAIAHAFAEQADAFAAAHQAAAFgDAGQgDAFgIAEQgIACgLAAQgRAAgHgGg");
	this.shape_197.setTransform(593.6,203.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AAEAhQgDgGAAgHQgGAIgHAFQgHAGgJgBQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgMQAGgNALgKQAKgIALgBQAGABADACIAEAEIACAHIADgLIAUAAIgQA1IgCAGIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFAAQgJAAgCgFgAgIgWQgGAHgEALQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgEgEAAQgGAAgGAIg");
	this.shape_198.setTransform(584.9,203.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("Ag6A6IACgIIAEAAIAIAAQADgBABgDIADgJIAYhKIAAgGIAAgDIgCgBQgDAAgDADQgDADgDAJIgIAAIAEgLQAEgFAFgFQAGgEAJAAQANAAAAAPQAOgPAPAAQAJAAAFAEQAGAFACAGQACAGAAAFQABAJgEAJQgEAJgGAHQgHAHgIAEQgJAFgKAAQgIAAgEgDQgEgCgDgFIgJAfIgBAFQAAADADABIAJABIAEAAIgCAIgAAPgqQgGAFgEAJIgEAKIgCAKIgBAHQAAAFADAEQACAEAHAAQAHAAAHgIQAGgHAEgLQADgLABgIQgBgGgCgEQgDgEgFAAQgHAAgFAFg");
	this.shape_199.setTransform(573.4,205.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AAEAhQgDgGAAgHQgGAIgHAFQgHAGgJgBQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgMQAGgNALgKQAKgIALgBQAGABADACIAEAEIACAHIADgLIAUAAIgQA1IgCAGIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFAAQgJAAgCgFgAgIgWQgGAHgEALQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgEgEAAQgGAAgGAIg");
	this.shape_200.setTransform(560.5,203.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("Ag0A5QgFgDAAgEQAAgEADgDQAEgCAEAAIAFABIAFACQAIACADAAQAGAAAFgEQAFgDADgFQAGgNAAgWIAAgMIAAgNIgCgMIgDgFQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgHAAgBAQIgHAAQACgSAHgGQAHgFAHAAQAMAAAFAOQAFAOAAAUQAAAQgCAKIARgTIAGgLQADgGAAgGQAAgEgDgIQgDgHAAgEQAAgEACgDQACgCADAAQADAAADACQADACABADQACAEAAAFQAAAQgKARQgLARgQAQQgQAQgRAKQgRAJgNAAQgGAAgEgCg");
	this.shape_201.setTransform(544.4,205.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgQATQAOgDAFgGQAGgHAAgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAIgCgBQgEAAgDgDQgDgDAAgGQAAgEADgEQACgDAFAAQAHAAADAFQAEAGAAAHQAAAIgFAGQgEAIgJAGQgIAGgNABg");
	this.shape_202.setTransform(540.6,197.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_203.setTransform(531.5,203.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgEADgIIAXhJIABgKQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAAAgBgBIgJAAIACgJIAIAAIALAAIAKgCIAGAAIgeBkIgCAJIABACIABABQADAAADgDQAEgEACgGIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_204.setTransform(519.4,200.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgmA7IACgIQAGABADgEQADgDACgHIAWhIIABgIQAAgFgCgCIgIgBIADgJIAtAAIgCAJQgEgBgCACIgEAEIgDAIIgWBIIgCAIQAAAEAEACQADACAFAAIgCAIg");
	this.shape_205.setTransform(513.4,200.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F2F2F2").s().p("AgHAIQgDgDgBgFQABgCABgDQABgDADgBQADgCACAAQAEAAAEAEQADAEABADQgBAFgDADQgEADgEABQgEgBgDgDg");
	this.shape_206.setTransform(497.3,205.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEACgDQAEgDAEAAQAJAAABALQABAFACADQACADAHAAQAGAAADgDQADgDAAgFIgBgEIgFgGIgLgLIgHgHQgCgFgBgEQABgFACgEQADgFAHgEQAIgEAMAAQAIAAAFACIAJAEQADACABADIABAEQAAAEgDADQgCACgEAAQgDABgCgCIgCgDIgDgGIgDgGQgCgBgFAAQgEAAgEACQgDADAAADIABAGIAEAEIAGAGQAJAHAEAEQADAFAAAHQABAFgEAGQgDAFgIAEQgIACgKAAQgSAAgHgGg");
	this.shape_207.setTransform(491.3,203.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F2F2F2").s().p("AgVAuQgEgEgBgHQAAgFADgJIAMgkIgQAAIACgIIAQAAIAJgbIATAAIgIAbIARAAIgCAIIgRAAIgNArIgBAHIABADIADABQAEAAAEgEIAHgLIAIAAQgFALgGAGQgGAGgFACQgFACgEAAQgIAAgEgFg");
	this.shape_208.setTransform(484.6,201.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#F2F2F2").s().p("AgRA6QgEgDAAgGQAAgFADgIIALggIACgEIgBgCIgCgBQgCABgEADIgFAJIgIAAQAFgMAIgFQAJgHAHAAQAFAAAEADQAEADABAEQAAAEgDAFIgNAlIAAAGIAAACIABABQACAAAEgCIAGgKIAIAAQgDAHgHAIQgIAIgKAAQgHAAgDgEgAAJgpQgEgEAAgFQAAgEAEgEQADgDAFAAQADAAACACIAFAEQABADAAACQAAAFgDAEQgEADgEAAQgFAAgDgDg");
	this.shape_209.setTransform(478.8,200.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#F2F2F2").s().p("AAEAhQgDgGAAgHQgGAIgHAFQgHAGgJgBQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgMQAGgNALgKQAKgIALgBQAGABADACIAEAEIACAHIADgLIAUAAIgQA1IgCAGIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFAAQgJAAgCgFgAgIgWQgGAHgEALQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgEgEAAQgGAAgGAIg");
	this.shape_210.setTransform(471,203.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#F2F2F2").s().p("Ag4BPQgFgFAAgFQAAgEADgDQADgDAEAAQAFAAACADIACAHQABAGAEAAQAFAAADgFQADgFADgKIAXhPIgOAAIACgIIAPAAIABgGIAIgVQAEgJAIgHQAIgHAMAAQAFAAAEACQAEACADACQACADAAAEQAAAEgCADQgDADgEAAQgEAAgBgDQgCgCgCgFIgBgEIgDgBQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIgCAFIgLAjIAPAAIgCAIIgPAAIgPAxQgGATgEAMQgFALgJAIQgJAIgOAAQgJAAgGgEg");
	this.shape_211.setTransform(462.9,202.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#F2F2F2").s().p("AgfA2QgHgGAAgLQAAgNAHgNQAIgMANgIQALgIAQAAQAMAAAFAEQAFAEAAAHQAAACgCAFQgCAFgGAFQgGAFgLAEQgKAEgQACIgCAAIgBAHQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAIgOAAQgKAAgIgFgAACgGQgEAEgEAFQgDAGgCAGIgDAHQARgDAJgHQAJgHAAgIQAAgCgCgDQgCgCgEAAQgGAAgFAEgAABgcIAJgeIAXAAIgaAeg");
	this.shape_212.setTransform(456.6,201.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#F2F2F2").s().p("AAqAiQgEgDAAgFIABgKIAHgVIADgKQAAgDgCgCQgCgCgDAAQgHAAgJAJQgIAIgIAMQgGANgEANIgBAEIgVAAIANgrIACgJQABgDgCgCQgCgCgDAAQgGAAgHAGQgGAFgFAIQgHAHgEAKIgIAUIgBADIgVAAIAPgyIADgKIgBgCIgCgBIgDABIgFAEIgEAJIgIAAQADgKAIgHQAHgIALAAIAHACQADABACADQACADAAAEQAAAFgDAKIgCAIQAFgIAFgHQAGgHAGgEQAGgFAGgCQAFgDAGAAQAGAAAEAEQAFAEAAAGQAAAFgDAJIgCAIIAMgRQAHgIAIgFQAJgGAJAAQAGAAADADQAFACABADIABAGIAAAFIgCAIIgIAaIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAQACAAAEgCQADgDAEgHIAJAAQgNAYgTAAQgHAAgDgEg");
	this.shape_213.setTransform(443.8,203.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEADgDQACgDAFAAQAJAAABALQAAAFADADQACADAHAAQAFAAADgDQAFgDAAgFIgCgEIgFgGIgLgLIgHgHQgCgFAAgEQAAgFACgEQADgFAHgEQAIgEAMAAQAIAAAGACIAIAEQADACABADIABAEQAAAEgDADQgCACgEAAQgDABgCgCIgCgDIgDgGIgDgGQgCgBgFAAQgFAAgDACQgDADAAADIABAGIADAEIAHAGQAIAHAFAEQAEAFgBAHQAAAFgDAGQgDAFgIAEQgIACgLAAQgRAAgHgGg");
	this.shape_214.setTransform(426.7,203.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#F2F2F2").s().p("AghAlIAOgwIACgKIgBgCIgBgBQgEAAgDAFIgGAIIgIAAQAFgKAFgFQAGgGAFgCQAEgCAFAAQAGAAADAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAGAAADAEQACADAAAEQAAAGgDAEQgDAEgFAAQgDAAgFgEQgCgDgBAAQgDAAgEAEIgJAMIgHAQQgFAKgDAKIgBADg");
	this.shape_215.setTransform(418.8,203);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#F2F2F2").s().p("AAMAiQgDgEAAgFIAAgGIADgHIACgLQgJAQgJAKQgKALgMAAQgGAAgEgEQgDgDAAgFIACgMIAJgcIACgIIgBgDIgCgBQgFAAgIANIgIAAQAGgJAHgIQAIgHALAAQAFAAAEACQAEADAAAHQAAAFgBADIgHAXQgDAHAAAEIABAEQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAEAAAGgHQAFgGAHgMQAHgNAHgVIAVAAIgQA1IgCAHIABACIACABQADAAADgEIAFgJIAJAAQgEAIgHAIQgHAIgLAAQgIAAgCgEg");
	this.shape_216.setTransform(409.3,203.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMABAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAEgQACIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgDAJgGQAJgIAAgJQAAgCgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_217.setTransform(400.1,203.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#F2F2F2").s().p("AgWA6QgEgDAAgGQAAgEADgIIAXhJIABgKQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAAAgBgBIgJAAIACgJIAIAAIALAAIAKgCIAGAAIgeBkIgCAJIABACIABABQADAAADgDQAEgEACgGIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_218.setTransform(393.5,200.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#F2F2F2").s().p("AgVAuQgFgEABgHQAAgFACgJIALgkIgPAAIACgIIAQAAIAJgbIATAAIgIAbIASAAIgDAIIgRAAIgNArIgBAHIABADIADABQAEAAAEgEIAHgLIAIAAQgEALgHAGQgGAGgFACQgFACgEAAQgIAAgEgFg");
	this.shape_219.setTransform(383.2,201.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_220.setTransform(374.6,203.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMABAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAEgQACIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgDAJgGQAJgIAAgJQAAgCgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_221.setTransform(365.2,203.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#F2F2F2").s().p("AAAAuIAAgBIAAgCIgIAJQgFAEgGADQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgIAJgEQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgHQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgBIgHAAIACgJIAOAAIAJAAIAHgCIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQADAAADgDQAEgDADgGIAIAAIgFAJQgEAGgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgHAHgEALQgEALAAAIQAAAGACADQADACAEAAQAGAAAGgEQAFgEAEgIQAEgGADgHQACgIAAgGQAAgFgDgEQgDgDgDAAQgIAAgHAHg");
	this.shape_222.setTransform(356.3,200.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_223.setTransform(345.4,203.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMABAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAEgQACIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgDAJgGQAJgIAAgJQAAgCgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_224.setTransform(336.1,203.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#F2F2F2").s().p("AgVAuQgFgEAAgHQAAgFAEgJIALgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIARAAIgCAIIgSAAIgLArIgCAHIABADIADABQAEAAAEgEIAHgLIAJAAQgGALgGAGQgGAGgFACQgFACgFAAQgHAAgEgFg");
	this.shape_225.setTransform(329.2,201.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#F2F2F2").s().p("AgfA2QgHgGAAgLQAAgNAHgNQAIgMANgIQALgIAQAAQAMAAAFAEQAFAEAAAHQAAACgCAFQgCAFgGAFQgGAFgLAEQgKAEgQACIgCAAIgBAHQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAIgOAAQgKAAgIgFgAACgGQgEAEgEAFQgDAGgCAGIgDAHQARgDAJgHQAJgHAAgIQAAgCgCgDQgCgCgEAAQgGAAgFAEgAABgcIAJgeIAXAAIgaAeg");
	this.shape_226.setTransform(321.7,201.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#F2F2F2").s().p("AgVAuQgEgEAAgHQAAgFACgJIALgkIgPAAIACgIIAQAAIAJgbIATAAIgIAbIARAAIgCAIIgRAAIgNArIgBAHIABADIADABQAEAAAEgEIAHgLIAIAAQgFALgGAGQgGAGgFACQgFACgEAAQgIAAgEgFg");
	this.shape_227.setTransform(310.4,201.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMABAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAEgQACIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgDAJgGQAJgIAAgJQAAgCgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_228.setTransform(302.9,203.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMABAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAEgQACIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgDAJgGQAJgIAAgJQAAgCgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_229.setTransform(290,203.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#F2F2F2").s().p("AgfAgQgGgFAAgLQAAgMAHgMQAHgNAMgIQAMgJAPAAQAFAAAEACQAFABADADQADADABADIABAHQAAAFgDAEQgDADgFABQgEAAgCgCQgCgDAAgDIAAgFIABgEQAAgEgDgCIgFgBQgIAAgFAIQgHAJgEALQgEALAAAGQAAAJAEACQAEACAEAAQAHAAAGgEQAHgEAEgGIAKAAQgHAJgLAIQgLAHgNAAQgMABgHgHg");
	this.shape_230.setTransform(281.7,203.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_231.setTransform(272.3,203.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#F2F2F2").s().p("AAEAhQgDgGAAgHQgGAIgHAFQgHAGgJgBQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgMQAGgNALgKQAKgIALgBQAGABADACIAEAEIACAHIADgLIAUAAIgQA1IgCAGIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFAAQgJAAgCgFgAgIgWQgGAHgEALQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgEgEAAQgGAAgGAIg");
	this.shape_232.setTransform(262.4,203.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEACgDQADgDAFAAQAJAAABALQAAAFADADQACADAHAAQAFAAADgDQAFgDAAgFIgCgEIgFgGIgLgLIgHgHQgCgFAAgEQAAgFADgEQACgFAHgEQAIgEAMAAQAIAAAGACIAIAEQADACABADIABAEQAAAEgDADQgCACgEAAQgDABgCgCIgCgDIgDgGIgDgGQgCgBgFAAQgFAAgDACQgDADAAADIABAGIADAEIAHAGQAIAHAFAEQADAFAAAHQAAAFgDAGQgDAFgIAEQgIACgLAAQgRAAgHgGg");
	this.shape_233.setTransform(253.4,203.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEADgDQADgDAEAAQAJAAABALQAAAFADADQACADAHAAQAFAAADgDQAFgDAAgFIgCgEIgFgGIgLgLIgHgHQgCgFAAgEQAAgFADgEQACgFAHgEQAIgEAMAAQAIAAAGACIAIAEQADACABADIABAEQAAAEgDADQgCACgEAAQgDABgCgCIgDgDIgCgGIgDgGQgCgBgFAAQgFAAgDACQgDADAAADIABAGIADAEIAHAGQAIAHAEAEQAFAFAAAHQgBAFgDAGQgDAFgIAEQgIACgLAAQgRAAgHgGg");
	this.shape_234.setTransform(245.2,203.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#F2F2F2").s().p("AgRA6QgEgDAAgGQAAgFADgIIAMggIABgEIgBgCIgBgBQgEABgDADIgGAJIgHAAQAFgMAIgFQAJgHAHAAQAGAAAEADQADADAAAEQAAAEgCAFIgNAlIgBAGIABACIABABQACAAADgCIAHgKIAIAAQgDAHgHAIQgHAIgKAAQgIAAgDgEgAAJgpQgEgEAAgFQAAgEAEgEQADgDAEAAQAEAAACACIAFAEQABADAAACQAAAFgEAEQgCADgGAAQgEAAgDgDg");
	this.shape_235.setTransform(238.6,200.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#F2F2F2").s().p("AAMAiQgDgEAAgFIAAgGIADgHIACgLQgJAQgJAKQgKALgMAAQgGAAgEgEQgDgDAAgFIACgMIAJgcIACgIIgBgDIgCgBQgFAAgIANIgIAAQAGgJAHgIQAIgHALAAQAFAAAEACQAEADAAAHQAAAFgBADIgHAXQgDAHAAAEIABAEQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAEAAAGgHQAFgGAHgMQAHgNAHgVIAVAAIgQA1IgCAHIABACIACABQADAAADgEIAFgJIAJAAQgEAIgHAIQgHAIgLAAQgIAAgCgEg");
	this.shape_236.setTransform(230.1,203.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#F2F2F2").s().p("Ag6A6IACgIIADAAIAJAAQADgBABgDIADgJIAYhKIABgGIgBgDIgCgBQgCAAgDADQgDADgEAJIgJAAIAGgLQACgFAHgFQAFgEAIAAQAOAAAAAPQAOgPAPAAQAJAAAGAEQAFAFADAGQACAGAAAFQgBAJgDAJQgEAJgGAHQgHAHgIAEQgJAFgJAAQgJAAgEgDQgEgCgDgFIgKAfIgBAFQAAADAEABIAJABIAEAAIgCAIgAAPgqQgFAFgFAJIgFAKIgBAKIgBAHQAAAFACAEQAEAEAFAAQAJAAAGgIQAGgHAEgLQADgLAAgIQAAgGgCgEQgDgEgGAAQgFAAgGAFg");
	this.shape_237.setTransform(218.5,205.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_238.setTransform(205,203.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMABAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAEgQACIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgDAJgGQAJgIAAgJQAAgCgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_239.setTransform(195.7,203.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#F2F2F2").s().p("AgVAuQgFgEAAgHQAAgFAEgJIALgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIARAAIgCAIIgSAAIgLArIgCAHIABADIADABQAEAAAEgEIAHgLIAJAAQgGALgGAGQgGAGgFACQgFACgFAAQgHAAgEgFg");
	this.shape_240.setTransform(184.3,201.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_241.setTransform(175.7,203.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgMANgJQALgHAQgBQAMABAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAEgQACIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAHQARgDAJgGQAJgIAAgJQAAgCgCgDQgCgCgEAAQgGAAgFAFg");
	this.shape_242.setTransform(166.4,203.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_243.setTransform(156.9,203.1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#F2F2F2").s().p("AgbA6QgJgBgIgFQgIgEAAgJQAAgEACgDQACgEAEgCIAFgBIADAAIABACIgCADQgDAEAAADQAAAJAJADQAKADALAAQALAAAHgEQAHgDAAgFQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgFgDIgPgFIgPgGQgGgCgCgEQgDgDAAgGQAAgGAHgFQAFgEAKgCQgIgCgDgGQgDgFAAgGQAAgHAFgHQADgGAJgEQAHgEAKAAQAPAAAHAHIAGgFQADgCAFAAQADAAADACQACABAAAEQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgDgBQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABIACAFIABAHIgCAJQgBAEgEAFQgEAEgIADQgIADgMAAQgKAAgDACQgEACAAACQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAFACIAJADIAMAEQAZAHAAAPQgBAHgEAFQgEAGgLAEQgLADgQAAIgQgBgAABgvQgCAFgDAGQgCAHAAAFQAAAFACADQAEADACAAQAJAAAGgKQAEgKAAgIIgBgFQgBgDgCgBQgDgCgDAAQgGAAgEAFg");
	this.shape_244.setTransform(146.7,205.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#F2F2F2").s().p("AAEAhQgDgGAAgHQgGAIgHAFQgHAGgJgBQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgMQAGgNALgKQAKgIALgBQAGABADACIAEAEIACAHIADgLIAUAAIgQA1IgCAGIABACIABABQAGAAAGgMIAJAAIgGAJIgHAIIgIAFQgDABgFAAQgJAAgCgFgAgIgWQgGAHgEALQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgEgEAAQgGAAgGAIg");
	this.shape_245.setTransform(138.2,203.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#F2F2F2").s().p("AgbA6QgJgBgIgFQgHgEgBgJQAAgEACgDQADgEACgCIAGgBIADAAIABACIgCADQgDAEAAADQAAAJAKADQAJADALAAQALAAAHgEQAHgDAAgFQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgGgDIgPgFIgOgGQgHgCgCgEQgDgDAAgGQAAgGAHgFQAFgEAKgCQgIgCgDgGQgDgFAAgGQAAgHAFgHQADgGAIgEQAJgEAJAAQAPAAAIAHIAFgFQADgCAFAAQAEAAACACQACABAAAEQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgDgBQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABIADAFIABAHIgCAJQgBAEgEAFQgEAEgIADQgIADgMAAQgKAAgDACQgEACAAACQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAIAFACIAJADIAMAEQAYAHAAAPQAAAHgEAFQgEAGgLAEQgKADgRAAIgQgBgAABgvQgCAFgCAGQgDAHAAAFQAAAFADADQADADACAAQAKAAAFgKQAEgKAAgIIgBgFQgBgDgCgBQgDgCgDAAQgFAAgFAFg");
	this.shape_246.setTransform(128.3,205.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEACgDQADgDAFAAQAJAAABALQABAFACADQACADAHAAQAFAAAEgDQADgDAAgFIgBgEIgFgGIgLgLIgHgHQgDgFABgEQAAgFACgEQADgFAHgEQAIgEAMAAQAIAAAFACIAJAEQADACABADIABAEQAAAEgDADQgCACgEAAQgDABgCgCIgCgDIgDgGIgDgGQgCgBgFAAQgEAAgEACQgDADAAADIABAGIAEAEIAGAGQAIAHAFAEQADAFAAAHQABAFgEAGQgDAFgIAEQgHACgMAAQgRAAgHgGg");
	this.shape_247.setTransform(115.9,203.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#F2F2F2").s().p("AgWA6QgEgDAAgGQAAgEADgIIAXhJIABgKQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAAAgBgBIgJAAIACgJIAIAAIALAAIAKgCIAGAAIgeBkIgCAJIABACIABABQADAAADgDQAEgEACgGIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_248.setTransform(109.5,200.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#F2F2F2").s().p("AgRA6QgEgDAAgGQAAgFADgIIAMggIABgEIgBgCIgBgBQgDABgEADIgGAJIgHAAQAFgMAIgFQAJgHAHAAQAGAAADADQAEADAAAEQAAAEgCAFIgNAlIAAAGIAAACIABABQADAAACgCIAHgKIAIAAQgDAHgHAIQgHAIgKAAQgIAAgDgEgAAJgpQgEgEAAgFQAAgEAEgEQADgDAFAAQADAAACACIAFAEQABADAAACQAAAFgEAEQgDADgEAAQgFAAgDgDg");
	this.shape_249.setTransform(103.7,200.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#F2F2F2").s().p("AgQATQAOgDAFgHQAGgGAAgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgCgBQgEAAgDgDQgDgDAAgGQAAgEADgEQACgDAFAAQAHAAADAGQAEAFAAAHQAAAHgFAHQgEAIgJAGQgIAGgNABg");
	this.shape_250.setTransform(691.3,178.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#F2F2F2").s().p("AghAlIAOgwIACgKIgBgCIgBgBQgEAAgEAFIgFAIIgIAAQAFgKAGgFQAFgGAFgCQAFgCAEAAQAGAAADAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAGAAADAEQACADAAAEQAAAGgDAEQgDAEgEAAQgFAAgDgEQgCgDgDAAQgCAAgEAEIgIAMIgIAQQgEAKgDAKIgBADg");
	this.shape_251.setTransform(686.9,174.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#F2F2F2").s().p("AAMAiQgDgEAAgFIAAgFIADgIIACgKQgJAPgJAKQgKALgMAAQgGAAgEgEQgDgDAAgFIACgMIAJgcIACgIIgBgCIgCgCQgFAAgIANIgIAAQAGgJAHgIQAIgHALAAQAFAAAEACQAEADAAAIQAAAEgBADIgHAXQgDAIAAADIABAEQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAEAAAGgHQAFgGAHgMQAHgNAHgVIAVAAIgQA1IgCAHIABACIACABQADAAADgEIAFgJIAJAAQgEAIgHAIQgHAIgLAAQgIAAgCgEg");
	this.shape_252.setTransform(677.3,174.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#F2F2F2").s().p("AgYAjQgHgFgFgHQgFgHAAgJQAAgLAHgLQAGgKAMgHQALgFAMAAQALgBAIAFQAHAEAEAHQAFAHAAAIQAAAIgEAJQgDAIgHAHQgHAGgJAEQgIADgKAAQgKAAgIgDgAgEgZQgFAFgDAHQgEAHgCAHQgBAHAAAGQgBAHAEAGQAEAEAFAAQAHAAAFgEQAFgGAEgHQADgIACgGIABgNQABgIgEgEQgDgFgHAAQgHAAgEAFg");
	this.shape_253.setTransform(667.4,174.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#F2F2F2").s().p("AgnBPQgFgEgBgGQAAgFAEgCQACgDAEAAQAGAAACADQABAEAAAEQAAAFAFAAQAEAAADgFIAFgPIAUhDIADgJQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBAAQgGAAgGAMIgIAAQAHgMAHgGQAIgGAJAAQAGAAAEADQADAEAAAEIgCAJIgPAwIgGASQgFAJgEAHQgFAHgHAFQgHAEgKAAQgHAAgGgEgAAag+QgEgDABgFQgBgFAEgDQADgEAFAAQADAAADACQADACABACQABADAAADQABAFgEADQgEADgEAAQgFAAgDgDg");
	this.shape_254.setTransform(658.6,174.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgNANgIQALgHAQAAQAMAAAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAFgQABIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAGQARgCAJgGQAJgIAAgJQAAgCgCgCQgCgDgEAAQgGAAgFAFg");
	this.shape_255.setTransform(648.5,174.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#F2F2F2").s().p("AAMAiQgDgEAAgFIAAgFIADgIIACgKQgJAPgJAKQgKALgMAAQgGAAgEgEQgDgDAAgFIACgMIAJgcIACgIIgBgCIgCgCQgFAAgIANIgIAAQAGgJAHgIQAIgHALAAQAFAAAEACQAEADAAAIQAAAEgBADIgHAXQgDAIAAADIABAEQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAEAAAGgHQAFgGAHgMQAHgNAHgVIAVAAIgQA1IgCAHIABACIACABQADAAADgEIAFgJIAJAAQgEAIgHAIQgHAIgLAAQgIAAgCgEg");
	this.shape_256.setTransform(638.8,174.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#F2F2F2").s().p("AgbA6IADgIIAFAAIAJAAQADgBABgDIAEgJIAIggQgOAOgOAAQgHAAgGgDQgFgEgDgFQgDgGAAgGQAAgLAHgNQAGgMAMgIQALgIALAAQAKAAAFAFQAFAFACAGIAGgHIAGgJIAMAAIgfBhIgBAFQAAABAAABQABAAAAABQAAAAABABQAAAAABAAIAKABIADAAIgDAIgAgIgtQgFAEgEAHQgEAHgCAHQgCAHAAAFQAAAGAEADQADAEAGAAQANAAAIgOQAEgGABgFIACgKQAAgIgCgGQgDgFgIAAQgFAAgGAEg");
	this.shape_257.setTransform(628.8,176.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#F2F2F2").s().p("AAEAhQgDgFAAgJQgGAJgHAGQgHAEgJAAQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgNQAGgNALgIQAKgJALAAQAGAAADACIAEAEIACAGIADgKIAUAAIgQA1IgCAHIABABIABABQAGAAAGgMIAJAAIgGAKIgHAHIgIAFQgDACgFgBQgJAAgCgFgAgIgWQgGAIgEAKQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgDgEgBQgGAAgGAIg");
	this.shape_258.setTransform(619.1,174.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#F2F2F2").s().p("AAIA6QgEgDAAgFIABgEIABgGIAHgWIACgLIgBgDIgBgCIgEgBQgGAAgIALQgJALgEAJIgIAWIgCAGIgUAAIAdhhIACgIQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAIgHgBIgCAAIACgIQAVAAAHgCIAGAAIgVBKIAKgOQAEgEAHgFQAHgEAJAAQAHAAAEADQADADAAAFQAAADgDAKIgJAdIgBAHIAAACIACABQAGAAAIgNIAJAAQgGAKgIAHQgIAHgKAAQgHAAgDgDg");
	this.shape_259.setTransform(609,172);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#F2F2F2").s().p("AgkA4QgKgGgGgLQgGgLAAgNQAAgPAGgNQAGgOALgLQAKgLANgGQAMgGALAAQAJAAAHADQAHADADADIAHAHQAEgFADgIIAIAAIgJApIgIAAIAAgBIAAgCQAAgNgFgIQgFgHgGgCQgGgCgFAAQgKAAgIAHQgJAHgHAMQgHAMgDANQgEANAAAMQAAAIADAGQACAHAFAEQAFAEAIAAQAHAAAIgEQAIgEAHgIQAHgHAFgLIAIAAIgMAoIgHAAIAAgGIAAgGQgGAGgJAFQgIAEgKAAQgNAAgLgGg");
	this.shape_260.setTransform(598.9,172.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#F2F2F2").s().p("AgHAIQgDgDgBgFQABgCABgDQACgDACgBQACgBADAAQAEAAAEADQAEAEAAADQAAAFgEADQgEADgEAAQgEAAgDgDg");
	this.shape_261.setTransform(584,177.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEACgDQADgDAFAAQAJAAABALQABAFACADQACADAHAAQAFAAAEgDQADgDABgFIgCgEIgFgGIgLgLIgHgHQgDgFABgEQAAgEACgFQADgFAHgEQAIgDAMAAQAIAAAFABIAJADQADADABADIABAEQAAAEgDADQgCACgEAAQgDABgCgCIgCgDIgDgHIgDgFQgCgBgFAAQgEAAgEADQgDACAAADIABAGIAEAEIAGAGQAIAHAFAEQADAFAAAHQABAGgEAFQgDAFgIAEQgHACgMAAQgRAAgHgGg");
	this.shape_262.setTransform(578.1,174.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#F2F2F2").s().p("AgVAuQgEgEAAgHQAAgFACgJIALgkIgPAAIACgIIAQAAIAJgbIATAAIgIAbIASAAIgDAIIgRAAIgNArIgBAHIABADIADABQAEAAAEgEIAHgLIAIAAQgFALgGAGQgGAGgFACQgFACgEAAQgIAAgEgFg");
	this.shape_263.setTransform(571.4,173.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_264.setTransform(562.8,174.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#F2F2F2").s().p("AAEAhQgDgFAAgJQgGAJgHAGQgHAEgJAAQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgNQAGgNALgIQAKgJALAAQAGAAADACIAEAEIACAGIADgKIAUAAIgQA1IgCAHIABABIABABQAGAAAGgMIAJAAIgGAKIgHAHIgIAFQgDACgFgBQgJAAgCgFgAgIgWQgGAIgEAKQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgDgEgBQgGAAgGAIg");
	this.shape_265.setTransform(552.9,174.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#F2F2F2").s().p("AgYAlQgEgCgEgFQgDgEAAgGQAAgIAEgHQAFgFAIgHIAKgIIAEgJQgGAFgHAAQgEAAgEgDIgFgBQgEAAgBAFIgIAAQAGgTAMAAQAGAAAHAFIAEACIACACQADgBACgEQABgEABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAEgDAGIgFALIgKARQgDAGAAAGQAAAFAEACQADACAEAAQAIAAAHgGQAIgGAGgJQAEgIAAgGIgBgKIgBgIQgBgGADgCQADgCADAAQADAAAEADQACAEAAAGQAAAJgFAMQgFAKgIAKQgJAKgLAFQgJAHgLgBQgFABgFgCg");
	this.shape_266.setTransform(543.1,174.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#F2F2F2").s().p("AgSA6QgDgDAAgGQAAgFADgIIAMggIABgEIgBgCIgBgBQgEAAgDAEIgGAJIgHAAQAFgMAJgFQAHgHAIAAQAFAAAFADQADADAAAEQAAAFgCAEIgNAlIgBAGIABACIABABQACAAADgCIAHgLIAJAAQgEAIgHAIQgIAIgJAAQgIAAgEgEgAAIgqQgDgDAAgFQAAgEADgEQAEgDAEAAQAEAAADACIADAEQACACAAADQAAAFgEADQgCAEgGAAQgEAAgEgEg");
	this.shape_267.setTransform(536,172.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#F2F2F2").s().p("AgXAlQgFgCgDgFQgEgEAAgGQAAgIAEgHQAEgFAIgHIALgIIAEgJQgGAFgGAAQgFAAgEgDIgFgBQgEAAgBAFIgIAAQAGgTAMAAQAGAAAHAFIAEACIACACQAEgBABgEQABgEACAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAEgDAGIgGALIgJARQgDAGAAAGQAAAFADACQAEACAEAAQAIAAAIgGQAHgGAFgJQAFgIAAgGIgBgKIgBgIQAAgGACgCQACgCADAAQAFAAACADQADAEAAAGQAAAJgFAMQgFAKgJAKQgIAKgLAFQgKAHgKgBQgFABgEgCg");
	this.shape_268.setTransform(528,174.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEACgDQAEgDAEAAQAJAAABALQABAFACADQACADAHAAQAFAAAEgDQADgDAAgFIgBgEIgFgGIgLgLIgHgHQgCgFgBgEQABgEACgFQADgFAHgEQAIgDAMAAQAIAAAFABIAJADQADADABADIABAEQAAAEgDADQgCACgEAAQgDABgCgCIgCgDIgDgHIgDgFQgCgBgFAAQgFAAgDADQgDACAAADIABAGIAEAEIAGAGQAJAHAEAEQADAFAAAHQABAGgEAFQgDAFgIAEQgIACgKAAQgSAAgHgGg");
	this.shape_269.setTransform(514.7,174.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgNANgIQALgHAQAAQAMAAAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAFgQABIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAGQARgCAJgGQAJgIAAgJQAAgCgCgCQgCgDgEAAQgGAAgFAFg");
	this.shape_270.setTransform(506.5,174.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#F2F2F2").s().p("AAAAuIAAgBIAAgBIgIAIQgFAEgGADQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgIAJgEQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgGQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgCIgHAAIACgIIAOAAIAJAAIAHgCIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQABAAAAAAQADAAADgDQAEgEADgFIAIAAIgFAJQgEAGgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgHAHgEALQgEALAAAIQAAAGACADQADACAEAAQAGAAAGgEQAFgEAEgIQAEgGADgHQACgIAAgGQAAgFgDgEQgDgDgDAAQgIAAgHAHg");
	this.shape_271.setTransform(497.5,172.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgNANgIQALgHAQAAQAMAAAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAFgQABIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAGQARgCAJgGQAJgIAAgJQAAgCgCgCQgCgDgEAAQgGAAgFAFg");
	this.shape_272.setTransform(483.3,174.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#F2F2F2").s().p("AAAAuIAAgBIAAgBIgIAIQgFAEgGADQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgIAJgEQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgGQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgCIgHAAIACgIIAOAAIAJAAIAHgCIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQABAAAAAAQADAAADgDQAEgEADgFIAIAAIgFAJQgEAGgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgHAHgEALQgEALAAAIQAAAGACADQADACAEAAQAGAAAGgEQAFgEAEgIQAEgGADgHQACgIAAgGQAAgFgDgEQgDgDgDAAQgIAAgHAHg");
	this.shape_273.setTransform(474.3,172.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_274.setTransform(463.5,174.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#F2F2F2").s().p("AgYAjQgIgFgEgHQgEgHgBgJQABgLAGgLQAGgKAMgHQALgFAMAAQALgBAIAFQAIAEAEAHQADAHAAAIQABAIgEAJQgDAIgHAHQgGAGgKAEQgJADgJAAQgKAAgIgDgAgEgZQgFAFgEAHQgDAHgBAHQgCAHgBAGQAAAHAEAGQAEAEAGAAQAGAAAFgEQAGgGADgHQADgIACgGIABgNQAAgIgDgEQgEgFgGAAQgGAAgFAFg");
	this.shape_275.setTransform(453.4,174.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#F2F2F2").s().p("AAqAiQgEgDAAgFIABgKIAHgVIADgKQAAgDgCgCQgCgCgDAAQgHAAgJAJQgIAIgIAMQgGANgEANIgBAEIgVAAIANgrIACgJQABgDgCgCQgCgCgDAAQgGAAgHAGQgGAFgFAIQgHAHgEAKIgIAUIgBADIgVAAIAPgyIADgKIgBgCIgCgBIgDABIgFAEIgEAJIgIAAQADgKAIgHQAHgIALAAIAHACQADABACADQACADAAAEQAAAFgDAKIgCAIQAFgIAFgHQAGgHAGgEQAGgFAGgCQAFgDAGAAQAGAAAEAEQAFAEAAAGQAAAFgDAJIgCAIIAMgRQAHgIAIgFQAJgGAJAAQAGAAADADQAFACABADIABAGIAAAFIgCAIIgIAaIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAQACAAAEgCQADgDAEgHIAJAAQgNAYgTAAQgHAAgDgEg");
	this.shape_276.setTransform(440.2,174.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgNANgIQALgHAQAAQAMAAAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAFgQABIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAGQARgCAJgGQAJgIAAgJQAAgCgCgCQgCgDgEAAQgGAAgFAFg");
	this.shape_277.setTransform(423,174.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#F2F2F2").s().p("AgWA6QgEgDAAgGQAAgEADgIIAXhJIABgJQAAgBAAgBQgBgBAAAAQAAgBAAAAQAAAAgBgBIgJgBIACgIIAIAAIALAAIAKgCIAGAAIgeBkIgCAJIABACIABABQADAAADgEQAEgDACgGIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_278.setTransform(416.4,172.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEACgDQADgDAFAAQAJAAABALQABAFACADQACADAHAAQAFAAAEgDQADgDAAgFIgBgEIgFgGIgLgLIgHgHQgCgFgBgEQAAgEADgFQADgFAIgEQAHgDAMAAQAIAAAFABIAJADQADADABADIABAEQAAAEgCADQgDACgEAAQgDABgCgCIgDgDIgCgHIgDgFQgCgBgFAAQgFAAgDADQgDACAAADIABAGIAEAEIAGAGQAJAHADAEQAEAFAAAHQAAAGgDAFQgDAFgIAEQgHACgLAAQgSAAgHgGg");
	this.shape_279.setTransform(404.6,174.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_280.setTransform(395.2,174.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#F2F2F2").s().p("AAEAhQgDgFAAgJQgGAJgHAGQgHAEgJAAQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgNQAGgNALgIQAKgJALAAQAGAAADACIAEAEIACAGIADgKIAUAAIgQA1IgCAHIABABIABABQAGAAAGgMIAJAAIgGAKIgHAHIgIAFQgDACgFgBQgJAAgCgFgAgIgWQgGAIgEAKQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgDgEgBQgGAAgGAIg");
	this.shape_281.setTransform(385.4,174.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#F2F2F2").s().p("AAAAuIAAgBIAAgBIgIAIQgFAEgGADQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgIAJgEQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgGQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgCIgHAAIACgIIAOAAIAJAAIAHgCIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQABAAAAAAQADAAADgDQAEgEADgFIAIAAIgFAJQgEAGgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgHAHgEALQgEALAAAIQAAAGACADQADACAEAAQAGAAAGgEQAFgEAEgIQAEgGADgHQACgIAAgGQAAgFgDgEQgDgDgDAAQgIAAgHAHg");
	this.shape_282.setTransform(375.8,172.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEADgDQADgDAEAAQAJAAABALQAAAFADADQACADAHAAQAGAAACgDQAEgDAAgFIgBgEIgFgGIgLgLIgHgHQgDgFAAgEQAAgEAEgFQACgFAIgEQAHgDAMAAQAIAAAGABIAIADQADADABADIABAEQAAAEgCADQgDACgEAAQgDABgCgCIgDgDIgCgHIgDgFQgCgBgFAAQgEAAgEADQgDACAAADIABAGIADAEIAHAGQAJAHADAEQAFAFAAAHQAAAGgEAFQgDAFgIAEQgHACgLAAQgSAAgHgGg");
	this.shape_283.setTransform(361.6,174.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#F2F2F2").s().p("AgfA2QgHgGAAgLQAAgNAHgNQAIgMANgIQALgIAQAAQAMAAAFAEQAFAEAAAHQAAACgCAFQgCAFgGAFQgGAFgLAEQgKAEgQACIgCAAIgBAHQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAIgOAAQgKAAgIgFgAACgGQgEAEgEAFQgDAGgCAGIgDAHQARgDAJgHQAJgHAAgIQAAgCgCgDQgCgCgEAAQgGAAgFAEgAABgcIAJgeIAXAAIgaAeg");
	this.shape_284.setTransform(353.3,172.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#F2F2F2").s().p("AghAlIAOgwIACgKIgBgCIgBgBQgEAAgEAFIgFAIIgIAAQAFgKAGgFQAEgGAGgCQAFgCAEAAQAGAAADAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAGAAADAEQACADAAAEQAAAGgDAEQgDAEgEAAQgFAAgDgEQgDgDgCAAQgCAAgEAEIgIAMIgIAQQgEAKgDAKIgBADg");
	this.shape_285.setTransform(345.3,174.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#F2F2F2").s().p("AgfAgQgGgFAAgLQAAgMAHgMQAHgNAMgIQAMgJAPABQAFAAAEABQAFABADADQADADABADIABAHQAAAFgDAEQgDADgFAAQgEAAgCgBQgCgDAAgDIAAgFIABgEQAAgEgDgBIgFgCQgIAAgFAIQgHAJgEALQgEAKAAAIQAAAHAEADQAEACAEAAQAHAAAGgEQAHgFAEgFIAKAAQgHAKgLAHQgLAHgNAAQgMABgHgHg");
	this.shape_286.setTransform(337.2,174.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_287.setTransform(327.8,174.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#F2F2F2").s().p("AAEAhQgDgFAAgJQgGAJgHAGQgHAEgJAAQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgNQAGgNALgIQAKgJALAAQAGAAADACIAEAEIACAGIADgKIAUAAIgQA1IgCAHIABABIABABQAGAAAGgMIAJAAIgGAKIgHAHIgIAFQgDACgFgBQgJAAgCgFgAgIgWQgGAIgEAKQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgDgEgBQgGAAgGAIg");
	this.shape_288.setTransform(317.9,174.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_289.setTransform(303.3,174.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgNANgIQALgHAQAAQAMAAAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAFgQABIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAGQARgCAJgGQAJgIAAgJQAAgCgCgCQgCgDgEAAQgGAAgFAFg");
	this.shape_290.setTransform(293.9,174.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#F2F2F2").s().p("AgSA6QgDgDAAgGQAAgFADgIIALggIACgEIgBgCIgCgBQgDAAgDAEIgFAJIgIAAQAFgMAIgFQAIgHAIAAQAFAAAEADQAFADAAAEQAAAFgCAEIgOAlIAAAGIAAACIABABQADAAADgCIAHgLIAHAAQgDAIgHAIQgIAIgKAAQgHAAgEgEgAAJgqQgEgDAAgFQAAgEAEgEQADgDAFAAQADAAADACIADAEQACACAAADQAAAFgDADQgDAEgFAAQgFAAgDgEg");
	this.shape_291.setTransform(287.2,172.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#F2F2F2").s().p("AggA3QgIgHAAgKQgBgGAEgLIATg+IABgEQAAgEgDgBIgHgBIgCAAIACgIQAVABAJgDIAFAAIgRA7IAFgDIAEgEIAHgEQAFgBAGAAQAHAAAFADQAFADAEAFQADAFAAAJQAAAJgFAJQgEAJgHAIQgIAHgJAEQgJAFgKAAQgPAAgHgHgAgOASQgEAHgCAHIgBAKQAAAGADADQADADAGABQAJAAAGgIQAHgHADgLQAEgKAAgIQAAgGgDgEQgDgEgGAAQgOABgIAUg");
	this.shape_292.setTransform(279.3,172.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#F2F2F2").s().p("AgVAuQgFgEAAgHQABgFADgJIAKgkIgQAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgSAAIgLArIgCAHIABADIADABQAEAAAEgEIAHgLIAJAAQgFALgHAGQgGAGgFACQgFACgFAAQgHAAgEgFg");
	this.shape_293.setTransform(267.2,173.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_294.setTransform(258.6,174.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#F2F2F2").s().p("AAEAhQgDgFAAgJQgGAJgHAGQgHAEgJAAQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgNQAGgNALgIQAKgJALAAQAGAAADACIAEAEIACAGIADgKIAUAAIgQA1IgCAHIABABIABABQAGAAAGgMIAJAAIgGAKIgHAHIgIAFQgDACgFgBQgJAAgCgFgAgIgWQgGAIgEAKQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgDgEgBQgGAAgGAIg");
	this.shape_295.setTransform(248.8,174.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_296.setTransform(238.6,174.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgNANgIQALgHAQAAQAMAAAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAFgQABIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAGQARgCAJgGQAJgIAAgJQAAgCgCgCQgCgDgEAAQgGAAgFAFg");
	this.shape_297.setTransform(229.3,174.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#F2F2F2").s().p("AgVAuQgFgEABgHQAAgFADgJIAKgkIgQAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAHIABADIADABQAEAAAEgEIAHgLIAIAAQgEALgHAGQgGAGgFACQgFACgFAAQgHAAgEgFg");
	this.shape_298.setTransform(222.4,173.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_299.setTransform(213.8,174.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#F2F2F2").s().p("AgSA6QgDgDAAgGQAAgFADgIIAMggIABgEIgBgCIgBgBQgDAAgEAEIgGAJIgHAAQAFgMAJgFQAHgHAIAAQAFAAAFADQADADAAAEQAAAFgCAEIgNAlIgBAGIABACIABABQACAAADgCIAHgLIAJAAQgEAIgHAIQgIAIgJAAQgIAAgEgEgAAIgqQgDgDAAgFQAAgEADgEQAEgDAEAAQAEAAACACIAEAEQACACAAADQAAAFgEADQgCAEgGAAQgEAAgEgEg");
	this.shape_300.setTransform(206.1,172.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#F2F2F2").s().p("AAEAhQgDgFAAgJQgGAJgHAGQgHAEgJAAQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgNQAGgNALgIQAKgJALAAQAGAAADACIAEAEIACAGIADgKIAUAAIgQA1IgCAHIABABIABABQAGAAAGgMIAJAAIgGAKIgHAHIgIAFQgDACgFgBQgJAAgCgFgAgIgWQgGAIgEAKQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgDgEgBQgGAAgGAIg");
	this.shape_301.setTransform(198.4,174.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#F2F2F2").s().p("AAqAiQgEgDAAgFIABgKIAHgVIADgKQAAgDgCgCQgCgCgDAAQgHAAgJAJQgIAIgIAMQgGANgEANIgBAEIgVAAIAOgrIABgJQABgDgCgCQgCgCgDAAQgGAAgHAGQgGAFgFAIQgHAHgFAKIgHAUIgBADIgVAAIAQgyIACgKIgBgCIgCgBIgDABIgFAEIgFAJIgHAAQADgKAIgHQAHgIALAAIAHACQADABACADQACADAAAEQAAAFgDAKIgCAIQAFgIAFgHQAGgHAGgEQAGgFAGgCQAFgDAGAAQAGAAAEAEQAFAEAAAGQAAAFgDAJIgCAIIAMgRQAGgIAJgFQAJgGAJAAQAGAAADADQAEACACADIACAGIgBAFIgCAIIgIAaIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAQACAAADgCQAEgDAEgHIAJAAQgNAYgTAAQgHAAgDgEg");
	this.shape_302.setTransform(184.9,174.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#F2F2F2").s().p("AgVAuQgFgEABgHQAAgFACgJIALgkIgQAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAHIABADIADABQAEAAAEgEIAHgLIAIAAQgEALgHAGQgGAGgFACQgFACgFAAQgHAAgEgFg");
	this.shape_303.setTransform(169.3,173.2);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_304.setTransform(160.7,174.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#F2F2F2").s().p("AgYAjQgHgFgFgHQgEgHgBgJQABgLAGgLQAHgKALgHQALgFAMAAQALgBAIAFQAHAEAEAHQAEAHAAAIQAAAIgDAJQgEAIgGAHQgGAGgKAEQgIADgKAAQgKAAgIgDgAgEgZQgFAFgEAHQgDAHgBAHQgCAHAAAGQAAAHADAGQAEAEAFAAQAHAAAFgEQAGgGADgHQADgIACgGIABgNQAAgIgDgEQgDgFgHAAQgGAAgFAFg");
	this.shape_305.setTransform(150.6,174.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEADgDQADgDAEAAQAJAAABALQAAAFADADQACADAHAAQAGAAADgDQADgDAAgFIgBgEIgFgGIgLgLIgHgHQgCgFgBgEQAAgEAEgFQACgFAIgEQAHgDAMAAQAIAAAFABIAJADQADADABADIABAEQAAAEgCADQgDACgEAAQgDABgCgCIgDgDIgCgHIgDgFQgCgBgFAAQgEAAgEADQgDACAAADIABAGIADAEIAHAGQAJAHADAEQAEAFABAHQAAAGgEAFQgDAFgIAEQgHACgLAAQgSAAgHgGg");
	this.shape_306.setTransform(141.9,174.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEACgDQADgDAFAAQAJAAABALQABAFACADQACADAHAAQAFAAAEgDQADgDAAgFIgBgEIgFgGIgLgLIgHgHQgCgFgBgEQAAgEADgFQADgFAIgEQAHgDAMAAQAIAAAFABIAJADQADADABADIABAEQAAAEgCADQgDACgEAAQgDABgCgCIgDgDIgCgHIgDgFQgCgBgFAAQgFAAgDADQgDACAAADIABAGIAEAEIAGAGQAJAHADAEQAEAFAAAHQAAAGgDAFQgDAFgIAEQgHACgLAAQgSAAgHgGg");
	this.shape_307.setTransform(129.2,174.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#F2F2F2").s().p("AgWA6QgEgDAAgGQAAgEADgIIAXhJIABgJQAAgBAAgBQgBgBAAAAQAAgBAAAAQAAAAgBgBIgJgBIACgIIAIAAIALAAIAKgCIAGAAIgeBkIgCAJIABACIABABQADAAADgEQAEgDACgGIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_308.setTransform(122.7,172.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#F2F2F2").s().p("AgRA6QgEgDAAgGQAAgFADgIIALggIACgEIgBgCIgCgBQgCAAgEAEIgFAJIgIAAQAFgMAIgFQAJgHAHAAQAFAAAEADQAFADAAAEQAAAFgDAEIgNAlIAAAGIAAACIABABQACAAAEgCIAGgLIAIAAQgDAIgHAIQgIAIgKAAQgHAAgDgEgAAJgqQgEgDAAgFQAAgEAEgEQADgDAFAAQADAAACACIAFAEQABACAAADQAAAFgDADQgEAEgEAAQgFAAgDgEg");
	this.shape_309.setTransform(117,172.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#F2F2F2").s().p("AgVAuQgFgEABgHQAAgFADgJIAKgkIgQAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAHIABADIADABQAEAAAEgEIAHgLIAIAAQgEALgHAGQgGAGgFACQgFACgFAAQgHAAgEgFg");
	this.shape_310.setTransform(106.8,173.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgNANgIQALgHAQAAQAMAAAFAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAFgQABIgCABIgBAGQAAAGADAEQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKAAgIgFgAACgaQgEADgEAHQgDAFgCAGIgDAGQARgCAJgGQAJgIAAgJQAAgCgCgCQgCgDgEAAQgGAAgFAFg");
	this.shape_311.setTransform(99.3,174.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgNANgHQALgIAQAAQAMAAAFADQAFAEAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAFgQABIgCAAIgBAHQAAAHADADQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKABgIgGgAACgaQgEAEgEAFQgDAGgCAGIgDAGQARgBAJgIQAJgHAAgJQAAgCgCgCQgCgDgEAAQgGAAgFAFg");
	this.shape_312.setTransform(693.4,145.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#F2F2F2").s().p("AgWA6QgEgDAAgGQAAgDADgJIAXhJIABgJQAAgBAAgBQgBgBAAAAQAAgBAAAAQAAAAgBgBIgJgBIACgIIAIAAIALAAIAKgCIAGAAIgeBkIgCAJIABACIABACQADgBADgEQAEgDACgGIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_313.setTransform(686.8,143.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#F2F2F2").s().p("AgWA6QgEgDAAgGQAAgDADgJIAXhJIABgJQAAgBAAgBQgBgBAAAAQAAgBAAAAQAAAAgBgBIgJgBIACgIIAIAAIALAAIAKgCIAGAAIgeBkIgCAJIABACIABACQADgBADgEQAEgDACgGIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_314.setTransform(681.2,143.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#F2F2F2").s().p("AgSA6QgDgDAAgGQAAgFADgIIAMggIABgEIgBgCIgBgBQgDAAgEAEIgGAJIgHAAQAFgMAJgFQAHgHAIAAQAFAAAFADQADACAAAFQAAAFgCAEIgNAmIgBAFIABACIABACQACAAADgDIAHgLIAJAAQgEAIgHAIQgIAIgJAAQgIAAgEgEgAAIgqQgDgCAAgGQAAgEADgEQAEgDAEAAQAEAAADACIADAEQACACAAADQAAAGgEACQgCAEgGAAQgEAAgEgEg");
	this.shape_315.setTransform(675.5,143.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F2F2F2").s().p("AgXAlQgFgCgDgFQgEgEAAgGQAAgIAEgGQAEgGAIgHIALgJIAEgIQgGAFgGAAQgFAAgEgDIgFgBQgEAAgBAFIgIAAQAGgTAMAAQAGAAAHAFIAEADIACABQAEgBABgFQABgDACAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAEgDAGIgGAMIgJAQQgDAGAAAGQAAAEADADQAEACAEAAQAIAAAIgGQAHgGAFgJQAFgIAAgGIgBgKIgBgIQAAgGACgCQACgCADAAQAFgBACAEQADAEAAAGQAAAJgFAMQgFAKgJAKQgIAJgLAHQgKAFgKAAQgFABgEgCg");
	this.shape_316.setTransform(667.5,145.8);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#F2F2F2").s().p("AghAlIAOgwIACgKIgBgCIgBgBQgEAAgEAFIgFAIIgIAAQAFgKAGgFQAFgGAFgCQAEgCAEAAQAHAAADAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAHAAACAEQACADAAAEQAAAGgDAEQgDAEgEAAQgFAAgDgEQgDgDgCAAQgCAAgEAEIgIAMIgIAQQgFAKgCAKIgBADg");
	this.shape_317.setTransform(659.1,145.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgNANgHQALgIAQAAQAMAAAFADQAFAEAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAFgQABIgCAAIgBAHQAAAHADADQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKABgIgGgAACgaQgEAEgEAFQgDAGgCAGIgDAGQARgBAJgIQAJgHAAgJQAAgCgCgCQgCgDgEAAQgGAAgFAFg");
	this.shape_318.setTransform(650.8,145.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#F2F2F2").s().p("AADA5QgDgEAAgGIAAgHIABgHQAAgLgLAAIgIAHIgJAfIgWAAIAfhgIACgJQAAgDgDgBIgJgBIACgIQAVAAAIgCIAGAAIgXBMIASgQQAGgFAIgEQAIgEAJAAQAHAAAEACQADADAAAFQAAADgCACQgDACgEAAQgEAAgGgDQgEgBgEAAQgFAAgGADQgGAEgIAIQAHAAAGADQAHAEABAFQACAGAAAJIABAHQABABAAAAQAAAAAAABQABAAAAAAQABAAABAAQAEAAADgEIAGgJIAJAAQgEAJgHAHQgIAHgLAAQgJAAgFgEg");
	this.shape_319.setTransform(641.6,143.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEADgDQADgDAEAAQAJAAABALQAAAFADADQACADAHAAQAGAAADgDQADgDAAgFIgBgEIgFgGIgLgLIgHgIQgCgEgBgFQAAgEAEgFQACgEAIgEQAHgEAMABQAIAAAFABIAJADQADADABADIABAEQAAAEgCACQgDADgEAAQgDAAgCgBIgDgDIgCgHIgDgEQgCgCgFAAQgEAAgEADQgDACAAADIABAGIAEAEIAGAGQAJAHADAEQAEAFABAHQAAAGgEAFQgDAFgIAEQgHACgLAAQgSAAgHgGg");
	this.shape_320.setTransform(632.4,145.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#F2F2F2").s().p("AAEAhQgDgFAAgJQgGAJgHAGQgHAEgJAAQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgNQAGgNALgIQAKgJALAAQAGAAADACIAEAEIACAGIADgKIAUAAIgQA1IgCAHIABABIABABQAGAAAGgMIAJAAIgGAKIgHAHIgIAFQgDACgFgBQgJABgCgGgAgIgWQgGAIgEAKQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgDgEAAQgGgBgGAIg");
	this.shape_321.setTransform(623.6,145.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#F2F2F2").s().p("Ag6A7IADgHQAGAAADgEQACgEACgGIAYhJIABgHQAAgJgKAAIACgIIAvAAIANABQAFABAFADQAGADAEAGQADAGAAAGQABAHgFAHQgEAGgIAFQgJAEgLACQAYAHAAAUQAAAJgGAIQgFAHgIAFQgFACgGABIgLACIgKAAgAgRAjIgBAIQAAACADADQADADAHAAQAGAAAFgDQAFgCAFgJIAEgKIABgLQABgKgFgCQgFgCgGAAIgMAAgAgEgHIAHAAQAIAAAGgBQAFgCADgDQAEgEADgIQADgIAAgFQAAgIgFgCQgFgCgJAAIgHAAg");
	this.shape_322.setTransform(613.3,143.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgNANgHQALgIAQAAQAMAAAFADQAFAEAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAFgQABIgCAAIgBAHQAAAHADADQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKABgIgGgAACgaQgEAEgEAFQgDAGgCAGIgDAGQARgBAJgIQAJgHAAgJQAAgCgCgCQgCgDgEAAQgGAAgFAFg");
	this.shape_323.setTransform(598.7,145.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#F2F2F2").s().p("AAAAuIAAgBIAAgBIgIAIQgFAEgGADQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgHAJgFQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgGQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgCIgHAAIACgIIAOAAIAJgBIAHgBIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQADAAADgDQAEgEADgFIAIAAIgFAJQgEAGgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgHAHgEALQgEALAAAIQAAAGACADQADACAEAAQAGAAAGgEQAFgEAEgIQAEgGADgHQACgIAAgGQAAgFgDgEQgDgDgDAAQgIAAgHAHg");
	this.shape_324.setTransform(589.7,143.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_325.setTransform(574.4,145.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#F2F2F2").s().p("AgYAjQgHgFgFgGQgFgIAAgJQAAgLAHgLQAGgKAMgHQALgFAMAAQALgBAIAFQAHAEAEAHQAEAHABAIQAAAIgEAIQgEAJgGAHQgHAGgJAEQgJAEgJgBQgKAAgIgDgAgEgZQgFAEgEAIQgDAHgBAHQgCAIAAAFQgBAIAEAFQAEAEAFAAQAHAAAFgEQAFgFAEgIQADgIACgGIABgNQABgIgEgFQgDgEgHAAQgGAAgFAFg");
	this.shape_326.setTransform(564.3,145.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#F2F2F2").s().p("AgSA6QgDgDAAgGQAAgFADgIIAMggIABgEIgBgCIgBgBQgDAAgEAEIgGAJIgHAAQAFgMAJgFQAHgHAIAAQAFAAAFADQADACAAAFQAAAFgBAEIgOAmIgBAFIABACIABACQACAAADgDIAIgLIAIAAQgEAIgHAIQgIAIgJAAQgIAAgEgEgAAIgqQgDgCAAgGQAAgEADgEQAEgDAEAAQAEAAACACIAEAEQACACAAADQAAAGgEACQgCAEgGAAQgEAAgEgEg");
	this.shape_327.setTransform(557.1,143.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#F2F2F2").s().p("AgVAuQgEgEgBgHQAAgFAEgJIALgkIgRAAIADgIIAQAAIAJgbIATAAIgIAbIARAAIgCAIIgSAAIgLArIgCAHIABADIADABQAEAAAEgEIAHgLIAJAAQgGALgGAGQgGAGgFACQgFACgFAAQgHAAgEgFg");
	this.shape_328.setTransform(551.4,144.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#F2F2F2").s().p("AAEAhQgDgFAAgJQgGAJgHAGQgHAEgJAAQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgNQAGgNALgIQAKgJALAAQAGAAADACIAEAEIACAGIADgKIAUAAIgQA1IgCAHIABABIABABQAGAAAGgMIAJAAIgGAKIgHAHIgIAFQgDACgFgBQgJABgCgGgAgIgWQgGAIgEAKQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgDgEAAQgGgBgGAIg");
	this.shape_329.setTransform(543.4,145.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#F2F2F2").s().p("AgWA6QgEgDAAgGQAAgDADgJIAXhJIABgJQAAgBAAgBQgBgBAAAAQAAgBAAAAQAAAAgBgBIgJgBIACgIIAIAAIALAAIAKgCIAGAAIgeBkIgCAJIABACIABACQADgBADgEQAEgDACgGIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_330.setTransform(536.2,143.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#F2F2F2").s().p("AAMAiQgDgDAAgGIAAgFIADgIIACgKQgJAPgJALQgKAKgMAAQgGAAgEgEQgDgDAAgFIACgNIAJgbIACgIIgBgCIgCgBQgFAAgIAMIgIAAQAGgJAHgIQAIgHALAAQAFAAAEADQAEACAAAIQAAAEgBADIgHAWQgDAJAAADIABAEQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAEAAAGgHQAFgGAHgMQAHgNAHgVIAVAAIgQA1IgCAHIABACIACABQADAAADgEIAFgKIAJAAQgEAJgHAIQgHAIgLAAQgIAAgCgEg");
	this.shape_331.setTransform(527.5,145.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#F2F2F2").s().p("Ag7A6IADgIIAEAAIAIAAQADgBABgDIAEgJIAWhKIABgGIAAgDIgCgBQgCAAgEADQgDADgDAJIgIAAIAEgLQADgFAGgFQAGgEAJAAQANAAAAAPQAOgPAPAAQAJAAAFAEQAGAFACAGQACAGAAAFQABAJgEAJQgEAJgGAHQgHAHgIAEQgJAFgKAAQgHAAgFgDQgDgCgEgFIgJAfIgBAFQAAABAAABQAAAAAAABQABAAAAABQABAAAAAAIAKABIAFAAIgDAIgAAPgqQgGAFgEAJIgEAKIgCAKIgBAHQAAAFADAEQACAEAHAAQAHAAAHgIQAGgHAEgLQADgLABgIQgBgGgCgEQgDgEgFAAQgHAAgFAFg");
	this.shape_332.setTransform(515.9,147.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#F2F2F2").s().p("AgYAjQgIgFgEgGQgEgIAAgJQAAgLAGgLQAHgKALgHQALgFAMAAQALgBAHAFQAIAEAFAHQADAHAAAIQABAIgEAIQgDAJgHAHQgGAGgJAEQgKAEgJgBQgKAAgIgDgAgEgZQgFAEgEAIQgDAHgBAHQgDAIAAAFQAAAIAEAFQADAEAHAAQAGAAAFgEQAFgFAEgIQADgIACgGIACgNQgBgIgDgFQgEgEgGAAQgHAAgEAFg");
	this.shape_333.setTransform(507.3,145.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#F2F2F2").s().p("Ag6A6IACgIIADAAIAJAAQADgBABgDIADgJIAYhKIABgGIgBgDIgCgBQgCAAgDADQgDADgEAJIgJAAIAGgLQACgFAHgFQAFgEAIAAQAOAAAAAPQAOgPAPAAQAJAAAGAEQAFAFADAGQACAGAAAFQgBAJgDAJQgEAJgGAHQgHAHgIAEQgJAFgJAAQgJAAgEgDQgEgCgDgFIgKAfIgBAFQAAABABABQAAAAAAABQABAAAAABQABAAAAAAIAKABIAEAAIgCAIgAAPgqQgFAFgFAJIgFAKIgBAKIgBAHQAAAFACAEQADAEAGAAQAJAAAGgIQAHgHADgLQAEgLgBgIQAAgGgCgEQgDgEgGAAQgFAAgGAFg");
	this.shape_334.setTransform(496.1,147.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#F2F2F2").s().p("AAEAhQgDgFAAgJQgGAJgHAGQgHAEgJAAQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgNQAGgNALgIQAKgJALAAQAGAAADACIAEAEIACAGIADgKIAUAAIgQA1IgCAHIABABIABABQAGAAAGgMIAJAAIgGAKIgHAHIgIAFQgDACgFgBQgJABgCgGgAgIgWQgGAIgEAKQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgDgEAAQgGgBgGAIg");
	this.shape_335.setTransform(483.2,145.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#F2F2F2").s().p("AgWA6QgEgDAAgGQAAgDADgJIAXhJIABgJQAAgBAAgBQgBgBAAAAQAAgBAAAAQAAAAgBgBIgJgBIACgIIAIAAIALAAIAKgCIAGAAIgeBkIgCAJIABACIABACQADgBADgEQAEgDACgGIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_336.setTransform(475.9,143.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#F2F2F2").s().p("AghAlIANgwIADgKIgBgCIgCgBQgDAAgEAFIgFAIIgIAAQAFgKAFgFQAFgGAFgCQAGgCADAAQAIAAACAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAHAAACAEQACADAAAEQAAAGgDAEQgDAEgEAAQgEAAgFgEQAAgBAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgDAAgEAEIgIAMIgIAQQgFAKgDAKIgBADg");
	this.shape_337.setTransform(464.4,145.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#F2F2F2").s().p("AAEAhQgDgFAAgJQgGAJgHAGQgHAEgJAAQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgNQAGgNALgIQAKgJALAAQAGAAADACIAEAEIACAGIADgKIAUAAIgQA1IgCAHIABABIABABQAGAAAGgMIAJAAIgGAKIgHAHIgIAFQgDACgFgBQgJABgCgGgAgIgWQgGAIgEAKQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgDgEAAQgGgBgGAIg");
	this.shape_338.setTransform(455.7,145.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#F2F2F2").s().p("Ag7A6IADgIIADAAIAJAAQADgBABgDIAEgJIAWhKIACgGIgBgDIgCgBQgCAAgDADQgEADgDAJIgJAAIAGgLQACgFAHgFQAFgEAIAAQAOAAAAAPQAOgPAPAAQAJAAAGAEQAFAFACAGQADAGAAAFQAAAJgEAJQgEAJgGAHQgGAHgJAEQgJAFgKAAQgHAAgFgDQgEgCgDgFIgKAfIAAAFQAAABAAABQAAAAAAABQABAAAAABQABAAAAAAIAKABIAFAAIgDAIgAAPgqQgGAFgEAJIgFAKIgBAKIgBAHQAAAFACAEQAEAEAFAAQAJAAAGgIQAHgHADgLQAEgLgBgIQABgGgDgEQgDgEgFAAQgGAAgGAFg");
	this.shape_339.setTransform(444.2,147.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEADgDQADgDAEAAQAJAAABALQAAAFADADQACADAHAAQAGAAACgDQAEgDABgFIgCgEIgFgGIgLgLIgHgIQgDgEAAgFQABgEADgFQACgEAIgEQAHgEAMABQAIAAAGABIAIADQADADABADIABAEQAAAEgCACQgDADgEAAQgDAAgCgBIgDgDIgCgHIgDgEQgCgCgFAAQgEAAgEADQgDACAAADIABAGIADAEIAHAGQAJAHADAEQAFAFAAAHQgBAGgDAFQgDAFgIAEQgIACgKAAQgSAAgHgGg");
	this.shape_340.setTransform(431.9,145.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#F2F2F2").s().p("Ag6A6IACgIIAEAAIAIAAQADgBABgDIADgJIAYhKIABgGIgBgDIgCgBQgDAAgDADQgDADgDAJIgJAAIAFgLQAEgFAFgFQAGgEAJAAQANAAAAAPQAOgPAPAAQAJAAAFAEQAGAFADAGQABAGAAAFQAAAJgDAJQgEAJgGAHQgGAHgJAEQgJAFgJAAQgJAAgEgDQgDgCgEgFIgJAfIgCAFQABADADABIAJABIAEAAIgCAIgAAPgqQgGAFgEAJIgEAKIgCAKIgBAHQAAAFADAEQACAEAHAAQAHAAAHgIQAHgHADgLQAEgLAAgIQAAgGgDgEQgDgEgGAAQgGAAgFAFg");
	this.shape_341.setTransform(421.2,147.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#F2F2F2").s().p("AApAiQgDgDAAgFIABgKIAHgVIADgKQAAgDgCgCQgCgCgDAAQgIAAgIAJQgJAIgHAMQgHANgDANIgBAEIgVAAIAOgrIABgJQAAgDgBgCQgCgCgDAAQgGAAgGAGQgHAFgFAIQgGAHgGAKIgHAUIgBADIgVAAIAQgyIACgKIgBgCIgCgBIgDABIgEAEIgGAJIgHAAQAEgKAHgHQAHgIALAAIAHACQADABACADQACADAAAEQAAAFgDAKIgCAIQAEgIAHgHQAFgHAGgEQAGgFAFgCQAGgDAGAAQAGAAAEAEQAFAEAAAGQAAAFgDAJIgCAIIAMgRQAGgIAJgFQAJgGAJAAQAGAAAEADQADACACADIACAGIgBAFIgCAIIgIAaIgCAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAQACAAADgCQAEgDAEgHIAJAAQgNAYgTAAQgHAAgEgEg");
	this.shape_342.setTransform(408.9,145.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgNANgHQALgIAQAAQAMAAAFADQAFAEAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAFgQABIgCAAIgBAHQAAAHADADQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKABgIgGgAACgaQgEAEgEAFQgDAGgCAGIgDAGQARgBAJgIQAJgHAAgJQAAgCgCgCQgCgDgEAAQgGAAgFAFg");
	this.shape_343.setTransform(396.3,145.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#F2F2F2").s().p("AgVAuQgEgEgBgHQAAgFAEgJIALgkIgRAAIADgIIAQAAIAJgbIATAAIgIAbIARAAIgCAIIgSAAIgLArIgCAHIABADIADABQAEAAAEgEIAHgLIAJAAQgGALgGAGQgGAGgFACQgFACgEAAQgIAAgEgFg");
	this.shape_344.setTransform(389.4,144.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#F2F2F2").s().p("AgbA6QgJgBgIgFQgHgEAAgJQAAgEACgDQABgEADgCIAGgBIADAAIABACIgCADQgDAEAAADQAAAJAKADQAJADAKAAQALAAAIgEQAHgDAAgFQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgGgDIgOgFIgPgGQgGgCgDgEQgDgDAAgGQAAgGAGgFQAHgEAIgCQgGgCgEgGQgDgFAAgGQAAgHAEgHQAFgGAHgEQAJgEAJAAQAPAAAIAHIAGgFQADgCAEAAQADAAADACQABABAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBIgCgBQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBABIADAFIABAHIgBAJQgCAEgEAFQgEAEgIADQgIADgLAAQgKAAgEACQgEACAAACQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIADACIAKADIANAEQAXAHAAAPQABAHgFAFQgFAGgKAEQgLADgQAAIgQgBgAACgvQgEAFgBAGQgDAHAAAFQAAAFADADQACADAEAAQAIAAAFgKQAFgKAAgIIgBgFQgBgDgDgBQgCgCgDAAQgFAAgEAFg");
	this.shape_345.setTransform(381.1,147.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_346.setTransform(372,145.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#F2F2F2").s().p("AgYAjQgHgFgFgGQgEgIAAgJQAAgLAGgLQAHgKALgHQALgFAMAAQALgBAHAFQAIAEAFAHQADAHAAAIQABAIgEAIQgDAJgHAHQgGAGgKAEQgJAEgJgBQgKAAgIgDgAgEgZQgFAEgEAIQgDAHgBAHQgDAIAAAFQAAAIAEAFQADAEAHAAQAGAAAFgEQAFgFAEgIQADgIACgGIACgNQgBgIgDgFQgEgEgGAAQgHAAgEAFg");
	this.shape_347.setTransform(361.9,145.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#F2F2F2").s().p("AgWA6QgEgDAAgGQAAgDADgJIAXhJIABgJQAAgBAAgBQgBgBAAAAQAAgBAAAAQAAAAgBgBIgJgBIACgIIAIAAIALAAIAKgCIAGAAIgeBkIgCAJIABACIABACQADgBADgEQAEgDACgGIAIAAQgEAIgHAIQgGAIgLAAQgHAAgEgEg");
	this.shape_348.setTransform(354.9,143.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#F2F2F2").s().p("Ag7A6IADgIIADAAIAJAAQADgBABgDIAEgJIAWhKIABgGIAAgDIgCgBQgDAAgCADQgDADgEAJIgIAAIAEgLQAEgFAFgFQAGgEAIAAQAOAAAAAPQAOgPAPAAQAJAAAFAEQAGAFACAGQACAGABAFQAAAJgEAJQgEAJgGAHQgGAHgJAEQgJAFgKAAQgHAAgFgDQgDgCgEgFIgJAfIgBAFQAAABAAABQAAAAAAABQABAAAAABQABAAAAAAIAKABIAFAAIgDAIgAAPgqQgGAFgEAJIgFAKIgBAKIgBAHQAAAFACAEQAEAEAFAAQAJAAAGgIQAHgHADgLQADgLAAgIQABgGgDgEQgDgEgFAAQgGAAgGAFg");
	this.shape_349.setTransform(340.6,147.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#F2F2F2").s().p("AgYAjQgHgFgFgGQgEgIgBgJQABgLAGgLQAHgKALgHQALgFAMAAQALgBAIAFQAHAEAEAHQAEAHAAAIQAAAIgDAIQgEAJgGAHQgGAGgKAEQgIAEgKgBQgKAAgIgDgAgEgZQgFAEgEAIQgDAHgBAHQgCAIAAAFQAAAIADAFQAEAEAFAAQAHAAAFgEQAGgFADgIQADgIACgGIABgNQAAgIgDgFQgDgEgHAAQgGAAgFAFg");
	this.shape_350.setTransform(332,145.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#F2F2F2").s().p("AghAlIANgwIADgKIgBgCIgCgBQgDAAgDAFIgGAIIgIAAQAFgKAFgFQAGgGAEgCQAGgCADAAQAIAAACAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAHAAACAEQACADAAAEQAAAGgDAEQgDAEgFAAQgEAAgEgEQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgDAAgEAEIgIAMIgIAQQgFAKgDAKIgBADg");
	this.shape_351.setTransform(323.7,145.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#F2F2F2").s().p("AgVAuQgEgEgBgHQAAgFAEgJIALgkIgQAAIACgIIAQAAIAIgbIAUAAIgIAbIARAAIgCAIIgSAAIgLArIgCAHIABADIADABQAEAAAEgEIAHgLIAJAAQgGALgGAGQgGAGgFACQgFACgFAAQgHAAgEgFg");
	this.shape_352.setTransform(317,144.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEACgDQAEgDAEAAQAJAAABALQABAFACADQACADAHAAQAFAAAEgDQADgDAAgFIgBgEIgFgGIgLgLIgHgIQgCgEAAgFQgBgEADgFQADgEAHgEQAIgEAMABQAIAAAFABIAJADQADADABADIABAEQAAAEgDACQgCADgEAAQgDAAgCgBIgCgDIgDgHIgDgEQgCgCgFAAQgFAAgDADQgDACAAADIABAGIAEAEIAGAGQAJAHAEAEQADAFAAAHQABAGgEAFQgDAFgIAEQgIACgKAAQgSAAgHgGg");
	this.shape_353.setTransform(305,145.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#F2F2F2").s().p("AgfA2QgHgGAAgLQAAgNAHgNQAIgMANgIQALgIAQAAQAMAAAFAEQAFAEAAAHQAAACgCAFQgCAFgGAFQgGAFgLAEQgKAEgQACIgCAAIgBAHQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAIgOAAQgKAAgIgFgAACgGQgEAEgEAFQgDAGgCAGIgDAHQARgDAJgHQAJgHAAgIQAAgCgCgDQgCgCgEAAQgGAAgFAEgAABgcIAJgeIAXAAIgaAeg");
	this.shape_354.setTransform(296.8,143.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#F2F2F2").s().p("AghAlIAOgwIACgKIgBgCIgBgBQgEAAgDAFIgGAIIgIAAQAFgKAFgFQAFgGAGgCQAEgCAFAAQAGAAADAEQABAFAAAEQAAAHgEAQIAHgNIAIgLQAEgFAFgEQAFgDAFAAQAGAAADAEQACADAAAEQAAAGgDAEQgDAEgFAAQgDAAgFgEQAAgBgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgDAAgEAEIgJAMIgHAQQgFAKgDAKIgBADg");
	this.shape_355.setTransform(288.8,145.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#F2F2F2").s().p("AgYAjQgHgFgFgGQgEgIgBgJQABgLAGgLQAHgKALgHQALgFAMAAQALgBAIAFQAHAEAFAHQADAHAAAIQAAAIgDAIQgEAJgGAHQgGAGgKAEQgIAEgKgBQgKAAgIgDgAgEgZQgFAEgEAIQgDAHgBAHQgCAIAAAFQAAAIADAFQAEAEAFAAQAHAAAFgEQAFgFAEgIQADgIACgGIABgNQAAgIgDgFQgDgEgHAAQgGAAgFAFg");
	this.shape_356.setTransform(279.8,145.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_357.setTransform(269.9,145.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#F2F2F2").s().p("AgbA6QgJgBgHgFQgIgEAAgJQAAgEACgDQABgEADgCIAGgBIADAAIABACIgCADQgDAEAAADQAAAJAKADQAJADAKAAQALAAAIgEQAHgDAAgFQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIgGgDIgOgFIgQgGQgFgCgDgEQgDgDAAgGQAAgGAGgFQAGgEAJgCQgGgCgEgGQgDgFAAgGQAAgHAEgHQAEgGAIgEQAIgEAKAAQAPAAAHAHIAHgFQADgCAEAAQADAAACACQACABAAAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBIgCgBQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAABIACAFIABAHIgBAJQgCAEgEAFQgEAEgIADQgIADgLAAQgKAAgEACQgEACAAACQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIADACIAKADIANAEQAYAHgBAPQABAHgFAFQgEAGgLAEQgLADgQAAIgQgBgAACgvQgEAFgCAGQgCAHAAAFQAAAFACADQADADAEAAQAIAAAFgKQAFgKAAgIIgBgFQgBgDgDgBQgCgCgDAAQgFAAgEAFg");
	this.shape_358.setTransform(259.7,147.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#F2F2F2").s().p("AgSA6QgDgDAAgGQAAgFADgIIAMggIABgEIgBgCIgBgBQgDAAgEAEIgGAJIgHAAQAFgMAJgFQAHgHAIAAQAFAAAFADQADACAAAFQAAAFgCAEIgNAmIgBAFIABACIABACQACAAADgDIAHgLIAJAAQgEAIgHAIQgIAIgJAAQgIAAgEgEgAAIgqQgDgCAAgGQAAgEADgEQAEgDAEAAQAEAAADACIADAEQACACAAADQAAAGgEACQgCAEgGAAQgEAAgEgEg");
	this.shape_359.setTransform(253.4,143.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#F2F2F2").s().p("AgfA2QgHgGAAgLQAAgNAHgNQAIgMANgIQALgIAQAAQAMAAAFAEQAFAEAAAHQAAACgCAFQgCAFgGAFQgGAFgLAEQgKAEgQACIgCAAIgBAHQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAIgOAAQgKAAgIgFgAACgGQgEAEgEAFQgDAGgCAGIgDAHQARgDAJgHQAJgHAAgIQAAgCgCgDQgCgCgEAAQgGAAgFAEgAABgcIAJgeIAXAAIgaAeg");
	this.shape_360.setTransform(241.6,143.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#F2F2F2").s().p("AgVAuQgEgEAAgHQAAgFACgJIALgkIgPAAIACgIIAQAAIAJgbIATAAIgIAbIARAAIgCAIIgRAAIgNArIgBAHIABADIADABQAEAAAEgEIAHgLIAIAAQgFALgGAGQgGAGgFACQgFACgEAAQgIAAgEgFg");
	this.shape_361.setTransform(234.8,144.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#F2F2F2").s().p("AgfA2QgHgGAAgLQAAgNAHgNQAIgMANgIQALgIAQAAQAMAAAFAEQAFAEAAAHQAAACgCAFQgCAFgGAFQgGAFgLAEQgKAEgQACIgCAAIgBAHQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAIgOAAQgKAAgIgFgAACgGQgEAEgEAFQgDAGgCAGIgDAHQARgDAJgHQAJgHAAgIQAAgCgCgDQgCgCgEAAQgGAAgFAEgAABgcIAJgeIAXAAIgaAeg");
	this.shape_362.setTransform(227.3,143.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#F2F2F2").s().p("AgVAuQgFgEAAgHQABgFADgJIAKgkIgQAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgSAAIgLArIgCAHIABADIADABQAEAAAEgEIAHgLIAJAAQgFALgHAGQgGAGgFACQgFACgFAAQgHAAgEgFg");
	this.shape_363.setTransform(215.9,144.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_364.setTransform(207.3,145.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#F2F2F2").s().p("AgYAjQgIgFgEgGQgEgIAAgJQAAgLAGgLQAHgKALgHQALgFAMAAQALgBAHAFQAIAEAFAHQADAHAAAIQABAIgEAIQgDAJgHAHQgGAGgKAEQgJAEgJgBQgKAAgIgDgAgEgZQgFAEgEAIQgDAHgBAHQgDAIAAAFQAAAIAEAFQADAEAHAAQAGAAAFgEQAFgFAEgIQADgIACgGIACgNQgBgIgDgFQgEgEgGAAQgHAAgEAFg");
	this.shape_365.setTransform(197.2,145.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEACgDQAEgDAEAAQAJAAABALQABAFACADQACADAHAAQAGAAADgDQADgDAAgFIgBgEIgFgGIgLgLIgHgIQgCgEAAgFQAAgEACgFQADgEAHgEQAIgEAMABQAIAAAFABIAJADQADADABADIABAEQAAAEgDACQgCADgEAAQgDAAgCgBIgCgDIgDgHIgDgEQgCgCgFAAQgFAAgDADQgDACAAADIABAGIAEAEIAGAGQAJAHAEAEQADAFAAAHQABAGgEAFQgDAFgIAEQgIACgKAAQgSAAgHgGg");
	this.shape_366.setTransform(184,145.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#F2F2F2").s().p("AgfA2QgHgGAAgLQAAgNAHgNQAIgMANgIQALgIAQAAQAMAAAFAEQAFAEAAAHQAAACgCAFQgCAFgGAFQgGAFgLAEQgKAEgQACIgCAAIgBAHQAAAGADADQAEADAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAIgOAAQgKAAgIgFgAACgGQgEAEgEAFQgDAGgCAGIgDAHQARgDAJgHQAJgHAAgIQAAgCgCgDQgCgCgEAAQgGAAgFAEgAABgcIAJgeIAXAAIgaAeg");
	this.shape_367.setTransform(175.7,143.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#F2F2F2").s().p("AAJAjQgEgDAAgGQAAgEACgHIAHgUIACgMIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgGAIgHANQgHAOgFAQIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEQgDAFgCAFIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAHIgCAIIgDAJQALgQAIgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeIgCAIIABACIABAAQADAAAEgDQAEgEADgFIAJAAIgHAKQgFAFgGAFQgHAEgHAAQgHAAgDgDg");
	this.shape_368.setTransform(166.2,145.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#F2F2F2").s().p("AApAiQgDgDAAgFIACgKIAHgVIACgKQAAgDgCgCQgCgCgDAAQgIAAgIAJQgJAIgGAMQgHANgEANIgBAEIgVAAIANgrIADgJQAAgDgCgCQgBgCgEAAQgGAAgHAGQgGAFgGAIQgFAHgFAKIgIAUIgBADIgVAAIAPgyIADgKIgBgCIgCgBIgDABIgFAEIgEAJIgIAAQADgKAIgHQAHgIALAAIAHACQADABACADQACADAAAEQAAAFgDAKIgDAIQAGgIAFgHQAGgHAGgEQAGgFAFgCQAGgDAFAAQAHAAAFAEQAEAEAAAGQAAAFgCAJIgDAIIAMgRQAHgIAJgFQAIgGAKAAQAFAAAEADQAEACABADIABAGIAAAFIgCAIIgJAaIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAQADAAAEgCQADgDAFgHIAIAAQgNAYgTAAQgHAAgEgEg");
	this.shape_369.setTransform(152.5,145.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#F2F2F2").s().p("AAEAhQgDgFAAgJQgGAJgHAGQgHAEgJAAQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgNQAGgNALgIQAKgJALAAQAGAAADACIAEAEIACAGIADgKIAUAAIgQA1IgCAHIABABIABABQAGAAAGgMIAJAAIgGAKIgHAHIgIAFQgDACgFgBQgJABgCgGgAgIgWQgGAIgEAKQgEAKAAAHQAAALAHAAQAEAAAFgEQAFgFADgGQAFgIACgHQACgHAAgGQAAgEgBgDQgCgDgEAAQgGgBgGAIg");
	this.shape_370.setTransform(139.3,145.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#F2F2F2").s().p("AAAAuIAAgBIAAgBIgIAIQgFAEgGADQgHADgGAAQgJAAgFgGQgFgGAAgJQAAgKAEgKQAEgKAGgIQAHgHAJgFQAJgFAKAAQAGAAAEACIAGAHIAKgiIACgGQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgCIgHAAIACgIIAOAAIAJgBIAHgBIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQADAAADgDQAEgEADgFIAIAAIgFAJQgEAGgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgHAHgEALQgEALAAAIQAAAGACADQADACAEAAQAGAAAGgEQAFgEAEgIQAEgGADgHQACgIAAgGQAAgFgDgEQgDgDgDAAQgIAAgHAHg");
	this.shape_371.setTransform(129.7,143.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#F2F2F2").s().p("AgfAgQgHgGAAgGQAAgEADgDQADgDAEAAQAJAAABALQAAAFADADQACADAHAAQAGAAACgDQAEgDABgFIgCgEIgFgGIgLgLIgHgIQgDgEAAgFQABgEADgFQACgEAIgEQAHgEAMABQAIAAAGABIAIADQADADABADIABAEQAAAEgCACQgDADgEAAQgDAAgCgBIgDgDIgCgHIgDgEQgCgCgFAAQgEAAgEADQgDACAAADIABAGIADAEIAHAGQAJAHADAEQAFAFAAAHQgBAGgDAFQgDAFgIAEQgIACgLAAQgRAAgHgGg");
	this.shape_372.setTransform(115.5,145.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#F2F2F2").s().p("AgfAhQgHgGAAgLQAAgNAHgMQAIgNANgHQALgIAQAAQAMAAAFADQAFAEAAAHQAAAEgCAEQgCAFgGAFQgGAFgLADQgKAFgQABIgCAAIgBAHQAAAHADADQAEACAFAAQANAAAMgOIAJAAQgFAIgLAIQgMAJgOgBQgKABgIgGgAACgaQgEAEgEAFQgDAGgCAGIgDAGQARgBAJgIQAJgHAAgJQAAgCgCgCQgCgDgEAAQgGAAgFAFg");
	this.shape_373.setTransform(107.3,145.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#F2F2F2").s().p("Ag2A7IACgHQAGAAACgCQAEgCABgCIACgIIAYhLIABgFQgBgJgJAAIgDAAIADgIIA1AAIgDAIIgKABQgDABgBADIgEAJIgUBEQgDAIABAEQgBADADACQACACAEAAIAHABQAKAAAIgCQAHgCAGgEQAHgGAFgKIAJAAIgKAgg");
	this.shape_374.setTransform(97.9,143.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgyBOIgCgFIAAgcIADgCIAVgFIAEgBQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIAAAEQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAIASgDQABAAAAAAQABAAAAgBQAAAAABAAQAAgBABgBIACgHIABgNIAAgEQgHgBgGAAIgPABIgNgCQgHgBgGgFQgDgEAAgFIACgdQABgLAEgMQADgLAIgHIA9gKIAMAAQAEACAEADQADADgBAJIgDAKIAAABIAAABIABARIgnAFIgCgCIAFgJIACgIIAAgDIgBgCIgBgBIgQACIgEAFIgEAJIgFARIAAAHQAAADAEAAIASAAQAJABAIgBIANABQAGABADAEQACAEgBALQAAAHgDAGIgDAQIABARIAAABIAAABQgFAIgHACIgPAEIgJABIgBAAIgZACIgQABIgKABIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAgBAAg");
	this.shape_375.setTransform(502.3,94.3,1.004,1.004);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgrBNIAAgaIADgGIAAgIQgBgEABgGIAEglIAHgIIABgCIAAAAIgBgBIgBgCIgBgBIgBgBIgDgDIgBgEIADgfIADgDIAMgBIAIgCIAGgDIAwgGQAAAFgDAEQgCAFgBAFIAAADIACADIABADIgBAEQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgOACIgMAEQgEACgEAGQgDAFAAAIIAdgDIgEAfIgeAFIgBAIIgBAIIACAGQADADAEgCIAhgEIAAAYIAAAFIAAACIgBACIgEACIhHAJg");
	this.shape_376.setTransform(492.2,94.2,1.004,1.004);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AhSBVIADgPIAAgHQgCgDABgEIABgDIACgFIAJgeQACgGACgEIABgBIgBgDIgDgBIgCgCQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIACgIIAFgQIACgIQABgIgCgEIAAgNIABgEIABgEIACgCIAvgGIANBNIABAAIACAAIABgCIABAAIAKgcIARgaIABgDIAAgCIgBgCIgCgFIgBgEIACgHQADgEADAAIApgFIAEAEIgQCVIgIABIgIgBIgIAAIgKAAIAKhYIgGAAIgBAEIgCALIgVA7IgGANQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgUADIgCgEIgNhEIAAgIIgCgEIgBAAIgCAAIgDAFIgCAYQgCAPAAASIgCAhIgpAEg");
	this.shape_377.setTransform(479.1,94.3,1.004,1.004);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AAFBjIgKgFIgFgBIgIADIgIACQgIABgGgCQgFgCgEgGQgDgEgBgJIABgQIADgMIAJgVQACgGABgFIgBgFIgFgJIAAgEIAAgBIAKgkQACgDAEgBIAfgHIAfgGIAEABIAGAEIgCAVQAFACADAFQADAFgBAHIAAAMIgMBUQgFAIgIADQgGADgIABIgEAAIgFgBgAADgSIgEABQgCABgBAEIAAAMIgGATIgDANIgBABQgBAJABAJQABAHADALIADAAIAEAAIACAAIAGgCQACgCABgDIAIhPIAAgCIgBgBgAgVg6QgGgBABgCQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIAFgGIAIgJIAIgNIADgCIANgEIAKABIAEABIACACIACAJIABABIABABIAAAEIAHAGIACADIABAEIgYAHIgDgRIgHAIIgDAFIgCAEQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgJAAIgCABg");
	this.shape_378.setTransform(466.1,91.8,1.004,1.004);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgdBLIACgqIAFgpIgBgHIAAgCIABgDIAEgKIAAgBIABgBQAAgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgLACgDAAIgHgDIgEgDQgDgBgFAAIACgRIABgEIACgDIBkgNIgBAQIgEAIIACACIgBAIIgVADIgDACIgEAJIgBADIgFAYIgDAYIgFAuIgHAEIgJACIgMACg");
	this.shape_379.setTransform(455.6,94.3,1.004,1.004);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("Ag6BPQgEgBgCgEQgCgDABgIIAHh0IAAgCIABgEIAAgCIAAgDQAEAAACACIAJAFQADACACgBQAEAAABgCIABgFIADgEQABgCAFgBIAHAAIAIABIAHAcIANAoIADABIACgFIAIgsIACgWIACgDIAlgEIgLBQIgKAJIAIAIIgGAxIgCACIgDABIgCAAIgEgCIgEAAIgCgBIgDgCIgFACIgJAGQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgFgFIgDgIIgMgbIgIgcIgCAAIgCABIgBACIgHBEIgOACIgGABIgEAAg");
	this.shape_380.setTransform(443.2,94,1.004,1.004);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AgpARIABgUIAQgWIgCgbQAAgDAEgDIAKgHIALgGIAGgCIAGADIAJgCIAUgGIAJgCIAJArIgIAfIAGAOQgCAPACAPIACAeIgVAAIgLADIgGgaIgaAAIgGAfIgtAFgAAAgNIABAOIgEAOIAUgCIAAgrIgDAAg");
	this.shape_381.setTransform(429.6,94.1,1.004,1.004);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgsBOIALhhIADgKIAAgJIgCgNQgBgDABgEIAAgCIABgIIABgCIAggHIASgCIAKAAIAJAAIAGAAIgDAbQAAABgFACIgZAFIgJABIgDAIIAAALIABAGIAKABIAKgBIAIgCQAEgDAEAAIgEAiIgWAFIgEAAIgGgBIgBAAIgBABIgBABIgEA0QAAAEgEACIgJABIgLAAQgGABgDADg");
	this.shape_382.setTransform(421.1,94.3,1.004,1.004);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgrBNIAAgaIADgGIAAgIQgBgEABgGIAEglIAHgIIABgCIAAAAIgBgBIgBgCIgBgBIgBgBIgDgDIgBgEIADgfIADgDIAMgBIAIgCIAGgDIAwgGQAAAFgDAEQgCAFgBAFIAAADIACADIABADIgBAEIgCACIgPACIgMAEQgEACgEAGQgDAFAAAIIAdgDIgEAfIgeAFIgBAIIgBAIIACAGQADADAEgCIAhgEIAAAYIAAAFIAAACIgBACIgEACIhHAJg");
	this.shape_383.setTransform(406.1,94.2,1.004,1.004);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgsAQIAIgQIgFgaIACgpIBEgLIAHAAIAHACIAGAEQABAAAAAAQABABAAAAQAAABAAAAQABABAAABIgFA9IAFAsIgBAJIgDAHIgCADIAAAAIgDAEIgGAEIgOADIgTACIgDAAIgUADIgDABIgIACIgVAEgAgCgwIgFBYIAJgBIAFgBQACgBABgEIADhGIgEgMQgBAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_384.setTransform(395.4,94.3,1.004,1.004);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("Aglg0IAFgPIBCgLQAGgBACACQAEAAABADQACADAAAFIgCAqIgBAEQgBAHgDADIgHAHIgGAEQgEACAAACQAAADAEAAIATAEQADACAAAFIAAABIgEARIABAcIABABQgJABgLADIgUAEQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgEQABgHADgIQAEgJAAgGQABgFgCgDQgCgCgEgBIgIAAIgIAAIgEAvIgkAEgAgGguIgDAjIAWgGIADggg");
	this.shape_385.setTransform(378.5,94.2,1.004,1.004);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("Ag4A4IABgJQABgMADgGQAEgJAAgIIAAAAIgCgCIgCAAIAFhIQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIACgBIAggBIgEAgIABACIABADIAAADIgEA1IAAAKQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABAAIAEACIAEAAIAGgBIACgBIABgDIAMhpIABgDIACgCIABgBIAHABQABABAFAAQAGgBAGgCIALgDIAAAAIACAIIgBAIQABAEgCACIgFAFIgKBlIgOAVIgDADIgeAGIgKABQgbAAgMgYg");
	this.shape_386.setTransform(368.3,94,1.004,1.004);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AgrBNIAAgaIADgGIAAgIQgBgEABgGIAEglIAHgIIABgCIAAAAIgBgBIgBgCIgBgBIgBgBIgDgDIgBgEIADgfIADgDIAMgBIAIgCIAGgDIAwgGQAAAFgDAEQgCAFgBAFIABAFIABABIABADIgBAEIgCACIgPACIgMAEQgEACgEAGQgDAFAAAIIAdgDIgEAfIgeAFIgCAQIACAGQACACAFgBIAhgEIAAAYIAAAFIAAACIgBACIgCABIgCABIhHAJg");
	this.shape_387.setTransform(357.8,94.2,1.004,1.004);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgyBOIgBgFIgBgFIAAgXIADgCIAVgFIAEgBQABAAABAAQABAAAAAAQABABAAAAQABAAAAABIAAAEIAAAEQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIASgDQABAAAAAAQABAAAAAAQABgBAAAAQAAgBABgBIACgHIACgRQgJgBgFAAIgOABIgOgCQgGgBgHgFQgDgEAAgFIAAgKIACgTQACgNADgKQADgLAJgHIA8gKIAMAAQAFACADADQADAEAAAIIgBACIgBADIgCAFIAAABIAAABIABARIgnAFIgCgCIAFgJIACgIIAAgBIAAgCIgBgCQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgQACQgCABgBAEIgIAUIgCAGIAAAHQAAADAEAAIASAAQAJABAIgBIANABQAGABADAEQADAEgCALIgCANIgDAOIgBACIABARIAAABIAAABQgFAIgHACIgPAEIgJABIgBAAIgZACIgQABIgKABIgBAAIgDgBg");
	this.shape_388.setTransform(347.9,94.3,1.004,1.004);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AgyBOIgCgFIAAgcIADgCIAVgFIAEgBQABAAABAAQABAAABAAQAAABAAAAQABAAAAABIAAAEIAAAEQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAIASgDQABAAAAAAQABAAAAAAQAAgBABAAQAAgBABgBIACgHIACgRQgJgBgFAAIgOABIgOgCQgGgBgHgFQgDgEAAgFIAAgKIACgTQABgIAEgPQADgLAIgHIA9gKIAMAAQAFACADADQADADgBAJIAAACIgBADIgCAFIAAABIAAABIABARIgnAFIgCgCIAFgJIACgIIAAgDIgBgCIgBgBIgQACQgCABgBAEIgFAJIgFARIAAAHQABADADAAIASAAQAJABAIgBIANABQAGABADAEQADAFgCAKIgCANIgDAOIgBACIABARIAAABIAAABQgFAIgHACIgPAEIgJABIgBAAIgZACIgQABIgKABIgBAAIgDgBg");
	this.shape_389.setTransform(337.2,94.3,1.004,1.004);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgpARIABgUIAPgWIgBgbQABgDAEgDIAJgHIALgGIAGgCIAGADIAJgCIAVgGIAIgCIAJArIgHAfIAFAOQgDAPADAPIACAeIgVAAIgLADIgHgaIgZAAIgFAfIguAFgAAMgbIgMAOIABAOIgEAOIAUgCIAAgrIgCAAg");
	this.shape_390.setTransform(325.4,94.1,1.004,1.004);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("Ag7BMIgDAAIgBgBIAHhCIAGgLQACgEABgHIAAgFIgEgEIAEgnIAUgGIAUAAIgHA8IAagBIAGgCQACAAABgFQABgIgBgIIAAgRIADgTQAFgDAHgCIAPgCIAIgBIADAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAADIgFAiIgFAjQgCANABAUIAEAhIgUAFIgOgBIgIgBIgGAAIAEgnIgEgEIgZADIgCACIgBADIgBAIIAAADIgBANQgBAFACAIIgDADIgdADg");
	this.shape_391.setTransform(313.2,94.1,1.004,1.004);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgwBKQgDgFAAgKIABgcIAGgpIAAgCIAAgCIABgKIAHgHIADgGQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgBIgGgGIAAgCIACgEIAGgFIADgBIAMgIIACgBIA/gIIADABIgCAgIgBAHIAAADIghADQABgDAAgCIgCgDQAAgBgBAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgFAAIgFACIgFACIgCAEIgBAFIgEAPIACACIADAhIgHAVQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAFABIAGABIAEAAQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAIACgEIACgJIAfgDQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAAFIgDANQgCAGgDADQgFAEgEACIgNAGIgwAFQgKAAgFgDg");
	this.shape_392.setTransform(302.2,92.2,1.004,1.004);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AAODQIgPgHIgOgHQgHgDgHABQgLABgJAEQgIAGgMABQgXADgRgGQgPgIgIgNQgIgPgCgSQgBgVADgYQABgOAGgQIAYg5QAGgPABgOQABgJgDgFIgKgWQgDgGABgHIAAgDIAVhQQADgKAEgIQAEgKALAAQAygJAhgKQAsgLAogFQAEAAAGAEIAPAJIgFA5QAQAFAHAOQAGAOAAAQQABAQgDAUIgSCUIgNBKQgPAYgTAHQgQAHgYAEIgJAAQgIAAgFgCgAAJhsQgIABgDADQgHADgDAKQAAAUgCAOQgCAPgDAKIgTA6IAAAEQgDAbADAXQACAWAGAZIAJAAIAKgBIAIgBIAPgEQAJgEAAgJIAYjVIgDgEIgDgCg");
	this.shape_393.setTransform(485.5,54.2,1.004,1.004);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("Ah4ArIAVgrIgLhGIAEhuIC5gdQAGgBAKACQALABAJAEQALAEAGAEQAGAFAAAGIgOCjIAPB3QgBANgEALIgGASIgFAJQgCAEAAgEQgBAGgGAGQgHAFgJADQgIAEgLACQgKADgIAAIgXADQgFABgIAAIhQAKIgDACIgZAHIg2AJgAANiJIgVAJIgLDsIAagDQAGgBAGgEQAGgCABgIIAKi+IgNggIgEgGg");
	this.shape_394.setTransform(455.8,55,1.004,1.004);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("Ah1DNIAAgJIABg+IAIgMQACgJgDgNQgCgMACgOIALhmIASgUQADgFAAgDIAAgBIgBgCIgDgEIgHgFQgCgCgFgIIgDgIIAIhVIAIgHIAOgBIATgCQALgBAJgDQAMgFAGgEICBgQQgCAPgGALQgHAKgBAPIAAAGIAGAMIAAAHIgBAJQgBAFgGADQgUAAgTAEQgRACgOAIQgNAHgJAOQgIANgBAWIBOgJIgJBXIhUAKIgCAWQgCAIAAAOQABAKAFAGQAGAGAOgBIBZgLIgDBOIAAAEIAAADIgGAEIgHADIi9AYg");
	this.shape_395.setTransform(430.3,54.6,1.004,1.004);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AhkiNIAMgoQAWgBATgDIBHgOQAVgFAUgCIAbgDQAMgBAJACQAIADAFAHQAFAIgBAOIgFBvIgCALQgCAQgIAKQgKALgJAHIgSANQgJAGAAAFQgBAHALACIAZADQAPADAJAEQALAFgBAMIgMAyIAEBIIABAFQgbADgZAHQgaAIgaADQgIABgCgEQgCgEABgHQACgTAJgVQAIgTADgVQABgOgGgGQgGgGgLgDQgKgCgLABIgWACQgFAoAAAWQgBAcgEAhIhhAMgAgRh8IgKBeIA8gRIAJhUg");
	this.shape_396.setTransform(402,54.8,1.004,1.004);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("Ah2DRIAbkEQACgDADgLQACgKACgDIABgHIAAgSIgGghQgBgJABgKIAAgGIADgUIACgHIBHgPICCgKIgHBIQAAAEgOAEQgRAGgOADIgjAGIgXADIgEAKIgFAKIAAATIACAaQASADAKAAIAZgCQAMgCAKgFQAJgFAMgBIgKBbIg0ANIgNABIgEAAIgIgCIgLgBQgBAAgDADIgEAEIgKCJQAAANgLADQgLACgNAAIgdACQgPABgJAJg");
	this.shape_397.setTransform(378.2,54.8,1.004,1.004);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("Ah6DIIAPhTIADgwQAEgJgBgOQgBgLACgeQAAgXAIg0QAHg2AShJQAGgDAHABIAMADIAMAEQAGADAGgBIAQgCQAHgBAFgCIAMgFIAKgCQAFAAAFADQgGA2gGAcQgFAZgJAgQgFASgJAVIgLAeQgGARgDAMQgCANAAAXQAAACADAEIAKAKIAKAIQAFADAEAAIBvgUIgYBfIjcAbg");
	this.shape_398.setTransform(352.4,55.3,1.004,1.004);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AhvArIAFg1IAng6IgEhHQAAgGAMgJQAKgJAQgJIAcgQQANgGAFgBIAQAKIBPgXQAQgEAGgBIAYByIgVBRIANAnQgCAUAAATIAGBQIADAoIg3gCIggAJIgQhEIhFAAIgNBRIhGAFIgyAJgAAnhRIgiAlIgFAIIADAnIgMAkIA0gEIADh1g");
	this.shape_399.setTransform(323.8,49.4,1.004,1.004);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_400.setTransform(660.4,75.1,1.004,1.004);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_401.setTransform(608.2,177.4,1.004,1.004);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_402.setTransform(735.7,8.8,1.004,1.004);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_403.setTransform(525,17.9,1.004,1.004);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_404.setTransform(425.6,141.3,1.004,1.004);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_405.setTransform(465.7,112.2,1.004,1.004);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_406.setTransform(281.1,57,1.004,1.004);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_407.setTransform(305.2,72.1,1.004,1.004);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_408.setTransform(163.7,90.1,1.004,1.004);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_409.setTransform(-8.9,112.2,1.004,1.004);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_410.setTransform(70.4,31.9,1.004,1.004);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_411.setTransform(742.7,145.3,1.004,1.004);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_412.setTransform(604.2,283.8,1.004,1.004);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_413.setTransform(798.9,279.8,1.004,1.004);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_414.setTransform(404.5,310.9,1.004,1.004);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_415.setTransform(499.9,229.6,1.004,1.004);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_416.setTransform(697.6,355.1,1.004,1.004);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_417.setTransform(189.8,362.1,1.004,1.004);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_418.setTransform(5.1,195.5,1.004,1.004);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_419.setTransform(209.8,229.6,1.004,1.004);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_420.setTransform(31.2,348,1.004,1.004);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_421.setTransform(705.6,475.5,1.004,1.004);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_422.setTransform(800.9,556.8,1.004,1.004);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_423.setTransform(590.2,547.7,1.004,1.004);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_424.setTransform(490.8,424.3,1.004,1.004);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_425.setTransform(531,453.4,1.004,1.004);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_426.setTransform(306.2,590.9,1.004,1.004);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_427.setTransform(286.1,575.8,1.004,1.004);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_428.setTransform(332.3,438.3,1.004,1.004);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_429.setTransform(56.3,453.4,1.004,1.004);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_430.setTransform(135.6,533.7,1.004,1.004);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#262626").s().p("AjHBLIAAiVIGPAAIAACVg");
	this.shape_431.setTransform(108,548.2,1.004,1.004);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#333333").s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_432.setTransform(400.5,300.4,1.004,1.004);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#FFFFFF").p("A4DAAMAwHAAA");
	this.shape_433.setTransform(410,149.6,1.002,1.002);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AhkCbIgEgJIAAgKIAAgGIAAgKIAAgNIAAgLIAAgFIAFgFIARgEIAOgEIAMgCIAIgCQAIAAABADIABAIIgBAJQAAAEAEgBIAmgEQAFgBACgGIAEgNIACgPIABgMIABgIQgPgCgOABIgcAAIgcgCQgNgDgNgJQgFgIAAgLIAAgVIACgNIACgaQACgWAHgWQAIgWAQgOIAbgGIAYgFIAVgDIAYgEIAZgCQANgCALACQAKACAHAHQAGAHgCARIAAADIgDAHIgCAGIgBAEIgBACIAAADIACAYIAAAFIAAAFIhNAJIgEgFIAJgQIAEgRIAAgCIAAgEIgBgEIgDgBIggAEQgDABgEAIIgIATIgIAVIgDANIAAANQAAAFAIACIAHgBIALAAIALAAIAHABIAiAAQAQgBALACQALACAGAJQAGAIgDAWIgFAbIgGAbIgBAFIACAhIgBADIAAACQgJAOgPAFQgPAFgPACIgRACIgCABIgUACIgfACIgfACIgVABIgDABQgDAAgCgDg");
	this.shape_434.setTransform(498.8,109.2);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("AhXCaIAAgHIAAgPIAAgRIABgPIAFgJIgBgQQgBgKABgKIACgQIABgMIACgTIACgRIABgMIADgDIAGgFIAGgHIACgGIAAgBIgBgBIgCgDIgEgCIgBgCIgGgHIgDgGIAHhAIAFgGIAMAAIANgBIAQgEIAMgGIBhgMQAAALgFAIQgGAJAAAKIAAAEIACAFIACAEIAAAGIgBAHQgBADgDACIgfADQgNACgJAFQgKAGgHAKQgFALgCAQIA7gHIgIBCIg9AHIgCAQIgBAQQAAAIAEAFQAEAEALAAIAMgCIAVgCIAUgDIANgCIAAAMIAAARIgBASIgBAMIAAADIAAACIgEADIgGADIiOARg");
	this.shape_435.setTransform(478.7,109.1);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AhbCWIACgOIAEgTIADgSIACgLIACgkQADgIAAgKIAAgfIAGg4QAFgkANg7QAFgCAGAAIAJADIAJADIAJABIAMgBIAIgDIAJgDIAIgBIAIACQgFAkgEAZIgLArIgLAdIgIAWIgGAXIgCAaIADAFIAGAHIAIAGIAGADIBUgQIgSBIIilAUIAAgCg");
	this.shape_436.setTransform(458.7,109.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AAKDHIgKgGIgLgFQgFgCgGAAQgIABgGAEQgGAEgJABQgTACgLgFQgMgFgGgKQgGgLgBgPQgBgPACgSQABgMAFgKIAJgWIAJgVIAFgXIgBgKIgEgIIgFgJIgBgIIABgDIADgOIAFgSIAEgSIADgKIAFgNQAEgHAIgBIA9gOQAfgHAggEIAIACIAFADIAHAEIgFArQANAEAEAKQAFAKABANIgCAZIgEAaIgEAlIgCAZIgEAYIgEAZIgGAfQgLASgOAFQgOAGgQACIgHABQgGAAgEgCgAAWgoIgJABIgGABIgJADQgEACgDAHIgBAZIgEATIgGATIgIAaIAAACQgCATABATQACASAFARIAHAAIAHAAIAGgBIALgEQAGgCABgHIARigIgBgDIgDgBIgHAAgAgeh2IgJAAIgFAAQgKgBABgEIAEgIIALgMIAPgTIAQgaIAHgDIAJgDIAKgDIAHgDIAUACIAIACIAEAEIABAFIABAGIACAHIACADIABACIAAAHIAJAHIAGAGIAEAFIADAJIgxANIgFghIgGAGIgIAKIgIAKIgEAIIgEACIgIAAIgIAAIgEABIgFAAg");
	this.shape_437.setTransform(439.9,104.4);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("AhLhpIAJgeIAfgEIAbgFIAagGIAfgEIAUgDIAQABQAGACADAFQAEAGgBALIgDBTIgBAJQgCALgGAIIgOAOIgOAJQgGAEgBAEQAAAGAIABIATADIASAFQAIADgBAJIAAADIgIAeIgBAFIADA2IABABIAAADQgVACgSAFQgTAGgUACQgGABgCgDIAAgIQABgPAHgPQAGgPACgPQABgKgFgFQgEgFgIgCIgQgBIgRACIgDAuIgEAuIhIAJgAgNhdIgHBHIAtgNIAHg/g");
	this.shape_438.setTransform(417,109.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("Ag6CXQAAgrAFgqIAJhTIgCgHIgCgIIABgDIABgGIAKgUIAAgBIABgDQgBgEgDAAQgVAFgIgCQgHgBgFgEIgIgGQgFgDgNACIABgIIABgJIACgLIABgHIADgJIACgFIDLgZIgDAeIgJAQIAGAGIgBAQIgsAFIgEAEIgGAJIgFAJIgCAGIgJAvIgHAxIgEAwIgEAsQgHAHgIADIgTAEIgMACIgNABg");
	this.shape_439.setTransform(397.2,109.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("Ah1CeQgIgCgEgHQgEgHABgRIAPjoIABgEIAAgHIABgGIAAgEQAGAAAFACIAJAGIAKAGQAFADAGgBQAHgBACgEIADgJIAFgKQADgEAJgBIAOAAIAQACIADALIADARIAEARIADALIAGAVIAKAaIAIAWIAFAKIAEAEIAGgKIACgKIADgZIAFgdIAEgZIAEgsIAGgFIBIgKIgKBRIgLBRIgVASIAQAQIgGAxIgFAxIgEAEIgFACIgFgBIgIgCIgHgCIgFgBIgHgEIgJAEIgJAGIgIAGIgJADQgEAAgFgEIgJgLIgIgQIgIgRIgGgPIgDgJIgFgOIgHgVIgGgVIgDgOIgDAAIgCABIgDADIgCADIgPCJIgbAEIgOACIgHgBg");
	this.shape_440.setTransform(372.5,108.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AALCcIgMgFIgKgFQgFgDgGABQgIABgGADQgHAEgJABQgSACgLgFQgMgEgGgLQgGgKgBgPQgBgPACgSQABgMAEgLIAJgVIAJgWIAGgVIgBgLIgFgIIgEgIQgCgFABgFIAAgCIAEgOIAEgTIAFgRIADgKIAFgNQADgHAJgBIA9gOQAfgIAggEQADgBAFADIAFAEIAGAEIgEAqQANAEAEALQAFAKAAAMIgBAbIgEAZIgEAlIgDAYIgDAYIgFAaIgFAfQgLARgOAGQgOAFgQACIgHABQgFAAgEgCgAAXhSIgJABIgHABIgJACQgEACgDAIIgBAZIgEATIgGATIgIAZIAAACQgDATACATIAHAkIAHgBIAHAAIAGgBIALgDQAHgDAAgHIARifIgBgDIgDgCIgGABg");
	this.shape_441.setTransform(347.6,108.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AhfCTQgJgJAAgUIAEg4IABgJIAEgWIACgUIACgSIABgOIAAgEIACgFIABgUIAFgFIAIgJIAHgKIADgIIAAgCIgNgLIAAgGIAEgGIAHgGIAGgFIAFgCIAHgFIAKgGIAIgFIAEgDIB+gPIAFAEIAAAHIAAAQIgBATIgBAQIAAAFIAAAHIgBAHIgBAFIhCAIQACgHgBgFQgBgEgDgDIgIgCIgKAAIgMADIgLAFIgEAIIgCAKIgEAPIgDAQIADADIAGBBIgOAtQAAAEAFACIALADIALABIAIAAQAFAAACgEIAFgHIADgJIACgIIA9gHQABAAABAAQAAAAABAAQABAAAAABQAAAAAAABIAAAHIAAADQgCAQgEAKQgEALgHAHQgHAHgKAFIgZAMIgIABIgMABIgLACIgIABIg6AGIgCAAQgTAAgIgIg");
	this.shape_442.setTransform(326.7,105.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AgyhGIAGgUIAVgCIASgEIARgDIAVgEIANgBIAKAAQAFACACADQACAEAAAHIgDA4IAAAFQgBAIgFAFIgJAJIgJAGQgEADAAADQgBAEAGAAIAMACIAMAEQAGACgBAGIAAABIgFAUIgBAEIACAkIAAABIAAABQgNACgNADQgMAEgOABQgBABAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAIgBgHQABgKAEgKQAEgJACgKQABgHgEgDQgDgEgFgBIgKAAIgLABIgDAfIgCAeIgwAGgAgIg+IgFAvIAdgJIAFgpg");
	this.shape_443.setTransform(645,234.5);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("Ag6BmIAAgEIAAgKIAAgLIABgKIADgGIAAgLQgBgGABgHIAAgLIABgIIACgMIABgMIABgIIADgCIADgDIAEgFIABgDIAAgBIAAgBIgCgCIgCgCIgCgBIgDgEIgCgFIAFgqIADgEIAHAAIAKgBIAKgCIAIgFIBBgIQgBAHgDAHQgEAFAAAHIABADIABADIABADIAAADIgBAFQAAADgDABIgUACQgJABgGAEQgGAEgEAGQgFAHAAALIAmgEIgEArIgpAEIgCALIAAAMQAAAEACAEQADACAGAAIAJgBIAOgBIANgCIAJgCIAAAIIAAAMIAAAMIgBAIIAAACIAAABIgDACIgEABIheANg");
	this.shape_444.setTransform(632.3,234.4);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgyhGIAGgUIAVgCIASgEIARgDIAVgEIANgBIAKAAQAFACACADQACAEAAAHIgDA4IAAAFQgBAIgFAFIgJAJIgJAGQgEADAAADQgBAEAGAAIAMACIAMAEQAGACgBAGIAAABIgFAUIgBAEIACAkIAAABIAAABQgNACgNADQgMAEgOABQgBABAAAAQgBAAgBAAQAAAAgBgBQAAAAAAAAIgBgHQABgKAEgKQAEgJACgKQABgHgEgDQgDgEgFgBIgKAAIgLABIgDAfIgCAeIgwAGgAgIg+IgFAvIAdgJIAFgpg");
	this.shape_445.setTransform(618.2,234.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgmBcIABgJIACgPIACgZIABgSIABgXIABgSIABgIIgCgPIAEgdQACgLAEgGQAEgGAHgDQAHgCAMgCIAbgDQABAAABAAQAAAAABAAQAAABAAAAQAAABAAABIgFAsIgGAHIgCAEIAAAFQAAAEgFAHIgBACIgCADIgBAEIgBACIABAHIADAFIACAEIABAIIgBAJIgDAWIgEAYIgCAVIgCAJIgvAJg");
	this.shape_446.setTransform(608.2,234.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("AgmBkQABgdACgbIAGg3IgBgEIgBgGIAAgCIABgDIAHgNIAAgCIAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAIgPACIgIgBIgEgCIgEgDIgFgCIgJAAIAAgFIABgGIABgHIABgFIABgGIADgEICEgQIgBAVIgGAKIADADIAAALIgcADIgEADIgDAGIgDAHIgBADQgHAfgEAgIgFA8QgGAFgFACIgMADIgIABIgJAAg");
	this.shape_447.setTransform(598.2,232);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AhDBoIgCgGIAAgHIAAgEIAAgHIAAgJIAAgHIAAgDIADgEIAMgCIAJgDIAIgBIAFgBQAFgBABADIABAFIgBAGQAAAAAAABQABAAAAABQAAAAABAAQAAAAABAAIAZgDQADAAACgEIACgJIACgLIAAgHIABgFQgKgCgJABIgTAAIgSgCQgJgBgJgGQgDgGAAgHIAAgOIABgJIABgRQACgOAFgPQAFgPAKgJIATgEIAPgDIAOgDIAQgCIARgCQAJgBAHACQAHABAEAFQAEAEgBALIgBADIgBAEIgCAEIAAADIgBABIAAACIACAQIAAADIgBAEIgzAGIgDgDIAHgMIACgKIAAgCIAAgDIAAgCIgCgBIgWADQgCAAgCAGIgGAMIgFAOIgCAJIAAAJQAAADAFABIAFAAIAHAAIAHAAIAFAAIAXAAQAKAAAIABQAHACAEAFQAEAFgCAPIgDASIgEASIgBADIABAXIAAABIAAACQgGAJgKADQgKAEgKABIgLACIgCAAIgNABIgVACIgVABIgNABIgCAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQAAAAgBAAg");
	this.shape_448.setTransform(253.6,234.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgmBkQAAgcACgcIAHg3IgCgFIAAgFIAAgDIAAgDIAHgNIAAgCIABgBQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgNADgGgBQgFgBgDgCIgGgEQgDgCgIABIAAgFIABgGIABgHIABgFIACgGIACgEICGgQIgBAUIgHALIAEADIgBALIgcADIgEAEIgDAFIgDAHIgCADIgGAgIgEAgIgEAgIgCAdQgFAFgFACIgMACIgIABIgJABg");
	this.shape_449.setTransform(239.7,234.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AhOBpQgFgBgDgFQgDgEABgLIAKibIABgDIAAgEIAAgEIAAgDQAFAAADACIAGAEIAGADQAEACAEAAQAEgBABgDIADgGIADgGQACgDAGAAIAKgBIAKACIACAHIACALIADAMIACAHIAEAOIAGARIAGAPIACAHIADACIAEgGIABgHIADgRIADgTIADgRIADgdIADgEIAxgGIgHA2IgIA1IgOANIALALIgEAgIgDAhIgDACIgEACIgCgBIgGgBIgFgBIgDgBIgEgDIgHACIgFAFIgGAEIgGACQgDAAgDgDIgGgHIgFgLIgFgLIgEgKIgCgHIgEgIIgEgOIgEgPIgCgJIgCAAIgCABIgCACIgBABIgKBcIgSADIgJABIgFgBg");
	this.shape_450.setTransform(223.2,234.1);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("Ag6BmIAAgEIAAgKIAAgLIAAgKIAFgGIgBgLQgBgGABgHIABgLIABgIIABgMIABgMIABgIIADgCIADgDIADgFIACgDIAAgBIAAgBIgCgCIgCgCIgCgBIgDgEIgCgFIAFgqIADgEIAHAAIAKgBIAKgCIAIgFIBBgIQAAAHgEAHQgEAFAAAHIABADIABADIABADIAAADIAAAFQgBADgDABIgUACQgJABgGAEQgGAEgFAGQgEAHAAALIAmgEIgEArIgpAEIgCALIAAAMQAAAEACAEQADACAGAAIAJgBIAOgBIANgCIAJgCIAAAIIAAAMIAAAMIgBAIIAAACIAAABIgDACIgEABIheANg");
	this.shape_451.setTransform(207.9,234.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AhvBxIADgGIABgHIABgDIABgDQAAgGgBgFQgBgEAAgFIABgEIADgGIAFgPIADgNIAEgNIAGgNIAAgCQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgDgCIgEgDQgBgBAAgDIACgMIAEgKIADgLIADgKQABgJgCgIQgBgHABgKIABgFIABgFIADgDIA/gHIASBmIABAAIACAAIACgCIACgBIACgIIAEgKIAEgLIADgIIAEgHIADgFIAHgIIAFgJIAEgGIABgDIAAgCIAAgCIgBgCIgCgDIgCgFIgBgBIAAgDIADgJQADgGAGAAIA2gHIAFAGIgDAeIgCAdIgCAeIgCAdIgHApIgFAoIgLAAIgLAAIgKgBIgNABIAMh2IgIABIgBAEIgBAHIgCAIIgBAEIgFAMIgGAUIgHAUIgFAPIgDAIIgFAKIgDAIIgCADIgbAEIgCgEIgDgLIgCgPIgEgSIgEgQIgCgOIAAgDIgBgHIgCgHIAAgFIgBgFIgBgEIgBgDIgBAAIgCAAIgDAEIgBAEIgBAGIgBAJIgBAKIAAAGQgDAWAAAWQAAAVgDAXIg3AGg");
	this.shape_452.setTransform(190.6,234.6);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("Ag6BmIAAgEIAAgKIAAgLIABgKIADgGIAAgLQgBgGABgHIAAgLIABgIIACgMIACgMIAAgIIADgCIADgDIAEgFIABgDIAAgBIAAgBIgCgCIgCgCIgCgBIgDgEIgCgFIAEgqIAEgEIAHAAIAKgBIAKgCIAIgFIBBgIQgBAHgDAHQgDAFgBAHIABADIAAADIACADIAAADIgBAFQAAADgDABIgUACQgJABgGAEQgGAEgEAGQgFAHAAALIAmgEIgEArIgpAEIgCALIAAAMQAAAEACAEQADACAGAAIAJgBIAOgBIANgCIAJgCIAAAIIAAAMIAAAMIgBAIIAAACIAAABIgDACIgDABIhfANg");
	this.shape_453.setTransform(173.9,234.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AgfBpIgHgDIgEgEIgBgGIgBgIIgCgGIgCgDIAAgDIAAgHQgFgFgCgEIgCgKIgBgKIgBgMQgCgJgDgGQgDgGgCgHIgBgJIgBgHIAAgCIgBgKIABgRIAAgQIABgLIADgDIADgCIAFgBIAKgBIALgBIAKgBIAGgCQACAJAAAJIgBATIgCASQAAAKACAJIAAACIACAHIACAGIADAGIABADIAEARQADgDACgHIACgOIAAgHIABgGIABgWIADgSIAFgTIAEgQIACgHIADgEIAZgDIAGABIAFABIACgBIAKgHIADgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIABAPQgCAKgEANIgLAhIgRAzQgJAfgLAtIgHADIgJADIgJADIgGACg");
	this.shape_454.setTransform(160.9,234.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AhLBLIAAgHIABgGQABgMAEgLQAFgLABgMIAAgBIgDgBIgDgBIAHhgQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAFgBIADAAIAIAAIALgBIALgBIAIAAIgEArIABADIABADIgBAFIAAAJIgBAIIAAAEIgCANIgBASIgBATIgBANIAEADIAFACIAFAAIAGgBIADAAIADgCIACgDIABgGIAOiHIABgDIADgEIABAAQAGgBADACQAEABAGAAIAOgEIAOgEIACAAIACALIgBALIgBAHIgGAHIgPCHIgHAMIgGAJIgFAHIgCACIgCACIgWAFIgTAEIgNABQgjAAgRggg");
	this.shape_455.setTransform(145.4,234.1);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AAHBoIgHgDIgHgEQgDgBgEAAQgFAAgFADQgEACgGABQgMACgIgEQgHgDgEgHQgEgHgBgKQgBgKACgMQAAgIADgHIAGgOIAGgPIAEgNIgBgHIgDgGIgDgFQgBgDABgEIAAgBIACgKIADgMIADgMIACgGIAEgJQACgFAFAAIApgKQAVgFAVgDQACAAADACIADACIAFADIgDAcQAIADAEAHQADAGAAAJIgBASIgDARIgCAYIgCAQIgCAQIgDARIgEAUQgHAMgKAEQgJAEgLABIgFAAIgGgBgAAPg2IgGAAIgEABIgGACQgCABgCAFIgBARIgDANIgEAMIgFAQIAAACQgCAMABANIAFAYIAEAAIAFgBIAEAAIAHgCQAFgCAAgFIALhqIgBgCIgBgBIgFABg");
	this.shape_456.setTransform(130.3,234.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AhtBwIACgGIABgHIAAgDIABgDIgBgKIAAgJIAAgEIAEgHIAFgOIADgNIAEgNIAFgMIABgDQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgEgBIgCgDQgCgBABgDQAAgLAFgKQAEgKACgLQABgJgCgIQgBgHABgJIABgGIABgEIADgEIA9gIIATBnIAAAAIADgBIACgCIABgBIADgHIAEgLIAEgLIACgHIAFgHIADgFIAGgIIAGgJIADgGIAAgBIAAgCIAAgBIABgCIgCgGIgCgEIgBgDIgBgCIAEgJQACgFAGgBIA2gGIAFAFIgDAeIgCAeIgCAdIgDAdIgFAoIgGAoIgMAAIgJAAIgLgBIgNABIAMh2IgIABIAAAFIgCAHIgCAHIgBAFIgCAGIgEAMIgFANIgFAOIgEAMIgDAIIgDAIIgDAKIgEAIIgCAEIgbAEIgBgFIgDgKIgEgPIgDgRIgDgRIgDgOIAAgDIgBgHIgBgHIgBgFIAAgFIgBgDIgCgEIgBAAIgCABIgCAEIgCADIgBAGIgBAJIgBAKIgBAGQgCAWAAAWQgBAUgCAXIg1AGIABgDg");
	this.shape_457.setTransform(112.9,232.1);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FCEE21").s().p("AgBAAIAAhzIACBzIAAB1IgCh1g");
	this.shape_458.setTransform(655.8,293.7,1.002,1.002);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFBE17").s().p("AgFB6QgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgDjvQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAOAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIADDvQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_459.setTransform(655.8,293.6,1.002,1.002);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFBE17").s().p("AgLCdIgEk4QAAgBAAgBQABAAAAAAQAAgBABAAQABAAAAAAIAUgBQABAAABAAQAAABABAAQAAAAABABQAAABAAAAIAEE4QAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAIgUABQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAgBAAAAg");
	this.shape_460.setTransform(634,296.7,1.002,1.002);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FCEE21").s().p("AAABVIgBj/QABArABAqIABEAIgChWg");
	this.shape_461.setTransform(622.8,295.2,1.002,1.002);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFBE17").s().p("AgIDHQgEAAAAgDIgFmGQAAgEADAAIAYAAQADAAAAAEIAFGFQAAAEgDAAg");
	this.shape_462.setTransform(622.8,295.2,1.002,1.002);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AAAAAIAAgkQABATAAARIAAAkIgBgkg");
	this.shape_463.setTransform(664.9,294.6,1.002,1.002);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FBB03B").s().p("AgRAzIgBhkQAAgFAEAAIAcAAQAEAAgBAEIACBlQAAADgEAAIgcABQgEAAAAgEg");
	this.shape_464.setTransform(664.9,294.6,1.002,1.002);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#CCCCCC").s().p("AgBAdQhwgIhXgPQhpgPhbgYQBnAUBeANQBxAOBVAFQBcAHBqAAIDIgHIjIAPIgrAAQhJAAhSgFg");
	this.shape_465.setTransform(613.3,298.1,1.002,1.002);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AmMgfIMZA0QhzALh0AAQkWAAkcg/g");
	this.shape_466.setTransform(613.3,297.9,1.002,1.002);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#80BAFF").s().p("Al7BIQDKiiC0gCQDGgCCzC7Qlui3mJCig");
	this.shape_467.setTransform(613.3,287.6,1.002,1.002);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#2E8EFF").s().p("AgLC2QjHgbi6iqQDTiqC9gCQDNgCC7DDIABA/QihB3iuAAQglAAgkgGg");
	this.shape_468.setTransform(613.3,296.3,1.002,1.002);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFE517").s().p("AgWgHQhtgGhBAbQB1g1BfgCQBxgDBDBFQhBgCg9ATQAVgrhxgGg");
	this.shape_469.setTransform(594.9,274.2,1.002,1.002);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFBE17").s().p("AhXATQgtgThZgOQCJhABpABQB3ACBSBWIj8BDQgCgjg3gYg");
	this.shape_470.setTransform(595.6,277.2,1.002,1.002);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFBE17").s().p("AhFC5QglgKgOgSQgRgWAdgSQBIiRgqiiIDOBkQiAB/gFBxQARAegXAIQgJADgLAAQgQAAgWgGg");
	this.shape_471.setTransform(594.3,317.8,1.002,1.002);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#595959").s().p("AgKAgQgNgEgJgFQAEgLAVgPQAHgGAhgXQgZAVgGATQgGAVAPADQgDABgFAAQgFAAgIgBg");
	this.shape_472.setTransform(83.1,335.3,1.002,1.002);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#AD8E63").s().p("AgCAhIgMhGIAMAAQgCAwATAbIgRgFg");
	this.shape_473.setTransform(98.4,342.5,1.002,1.002);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#FFFFFF").p("AgXBAIAGgoIACgNIAAAAIgCANAgPALIALhGIAhAAAAdALIgsAA");
	this.shape_474.setTransform(112.1,363.3,1.002,1.002);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#414241").s().p("AiVBuQAOgsAOhbQAOhWALgaQANgaBuAAQBuAAANAaQg8CHgYAtQgtBbgdAdIggABQhaAAgTg2g");
	this.shape_475.setTransform(97.3,412.8,1.002,1.002);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#2E1E01").s().p("AATASIgrgNQgHgCACgFIACgKQABgCADgCQACgBADAAIArANQAHACgCAFIgDAKQgBAFgEAAIgDAAg");
	this.shape_476.setTransform(152.1,363.5,1.002,1.002);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#2E1E01").s().p("AAGARIgYgLQgEgCABgEIAHgOQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAIAYAQQAGADgEAEIgGAIQgBADgDAAIgEgBg");
	this.shape_477.setTransform(150.1,365.4,1.002,1.002);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#2E1E01").s().p("AgsABQAfgmAjAEQALACAGAJIABACQALAugRgBQgIgDgDgGQgHgQgCAFQgCACgCAJQgGAJgNAJg");
	this.shape_478.setTransform(146.5,358,1.002,1.002);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#2E1E01").s().p("AgcAJIgBgKQgBgCACgDQACgCADAAIAtgGQACAAADACQACACAAACIABAKQABAGgHABIgsAFIgCABQgGAAAAgGg");
	this.shape_479.setTransform(152.2,358.8,1.002,1.002);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#2E1E01").s().p("AghAGIAAgJQAAgDACgCQAAgBABAAQABAAAAgBQABAAAAAAQABAAAAAAIA2gCQADAAACACQACACAAADIAAAJQAAAHgHAAIg1ACQgGAAgBgHg");
	this.shape_480.setTransform(152.8,361.1,1.002,1.002);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FCEE21").s().p("AAAAAIAAgpIABApIAAAqIgBgqg");
	this.shape_481.setTransform(170.2,351.3,1.002,1.002);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFBE17").s().p("AAAAsQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgBhTQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIACAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAABIABBTQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_482.setTransform(170.2,351.3,1.002,1.002);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FCEE21").s().p("AAAg4QABAaAAAeQABAggCAZg");
	this.shape_483.setTransform(165.5,350.2,1.002,1.002);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFBE17").s().p("AgEA/IgBh9QAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABAAIADAAQABAAABAAQABAAAAAAQABABAAAAQAAABAAABIABB9QAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgFAAIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_484.setTransform(165.5,350.3,1.002,1.002);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FCEE21").s().p("AgCAAQAAguACgYQACAkAAAiQABArgCAcQgCgggBgng");
	this.shape_485.setTransform(160.9,349.6,1.002,1.002);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFBE17").s().p("AgBBTQgEAAAAgEIgCidQAAgEAEAAIAFAAQAEAAAAAEIACCdQAAAEgEAAg");
	this.shape_486.setTransform(160.9,349.6,1.002,1.002);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AAAAAIAAgMIABAMIgBANIAAgNg");
	this.shape_487.setTransform(173.5,351.6,1.002,1.002);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FBB03B").s().p("AgFAQIgBgfQAAgEAEAAIAFAAQADAAAAAEIABAfQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAIgFAAIgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_488.setTransform(173.5,351.7,1.002,1.002);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#CCCCCC").s().p("AAAAOQgvgEgkgGQgtgHgkgLQA1AIAdADQAmAEAsADQAkACAuABIBTAAIgpAFIgqADIgdAAQgYAAgdgBg");
	this.shape_489.setTransform(156.9,351,1.002,1.002);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AikgMIFJAVQgvAEgwAAQhzAAh3gZg");
	this.shape_490.setTransform(156.9,350.8,1.002,1.002);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#80BAFF").s().p("AidAeQBUhDBLAAQBRgCBLBOQiZhMiiBDg");
	this.shape_491.setTransform(156.9,346.5,1.002,1.002);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#2E8EFF").s().p("AgEBMQhTgMhNhGQBYhGBNgBQBVgBBPBQIAAAaQhEAyhIAAQgPAAgOgCg");
	this.shape_492.setTransform(156.9,350.1,1.002,1.002);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFE517").s().p("AgJgCQgtgDgbALQAxgWAngBQAvgBAcAcQgbAAgaAIQAJgSgvgCg");
	this.shape_493.setTransform(149.3,340.9,1.002,1.002);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFBE17").s().p("AgkAHQgSgHglgGQB3g3BABBIhoAcQgBgPgXgKg");
	this.shape_494.setTransform(149.6,342.2,1.002,1.002);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFBE17").s().p("AgcBNQgPgFgGgHQgHgJAMgIQAeg8gShDIBVAqQg1A0gBAvQAGAMgJAEQgEACgFAAQgHAAgIgDg");
	this.shape_495.setTransform(149,359,1.002,1.002);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#2E1E01").s().p("AgiAcQgCgBgBgDQgIgYAGgjQB0grgyB6QgHADgJAAQgUAAgZgTg");
	this.shape_496.setTransform(146.1,361.7,1.002,1.002);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#2E1E01").s().p("AgUAoQgGgEgCgIIgIgqQgCgIAEgGQAFgHAHgBIAcgGQAIgCAGAFQAHAEABAIIAJAqQACAIgFAGQgEAHgIABIgbAGIgEABQgGAAgFgEg");
	this.shape_497.setTransform(147.6,362.2,1.002,1.002);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#996400").s().p("AiJASQgmgSALgCIBxAJQgCADBvgYIBtgXQiMA8hyAPQgSgGgggOg");
	this.shape_498.setTransform(125.3,369.2,1.002,1.002);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#CC8500").s().p("AkBAJQgKgHgBgLQgDhIA7gjQALgGANAGQA/AdAsAZQA3AgAvAkQAhgZBEgHQAngEBPgGQAIgBAIAFQAHAEADAIQAIAYgQAcQgDAHgJAFQiFA7h6ARQiSghhmhOg");
	this.shape_499.setTransform(117.4,360.9,1.002,1.002);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AgIAAQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAJgJAAQgIAAAAgJg");
	this.shape_500.setTransform(102.6,464.6,1.002,1.002);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgIAAQAAgCACgDQADgDADAAQAEAAADADQACADAAACQAAAJgJAAQgIAAAAgJg");
	this.shape_501.setTransform(93.7,464.6,1.002,1.002);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#363636").s().p("AgYAZQgLgLAAgOQAAgOALgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgKAKgPAAQgOAAgKgKg");
	this.shape_502.setTransform(126.5,480.6,1.002,1.002);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#1D1D1E").ss(0.3).p("AA1AAQAAgVgPgQQgQgPgWAAQgVAAgQAPQgPAQAAAVQAAAWAPAQQAQAPAVAAQAWAAAQgPQAPgQAAgWg");
	this.shape_503.setTransform(133.6,473.5,1.002,1.002);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#363636").s().p("AgYAZQgKgLAAgOQAAgOAKgKQAKgKAOAAQAOAAALAKQALAKAAAOQAAAOgLALQgLAKgOAAQgOAAgKgKg");
	this.shape_504.setTransform(64.4,509.7,1.002,1.002);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#1D1D1E").ss(0.3).p("AA+AAQAAgZgSgSQgSgSgaAAQgZAAgSASQgSASAAAZQAAAaASASQASASAZAAQAaAAASgSQASgSAAgag");
	this.shape_505.setTransform(65.3,479.7,1.002,1.002);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#1D1D1E").ss(0.3).p("AA1AAQAAgVgPgQQgQgPgWAAQgVAAgQAPQgPAQAAAVQAAAWAPAQQAQAPAVAAQAWAAAQgPQAPgQAAgWg");
	this.shape_506.setTransform(71.5,473.5,1.002,1.002);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#595959").s().p("AglAmQgPgQAAgWQAAgVAPgQQAQgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgVAAgQgPg");
	this.shape_507.setTransform(71.5,473.5,1.002,1.002);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#333333").s().p("AAwBcIh5hGQgMgHAAgPQAAgOAMgHIB5hGQAMgHANAHQANAIAAAOIAACLQAAAPgNAHQgGAEgGAAQgHAAgGgEg");
	this.shape_508.setTransform(214.1,476.8,1.002,1.002);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#333333").s().p("AgVBJIhGh4QgHgNAHgNQAHgMAPAAICLAAQAPAAAHAMQAHANgHANIhGB4QgHANgPAAQgOAAgHgNg");
	this.shape_509.setTransform(264.3,477.8,1.002,1.002);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#333333").s().p("AhIBcQgNgHAAgPIAAiLQAAgOANgIQANgHAMAHIB5BGQAMAHAAAOQAAAPgMAHIh5BGQgGAEgHAAQgGAAgGgEg");
	this.shape_510.setTransform(313.4,477.8,1.002,1.002);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#CCCCCC").s().p("AiODIQgXAAgRgRQgRgQAAgYIAAkeQAAgWARgSQARgQAXAAIEeAAQAXAAAQAQQARASAAAWIAAEeQAAAYgRAQQgRARgWAAg");
	this.shape_511.setTransform(216.5,476.9,1.002,1.002);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#808080").s().p("AisDmQgXAAgRgRQgRgRAAgXIAAlaQAAgWARgRQAQgRAYAAIFZAAQAYAAARARQAQARAAAWIAAFaQAAAXgQARQgSARgXAAg");
	this.shape_512.setTransform(217.5,477.9,1.002,1.002);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#CCCCCC").s().p("AiODIQgXAAgRgRQgRgQAAgYIAAkeQAAgWARgSQAQgQAYAAIEdAAQAYAAAQAQQARASAAAWIAAEeQAAAYgRAQQgQARgYAAg");
	this.shape_513.setTransform(264.7,476.9,1.002,1.002);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#808080").s().p("AisDmQgXAAgRgRQgRgRAAgXIAAlaQAAgWARgRQAQgRAYAAIFZAAQAYAAAQARQARARAAAWIAAFaQAAAXgRARQgQARgYAAg");
	this.shape_514.setTransform(265.7,477.9,1.002,1.002);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#CCCCCC").s().p("AiPDIQgXAAgQgRQgRgQAAgYIAAkeQAAgWARgSQAQgQAXAAIEeAAQAYAAAQAQQARASAAAWIAAEeQAAAYgRAQQgQARgYAAg");
	this.shape_515.setTransform(312.8,476.9,1.002,1.002);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#808080").s().p("AisDmQgXAAgSgRQgQgRAAgXIAAlaQAAgWAQgRQASgRAXAAIFZAAQAYAAAQARQARARAAAWIAAFaQAAAXgRARQgQARgYAAg");
	this.shape_516.setTransform(313.8,477.9,1.002,1.002);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#333333").s().p("AhFBWQgPAAgHgNQgHgMAHgOIBGh3QAHgNAOAAQAPAAAHANIBGB3QAHAOgHAMQgHANgPAAg");
	this.shape_517.setTransform(266.3,428.7,1.002,1.002);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#CCCCCC").s().p("AiODIQgXAAgRgRQgRgQAAgYIAAkeQAAgXARgQQAQgRAYAAIEdAAQAYAAAQARQARAQAAAXIAAEeQAAAYgRAQQgQARgYAAg");
	this.shape_518.setTransform(265.7,428.8,1.002,1.002);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#808080").s().p("AisDmQgXAAgRgRQgRgQAAgYIAAlZQAAgXARgSQAQgQAYAAIFZAAQAYAAAQAQQARASAAAXIAAFZQAAAYgRAQQgQARgYAAg");
	this.shape_519.setTransform(266.7,429.8,1.002,1.002);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgTAoQgMgFgIgKQgHgKAAgOQAAgSAOgOQAPgNAVAAQAUAAALAKQALAKABAMIhIAAIAAAJQAAAUAIAMQAJALAQAAQAYAAAJgRIAGAAQgEALgMAGQgLAFgPAAQgOAAgKgFgAgYgRIAxAAIAAgEQAAgJgGgFQgHgFgJAAQgXAAgEAXg");
	this.shape_520.setTransform(649.6,369.7,1.002,1.002);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AggAhQgPgMAAgUQAAgTARgNQAQgNAVAAQAPAAAKAFQALAEAAAHIgCAFQgCACgEAAQgIAAgCgIQgBgFgDgDQgDgCgLAAQgPAAgKAJQgIAKAAATQAAATAKALQAIALATAAQAYAAAHgSIAGAAQgJAXgjAAQgUAAgQgMg");
	this.shape_521.setTransform(638.4,369.7,1.002,1.002);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AAUApQgFgDgCgIQgOAIgIADQgKAEgJAAQgLAAgHgFQgIgFAAgIQAAgLANgIQAOgIAVgGIATgGIAAgFQAAgIgBgEQgCgEgGgDQgFgDgJAAQgTAAgCAKQgDAKgIAAQgIAAAAgFQAAgGALgHQAJgHAXAAQAOAAAKAEQAJAFADAFQACAGAAAKIAAAhQAAAMACADQABADAGAAQAIAAACgKIAFAAQgCASgUAAQgJAAgEgEgAAAgDQghAKAAAQQAAAGAEAEQAFAEAGAAQAHAAAHgDIARgJIAAghg");
	this.shape_522.setTransform(626.9,369.7,1.002,1.002);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("Ag+BFIAAgEIAEAAQAJAAADgDQACgBABgDIAAhuQAAgDgDgCQgEgBgIAAIgEAAIAAgGQAJAAAXgEIAEAAQACAFAAAIQAIgHAJgDQAIgDALAAQAWAAAOAMQAPANAAATQAAATgPANQgNANgZAAQgJAAgIgDQgJgDgIgGIAAAgQAAANABAFQABADADABQACACAKAAIAAAEgAgJg7QgIAEgHAHIAAAyQAIAHAHAEQAHACAIAAQAPAAAKgJQALgKAAgVQAAgTgLgJQgKgKgOAAQgJABgHADg");
	this.shape_523.setTransform(613.1,372.2,1.002,1.002);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgWAkQgEADgCAGIgFAAIAAgcIAFAAQAJAYAVAAQAKAAAFgFQAEgEAAgGQAAgGgFgFQgEgDgPgHQgRgGgGgFQgHgGAAgJQAAgIAIgIQAHgHAOAAQAMAAAJAJIAFgIIAFAAIAAAaIgFAAQgDgJgHgHQgIgHgIAAQgHAAgFAEQgFAEAAAFQAAAFAFAFQAFAEAOAFQAVAIAFAGQAFAIAAAHQAAALgJAHQgJAGgOAAQgNAAgLgJg");
	this.shape_524.setTransform(602.5,369.7,1.002,1.002);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AhIBGIAAgGIADAAQANABAEgDQADgDACgEIABgWIAAhDIgBgVQgCgFgDgCQgEgCgNAAIAAgFIB7AAIAEAjIgGAAQgEgOgGgGQgGgHgIgCQgIgBgTAAIgWAAIAAA6IASAAQAMAAAFgCQAFgBABgDQACgEAAgKIAGAAIAAAuIgGAAQAAgLgDgEQgCgEgFgBQgDAAgLAAIgTAAIAAAfQAAAZADAFQAFADAQAAIANAAQAMABAKgDQAKgDAHgJQAIgIAEgQIAGAAIgDAsg");
	this.shape_525.setTransform(589.9,367,1.002,1.002);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#CCCCCC").s().p("AyqDIQgXAAgRgRQgRgRAAgXIAAkeQAAgWARgRQARgRAXAAMAlVAAAQAXAAARARQARARAAAWIAAEeQAAAXgRARQgRARgXAAg");
	this.shape_526.setTransform(615.3,367.7,1.002,1.002);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#808080").s().p("AzaDmQgYAAgRgRQgQgRAAgXIAAlaQAAgXAQgQQARgRAYAAMAm1AAAQAYAAAQARQARAQAAAXIAAFaQAAAXgRARQgQARgYAAg");
	this.shape_527.setTransform(616.5,368.7,1.002,1.002);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AAVBHIAAgGQANAAAEgBQAEgBAAgEIgFgOIgOgaIhAAAIgFAJQgKATAAAGQAAAHAGADQAFACAIAAIAAAGIgzAAIAAgGQAMgBAFgFQAGgGAHgQIA5hrIAEAAIBBB8QAEAFADADQAEADAKAAIAAAGgAgnAPIA8AAIgdg7g");
	this.shape_528.setTransform(217.7,349.9,1.002,1.002);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#CCCCCC").s().p("AiODIQgXAAgRgRQgRgRAAgXIAAkeQAAgWARgRQAQgRAYAAIEeAAQAXAAAQARQARARAAAWIAAEeQAAAXgRARQgQARgXAAg");
	this.shape_529.setTransform(217.5,348.6,1.002,1.002);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#808080").s().p("AisDmQgXAAgRgRQgRgQAAgYIAAlaQAAgXARgQQARgRAXAAIFZAAQAYAAARARQAQAQAAAXIAAFaQAAAYgQAQQgSARgXAAg");
	this.shape_530.setTransform(218.5,349.6,1.002,1.002);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AgsA2QgDAFgDAJIgGAAIAAgtIAGAAQALAsAoAAQASAAAKgIQAKgJAAgKQAAgLgJgGQgJgIgWgHIgfgMQgLgGgGgIQgGgJAAgJQAAgQANgKQAMgJAUAAQAMAAAIACQAKAEAKAJQAGgGABgHIAFAAIAAAkIgFAAQgFgPgNgJQgMgJgPAAQgPAAgIAGQgHAHAAAIQAAAKAJAHQAJAGAWAJQAaAJAHADQAJADAHAKQAGAJAAALQAAASgPALQgOALgZAAQgbAAgUgSg");
	this.shape_531.setTransform(265.8,350,1.002,1.002);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#CCCCCC").s().p("AiODIQgXAAgRgRQgRgRAAgXIAAkeQAAgWARgRQARgRAXAAIEdAAQAYAAARARQAQARAAAWIAAEeQAAAXgQARQgSARgXAAg");
	this.shape_532.setTransform(265.7,348.6,1.002,1.002);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#808080").s().p("AisDmQgXAAgRgRQgRgQAAgYIAAlaQAAgXARgQQAQgRAYAAIFaAAQAXAAAQARQARAQAAAXIAAFaQAAAYgRAQQgRARgWAAg");
	this.shape_533.setTransform(266.7,349.6,1.002,1.002);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AhZBBIAHAAQAMAAAEgCQAEgCABgFIABgWIAAhCIgBgWQgBgFgEgBQgGgCgLAAIgFAAIAAgFIBMgCQAmAAAVAJQAWAJAKARQALAQAAAUQAAAOgGAOQgGANgKAIQgKAIgNAFQgLAEgOABIhtABgAgjhAIAABcQAAAXABAEQABAFAFADQAGACAOAAQAWAAAOgFQAOgEAKgPQAKgQAAgWQAAgQgGgOQgFgNgLgKQgLgIgMgDQgNgDgTAAg");
	this.shape_534.setTransform(313.4,349.9,1.002,1.002);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#CCCCCC").s().p("AiODIQgXAAgRgRQgRgRAAgXIAAkeQAAgWARgRQAQgRAYAAIEdAAQAYAAARARQAQARAAAWIAAEeQAAAXgQARQgRARgYAAg");
	this.shape_535.setTransform(312.8,348.6,1.002,1.002);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#808080").s().p("AisDmQgXAAgRgRQgRgQAAgYIAAlaQAAgXARgQQAQgRAYAAIFZAAQAYAAAQARQARAQAAAXIAAFaQAAAYgRAQQgQARgYAAg");
	this.shape_536.setTransform(314.8,349.6,1.002,1.002);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AAzBHIgzhxIguBxIgHAAIgxh/QgDgFgEgCQgFgCgIgBIAAgEIBBAAIAAAEQgMABgDACQgEACAAAEIAGARIAfBQIAshuIAHAAIAyBuIAbhIQAFgQAAgEQAAgOgSAAIAAgEIAvAAIAAAEQgKABgFAGQgFAEgIAXIgmBng");
	this.shape_537.setTransform(266.6,302,1.002,1.002);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#CCCCCC").s().p("AiODIQgXAAgRgRQgRgRAAgXIAAkdQAAgXARgSQAQgQAYAAIEdAAQAYAAARAQQAQASAAAXIAAEdQAAAXgQARQgSARgXAAg");
	this.shape_538.setTransform(266.7,300.5,1.002,1.002);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#808080").s().p("AisDmQgXAAgRgRQgRgRAAgXIAAlZQAAgYARgRQARgQAXAAIFaAAQAXAAAQAQQARARAAAYIAAFZQAAAXgRARQgRARgWAAg");
	this.shape_539.setTransform(267.7,301.5,1.002,1.002);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgHAIQgEgDABgFIABgFIAEgEIAFgCQAFAAADAEQAEADgBAEQABAFgEADQgDADgFABQgDgBgEgDg");
	this.shape_540.setTransform(394.6,209.6,1.004,1.004);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIAGgXQgKAPgJAKQgJALgNAAQgGAAgDgEQgEgDAAgFIADgNIAJgcIABgHIAAgCIgDgBQgEAAgJAMIgIAAQAGgKAIgHQAHgHALAAQAFAAAEADQAEACAAAIIgBAHIgHAXIgDALIACAEQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAQAEAAAGgGQAGgIAGgLQAHgLAHgWIAVAAIgQA0IgCAHIABACIACABQADAAADgEIAFgKIAJAAQgEAJgHAIQgHAIgLAAQgHAAgDgEg");
	this.shape_541.setTransform(387.3,207,1.004,1.004);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("AADAhQgCgFAAgIQgHAJgGAEQgHAFgJABQgEAAgFgDQgDgEgBgEQgCgFAAgFQAAgMAGgMQAGgOAKgJQAKgJAMAAQAGABADACQADABABADIACAHIAEgLIATAAIgSA7IABACIABABQAGAAAHgNIAIAAIgGAKQgDAEgEADQgDAEgFACQgEABgEABQgJgBgDgFgAgIgWQgGAGgFAMQgDAJAAAIQAAALAHAAQAEAAAFgEQAFgEADgHIAHgOQACgHAAgIIgBgHQgCgDgFAAQgFAAgGAIg");
	this.shape_542.setTransform(377.6,206.9,1.004,1.004);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AgfAgQgHgEAAgMQAAgNAHgMQAIgNANgIQAMgIAPAAQANABAEAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgFAFgLADQgNAEgOACIgCAAIgBAGQAAAHAEADQADADAGAAQAMAAAMgPIAJAAQgFAJgLAIQgMAIgOABQgKAAgIgHgAACgbQgFAFgDAFIgIASQASgCAIgHQAJgGAAgJQAAgDgCgDQgCgCgEAAQgGAAgFAEg");
	this.shape_543.setTransform(368.5,206.9,1.004,1.004);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("AgYAlQgFgCgDgFQgDgEAAgGQAAgJAEgGQAEgFAJgHIAJgIIAGgIQgHAEgGAAQgEAAgGgDIgEgBQgEAAgCAFIgHAAQAGgTAMgBQAHAAAGAGIADACIADABQAEAAABgFQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAEACIABADQAAAEgDAGIgFALIgKARQgDAGAAAFQAAAFAEACQACADAFAAQAIAAAIgGQAIgHAEgJQAFgGAAgHIgDgSQAAgGADgCQACgCAEgBQADAAADAEQADAEAAAGQAAAKgFAKQgFALgJAKQgKAKgJAFQgKAHgKAAIgKgCg");
	this.shape_544.setTransform(359.3,206.9,1.004,1.004);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("AgRA6QgEgDAAgGQAAgFADgIIANglIgBgBIgBgBQgDAAgEAEIgFAIIgIAAQAFgKAIgHQAJgGAHAAQAHAAADACQADADAAAFQAAAFgBAEIgOAlIgBAGIABACIABABQADAAACgDIAIgKIAIAAQgEAIgHAIQgHAIgKAAQgIAAgDgEgAAJgpQgEgEAAgEQAAgFAEgEQADgDAFAAIAGACIAEADQABADAAAEQAAADgDAFQgFADgDAAQgFAAgDgDg");
	this.shape_545.setTransform(352.1,204.6,1.004,1.004);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AAJAjQgEgEAAgFQAAgDACgIIAGgUIADgMQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgFAHgIAOQgHAMgFASIgVAAIAQgzIACgJIgBgCIgCgBQgDAAgDAEIgFAKIgIAAQADgJAHgIQAIgIAKAAQAHAAADAEQAEADAAAFIgDAPIgDAJQAKgPAJgLQAJgKAMAAQAHAAADAEQADAEAAAEIgCALIgJAeIgCAIIABABIABABQACAAAFgDQAEgFADgEIAJAAIgHAKIgLAKQgHAEgHAAQgGAAgEgDg");
	this.shape_546.setTransform(343.7,206.9,1.004,1.004);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AgfAgQgHgEAAgMQAAgNAHgMQAIgNAMgIQANgIAPAAQAMABAFAEQAFADAAAHIgCAIQgBAEgHAGQgFAFgMADQgLAEgPACIgCAAIgBAGQAAAHADADQADADAGAAQANAAAMgPIAJAAQgFAJgMAIQgLAIgOABQgKAAgIgHgAACgbQgEAEgEAGIgGAMIgCAGQASgCAIgHQAJgGAAgJIgCgGQgCgCgEAAQgHAAgEAEg");
	this.shape_547.setTransform(329.7,206.9,1.004,1.004);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AgiAlIAPgwIABgKIAAgCIgCgBQgDAAgEAFIgFAIIgIAAQAEgJAHgHQAFgFAFgCQAEgCAFAAQAHAAACAEQABAFAAAEQAAAFgEASIAOgYQAEgFAGgEQAFgDAFAAQAHAAACADIACAIQAAAFgDAFQgDAEgFAAQgEAAgDgFQgBAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgEAEIgIAMIgIAQIgHATIgBAEg");
	this.shape_548.setTransform(321.7,206.8,1.004,1.004);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AgVAuQgEgEgBgIQAAgEAEgJIALgkIgQAAIACgIIAQAAIAIgbIAUAAIgIAbIARAAIgCAIIgSAAIgNAxIABAEIADABQAFAAADgFIAHgKIAJAAQgGALgGAGQgGAFgFADIgKACQgHAAgEgFg");
	this.shape_549.setTransform(314.9,205.7,1.004,1.004);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIAAgGIAGgRQgKAPgJAKQgJALgNAAQgGAAgEgEQgDgDAAgFQAAgFACgIIAJgcQACgEAAgDIgBgCQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgFAAgIAMIgIAAQAHgLAGgGQAIgHALAAQAFAAAEADQAEACAAAIIgBAHIgHAXIgDALIABAEQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAQAEAAAGgGQAFgHAHgMQAIgOAGgTIAVAAIgQA0IgCAHIABACIACABQADAAADgEIAFgKIAJAAQgEAJgHAIQgHAIgLAAQgHAAgDgEg");
	this.shape_550.setTransform(306.1,207,1.004,1.004);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("AADAhQgCgHAAgGQgGAIgHAFQgIAFgIABQgEAAgEgDQgEgDgBgFQgCgFAAgFQAAgMAGgMQAGgOALgJQAKgJALAAQAGABADACIAEAEIACAHIADgLIAUAAIgSA7IABACIABABQAGAAAGgNIAJAAIgGAKQgCAEgFADQgDAEgFACQgDABgFABQgJgBgDgFgAgIgWQgHAIgDAKQgEALAAAGQAAALAHAAQAEAAAFgEQAEgEAEgHQAEgHADgHQACgJAAgGIgBgHQgCgDgEAAQgGAAgGAIg");
	this.shape_551.setTransform(296.4,206.9,1.004,1.004);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgVAuQgFgEABgIQAAgEACgJIAMgkIgQAAIACgIIARAAIAIgbIAUAAIgJAbIASAAIgDAIIgRAAIgOAxIABAEIADABQAEAAAEgFIAHgKIAIAAQgFALgGAGQgGAFgFADIgJACQgIAAgEgFg");
	this.shape_552.setTransform(284.3,205.7,1.004,1.004);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIABgGIAFgRQgKAPgJAKQgJALgNAAQgGAAgEgEQgDgDAAgFQAAgGADgHIAIgcQACgEAAgDIAAgCIgDgBQgFAAgIAMIgIAAQAGgJAHgIQAIgHALAAQAFAAAEADQAEACAAAIIgBAHIgHAXIgDALIACAEQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAQAEAAAGgGQAEgGAIgNQAHgLAHgWIAVAAIgQA0IgCAHIABACIACABQADAAADgEIAFgKIAJAAQgEAJgHAIQgHAIgLAAQgHAAgDgEg");
	this.shape_553.setTransform(275.4,207,1.004,1.004);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("AgYAjQgIgGgEgGQgFgIABgJQAAgJAGgMQAGgKAMgHQAMgFALgBQAMABAHAEQAIAEAEAHQADAHAAAIQAAAJgDAIQgEAIgGAGQgIAHgHAEQgKADgIABQgKgBgJgDgAgEgZQgFAGgDAGIgGAOQgCAGAAAHQABAHADAFQADAFAHAAQAGAAAFgFQAGgFADgHIAFgOIACgNQAAgJgEgDQgDgGgHAAQgGAAgFAGg");
	this.shape_554.setTransform(265.4,206.9,1.004,1.004);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AgVAuQgEgEAAgIQAAgGADgHIALgkIgRAAIADgIIAQAAIAIgbIAUAAIgHAbIAQAAIgCAIIgSAAIgNAxIABAEIADABQAEAAAEgFIAHgKIAJAAQgGAKgFAHQgHAGgFACIgJACQgHAAgFgFg");
	this.shape_555.setTransform(258.1,205.7,1.004,1.004);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AAJAjQgEgEAAgFQAAgFACgGIAHgUQACgHAAgFIgBgDQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgFAAgHAIQgEAGgJAPQgGANgGARIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEIgFAKIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAGIgFASQANgTAGgHQAKgKAMAAQAGAAADAEQADAEAAAEIgCALIgJAeIgBAIIAAABIACABQABAAAFgDIAHgJIAJAAIgHAKIgLAKQgHAEgHAAQgGAAgEgDg");
	this.shape_556.setTransform(244.9,206.9,1.004,1.004);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIABgGIAFgRQgLARgIAIQgJALgNAAQgGAAgDgEQgEgDAAgFIADgNIAJgcIABgHIAAgCIgDgBQgEAAgJAMIgIAAQAGgKAIgHQAHgHALAAQAFAAAEADQAEACAAAIIgBAHIgHAXIgDALIACAEQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAQAEAAAGgGQAGgIAGgLQAHgLAHgWIAVAAIgQA0IgCAHIABACIACABQADAAADgEIAGgKIAIAAQgEAJgHAIQgHAIgLAAQgHAAgDgEg");
	this.shape_557.setTransform(234.2,207,1.004,1.004);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AgQATQAOgDAFgGQAGgHAAgDIgBgDIgCAAQgEAAgDgDQgDgEAAgEQAAgFADgEQACgDAFAAQAGAAAEAFQAEAHAAAGQAAAHgFAHQgEAIgJAGQgHAGgOABg");
	this.shape_558.setTransform(228.2,201.1,1.004,1.004);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AAAAuIAAgDQgCAEgGAFQgEADgIAEQgFADgHAAQgJAAgGgGQgEgGAAgKQAAgJADgKQAEgJAHgJQAHgHAJgGQAJgEAJAAQAIAAACACQAEADADAEIAKgjIADgGQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAAAIgEgBIgHgBIACgIIAPAAIAPgCIAGAAIgfBkIgCAJQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQADAAADgDQADgDADgGIAJAAQgCAFgDAEQgEAGgGADQgHAFgHAAQgOAAAAgQgAgPAAQgHAIgEAKQgEALgBAIQAAAFADAEQAEACADAAQAGAAAGgFQAFgDAEgIQADgFAEgIQADgJAAgGQAAgEgEgEQgCgDgFAAQgHAAgHAHg");
	this.shape_559.setTransform(219.6,204.6,1.004,1.004);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("AgVAuQgEgFAAgHIACgNIAMgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAGQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQAFAAADgFIAHgKIAIAAQgEAJgHAIQgFAFgGADIgJACQgIAAgEgFg");
	this.shape_560.setTransform(206.8,205.7,1.004,1.004);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AgfAgQgHgHAAgFQAAgFADgDQADgCADAAQAKAAABALQAAAFADADQABADAIAAQAGAAADgDQADgDAAgFIgBgEIgFgGIgLgLQgFgEgCgEQgCgEgBgEQABgFACgEQACgFAJgEQAGgEANAAIANACQAGABACACIAFAFIABAFQAAADgCAEQgCACgFAAQgEAAgBgBIgDgDIgCgHQgBgDgCgCQgCgBgFAAQgFAAgDACQgDADAAADQAAAEABACIADAEIAHAGIAMAKQAEAGABAGQAAAGgEAGQgDAFgIADQgIADgLABQgRgBgHgGg");
	this.shape_561.setTransform(199.3,206.9,1.004,1.004);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AgfAgQgHgEAAgMQAAgNAHgMQAIgNAMgIQANgIAPAAQANABAEAEQAFADAAAHQAAAEgCAEQgBAEgHAGQgFAFgMADQgLAEgPACIgCAAIgBAGQAAAHADADQADADAGAAQANAAAMgPIAJAAQgFAJgMAIQgLAIgOABQgKAAgIgHgAACgbQgEAEgEAGIgGAMIgCAGQASgCAIgHQAJgGAAgJQAAgDgCgDQgCgCgEAAQgHAAgEAEg");
	this.shape_562.setTransform(190.9,206.9,1.004,1.004);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("AghAlIAOgwIACgKIAAgCIgCgBQgEAAgDAFIgGAIIgIAAQAEgJAHgHQAFgFAFgCQAEgCAFAAQAHAAACAEQABAEAAAFQAAAIgEAPIAHgNIAIgLQAFgGAEgDQAFgDAFAAQAHAAACADQACAEAAAEQAAAFgDAFQgDAEgFAAQgEAAgEgFQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgEAEIgJAMIgOAjIgCAEg");
	this.shape_563.setTransform(178.3,206.8,1.004,1.004);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AgSA6QgDgEAAgFQAAgFADgIIANglIgBgBIgCgBQgCAAgEAEIgFAIIgIAAQAFgKAIgHQAJgGAHAAQAHAAADACQADADAAAFQAAAFgCAEIgNAlIgBAGIABACIABABQADAAACgDQAEgDADgHIAJAAQgEAIgHAIQgIAIgJAAQgIAAgEgEgAAIgpQgDgEAAgEQAAgFADgEQAEgDAFAAQADAAACACQADABACACQABADAAAEQAAADgDAFQgFADgDAAQgEAAgFgDg");
	this.shape_564.setTransform(171.7,204.6,1.004,1.004);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AgYAjQgIgFgEgHQgEgIAAgJQAAgKAGgLQAGgKAMgHQALgFAMgBQALABAIAEQAIAEADAHQAEAGAAAJQAAAJgDAIQgDAHgHAHQgGAGgJAFQgKADgJABQgKgBgIgDgAgEgZQgFAFgEAHIgFAOIgBANQAAAHADAFQADAFAHAAQAGAAAFgFQAFgEAEgIQADgHACgHQACgHAAgGQAAgHgEgFQgDgGgHAAQgGAAgFAGg");
	this.shape_565.setTransform(163.7,206.9,1.004,1.004);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AAJAjQgEgEAAgFQAAgFACgGIAHgUIACgMQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQgFAAgHAIQgFAHgHAOQgIAMgFASIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEIgGAKIgGAAQACgJAIgIQAHgIALAAQAHAAADAEQADADAAAFIgDAPIgEAJQAMgQAIgKQAJgKAMAAQAHAAADAEQADAEABAEIgMApIgCAIIABABIABABQACAAAFgDIAHgJIAJAAQgDAGgEAEIgLAKQgHAEgHAAQgGAAgEgDg");
	this.shape_566.setTransform(153.7,206.9,1.004,1.004);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AADAhQgCgHAAgGQgHAJgGAEQgHAFgIABQgGAAgDgDQgDgDgDgFQgBgFAAgFQAAgMAGgMQAGgOAKgJQAKgJAMAAQAGABADACQAEACAAACIACAHIAEgLIATAAIgRA0IgBAHIAAACIACABQAGAAAHgNIAIAAIgFAKIgIAHQgEAEgEACQgDABgFABQgJgBgDgFgAgIgWQgGAGgEAMQgEALAAAGQAAALAHAAQAEAAAFgEQAFgEADgHQAFgJACgFQACgHAAgIIgBgHQgCgDgFAAQgFAAgGAIg");
	this.shape_567.setTransform(143.8,206.9,1.004,1.004);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AApAiQgDgDAAgFQAAgEACgGIAJgfQAAgDgCgCQgCgCgDAAQgIAAgIAIQgIAIgHAMQgJARgCAJIgBAFIgVAAIAOgsIACgIQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgCgCgDAAQgGAAgGAFQgHAGgGAIQgGAHgEAKQgFAJgDALIgBADIgVAAIASg8IgBgCIgCgBIgDABIgEAEIgGAJIgHAAQAEgKAHgHQAHgIALAAIAHABQADACACADQACACAAAFIgCAPIgDAIIALgPQADgFAIgHQAGgFAFgCQAFgCAHAAQAHAAAEAEQAEAEAAAGIgDAOIgCAIQAGgLAGgGQAHgJAJgFQAHgFALAAQAGAAADACQADADACADIACAGIgBAFIgLAiIgBAHQAAABAAABQAAAAABABQAAAAAAAAQABAAABAAQACAAADgDQADgCAFgIIAJAAQgNAZgTAAQgHAAgEgEg");
	this.shape_568.setTransform(130.3,206.9,1.004,1.004);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIABgGIAFgRQgKAPgJAKQgJALgNAAQgGAAgEgEQgDgDAAgFQAAgGADgHIAIgcQACgEAAgDIAAgCIgDgBQgEAAgJAMIgIAAQAGgJAHgIQAIgHALAAQAFAAAEADQAEACAAAIIgBAHIgHAXIgDALIACAEQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAQAEAAAGgGQAEgGAIgNQAHgLAHgWIAVAAIgQA0IgCAHIABACIACABQADAAADgEIAFgKIAJAAQgEAJgHAIQgHAIgLAAQgHAAgDgEg");
	this.shape_569.setTransform(111.7,207,1.004,1.004);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AAAAuIAAgDIgIAJQgFAEgHADQgGADgGAAQgKAAgEgGQgFgFAAgLQAAgKAEgJQAEgKAGgIQAGgHAKgGQAJgEAKAAQAHAAADACIAGAHIAKgjIACgGQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgEgBIgHgBIACgIIAOAAIAQgCIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQADAAADgDQAEgEADgFIAIAAIgFAJQgFAGgFADQgGAFgIAAQgOAAAAgQgAgPAAQgIAIgDAKQgFALAAAIQAAAFADAEQAEACADAAQAGAAAGgFQAEgCAFgJQAFgIACgFQACgJAAgGQAAgEgDgEQgDgDgDAAQgIAAgHAHg");
	this.shape_570.setTransform(102,204.6,1.004,1.004);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AgfAgQgHgEAAgMQAAgNAHgMQAIgNANgIQAMgIAPAAQANABAEAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgFAFgLADQgNAEgOACIgCAAIgBAGQAAAHAEADQADADAGAAQAMAAAMgPIAJAAQgFAJgLAIQgMAIgOAAQgKABgIgHgAACgbQgFAFgDAFIgIASQASgCAIgHQAJgGAAgKQAAgCgCgDQgCgCgEAAQgHAAgEAEg");
	this.shape_571.setTransform(730.9,185.3,1.004,1.004);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AgbA6QgIgCgJgEQgHgFgBgIIACgIIAGgFQACgCADAAIADABIABACIgCADQgDAEAAADQAAAJAJADQALACAJAAQAMAAAHgDQAHgEAAgFIgCgEIgFgDIgegLQgGgDgCgDQgDgEAAgFQAAgGAHgFQAFgEAKgCQgHgCgEgGQgDgHgBgEQABgIAEgGQAEgGAJgEQAHgEAKAAQAQAAAGAHIAGgGQADgBAFAAQADAAADABIACAFQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABIgEABIgEgCIgEgBQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQACACABADIABAHIgCAIQgBAEgEAFQgFAFgHADQgIADgMAAQgKAAgDACQgEABAAADIABADIAFACIAVAHQAZAHAAAPQgBAGgEAGQgGAHgJACQgMAEgPAAgAABgvQgCAEgDAHQgCAGAAAGQAAAFACADQAEACACAAQAKAAAEgJQAFgKAAgIIgBgGIgDgEIgGgBQgGAAgEAFg");
	this.shape_572.setTransform(721.6,187.3,1.004,1.004);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("AADAgQgCgGAAgGQgFAGgIAHQgHAFgIAAQgGAAgDgCQgEgDgBgFQgCgFAAgFQAAgNAHgLQAFgOALgJQAJgJAMAAQAGABADACIAFAEIACAHIACgLIAUAAIgQA0IgCAHIAAACIADABQAFAAAGgNIAJAAIgGAKQgCAEgEADQgEADgEADQgEABgEAAQgJABgEgHgAgIgWQgGAIgEAKQgEALAAAGQAAALAHAAQAEAAAFgEQAFgEADgHIAHgPQACgIAAgGQAAgEgCgDQgBgDgEAAQgGAAgGAIg");
	this.shape_573.setTransform(713.1,185.3,1.004,1.004);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("AgVAuQgEgEAAgIIACgNIAMgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAGQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIADABQAFAAADgFIAHgKIAIAAQgEAJgHAIQgFAFgGADIgJACQgIAAgEgFg");
	this.shape_574.setTransform(705.5,184,1.004,1.004);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AgfA1QgHgFAAgLQAAgNAHgNQAIgMAMgIQANgIAPAAQANAAAEAEQAFAEAAAHQAAADgCAEQgBADgHAHQgFAFgMAEQgLAEgPACIgCAAIgBAGQAAAHADADQADADAGAAQANAAAMgPIAJAAQgFAJgMAIQgLAIgOAAQgKAAgIgGgAACgGQgEAEgEAFIgGAMIgCAHQASgDAIgHQAJgHAAgIQAAgDgCgCQgCgCgEAAQgHAAgEAEgAABgcIAJgeIAXAAIgaAeg");
	this.shape_575.setTransform(698,183.2,1.004,1.004);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgfAgQgHgEgBgMQABgNAHgMQAHgNANgIQAMgIAPAAQANABAFAEQAFADABAHQgBADgCAFQgCAFgGAFQgFAFgLADQgNAEgOACIgCAAIAAAGQAAAHADADQACADAHAAQAMAAAMgPIAJAAQgFAJgLAIQgMAIgNAAQgMABgHgHgAACgbQgFAGgCAEIgHAMIgCAGQASgCAIgHQAJgGAAgKIgCgFQgCgCgEAAQgGAAgFAEg");
	this.shape_576.setTransform(682.4,185.3,1.004,1.004);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AApAiQgDgDAAgFQAAgEACgGIAJgfQAAgDgCgCQgCgCgDAAQgIAAgIAIQgIAIgIAMQgIARgCAJIgBAFIgVAAIAOgsIABgIQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgCgDAAQgGAAgHAFQgGAGgGAIQgGAHgEAKQgFAJgDALIgBADIgVAAIASg8IgBgCIgCgBIgDABIgFAEIgFAJIgHAAQAEgKAHgHQAHgIALAAIAHABQADACACADQACACAAAFIgDAPIgDAIIALgPQAEgFAIgHQAGgFAFgCQAGgCAFAAQAHAAAEAEQAFAEAAAGQAAAGgDAIIgCAIQAGgLAGgGQAHgJAIgFQAIgFAKAAQAHAAACACQAEADACADIABAGIAAAFIgLAiIgBAHQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAQADAAADgDQAFgCADgIIAJAAQgNAZgTAAQgHAAgEgEg");
	this.shape_577.setTransform(669.5,185.2,1.004,1.004);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AgfA1QgHgFAAgLQAAgNAHgNQAIgMANgIQAMgIAPAAQANAAAEAEQAFAEAAAHQAAADgCAEQgCAFgGAFQgFAFgLAEQgNAEgOACIgCAAIgBAGQAAAHAEADQADADAGAAQAMAAAMgPIAJAAQgFAJgLAIQgMAIgOAAQgKAAgIgGgAACgGQgFAFgDAEIgIATQASgDAIgHQAJgHAAgIQAAgDgCgCQgCgCgEAAQgHAAgEAEgAARgcIgYgeIAWAAIAJAeg");
	this.shape_578.setTransform(656.7,183.2,1.004,1.004);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AgSA6QgDgEAAgFQAAgFADgIIANglIgBgBIgBgBQgDAAgEAEIgFAIIgIAAQAFgKAIgHQAJgGAHAAQAHAAADACQADADAAAFQAAAFgCAEIgNAlIgBAGIABACIABABQADAAACgDQAEgDADgHIAJAAQgEAIgHAIQgIAIgJAAQgIAAgEgEgAAJgpQgEgEAAgFQAAgEAEgEQADgDAFAAQADAAACACQADABACACQABADAAADQAAAEgDAFQgFADgDAAQgFAAgDgDg");
	this.shape_579.setTransform(649.9,182.9,1.004,1.004);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AAFAhQgEgFgBgIIgEgLIgTAVQgIAJgGgBQgIAAAAgKQAAgHADgIIAKAAIgEAMQAAABAAAAQABABAAAAQAAABAAAAQABAAAAAAIAFgEIAWgXIgGgTIgCgEIgDgBQgFAAgDANIgIAAQACgIAEgHQADgGAFgDQAFgDAFgBQAHAAADAFQAFAHACAGIABAFIAOgPQAIgHAGgBQAGABACAEIACAIQAAAFgCAFIgIAAQACgFAAgGIgBgDQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAIgCABIgVAWIAKAdQAAABABAAQAAABAAAAQABAAAAAAQAAAAABAAQADAAACgEIAEgJIAIAAQgDAKgEAGQgDAFgGAEQgFACgEAAQgHABgEgGg");
	this.shape_580.setTransform(641.8,185.3,1.004,1.004);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIAAgGIAGgRQgKAPgJAKQgKALgMAAQgGAAgEgEQgDgDAAgFQAAgFACgIIAJgcQACgEAAgDIgBgCQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQgFAAgIAMIgIAAQAHgLAGgGQAIgHALAAQAFAAAEADQAEACAAAIIgBAHIgHAXIgDALIABAEQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAQAEAAAGgGQAFgHAHgMQAIgOAGgTIAVAAIgQA0IgCAHIABACIACABQADAAADgEIAFgKIAJAAQgEAJgHAIQgHAIgLAAQgHAAgDgEg");
	this.shape_581.setTransform(631.4,185.3,1.004,1.004);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AgfAgQgHgEAAgMQAAgNAHgMQAIgNANgIQAMgIAPAAQANABAEAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgFAFgMADQgLAEgPACIgCAAIgBAGQAAAHADADQAEADAGAAQAMAAAMgPIAJAAQgGAJgKAIQgMAIgOAAQgKABgIgHgAACgbIgIAKIgFAMIgDAGQASgCAIgHQAJgGAAgKQAAgCgCgDQgCgCgEAAQgHAAgEAEg");
	this.shape_582.setTransform(622.1,185.3,1.004,1.004);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("AAAAuIAAgDIgIAJIgMAHQgGADgGAAQgKAAgEgGQgFgFAAgLQAAgKADgJQAFgLAGgHQAGgHAKgGQAJgEAKAAQAHAAADACIAGAHIAKgjIACgGQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgEAAIgHgBIACgIIAOAAIAQgCIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQADAAADgDIAGgJIAJAAQgCAFgEAEQgDAGgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgIAIgDAKQgFALAAAIQAAAFADAEQAEACADAAQAGAAAGgFQAFgDAEgIQAFgHACgGQACgJAAgGQAAgEgDgEQgDgDgEAAQgIAAgGAHg");
	this.shape_583.setTransform(613.1,182.9,1.004,1.004);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIABgGIAFgRQgJAOgJALQgLALgMAAQgFAAgEgEQgEgDAAgFIADgNIALgjIgBgCIgCgBQgGAAgHAMIgJAAQAGgKAIgHQAHgHALAAQAGAAADADQAEACAAAIIgBAHIgHAXQgCAHAAAEIABAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQAEAAAGgGQAGgHAHgMQAHgOAHgTIAUAAIgSA7IABACIACABQADAAADgEIAGgKIAIAAQgDAIgHAJQgHAIgMAAQgHAAgDgEg");
	this.shape_584.setTransform(597.4,185.3,1.004,1.004);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AAEAgQgDgGAAgGQgFAGgIAHQgHAFgJAAQgFAAgDgCQgEgDgBgFIgCgKQAAgLAGgNQAHgOAKgJQAJgJAMAAQAGABADACIAFAEIABAHIADgLIAUAAIgQA0IgCAHIABACIACABQAFAAAGgNIAJAAIgFAKQgDAEgEADQgDADgFADQgEABgFAAQgJABgCgHgAgIgWQgHAIgDAKQgEALAAAGQAAALAHAAQAEAAAGgEQADgEAFgHQAEgHACgIQADgIAAgGQgBgEgCgDQgBgDgEAAQgGAAgGAIg");
	this.shape_585.setTransform(587.8,185.3,1.004,1.004);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AAAAuIAAgDQgCAEgGAFQgDADgIAEQgGADgHAAQgJAAgFgGQgFgGAAgKQAAgJAEgKQAEgKAGgIQAHgIAJgFQAJgEAKAAQAHAAADACQAEADACAEIANgpQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgEAAIgHgBIACgIIAPAAIAPgCIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQABAAAAAAQADAAADgDQADgDAEgGIAIAAIgFAJQgEAGgGAEQgGAEgIAAQgOAAAAgQgAgPAAQgGAGgFAMQgEALAAAIQAAAFADAEQADACADAAQAGAAAGgFQAFgDAEgIQAEgFADgIQADgJAAgGQAAgEgDgEQgDgDgEAAQgIAAgHAHg");
	this.shape_586.setTransform(573.6,182.9,1.004,1.004);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AAJAjQgEgEAAgFQAAgFACgGIAHgUIACgMQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQgEAAgIAIQgFAHgHAOQgIAMgFASIgVAAIAQgzIACgJIgBgCIgBgBQgEAAgDAEIgFAKIgHAAQACgJAHgIQAHgIALAAQAHAAADAEQAEADAAAFIgBAGIgFASQALgQAIgKQAKgKALAAQAHAAAEAEQADAEAAAEIgMApIgCAIIABABIACABQACAAAEgDIAHgJIAIAAQgDAGgDAEQgGAGgFADQgGAFgIAAQgGAAgEgDg");
	this.shape_587.setTransform(562.7,185.2,1.004,1.004);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AgfAgQgIgEABgMQgBgNAIgMQAIgNANgIQAMgIAPAAQANABAEAEQAGADgBAHQAAADgCAFQgCAFgGAFQgGAFgLADQgMAEgOACIgCAAIgBAGQAAAHADADQAEADAFAAQANAAAMgPIAJAAQgFAJgMAIQgLAIgNAAQgLABgIgHgAACgbQgFAGgDAEIgFAMIgDAGQASgCAHgHQAKgGAAgKIgCgFQgCgCgDAAQgIAAgEAEg");
	this.shape_588.setTransform(553.3,185.3,1.004,1.004);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("AgVAuQgEgEAAgIIACgNIAMgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAGQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAQAFAAADgFIAHgKIAIAAQgEAJgHAIQgFAFgGADIgJACQgIAAgEgFg");
	this.shape_589.setTransform(546.3,184,1.004,1.004);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AgVAuQgEgEAAgIQAAgEADgJIALgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAGQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIADABQAFAAADgFIAHgKIAIAAQgEAJgHAIQgFAFgGADIgJACQgIAAgEgFg");
	this.shape_590.setTransform(540.3,184,1.004,1.004);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AADAgQgCgGAAgGQgFAGgIAHQgHAFgIAAQgGAAgDgCQgDgDgCgFIgCgKQAAgLAHgNQAFgOALgJQAJgJAMAAQAHABACACIAEAEIADAHIADgLIATAAIgRA0IgBAHIAAACIACABQAGAAAHgNIAIAAIgGAKQgCAEgFADQgCADgGADQgDABgEAAQgKABgDgHgAgIgWQgHAIgDAKQgEALAAAGQAAALAHAAQAFAAAEgEQAEgEAEgHIAHgPQADgIgBgGQAAgEgBgDQgCgDgEAAQgGAAgGAIg");
	this.shape_591.setTransform(532.3,185.3,1.004,1.004);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("AgQATQAOgDAFgGQAGgHAAgDIgBgDIgCAAQgEAAgDgDQgDgFAAgEQAAgEADgEQACgDAFAAQAGAAAEAFQAEAGAAAHQAAAHgFAHQgEAJgJAFQgHAGgOABg");
	this.shape_592.setTransform(526.3,179.4,1.004,1.004);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgFADgIIAWhIIABgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgJgBIACgIIATAAQAFgBAFgBIAGAAIgeBkIgCAJIAAACIACABQACABAEgFQAEgDACgGIAIAAQgDAGgIAKQgHAIgKAAQgHAAgEgEg");
	this.shape_593.setTransform(520.1,182.9,1.004,1.004);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AgSA6QgDgDAAgGQAAgDADgKIAMggIABgFIgBgBIgCgBQgDAAgDAEIgGAIIgHAAQAFgKAJgHQAIgGAHAAQAGAAAEACQADADAAAFIgBAJIgOAlIgBAGIABACIABABQACAAADgDIAIgKIAIAAQgDAHgIAJQgIAIgJAAQgHAAgFgEgAAIgpQgDgEAAgFQAAgEADgEQAEgDAEAAIAHACIADADQACADAAADQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_594.setTransform(509.7,182.9,1.004,1.004);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIAAgGIAGgRQgKAPgJAKQgKALgMAAQgGAAgEgEQgDgDAAgFQAAgFACgIIAJgcQACgEAAgDIgBgCQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgFAAgIAMIgIAAQAHgLAGgGQAIgHALAAQAFAAAEADQAEACAAAIIgBAHIgHAXIgDALIABAEQABABAAAAQAAAAABAAQAAABABAAQAAAAABAAQAEAAAGgGQAFgHAHgMQAIgOAGgTIAVAAIgQA0IgCAHIABACIACABQADAAADgEIAFgKIAJAAQgEAJgHAIQgHAIgLAAQgHAAgDgEg");
	this.shape_595.setTransform(501.1,185.3,1.004,1.004);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AgbA6IADgHIAFAAIAJgBIAEgDIANgqQgPAOgOAAQgHAAgGgDQgEgDgEgGQgDgGAAgFQAAgNAHgLQAHgNALgIQALgIALAAQAKAAAFAFQAFAFACAGQAEgDACgEIAGgJIAMAAIgeBhIgBAGQAAADADABIAJABIADAAIgDAHgAgHgtQgHAGgDAFQgEAHgCAHIgCAMQAAAFAEAEQADAFAHAAQAMAAAJgPQADgFABgGQACgGAAgDQAAgIgCgGQgCgGgJAAQgFAAgFAEg");
	this.shape_596.setTransform(491.1,187.2,1.004,1.004);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AgfAgQgHgEAAgMQAAgNAHgMQAIgNAMgIQAMgIAPAAQANABAFAEQAFADABAHQgBADgCAFQgCAFgGAFQgFAFgLADQgNAEgOACIgCAAIgBAGQAAAHAEADQACADAHAAQAMAAAMgPIAJAAQgFAJgLAIQgMAIgOAAQgKABgIgHgAACgbQgFAFgDAFIgIASQARgCAJgHQAIgGABgKQAAgCgDgDQgBgCgEAAQgHAAgEAEg");
	this.shape_597.setTransform(477.2,185.3,1.004,1.004);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("AgjA4QgMgHgFgKQgGgLAAgNQAAgPAGgNQAGgNALgMQAJgKANgHQANgGAMAAQAJAAAGADQAHADAEADIAGAHQAEgFADgIIAIAAIgJApIgIAAIAAgDQAAgOgFgHQgGgIgFgCIgLgCQgKAAgIAIQgJAGgHANQgHAMgDANQgEAOAAAKQAAAIACAHQADAGAFAFQAFAEAIAAQAGAAAIgEQAJgEAHgIQAIgIADgKIAJAAIgLAoIgIAAIABgGIgBgGQgGAGgJAEQgIAFgLAAQgMAAgKgGg");
	this.shape_598.setTransform(467.9,182.9,1.004,1.004);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFIACgFIAEgEIAFgCQAFAAADAEQADADABAEQgBAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_599.setTransform(452.9,188,1.004,1.004);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("AghAlIAOgwIACgKIAAgCIgCgBQgEAAgDAFIgGAIIgIAAQAEgJAGgHQAGgFAFgCQAEgCAFAAQAHAAACAEQABAEAAAFQAAAIgEAPIAHgNIAIgLQAFgGAEgDQAEgDAGAAQAHAAACADQACAEAAAEQAAAFgDAFQgDAEgFAAQgEAAgEgFQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgEAEIgJAMIgPAjIgBAEg");
	this.shape_600.setTransform(447.8,185.1,1.004,1.004);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AgfAgQgHgEAAgMQAAgNAHgMQAIgNANgIQAMgIAPAAQANABAEAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgFAFgLADQgNAEgOACIgCAAIgBAGQAAAHAEADQADADAGAAQAMAAAMgPIAJAAQgFAJgLAIQgMAIgOAAQgKABgIgHgAACgbQgFAFgDAFIgIASQASgCAIgHQAJgGAAgKQAAgCgCgDQgCgCgEAAQgHAAgEAEg");
	this.shape_601.setTransform(439.5,185.3,1.004,1.004);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("AgVAuQgEgFAAgHIACgNIAMgkIgQAAIACgIIARAAIAIgbIATAAIgIAbIARAAIgBAIIgSAAIgNArIgBAGIABAEQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQADAAAFgFIAGgKIAIAAQgFAKgGAHQgGAGgFACIgJACQgIAAgEgFg");
	this.shape_602.setTransform(432.6,184,1.004,1.004);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("AgVAuQgEgFAAgHIACgNIAMgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAGQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAFAAADgFIAHgKIAIAAQgEAJgHAIQgFAFgGADIgJACQgIAAgEgFg");
	this.shape_603.setTransform(426.6,184,1.004,1.004);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIAGgXQgJAPgKAKQgJALgNAAQgGAAgDgEQgEgDAAgFIADgNIAJgcIABgHIAAgCIgCgBQgFAAgJAMIgIAAQAGgKAIgHQAHgHALAAQAFAAAEADQAEACAAAIIgBAHIgHAXIgCALIABAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQAEAAAGgGQAGgIAGgLQAHgLAHgWIAVAAIgQA0IgCAHIABACIACABQADAAADgEIAGgKIAIAAQgEAJgHAIQgHAIgLAAQgHAAgDgEg");
	this.shape_604.setTransform(417.7,185.3,1.004,1.004);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AAHA6QgDgDAAgFIABgEIABgGIAHgWIACgLIAAgDIgCgDIgEAAQgGAAgIALQgJALgEAJIgIAWIgBAGIgVAAIAfhpQABgDgDgBIgHgBIgCAAIACgIQATAAAJgCIAGAAIgVBJIAKgNQADgEAIgFQAIgEAIAAQAHAAADADQAFADAAAFIgEANIgJAdIAAAHIAAACIABABQAGAAAIgNIAJAAQgGALgIAGQgJAHgJAAQgHAAgEgDg");
	this.shape_605.setTransform(407.5,182.8,1.004,1.004);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AgfAgQgGgGgBgKQAAgLAHgNQAIgNAMgJQAMgHAOgBIAKACQAFABACADQADADACADQABADABADQAAAGgEADQgDAEgFAAQgEAAgCgCQgCgDAAgCIABgKQAAgDgDgCIgFgCQgHAAgHAJQgGAIgEAMQgEALAAAGQAAAIAEADQAEACAEAAQAHAAAGgFQAFgDAGgGIAKAAQgGAIgMAJQgLAHgNAAQgMABgHgHg");
	this.shape_606.setTransform(398.3,185.3,1.004,1.004);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AgfAgQgHgEAAgMQAAgNAHgMQAIgNANgIQAMgIAOAAQAOABAEAEQAGADAAAHQAAADgDAFQgCAFgGAFQgGAFgKADQgNAEgOACIgCAAIgBAGQAAAHAEADQACADAHAAQALAAAMgPIAKAAQgFAJgLAIQgMAIgOAAQgKABgIgHgAACgbQgFAFgDAFIgJASQATgCAHgHQAJgGAAgKQAAgCgCgDQgBgCgEAAQgGAAgFAEg");
	this.shape_607.setTransform(385.4,185.3,1.004,1.004);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AghAlIAOgwIACgKIgBgCIgCgBQgDAAgEAFQgDADgCAFIgIAAQAEgJAGgHQAGgFAFgCQAEgCAFAAQAHAAACAEQABAEAAAFQAAAIgEAPIAPgYQAEgGAFgDQAEgDAGAAQAHAAACADQACAEAAAEQAAAGgDAEQgDAEgFAAQgEAAgDgFQgDgCgCAAQgCAAgEAEIgJAMIgQAng");
	this.shape_608.setTransform(377.3,185.1,1.004,1.004);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIABgGIAFgRQgJAPgKAKQgJALgNAAQgGAAgDgEQgEgDAAgFIADgNIAJgcIABgHIAAgCIgCgBQgFAAgJAMIgIAAQAGgKAIgHQAHgHALAAQAFAAAEADQAEACAAAIIgBAHIgHAXIgCALIABAEQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAQAEAAAGgGQAGgIAGgLQAHgLAHgWIAVAAIgQA0IgCAHIABACIACABQADAAADgEIAGgKIAIAAQgEAJgHAIQgHAIgLAAQgHAAgDgEg");
	this.shape_609.setTransform(367.7,185.3,1.004,1.004);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AgVAuQgEgEAAgIIACgNIAMgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAGQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAQAFAAADgFIAHgKIAIAAQgEAJgHAIQgFAFgGADIgJACQgIAAgEgFg");
	this.shape_610.setTransform(360,184,1.004,1.004);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFFFFF").s().p("AADAgQgCgGAAgGQgFAGgIAHQgHAFgIAAQgGAAgDgCQgDgDgCgFQgCgFAAgFQAAgMAGgMQAHgOAJgJQAKgJAMAAQAGABADACQAEACAAACIADAHIADgLIATAAIgRA0IgBAHIAAACIACABQAGAAAHgNIAIAAIgFAKIgIAHQgDAEgFACQgDABgFAAQgIABgEgHgAgIgWQgHAIgDAKQgEALAAAGQAAALAHAAQAFAAAFgEQAEgEADgHIAHgPQACgIAAgGIgBgHQgCgDgFAAQgFAAgGAIg");
	this.shape_611.setTransform(352,185.3,1.004,1.004);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("AghAlIAOgwIACgKIgBgCIgBgBQgFAAgDAFIgFAIIgIAAQAEgJAHgHQAEgFAGgCQAEgCAFAAQAHAAACAEIABAJQAAAFgEASIAHgNIAIgLQADgFAGgEQAFgDAFAAQAHAAACADQACAEAAAEQAAAFgDAFQgDAEgFAAQgEAAgDgFQgBAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgEAEIgJAMIgOAjIgBAEg");
	this.shape_612.setTransform(343.3,185.1,1.004,1.004);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AgfA1QgHgFAAgLQAAgNAHgNQAIgMANgIQAMgIAPAAQANAAAEAEQAFAEAAAHQAAADgCAEQgBADgHAHQgFAFgMAEQgLAEgPACIgCAAIgBAGQAAAHADADQADADAHAAQAMAAAMgPIAJAAQgGAJgKAIQgMAIgOAAQgKAAgIgGgAACgGIgIAJIgFAMIgDAHQASgDAIgHQAJgHAAgIQAAgDgCgCQgCgCgEAAQgHAAgEAEgAABgcIAJgeIAXAAIgZAeg");
	this.shape_613.setTransform(335,183.2,1.004,1.004);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("Ag6A6IACgIIADAAIAJAAIAEgDIAbhUIABgGIgBgDIgCgBQgCAAgDADQgDADgEAJIgJAAIAGgLQADgFAFgFQAGgEAJAAQANAAAAAPQAOgPAPAAQAKAAAFAEQAFAEACAHQACAFAAAGQAAAJgDAKQgFAKgFAFQgGAHgJAEQgIAFgKAAQgIAAgFgDQgFgDgCgEIgLAkQAAAEAEABIAJAAIAFAAIgDAIgAAPgqQgFAEgFAKIgGAUIgBAHQAAAEACAFQAEAEAFABQAIgBAHgHQAGgHAEgLQAEgLAAgJQAAgGgDgEQgCgEgGgBQgGABgGAFg");
	this.shape_614.setTransform(324.1,187.2,1.004,1.004);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFFFFF").s().p("AApAiQgDgDAAgFQAAgEACgGIAGgVQADgHAAgDQAAgDgCgCQgCgCgDAAQgIAAgIAIQgIAIgIAMQgIARgCAJIgBAFIgVAAIAOgsIABgIQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgCgDAAQgGAAgHAFQgHAHgFAHQgGAHgEAKQgFAJgDALIgBADIgVAAIASg8IgBgCIgCgBIgDABIgFAEIgFAJIgHAAQAEgKAHgHQAHgIALAAIAHABQADACACADQACACAAAFQAAAGgDAJIgCAIQAEgIAGgHQAEgFAIgHQAGgFAFgCQAGgCAFAAQAHAAAEAEQAFAEAAAGQAAAGgDAIIgCAIQAGgLAGgGQAHgJAIgFQAIgFAKAAQAGAAAEACQADADACADIABAGIAAAFIgLAiIgBAHQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAQADAAADgDQAFgCADgIIAJAAQgNAZgTAAQgHAAgEgEg");
	this.shape_615.setTransform(311.7,185.2,1.004,1.004);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AgfAgQgIgEABgMQgBgNAIgMQAIgNANgIQAMgIAPAAQANABAEAEQAGADgBAHQAAADgCAFQgCAFgGAFQgGAFgLADQgMAEgOACIgCAAIgBAGQAAAHADADQAEADAFAAQAMAAAMgPIAKAAQgFAJgMAIQgLAIgOAAQgKABgIgHgAACgbQgFAFgDAFIgJASQATgCAHgHQAJgGAAgKQAAgCgCgDQgBgCgEAAQgGAAgFAEg");
	this.shape_616.setTransform(299,185.3,1.004,1.004);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFFFFF").s().p("AgVAuQgEgFAAgHIACgNIAMgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAGQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAQAEAAAEgFIAHgKIAIAAQgEAJgHAIQgFAFgGADIgJACQgIAAgEgFg");
	this.shape_617.setTransform(292.1,184,1.004,1.004);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFFFF").s().p("AAEAgQgDgEAAgIQgHAJgGAEQgHAFgJAAQgEAAgFgCIgEgIQgCgFAAgFQAAgMAGgMQAGgOAKgJQALgJALAAQAGABADACQAEACAAACIACAHIAEgLIATAAIgSA7IABACIABABQAGAAAGgNIAJAAIgGAKQgDAFgEACQgEAEgEACQgDABgFAAQgJABgCgHgAgIgWQgGAGgEAMQgEAJAAAIQAAALAHAAQAFAAAEgEQAFgEADgHQAFgJACgGQACgGAAgIIgBgHQgCgDgEAAQgGAAgGAIg");
	this.shape_618.setTransform(279.5,185.3,1.004,1.004);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGIADgNIAWhIIACgKQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAIgJgBIACgIIAIAAIALAAQAFgBAFgBIAGAAIggBtIAAACIACABQACABAEgFIAGgJIAIAAQgEAJgHAHQgHAIgKAAQgHAAgEgEg");
	this.shape_619.setTransform(272.2,182.9,1.004,1.004);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FFFFFF").s().p("AgVAuQgEgEAAgIIACgNIAMgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAGQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABIADABQAFAAADgFIAHgKIAIAAQgEAJgHAIQgFAFgGADIgJACQgIAAgEgFg");
	this.shape_620.setTransform(261.7,184,1.004,1.004);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FFFFFF").s().p("AgfAgQgHgEAAgMQAAgNAHgMQAIgNAMgIQANgIAPAAQANABAEAEQAFADAAAHQAAAEgCAEQgBAEgHAGQgFAFgMADQgLAEgPACIgCAAIgBAGQAAAHADADQADADAGAAQANAAAMgPIAJAAQgFAJgMAIQgLAIgOAAQgKABgIgHgAACgbQgEAEgEAGIgGAMIgCAGQASgCAIgHQAJgGAAgKQAAgCgCgDQgCgCgEAAQgHAAgEAEg");
	this.shape_621.setTransform(254.2,185.3,1.004,1.004);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FFFFFF").s().p("AghAlIAOgwIACgKIgBgCIgCgBQgDAAgEAFIgFAIIgIAAQAFgJAFgHQAGgFAFgCQAEgCAFAAQAHAAACAEQABAEAAAFQAAAIgEAPIAPgYQAFgGAFgDQAEgDAFAAQAHAAACADQACAEAAAEQAAAFgDAFQgDAEgEAAQgFAAgEgFQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgEAEIgIAMIgQAjIgBAEg");
	this.shape_622.setTransform(241.6,185.1,1.004,1.004);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FFFFFF").s().p("AgfAgQgHgEAAgMQAAgNAHgMQAIgNANgIQAMgIAPAAQANABAEAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgFAFgLADQgNAEgOACIgCAAIgBAGQAAAHAEADQADADAGAAQAMAAAMgPIAJAAQgFAJgLAIQgMAIgOAAQgKABgIgHgAACgbQgFAFgDAFIgIASQASgCAIgHQAJgGAAgKQAAgCgCgDQgCgCgEAAQgGAAgFAEg");
	this.shape_623.setTransform(233.3,185.3,1.004,1.004);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FFFFFF").s().p("AgVAuQgEgFAAgHIACgNIAMgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIASAAIgDAIIgRAAIgNArIgBAGQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQAEAAAEgFIAHgKIAIAAQgFAKgGAHQgFAFgGADIgJACQgIAAgEgFg");
	this.shape_624.setTransform(226.4,184,1.004,1.004);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FFFFFF").s().p("AAJAjQgEgEAAgFQAAgFACgGIAHgUIADgMQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQgEAAgIAIQgFAHgHAOQgIAMgFASIgVAAIAQgzIACgJIAAgCIgCgBQgEAAgDAEIgGAKIgHAAQAEgJAHgIQAHgIALAAQAGAAAEAEQADADAAAFIgBAGIgGASQALgQAJgKQAKgKALAAQAHAAADAEQADAEAAAEIgLApIgCAIIABABIABABQACAAAFgDIAHgJIAJAAQgEAGgDAEQgFAGgGADQgGAFgIAAQgGAAgEgDg");
	this.shape_625.setTransform(217.7,185.2,1.004,1.004);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FFFFFF").s().p("AgfAgQgIgEAAgMQAAgNAIgMQAHgNANgIQAMgIAPAAQAOABAEAEQAFADAAAHQAAADgCAFQgCAFgGAFQgEAFgNADQgMAEgOACIgCAAIAAAGQAAAHADADQADADAFAAQANAAAMgPIAJAAQgFAJgMAIQgLAIgOAAQgLABgHgHgAACgbQgFAGgCAEIgHAMIgCAGQARgCAJgHQAJgGAAgKIgCgFQgCgCgEAAQgGAAgFAEg");
	this.shape_626.setTransform(208.3,185.3,1.004,1.004);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FFFFFF").s().p("AApAiQgDgDAAgFQAAgEACgGIAGgVQADgHAAgDQAAgDgCgCQgCgCgDAAQgIAAgIAIQgIAIgIAMQgIARgCAJIgBAFIgVAAIAOgsIABgIQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgCgCgDAAQgGAAgHAFQgHAHgFAHQgGAHgEAKQgFAJgDALIgBADIgVAAIASg8IgBgCIgCgBIgDABIgFAEIgFAJIgHAAQAEgKAHgHQAHgIALAAIAHABQADACACADQACACAAAFQAAAGgDAJIgCAIQAEgIAGgHQAEgFAIgHQAGgFAFgCQAGgCAFAAQAHAAAEAEQAFAEAAAGQAAAGgDAIIgCAIQAGgLAGgGQAHgJAIgFQAIgFAKAAQAGAAAEACQADADACADIABAGIAAAFIgLAiIgBAHQAAABAAABQAAAAAAABQABAAAAAAQABAAAAAAQADAAADgDQAFgCADgIIAJAAQgNAZgTAAQgHAAgEgEg");
	this.shape_627.setTransform(195.4,185.2,1.004,1.004);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FFFFFF").s().p("AgbA6QgIgCgJgEQgHgFgBgIIACgIIAGgFQACgCADAAIADABIABACIgCADQgDAEAAADQAAAJAJADQALACAJAAQAMAAAHgDQAHgEAAgFIgCgEIgFgDIgegLQgGgDgCgDQgDgEAAgFQAAgGAHgFQAGgEAIgCQgGgCgEgGQgDgHAAgEQAAgIAEgGQAEgGAJgEQAHgEAKAAQAPAAAHAHIAGgGQADgBAFAAQAEAAABABQADADAAACQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABIgDABIgEgCIgEgBQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQACACABADIABAHIgCAIQgBAEgEAFQgFAFgHADQgIADgLAAQgLAAgDACQgEABAAADIABADIAFACIAVAHQAZAHAAAPQgBAGgEAGQgGAHgJACQgMAEgPAAgAACgvQgDAEgDAHQgCAGAAAGQAAAFACADQAEACACAAQAKAAAEgJQAFgKAAgIIgBgGIgDgEIgGgBQgGAAgDAFg");
	this.shape_628.setTransform(181.8,187.3,1.004,1.004);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIABgGIAFgRQgJAOgJALQgLALgMAAQgFAAgEgEQgEgDAAgFIADgNIALgjIgBgCIgCgBQgGAAgHAMIgJAAQAGgKAIgHQAHgHALAAQAGAAADADQAEACAAAIIgBAHIgHAXQgCAHAAAEIABAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQAEAAAGgGQAGgHAHgMQAHgOAHgTIAVAAIgTA7IABACIACABQADAAADgEIAGgKIAIAAQgDAIgHAJQgHAIgMAAQgHAAgDgEg");
	this.shape_629.setTransform(172.5,185.3,1.004,1.004);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFFFF").s().p("AADAgQgCgGAAgGQgGAIgHAFQgHAFgJAAQgFAAgDgCQgEgDgBgFQgCgFAAgFQAAgMAGgMQAGgOALgJQAJgJAMAAQAGABADACIAEAEIACAHIADgLIAUAAIgRA0IgBAHIAAACIACABQAGAAAGgNIAJAAIgGAKQgCAEgFADQgDADgFADQgDABgFAAQgJABgDgHgAgIgWQgHAIgDAKQgEALAAAGQAAALAHAAQAEAAAFgEQAEgEAEgHQAEgHADgIQACgIAAgGQAAgEgCgDQgBgDgEAAQgGAAgGAIg");
	this.shape_630.setTransform(162.8,185.3,1.004,1.004);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FFFFFF").s().p("AghAlIANgwIADgKIAAgCIgDgBQgDAAgDAFIgGAIIgIAAQAFgJAFgHQAGgFAFgCQAEgCAFAAQAHAAACAEIABAJQAAAIgEAPIAHgNIAIgLQAFgGAFgDQADgDAGAAQAHAAACADQACAEAAAEQAAAFgDAFQgDAEgEAAQgFAAgEgFQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgEAEIgIAMIgQAjIgBAEg");
	this.shape_631.setTransform(149.6,185.1,1.004,1.004);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("AgSA6QgDgDAAgGQAAgFADgIIANglIgBgBIgCgBQgCAAgEAEIgFAIIgIAAQAFgKAIgHQAJgGAHAAQAHAAADACQADADAAAFQAAAFgCAEIgNAlIgBAGIABACIABABQADAAACgDQAEgDADgHIAJAAQgEAIgHAIQgIAIgJAAQgIAAgEgEgAAIgpQgDgEAAgFQAAgEADgEQAEgDAFAAQADAAACACQADABACACQABADAAADQAAAEgDAFQgFADgDAAQgEAAgFgDg");
	this.shape_632.setTransform(142.9,182.9,1.004,1.004);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFFFFF").s().p("AAEAgQgDgEAAgIQgHAJgGAEQgHAFgIAAQgFAAgFgCIgFgIQgBgFAAgFQAAgMAGgMQAGgOALgJQAKgJALAAQAGABACACQAFACAAACIACAHIADgLIAUAAIgTA7IACACIABABQAGAAAGgNIAJAAIgGAKQgEAFgDACQgDAEgEACQgEABgEAAQgKABgCgHgAgIgWQgGAGgEAMQgEAJAAAIQAAALAGAAQAGAAAEgEQAFgEADgHQAFgJACgGQACgGAAgIIgCgHQgBgDgEAAQgGAAgGAIg");
	this.shape_633.setTransform(135.2,185.3,1.004,1.004);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFFFF").s().p("AgQATQAOgDAFgGQAGgIAAgCIgBgDIgCAAQgFAAgCgDQgDgEAAgFQAAgEADgEQADgDAEAAQAGAAAEAFQAEAGAAAHQAAAHgFAHQgEAIgJAGQgHAGgOABg");
	this.shape_634.setTransform(129.2,179.4,1.004,1.004);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgEADgJIAXhIIAAgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgJgBIACgIIATAAQAGgBAEgBIAGAAIghBtIACACIABABQADABACgFQAEgDADgGIAIAAQgDAGgIAKQgHAIgKAAQgGAAgFgEg");
	this.shape_635.setTransform(123,182.9,1.004,1.004);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AgfAgQgHgEAAgMQAAgNAHgMQAIgNANgIQAMgIAPAAQANABAEAEQAFADAAAHQAAAEgCAEQgCAFgGAFQgFAFgLADQgNAEgOACIgCAAIgBAGQAAAHAEADQADADAGAAQAMAAAMgPIAJAAQgFAJgLAIQgMAIgOAAQgKABgIgHgAACgbQgFAFgDAFIgIASQASgCAIgHQAJgGAAgKQAAgCgCgDQgCgCgEAAQgHAAgEAEg");
	this.shape_636.setTransform(111,185.3,1.004,1.004);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FFFFFF").s().p("AAAAuIAAgDIgIAJQgFAEgHADQgGADgGAAQgKAAgEgGQgFgFAAgLQAAgKAEgJQAEgKAGgIQAGgHAKgGQAJgEAKAAQAHAAADACIAGAHIAKgjIACgGQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgEAAIgHgBIACgIIAOAAIAQgCIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQADAAADgDQAEgEADgFIAIAAIgFAJQgFAGgFAEQgGAEgIAAQgOAAAAgQgAgPAAQgIAIgDAKQgFALAAAIQAAAFADAEQAEACADAAQAGAAAGgFQAEgCAFgJQAFgIACgFQACgJAAgGQAAgEgDgEQgDgDgDAAQgIAAgHAHg");
	this.shape_637.setTransform(102,182.9,1.004,1.004);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFFFF").s().p("AAIAjQgDgDAAgFQAAgGACgGIAHgUIADgLQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBgBAAQgEAAgIAIQgFAIgHANQgIANgFARIgVAAIAQgzIACgIIAAgDIgCgBQgEAAgDAEIgGAKIgHAAQAEgJAHgIQAGgIAMAAQAGAAAEAEQADAEAAAEIgBAGIgGASQALgQAJgKQAKgKAMAAQAFAAAEAEQADAEAAAFIgLAoIgBAIIAAABIABACQACAAAFgEIAHgJIAJAAQgEAGgDAEQgFAGgGADQgHAFgHAAQgGAAgFgDg");
	this.shape_638.setTransform(737.5,163.5,1.004,1.004);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFFFFF").s().p("AgYAjQgIgFgEgHQgEgIAAgIQAAgLAGgKQAGgLAMgGQAMgHALAAQALAAAIAFQAIAFADAGQAEAGAAAJQAAAJgDAIQgDAIgHAHQgGAGgJAEQgKAEgJAAQgKAAgIgEgAgEgZQgGAGgCAGQgEAJgCAFIgBANQAAAIADAEQADAFAHAAQAGAAAFgFQAFgDAEgJQADgGACgIQACgHAAgGQAAgHgEgFQgDgFgHAAQgGAAgFAFg");
	this.shape_639.setTransform(727.3,163.6,1.004,1.004);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FFFFFF").s().p("AgRA6QgFgDAAgGQAAgFAEgIIALggIACgFIgBgBIgBgBQgEAAgDAEIgFAIIgIAAQAFgKAIgHQAKgGAGAAQAGAAADACQAEADABAFIgDAJIgNAlIgBAHIABABIABABQADAAADgCIAGgLIAIAAQgDAIgIAIQgHAIgKAAQgHAAgDgEgAAJgpQgEgEAAgFQAAgEAEgEQACgDAGAAIAFACIAFADQABADAAADQAAAFgDAEQgEADgEAAQgFAAgDgDg");
	this.shape_640.setTransform(720.1,161.2,1.004,1.004);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FFFFFF").s().p("AgfAgQgHgGAAgGQAAgEACgDQADgDAFAAQAIAAACALQABAFACADQACADAHAAQAGAAADgDQADgDAAgFIgBgEIgFgGIgLgLQgFgEgCgEQgDgEABgEQAAgFACgEQADgFAHgEQAIgEAMAAQAIAAAFACQAFABAEADIAEAEIABAFQAAADgDAEQgCACgEAAIgFgBIgCgDQgCgDgBgEIgDgEQgCgCgFAAQgGAAgCACQgDADAAAEQAAADABACIAKAKIANALQADAFAAAHQABAGgEAFQgDAFgIADQgJAEgKAAQgQAAgIgHg");
	this.shape_641.setTransform(712.9,163.6,1.004,1.004);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FFFFFF").s().p("AgfAgQgHgHAAgFQAAgEADgDQADgDAEAAQAJAAABALQAAAFADADQACADAHAAQAGAAADgDQADgDAAgFIgBgEIgFgGIgLgLQgFgEgCgEQgCgEgBgEQAAgFAEgEQABgFAJgEQAHgEAMAAQAJAAAEACQAGABADADIAEAEIABAFQAAADgCAEQgDACgEAAIgFgBIgDgDIgCgHIgDgEQgBgCgGAAQgEAAgEACQgDADAAAEQAAADABACIAKAKQAIAGAEAFQAEAFABAHQAAAGgEAFQgDAFgIADQgIAEgKAAQgSAAgHgHg");
	this.shape_642.setTransform(704.6,163.6,1.004,1.004);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FFFFFF").s().p("AgfAhQgHgFAAgMQAAgNAHgMQAIgNANgIQAMgIAPAAQAMAAAFAFQAFADAAAHQAAAEgCAEQgCAFgGAFQgFAFgMAEQgLAEgPABIgCAAIgBAHQAAAGADADQAEADAGAAQAMAAAMgOIAJAAQgGAIgKAIQgMAJgOAAQgKAAgIgGgAACgbIgIAKIgFAMIgDAGQASgCAIgHQAJgGAAgJQAAgDgCgDQgCgCgEAAQgHAAgEAEg");
	this.shape_643.setTransform(696.3,163.6,1.004,1.004);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FFFFFF").s().p("AghAlIANgwIADgKIgBgCIgCgBQgDAAgEAFIgFAJIgIAAQAFgKAFgHQAFgEAFgDQAHgDACABQAIAAACAEIABAJQAAAIgEAPIAHgNIAIgLQAEgFAGgEQAEgDAFAAQAHAAACADQACAEAAAEQAAAFgDAFQgDAEgEABQgFAAgDgGQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgDAAgEAEIgIAMIgQAkIgBADg");
	this.shape_644.setTransform(688.2,163.4,1.004,1.004);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FFFFFF").s().p("Ag6A6IACgHIADAAIAJgBQABAAAAgBQABAAABAAQAAgBAAAAQABgBAAAAIAbhTIABgHIgBgCQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQgCAAgDAEQgDACgEAJIgJAAIAGgLQACgEAGgFQAHgFAIAAQANAAAAAPQAPgPAOAAQAKAAAFAEQAGAGABAFQACAFAAAGQAAAKgDAJQgDAJgHAGQgGAHgJAFQgIAEgKAAQgIAAgFgCQgEgDgDgEIgJAeIgBAGQAAADADABIAJABIAFAAIgDAHgAAPgqQgFAFgFAJIgGAUIgBAIQAAAEACAEQAEAFAGAAQAHAAAHgIQAGgGAEgMQAEgLAAgJQAAgFgDgFQgCgEgGAAQgGAAgGAFg");
	this.shape_645.setTransform(677.5,165.5,1.004,1.004);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FFFFFF").s().p("AADAhQgCgGAAgHQgFAHgIAGQgHAGgIAAQgGAAgDgDQgDgDgCgFQgCgEAAgGQAAgMAGgMQAHgOAJgJQALgJALAAQAGAAADADQAEACAAADIADAGIACgLIAUAAIgRA0IgBAHIAAACIACABQAGAAAHgMIAIAAIgGAJIgHAIQgDADgFACQgDACgEAAQgKAAgDgGgAgIgWQgHAIgDAKQgEALAAAHQAAAKAHAAQAFAAAEgEQAEgDAEgIIAHgOQADgJgBgFIgBgIQgCgDgFAAQgFAAgGAIg");
	this.shape_646.setTransform(664.6,163.6,1.004,1.004);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgEADgJIAXhIIABgKQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAIgJgBIACgIIAIAAIALAAIAKgCIAGAAIggBtIABACIABABQADABADgFQAEgEACgFIAIAAQgDAGgIAKQgGAIgLAAQgHAAgEgEg");
	this.shape_647.setTransform(657.3,161.2,1.004,1.004);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FFFFFF").s().p("AgVAuQgEgEgBgIQAAgEAEgJIALgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIARAAIgCAIIgSAAIgNAxIABAEIADABQAFAAADgFIAHgKIAJAAQgGALgGAGQgGAFgFADIgKACQgGAAgFgFg");
	this.shape_648.setTransform(646.8,162.4,1.004,1.004);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FFFFFF").s().p("AAJAjQgEgDAAgFQAAgGACgGIAJgfIgBgEQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAQgFAAgHAIQgEAGgJAPQgGAOgGAQIgVAAIAQgzIACgIIAAgDIgCgBQgEAAgDAEIgFAKIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAFAAADIgBAGIgFASQANgSAGgIQAKgKAMAAQAGAAADAEQADAEAAAFIgCAKIgJAeIgBAIIAAABQAAABAAAAQAAAAABAAQAAAAAAAAQAAABABAAQABAAAFgEQAEgFADgEIAJAAQgCAEgFAGQgEAFgHAEQgGAFgIAAQgGAAgEgDg");
	this.shape_649.setTransform(638.2,163.5,1.004,1.004);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFFFFF").s().p("AgfAhQgHgFAAgMQAAgNAHgMQAIgMANgJQAMgIAPAAQAMAAAFAFQAFADAAAHQAAAEgCAEQgCAFgGAFQgFAFgLAEQgNAEgOABIgCAAIgBAHQAAAGAEADQADADAGAAQAMAAAMgOIAJAAQgFAIgLAIQgMAJgOAAQgKAAgIgGgAACgbQgFAFgDAFIgIASQASgCAIgHQAJgGAAgJQAAgDgCgDQgCgCgEAAQgGAAgFAEg");
	this.shape_650.setTransform(628.7,163.6,1.004,1.004);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFFFFF").s().p("AgfAgQgHgHAAgFQAAgEADgDQACgDAFAAQAJAAABALQABAGACACQACADAHAAQAGAAACgDQAEgDAAgFIgBgEIgFgGIgLgLQgFgEgCgEQgCgDAAgFQAAgFACgEQADgFAIgEQAHgEAMAAQAIAAAFACQAFABAEADQADACABACIABAFQAAADgCAEQgDACgEAAQgEAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAIgCgHQgBgDgCgBQgCgCgFAAQgFAAgDACQgDACAAAFQAAADABACIADAEIAUARQADAFAAAHQAAAGgDAFQgEAGgHACQgJAEgKAAQgQAAgIgHg");
	this.shape_651.setTransform(620.3,163.6,1.004,1.004);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFFFFF").s().p("AgYAjQgIgFgEgHQgEgIAAgIQAAgLAGgKQAGgLAMgGQAMgHALAAQALAAAIAFQAIAFADAGQAEAGAAAJQAAAJgDAIQgDAIgHAHQgIAGgIAEQgJAEgJAAQgKAAgIgEgAgEgZQgFAFgEAHIgFAOIgBANQAAAIADAEQADAFAHAAQAGAAAFgFQAFgEAEgIQADgGACgIIACgNQAAgHgEgFQgDgFgHAAQgGAAgFAFg");
	this.shape_652.setTransform(606.8,163.6,1.004,1.004);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FFFFFF").s().p("AAAAuIAAgBIAAgCIgIAJQgEADgHAEQgHADgGAAQgJAAgFgGQgFgFAAgLQAAgKAEgJQAEgKAGgIQAGgHAKgGQAJgEAKAAQAGAAAEACIAGAHIAKgjIACgGQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgEAAIgHgBIACgIIAOAAIAJgBIAHgBIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQABAAAAAAQADAAADgDQAEgEADgFIAIAAIgFAJQgFAGgFADQgGAFgIAAQgOAAAAgQgAgPAAQgHAGgEAMQgEAKAAAJQAAAGACADQAEACADAAQAHAAAFgFQAFgDAEgIQAFgIACgFQACgHAAgIQAAgEgDgEQgDgDgDAAQgIAAgHAHg");
	this.shape_653.setTransform(597.4,161.2,1.004,1.004);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FFFFFF").s().p("AgfAhQgHgFAAgMQAAgNAHgMQAIgNANgIQAMgIAPAAQAMAAAFAFQAFADAAAHQAAAEgCAEQgCAFgGAFQgFAFgMAEQgLAEgPABIgCAAIgBAHQAAAGADADQAEADAGAAQAMAAAMgOIAJAAQgGAIgKAIQgMAJgOAAQgKAAgIgGgAACgbIgIAKIgFAMIgDAGQASgCAIgHQAJgGAAgJQAAgDgCgDQgCgCgEAAQgHAAgEAEg");
	this.shape_654.setTransform(587.5,163.6,1.004,1.004);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FFFFFF").s().p("AghAlIANgwIADgKIAAgCIgDgBQgDAAgDAFIgGAJIgIAAQAFgKAFgHQAGgEAEgDQAHgDACABQAIAAACAEIABAJQAAAIgEAPIAHgNIAIgLQAFgFAEgEQAGgDAEAAQAHAAACADQACAEAAAEQAAAFgDAFQgDAEgFABQgEAAgEgGQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgDAAgEAEIgIAMIgQAkIgBADg");
	this.shape_655.setTransform(579.5,163.4,1.004,1.004);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FFFFFF").s().p("Ag4BOQgFgDAAgGQAAgEADgDQADgDAEAAQAGAAABADQACADAAAEQABAGAEAAQAEAAADgFQAEgFADgKIAXhPIgOAAIACgIIAPAAIABgGIAIgVQAEgKAIgGQAJgHALAAQAGAAADACQAEABACADQADADAAAEQAAADgDAEQgCACgEAAQgDAAgCgCIgGgLQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgEACIgCAFIgLAjIAPAAIgDAIIgOAAIgQAxQgFAUgEAKQgEAKgKAKQgKAIgMAAQgKAAgGgFg");
	this.shape_656.setTransform(572.2,163.3,1.004,1.004);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGIADgNIAWhIIACgKQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAIgJgBIACgIIATAAQAFgBAFgBIAGAAIggBtIAAACIACABQACABAEgFIAGgJIAIAAQgEAJgHAHQgHAIgKAAQgHAAgEgEg");
	this.shape_657.setTransform(567.6,161.2,1.004,1.004);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FFFFFF").s().p("AAEA9IACgJQAIAAADgBQAEgCABgEQACgEAAgIIAAgPIglAAIgMATQgFAHAAADQAAAFALAAIAFAAIgCAJIgsAAIADgJQAGAAAGgGQAFgEAIgLIBAhbIAPAAIgBBjQAAAFABADQACAEADAAQACABAGAAIgCAJgAgGAKIAeAAIABgug");
	this.shape_658.setTransform(557.9,161.1,1.004,1.004);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FFFFFF").s().p("AgQATQAOgDAFgHQAGgHAAgCIgBgCIgCgBQgFAAgCgDQgDgEAAgFQAAgEADgEQADgDAEAAQAGAAAEAGQAEAFAAAHQAAAHgFAHQgEAIgJAGQgJAFgMACg");
	this.shape_659.setTransform(545,167.9,1.004,1.004);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FFFFFF").s().p("AgiAlIAPgwIACgKIgBgCIgCgBQgDAAgEAFIgFAJIgIAAQAFgMAGgFQAEgEAGgDQAFgDAEABQAHAAACAEQABAEAAAFQAAAHgEAQIAOgYQAEgFAGgEQAFgDAFAAQAHAAACADIACAIQAAAFgDAFQgDAEgFABQgEAAgEgGQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgEAEIgJAMIgIAQIgGAUIgCADg");
	this.shape_660.setTransform(540.5,163.4,1.004,1.004);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FFFFFF").s().p("AgRA6QgEgDAAgGQAAgFADgIIALggIACgFIgBgBIgCgBQgCAAgEAEIgFAIIgIAAQAGgKAHgHQAJgGAHAAQAGAAADACQAFADAAAFQAAAFgCAEIgOAlIAAAHIAAABIABABQADAAADgCQABgCAGgJIAHAAQgCAGgIAKQgIAIgKAAQgGAAgEgEgAAJgpQgEgFAAgEQAAgEAEgEQACgDAGAAQADAAADACIAEADQABADAAADQAAAFgDAEQgEADgEAAQgFAAgDgDg");
	this.shape_661.setTransform(533.8,161.2,1.004,1.004);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FFFFFF").s().p("AgYAjQgIgFgEgHQgFgHABgJQgBgKAHgLQAGgLAMgGQAMgHALAAQALAAAHAFQAJAEADAHQAFAHAAAIQgBAJgDAIQgEAJgGAGQgIAGgHAEQgKAEgJAAQgJAAgJgEgAgEgZQgEAEgEAIIgGAOQgBAHAAAGQAAAIADAEQAEAFAFAAQAHAAAFgFQAGgEADgIIAFgOIABgNQAAgIgDgEQgDgFgHAAQgGAAgFAFg");
	this.shape_662.setTransform(525.8,163.6,1.004,1.004);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FFFFFF").s().p("AAJAjQgEgDAAgFQAAgGACgGIAJgfIgBgEQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAQgFAAgHAIQgEAGgJAPQgGAOgGAQIgVAAIAQgzIACgIIAAgDIgCgBQgEAAgDAEIgFAKIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAGIgFASQAKgQAJgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeQgCAFAAADIABABQAAABAAAAQAAAAABAAQAAAAAAAAQAAABABAAQABAAAFgEQAEgFADgEIAJAAQgCAEgFAGQgEAFgHAEQgGAFgIAAQgGAAgEgDg");
	this.shape_663.setTransform(515.8,163.5,1.004,1.004);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FFFFFF").s().p("AADAhQgCgFAAgIQgGAIgHAFQgIAGgIAAQgEAAgEgDQgEgEgCgEQgBgFAAgFQAAgMAGgMQAGgOAKgJQALgJALAAQAFAAAEADIAEAFIACAGIADgLIAUAAIgTA7IABACIACABQAGAAAGgMIAJAAIgGAJQgDAEgEAEQgEADgEACQgEACgEAAQgJAAgDgGgAgIgWQgHAIgDAKQgEAKAAAIQAAAKAHAAQAEAAAFgEQAFgEADgHQAEgHADgHQACgJAAgFIgBgIQgCgDgFAAQgFAAgGAIg");
	this.shape_664.setTransform(506,163.6,1.004,1.004);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFFF").s().p("AAqAiQgEgEAAgEIACgKIAJgfIgCgFQgCgBgDgBQgIAAgIAIQgJAKgGAKQgHAMgEAOIgBAFIgVAAIAOgrIABgJQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAQgHAAgFAGQgGAEgHAJIgKARIgIAUIgBADIgVAAIAQgyIACgKIgBgCIgCgBIgDABIgEAEIgFAJIgIAAQADgJAIgIQAIgIAKAAQAEAAADACQADAAACAEQACACAAAFQAAAFgDAKIgCAIIAKgOQAFgHAHgGIAMgGQAGgDAFAAQAGAAAFAEQAEAEAAAGQAAAFgDAJIgCAIQAGgLAGgGQAHgIAIgGQAKgFAIAAQAGAAAEADIAFAFIACAHIgBAEIgKAiIgCAHQAAABAAABQAAAAAAABQABAAAAAAQABABABAAQACgBAEgDQADgBAFgJIAIAAQgNAZgTAAQgHAAgDgEg");
	this.shape_665.setTransform(492.4,163.5,1.004,1.004);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FFFFFF").s().p("AgfAhQgHgFAAgMQAAgNAHgMQAIgNAMgIQAOgIAOAAQAMAAAFAFQAFAEAAAGIgCAIQgBAEgHAGQgFAFgMAEQgLAEgPABIgCAAIgBAHQAAAGADADQADADAGAAQANAAAMgOIAJAAQgFAIgMAIQgLAJgOAAQgKAAgIgGgAACgbQgEAEgEAGIgGAMIgCAGQASgCAIgHQAJgGAAgJIgCgGQgCgCgEAAQgHAAgEAEg");
	this.shape_666.setTransform(475.2,163.6,1.004,1.004);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgEADgJIAWhIIABgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgKgBIADgIIAIAAIALAAQAFgBAFgBIAGAAIggBtIABACIABABQADABADgFQAEgEACgFIAIAAQgDAGgIAKQgHAIgKAAQgGAAgFgEg");
	this.shape_667.setTransform(468.6,161.2,1.004,1.004);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FFFFFF").s().p("AgfAgQgHgHAAgFQAAgEADgDQACgDAFAAQAJAAABALQABAFACADQACADAHAAQAGAAADgDQADgDAAgFIgBgEIgFgGIgLgLQgFgEgCgEQgCgEgBgEQAAgFADgEQADgFAIgEQAHgEAMAAQAJAAAEACQAGABADADQADACABACIABAFQAAAEgCADQgDACgEAAIgFgBIgCgDIgDgHQgBgDgCgBQgBgCgGAAQgFAAgDACQgDACAAAFQAAADABACIAEAEIAGAGQAIAGAFAFQADAEAAAIQAAAGgDAFQgDAGgIACQgJAEgJAAQgSAAgHgHg");
	this.shape_668.setTransform(456.6,163.6,1.004,1.004);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FFFFFF").s().p("AAJAjQgEgDAAgFQAAgGACgGIAHgUQACgHAAgEIgBgEQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAQgFAAgHAIQgEAGgJAPQgGAOgGAQIgVAAIAQgzIACgIIAAgDIgCgBQgEAAgDAEIgFAKIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAFAAADIgBAGIgFASQANgSAGgIQAKgKAMAAQAGAAADAEQADAEAAAFIgCAKIgJAeIgBAIIAAABIACACQABAAAFgEIAHgJIAJAAIgHAKQgFAFgGAEQgGAFgIAAQgGAAgEgDg");
	this.shape_669.setTransform(447.2,163.5,1.004,1.004);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FFFFFF").s().p("AAEAhQgDgFAAgIQgHAJgGAEQgHAGgJAAQgEAAgFgDQgDgEgCgEQgBgFAAgFQAAgMAGgMQAGgOALgJQAKgJALAAQAFAAADADQADABACAEIACAGIADgLIAUAAIgTA7IACACIABABQAGAAAGgMIAJAAIgGAJQgDAEgEAEQgDADgEACQgFACgEAAQgJAAgCgGgAgJgWQgFAGgFAMQgDAKAAAIQAAAKAGAAQAGAAAEgEQAFgEADgHIAHgOQACgHAAgHIgCgIQgBgDgEAAQgGAAgHAIg");
	this.shape_670.setTransform(437.3,163.6,1.004,1.004);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FFFFFF").s().p("AAAAuIAAgDIgIAJQgEADgHAEQgHADgGAAQgKAAgEgGQgFgFAAgLQAAgKAEgJQAEgKAGgIQAGgHAKgGQAKgEAJAAQAGAAAEACIAGAHIAKgjIACgGQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgEAAIgHgBIACgIIAOAAIAJgBIAHgBIAGAAIgfBkIgCAJQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQADAAADgDQAEgEADgFIAIAAQgBADgEAGQgFAGgFADQgGAFgIAAQgOAAAAgQgAgPAAQgIAIgDAKQgFALAAAIQAAAFADAEQAEACADAAQAHAAAFgFQAEgCAFgJIAHgNQACgHAAgIQAAgEgDgEQgDgDgDAAQgIAAgHAHg");
	this.shape_671.setTransform(427.6,161.2,1.004,1.004);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FFFFFF").s().p("AgVAuQgFgEAAgIQAAgEAEgJIALgkIgRAAIADgIIAQAAIAIgbIAUAAIgIAbIARAAIgCAIIgSAAIgNAxIABAEIADABQAEAAAEgFIAHgKIAJAAQgGALgGAGQgFAFgGADIgKACQgHAAgEgFg");
	this.shape_672.setTransform(414.8,162.4,1.004,1.004);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FFFFFF").s().p("AAJAjQgEgDAAgFQAAgGACgGIAJgfIgBgEQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAQgFAAgHAIQgEAGgJAPQgGAOgGAQIgVAAIAQgzIACgIIAAgDIgCgBQgEAAgDAEQgCADgDAHIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAGIgFASQAKgQAJgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeQgCAFAAADIABABQAAABAAAAQAAAAABAAQAAAAAAAAQAAABABAAQABAAAFgEQAEgFADgEIAJAAQgCAEgFAGQgEAFgHAEQgGAFgIAAQgGAAgEgDg");
	this.shape_673.setTransform(406.2,163.5,1.004,1.004);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FFFFFF").s().p("AgfAhQgHgFAAgMQAAgNAHgMQAIgMANgJQAMgIAPAAQAMAAAFAFQAFADAAAHQAAAEgCAEQgCAFgGAFQgFAFgMAEQgLAEgPABIgCAAIgBAHQAAAGADADQAEADAGAAQAMAAAMgOIAJAAQgEAHgMAJQgMAJgOAAQgKAAgIgGgAACgbQgFAFgDAFIgIASQASgCAIgHQAJgGAAgJQAAgDgCgDQgCgCgEAAQgHAAgEAEg");
	this.shape_674.setTransform(396.7,163.6,1.004,1.004);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FFFFFF").s().p("AApAiQgDgEAAgEIACgKIAJgfIgCgFQgCgBgDgBQgIAAgIAIQgKAKgFAKQgHANgEANIgBAFIgVAAIANgrIACgJQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAgBAAQAAgBgBAAQgHAAgFAGQgHAEgGAJIgLARIgIAXIgVAAIASg8IgBgCIgCgBIgEABIgDAEIgFAJIgIAAQADgIAHgJQAJgIAKAAQADAAADACQADAAADAEQACACAAAFQAAAFgDAKIgDAIIALgOIAMgNQAHgFAEgBQAHgDAEAAQAGAAAGAEQAEAEAAAGIgCAOIgDAIQAGgLAGgGQAHgIAIgGQAKgFAJAAQAEAAAFADIAFAFIABAHIAAAEIgLAiIgBAHQgBABABABQAAAAAAABQABAAAAAAQABABAAAAQADgBADgDQAEgBAFgJIAIAAQgOAZgSAAQgHAAgEgEg");
	this.shape_675.setTransform(383.9,163.5,1.004,1.004);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FFFFFF").s().p("AgfA1QgHgFAAgLQAAgNAHgNQAIgMAMgIQAOgIAOAAQAMAAAFAEQAFAEAAAHQAAADgCAEQgBADgHAHQgFAFgMAEQgLAEgPACIgCAAIgBAGQAAAHADADQADADAGAAQANAAAMgPIAJAAQgFAJgMAIQgLAIgOAAQgKAAgIgGgAACgGQgEAEgEAFIgGAMIgCAHQASgDAIgHQAJgHAAgIQAAgDgCgCQgCgCgEAAQgHAAgEAEgAABgcIAJgeIAXAAIgaAeg");
	this.shape_676.setTransform(371.1,161.5,1.004,1.004);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FFFFFF").s().p("AAAAuIAAgDQgDAEgFAFQgEADgHAEQgHADgGAAQgJAAgFgGQgGgGAAgKQAAgJAFgKQADgJAIgJQAFgHAKgGQAKgEAJAAQAHAAADACQAEADACAEIALgjIACgGQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBIgEAAIgHgBIADgIIANAAIAIgBIAIgBIAHAAIggBkIgCAJQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQADAAADgDQADgDAEgGIAIAAQgCAFgEAEQgDAGgGADQgGAFgIAAQgOAAAAgQgAgPAAQgHAIgEAKQgFALAAAIQABAFADAEQADACAEAAQAFAAAGgFQAFgDAEgIQAEgFADgIQACgJAAgGQAAgEgCgEQgEgDgDAAQgJAAgGAHg");
	this.shape_677.setTransform(362.1,161.2,1.004,1.004);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FFFFFF").s().p("AAJAjQgEgEAAgEIACgMIAGgUIAEgLQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBgBAAQgFAAgGAIQgGAHgIAOQgGANgGARIgVAAIAQgzIACgIIAAgDIgDgBQgDAAgDAEQgDAFgCAFIgIAAQADgJAHgIQAJgIAJAAQAIAAACAEQAEAEAAAEIgDAPIgEAJQALgQAJgKQAKgKAMAAQAGAAAEAEQACAEAAAFIgBAKIgKAeIgBAIIAAABIABACQADAAAEgEQAFgFACgEIAIAAQgDAGgDAEQgGAGgFADQgGAFgIAAQgGAAgEgDg");
	this.shape_678.setTransform(351.2,163.5,1.004,1.004);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FFFFFF").s().p("AgYAjQgIgFgEgHQgEgHAAgJQAAgLAGgKQAHgMALgFQAMgHALAAQALAAAIAFQAIAFAEAGQADAHAAAIQAAAJgDAIQgDAIgHAHQgGAGgJAEQgKAEgJAAQgKAAgIgEgAgEgZQgGAGgCAGIgGAOIgBANQAAAIADAEQADAFAHAAQAGAAAFgFQAGgFADgHQADgGACgIQACgHAAgGQAAgIgEgEQgDgFgHAAQgGAAgFAFg");
	this.shape_679.setTransform(341,163.6,1.004,1.004);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FFFFFF").s().p("Ag4BOQgFgEAAgFQAAgEADgDQADgDAEAAQAFAAACADIACAHQAAAGAFAAQAFAAADgFQADgFADgKIAXhPIgOAAIACgIIAOAAIACgGQADgNAFgIQADgIAJgIQAIgHAMAAIAJACQAEABADADQACAEAAADQAAADgCAEQgEACgDAAQgEAAgBgCQgCgCgCgGIgBgDIgDgBQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABIgCAFIgLAjIAPAAIgCAIIgPAAIgPAxIgKAeQgGAMgIAIQgKAIgNAAQgJAAgGgFg");
	this.shape_680.setTransform(333.1,163.3,1.004,1.004);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FFFFFF").s().p("AgYAjQgIgFgEgHQgFgHAAgJQAAgKAHgLQAGgLAMgGQAMgHALAAQALAAAIAFQAIAEADAHQAEAHABAIQAAAHgEAKQgEAJgGAGQgHAGgJAEQgJAEgJAAQgJAAgJgEgAgEgZQgGAGgDAGQgDAHgBAHQgCAHAAAGQgBAIAEAEQADAFAGAAQAHAAAFgFQAFgEAEgIIAFgOIABgNQABgIgEgEQgDgFgHAAQgGAAgFAFg");
	this.shape_681.setTransform(326,163.6,1.004,1.004);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FFFFFF").s().p("AghAlIAOgwIACgKIgBgCIgBgBQgEAAgEAFIgFAJIgIAAQAEgKAHgHQAFgEAFgDQAFgDAEABQAHAAACAEIABAJQAAAFgEASIAHgNIAIgLQADgEAGgFQAFgDAFAAQAGAAADADQACAEAAAEQAAAFgDAFQgDAEgFABQgEAAgDgGQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgEAEIgIAMIgPAkIgBADg");
	this.shape_682.setTransform(317.6,163.4,1.004,1.004);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FFFFFF").s().p("Ag6A6IACgHIADAAIAJgBIAEgDIAbhTIABgHIgBgCQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAQgCAAgDAEQgDACgEAJIgJAAIAGgLQADgFAFgEQAHgFAIAAQANAAAAAPQAPgPAOAAQAKAAAFAEQAFAFACAGQACAFAAAGQAAAKgDAJQgFAKgFAFQgGAHgJAFQgIAEgKAAQgIAAgFgCQgFgEgCgDIgLAkQAAADADABIAKABIAEAAIgCAHgAAPgqQgFAFgFAJIgGAUIgBAIQAAAEACAEQAEAFAFAAQAIAAAHgIQAGgGAEgMQAEgLAAgJQAAgFgDgFQgDgEgFAAQgGAAgGAFg");
	this.shape_683.setTransform(306.9,165.5,1.004,1.004);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FFFFFF").s().p("AgfAgQgHgGAAgGQAAgFACgCQADgDAFAAQAIAAACALQAAAFADADQACADAGAAQAHAAACgDQAEgDAAgFIgBgEIgQgRQgEgCgDgGQgCgDAAgFQAAgEACgFQADgFAHgEQAIgEAMAAQAHAAAHACQAEABAEADIAEAEIABAFQAAADgDAEQgCACgEAAQgEAAgBgBIgDgDIgDgHQAAgCgCgCQgCgCgFAAQgFAAgEACQgCACAAAFQAAADABACIADAEIAHAGIANALQADAFAAAHQAAAFgDAGQgDAFgIADQgIAEgLAAQgRAAgHgHg");
	this.shape_684.setTransform(294.5,163.6,1.004,1.004);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FFFFFF").s().p("AAMAiQgDgEAAgFIABgGIAFgRQgJAOgJALQgLALgMAAQgGAAgDgEQgEgDAAgFIADgNIALgjIgBgCIgCgBQgGAAgHAMIgJAAQAGgKAIgHQAHgHALAAQAFAAAEADQAEACAAAIIgBAHIgHAXQgCAHAAAEIABAEQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAQAEAAAGgGQAGgHAHgMQAFgJAJgYIAUAAIgQA0IgCAHIABACIACABQADAAADgEIAGgKIAIAAQgDAIgHAJQgIAIgLAAQgHAAgDgEg");
	this.shape_685.setTransform(284.8,163.6,1.004,1.004);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgEADgJIAXhIIABgKQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgKgBIADgIIATAAQAFgBAFgBIAGAAIggBtIAAACIACABQADABACgFQAEgDADgGIAIAAQgDAGgJAKQgFAIgMAAQgFAAgFgEg");
	this.shape_686.setTransform(277.5,161.2,1.004,1.004);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FFFFFF").s().p("Ag6A6IACgHIADAAIAJgBQABAAAAgBQABAAAAAAQABgBAAAAQABgBAAAAIAbhTIABgHIgBgCIgCgCQgCAAgDAEQgEADgDAIIgJAAIAGgLQACgEAGgFQAHgFAIAAQANAAAAAPQAPgPAOAAQAKAAAFAEQAGAGABAFQACAFAAAGQAAAKgDAJQgDAJgHAGQgGAHgJAFQgIAEgKAAQgIAAgFgCQgEgDgDgEIgJAeIgBAGQAAADADABIAJABIAFAAIgDAHgAAPgqQgFAFgFAJIgGAUIgBAIQAAAEACAEQAEAFAGAAQAHAAAHgIQAGgGAEgMQAEgLAAgJQAAgFgDgFQgCgEgGAAQgGAAgGAFg");
	this.shape_687.setTransform(267.6,165.5,1.004,1.004);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FFFFFF").s().p("AgfAhQgHgFAAgMQAAgNAHgMQAIgNAMgIQAOgIAOAAQAMAAAFAFQAFADAAAHQAAAEgCAEQgBAEgHAGQgFAFgMAEQgLAEgPABIgCAAIgBAHQAAAGADADQADADAGAAQANAAAMgOIAJAAQgFAIgMAIQgLAJgOAAQgKAAgIgGgAACgbQgEAEgEAGIgGAMIgCAGQASgCAIgHQAJgGAAgJQAAgDgCgDQgCgCgEAAQgHAAgEAEg");
	this.shape_688.setTransform(255.1,163.6,1.004,1.004);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FFFFFF").s().p("AgfAhQgGgHgBgKQAAgMAIgMQAHgNAMgIQAMgJAPAAQAGAAAEACQAEABADADQACACACAEQABADAAAEQAAAFgCAEQgEADgEAAQgFAAgCgCQgCgCAAgDIACgJQgBgEgCgCQgDgBgDAAQgHAAgGAIQgHAJgEALQgDAJAAAJQAAAIADACQAEACAEAAQAHAAAHgEQAFgDAGgHIAJAAQgGAIgMAJQgLAIgNAAQgMAAgHgGg");
	this.shape_689.setTransform(246.8,163.6,1.004,1.004);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FFFFFF").s().p("AAJAjQgEgEAAgEQAAgEACgIIAJgfIgBgEQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAQgFAAgHAIQgEAGgJAPQgGAOgGAQIgVAAIAQgzIACgIIAAgDIgCgBQgEAAgDAEQgCADgDAHIgIAAQAEgKAHgHQAHgIAKAAQAHAAAEAEQADAEAAAEIgBAGIgFASQAKgQAJgKQAKgKALAAQAHAAADAEQADAEAAAFIgCAKIgJAeQgCAFAAADIABABQAAABAAAAQAAAAABAAQAAAAAAAAQAAABABAAQABAAAFgEQAEgFADgEIAJAAQgCAEgFAGQgGAGgFADQgGAFgIAAQgGAAgEgDg");
	this.shape_690.setTransform(237.3,163.5,1.004,1.004);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FFFFFF").s().p("AgYAjQgIgFgEgHQgFgHAAgJQAAgKAHgLQAGgLAMgGQAMgHALAAQALAAAIAFQAIAEADAHQAEAHABAIQAAAJgEAIQgEAJgGAGQgHAGgJAEQgJAEgJAAQgJAAgJgEgAgEgZQgEAEgFAIQgDAHgBAHQgCAHAAAGQgBAIAEAEQAEAFAFAAQAHAAAFgFQAFgEAEgIIAFgOIABgNQABgIgEgEQgDgFgHAAQgGAAgFAFg");
	this.shape_691.setTransform(227.1,163.6,1.004,1.004);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FFFFFF").s().p("Ag4BOQgFgDAAgGQAAgEACgDQADgDAFAAQAGAAABADQACADAAAEQABAGAEAAQAEAAADgFQAEgFACgKIAYhPIgOAAIACgIIAOAAIACgGIAHgVQAFgKAIgGQAJgHAMAAIAIACQAEACACACQADAEAAADQAAADgDAEQgCACgDAAQgFAAgBgCIgGgLQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAgBAAIgDACIgCAFIgLAjIAPAAIgCAIIgPAAIgQAxQgFAUgFAKQgEALgJAJQgJAIgOAAQgKAAgFgFg");
	this.shape_692.setTransform(219.2,163.3,1.004,1.004);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FFFFFF").s().p("AAIAjQgDgDAAgFQAAgGACgGIAHgUIACgLQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBgBAAQgFAAgHAIQgFAIgHANQgIANgFARIgVAAIAQgzIACgIIgBgDIgBgBQgEAAgDAEIgFAKIgHAAQACgJAIgIQAGgIAMAAQAFAAAEAEQAEAEAAAEIgBAGIgFASQANgSAGgIQAKgKALAAQAHAAADAEQADAEABAFIgMAoIgCAIIABABIACACIAGgEIAHgJIAIAAIgGAKQgGAGgFADQgGAFgIAAQgGAAgFgDg");
	this.shape_693.setTransform(211.7,163.5,1.004,1.004);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FFFFFF").s().p("AgfAhQgIgFABgMQgBgNAIgMQAHgMAOgJQAMgIAPAAQAMAAAFAFQAGAEgBAGQAAADgCAFQgCAFgGAFQgGAFgLAEQgMAEgOABIgCAAIgBAHQAAAGADADQAEADAFAAQAMAAANgOIAJAAQgFAIgMAIQgLAJgOAAQgKAAgIgGgAACgbQgFAGgDAEIgFAMIgDAGQASgCAHgHQAKgGAAgJIgCgGQgCgCgEAAQgGAAgFAEg");
	this.shape_694.setTransform(202.3,163.6,1.004,1.004);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FFFFFF").s().p("AgQATQAOgDAFgGQAGgHAAgDIgBgDIgCAAQgEAAgDgDQgDgEAAgFQAAgEADgEQACgDAFAAQAGAAAEAFQAEAGAAAHQAAAHgFAHQgEAIgJAGQgHAGgOABg");
	this.shape_695.setTransform(197,157.7,1.004,1.004);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FFFFFF").s().p("AgfAgQgHgHAAgFQAAgEACgDQADgDAFAAQAJAAABALQABAFACADQACADAHAAQAGAAACgDQAFgDAAgFIgCgEIgFgGIgLgLQgFgEgCgEQgDgEABgEQAAgFACgEQADgFAHgEQAIgEAMAAQAJAAAEACQAFABAEADIAEAEIABAFQAAAEgDADQgCACgEAAIgFgBIgCgDIgDgHQAAgDgDgBQgCgCgFAAQgFAAgDACQgDADAAAEQAAADABACIAKAKQAIAGAFAFQADAFAAAHQAAAGgDAFQgDAFgIADQgJAEgKAAQgQAAgIgHg");
	this.shape_696.setTransform(188.9,163.6,1.004,1.004);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgFADgIIAWhIIABgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgJgBIACgIIATAAQAFgBAFgBIAGAAIgeBkIgCAJIAAACIACABQADABACgFQAEgDADgGIAIAAQgDAGgIAKQgHAIgKAAQgHAAgEgEg");
	this.shape_697.setTransform(178,161.2,1.004,1.004);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FFFFFF").s().p("AgRA6QgEgDAAgGQAAgFADgIIANglIgBgBIgCgBQgDAAgDAEIgFAIIgIAAQAFgKAIgHQAJgGAHAAQAGAAADACQAFADAAAFIgCAJIgOAlIgBAHIABABIABABQADAAADgCIAHgLIAHAAQgDAIgIAIQgGAIgLAAQgGAAgEgEgAAJgpQgEgEAAgFQAAgEAEgEQADgDAFAAIAGACIAEADQABADAAADQAAAFgDAEQgEADgEAAQgFAAgDgDg");
	this.shape_698.setTransform(172.1,161.2,1.004,1.004);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FFFFFF").s().p("AgQATQAOgDAFgGQAGgHAAgDIgBgDIgCAAQgEAAgDgDQgDgEAAgFQAAgEADgEQACgDAFAAQAGAAAEAFQAEAGAAAHQAAAHgFAHQgEAJgJAFQgHAGgOABg");
	this.shape_699.setTransform(168,157.7,1.004,1.004);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FFFFFF").s().p("AAMAiQgDgDAAgGIABgGIAFgRQgKAPgJAKQgJALgNAAQgGAAgDgEQgEgDAAgFIADgNIAJgcIABgHIAAgCIgDgBQgEAAgJAMIgIAAQAGgKAIgHQAHgHALAAQAFAAAEADQAEACAAAIIgBAHIgHAXIgDALIACAEQAAABAAAAQABAAAAAAQAAABABAAQAAAAABAAQAEAAAGgGQAGgIAGgLQAHgLAHgWIAVAAIgQA0IgCAHIABACIACABQADAAADgEIAFgKIAJAAQgEAJgHAIQgHAIgLAAQgHAAgDgEg");
	this.shape_700.setTransform(158.6,163.6,1.004,1.004);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FFFFFF").s().p("AgaA6IACgHIAFAAIAJgBQAEgBAAgCQACgDACgHIAJggQgPAOgOAAQgHAAgFgDQgGgDgDgGQgDgGAAgFQAAgMAHgMQAHgOALgHQALgIALAAQAJAAAGAFQAFAGACAFIAHgHIAGgJIALAAIgeBhIgBAGQAAADADABIAJABIADAAIgDAHgAgHgtQgGAFgDAGQgEAFgCAJQgCAGAAAGQAAAGADADQAEAFAGAAQANAAAIgPQAEgGABgFIABgJQAAgKgCgEQgCgGgJAAQgFAAgFAEg");
	this.shape_701.setTransform(148.5,165.5,1.004,1.004);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FFFFFF").s().p("AgfAgQgHgGAAgGQAAgFACgCQAEgDAEAAQAIAAACALQABAFACADQACADAGAAQAHAAACgDQAEgDAAgFIgBgEIgFgGIgLgLQgFgEgCgEQgDgEABgEQgBgEADgFQADgFAHgEQAIgEAMAAQAIAAAFACQAFABAEADIAEAEIABAFQAAADgDAEQgCACgEAAQgEAAgBgBIgDgDIgDgHQAAgCgCgCQgCgCgFAAQgFAAgEACQgCADAAAEQAAADABACIADAEIAHAGIANALQADAFAAAHQAAAGgDAFQgDAFgIADQgJAEgKAAQgQAAgIgHg");
	this.shape_702.setTransform(134.7,163.6,1.004,1.004);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FFFFFF").s().p("AghAlIANgwIADgKIgBgCIgCgBQgDAAgEAFIgFAJIgIAAQAFgKAFgHQAFgEAFgDQAHgDACABQAIAAACAEIABAJQAAAIgEAPIAHgNIAIgLQAEgFAFgEQAGgDAEAAQAHAAACADQACAEAAAEQAAAFgDAFQgDAEgEABQgFAAgDgGQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgEAEIgIAMIgQAkIAAADg");
	this.shape_703.setTransform(126.8,163.4,1.004,1.004);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FFFFFF").s().p("AgYAjQgIgFgEgHQgFgHABgJQAAgKAGgLQAGgLAMgGQAMgHALAAQALAAAHAFQAJAEAEAHQADAHAAAIQAAAJgDAIQgEAJgGAGQgIAGgHAEQgKAEgJAAQgJAAgJgEgAgEgZQgFAEgDAIIgGAOQgCAHAAAGQABAIADAEQADAFAHAAQAGAAAFgFQAGgEADgIIAFgOIACgNQAAgIgEgEQgDgFgHAAQgGAAgFAFg");
	this.shape_704.setTransform(117.8,163.6,1.004,1.004);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FFFFFF").s().p("AgWA6QgEgDAAgGQAAgEADgJIAWhIIACgKQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIgJgBIACgIIAUAAQAEgBAFgBIAGAAIgeBkIgCAJIAAACIACABQADABADgFQADgDADgGIAJAAQgEAGgIAKQgHAIgKAAQgGAAgFgEg");
	this.shape_705.setTransform(110.7,161.2,1.004,1.004);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FFFFFF").s().p("AAEA9IADgJQAGAAAEgBQAEgCABgEQACgEAAgIIAAgPIglAAIgMATQgFAHAAADQAAAFALAAIAEAAIgCAJIgrAAIADgJQAGAAAGgGQAHgGAGgJIBAhbIAPAAIgBBjIABAIQABAEAEAAQABABAIAAIgDAJgAgHAKIAfAAIABgug");
	this.shape_706.setTransform(101.1,161.1,1.004,1.004);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#324D31").s().p("Aj0AjQiCh2D6iRQiwCGCIB7QByBnFTBhQmjhahyhog");
	this.shape_707.setTransform(107.4,412.9,1.004,1.004);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#324D31").s().p("AiTCXQhpkoBDm6QALF9BcEcQBjEyDDDMQkDiZhkkcg");
	this.shape_708.setTransform(278,425.7,1.004,1.004);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#324D31").s().p("AoeHFQh9huhziuQhUiAhujVQFzIfHmBgQDMAoDIgvQC4grCXhtQCRhoBPiMQBRiMgHiMQgJiWhuhzQh6iAjmhDQDCgdCGB2QB8BuBMDuQAUFsjSDoQi9DSmDBuQg8AGg6AAQl1AAkEjmg");
	this.shape_709.setTransform(286.1,506.4,1.004,1.004);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#86CC82").s().p("AhrR/QhkhmhciCQhPhvhRiRQg7hohMhqQhBhZhZhrQg0g9hHgvQhEguhQgdQgugQgrgKQgkgIhagOQhQgLgsgNQhDgRgygiQg5gngag2Qgdg8AOhHQANhGAxgwQAlglA1gSQAzgSA2ADQAqACA1AkIBXA6QA8AhBgAYIChAmQABABAAAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIgThcQgKgygGgiQgZicAMh5QAPiSBEh3QBHh/BigfQBlggB7BFQBIApBfBHQA2AoBqBSQAQAMATARIAbAaQAAABABAAQAAAAAAAAQABABAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAQABgBAAAAIAujfQAciDAahZQAbhhBahAQBfhFBfAZQAsAMAjAgQAjAfASAqQARApABAvQABAugPAsQgRA0g1BJQhABZgQAfQg7BxAFC8QAQH+DOGpQA0BrBwCAQAyA6BNAJQBLAJBLgnQBHgkAkhDQAkhEgQhIQgKgug+gyQgJgHgcAJQgcAJgEALQgJAXgCAhQgCATABAnQABAKAHANIANAYQAAABABAAQAAABAAAAQAAABAAAAQgBAAAAABIgDACQhHAFgwgvQgvgugChLQgCiLBkhOQBlhOCGAjQBpAbBRBJQBHBAA5BmQB0DQgaDjQgZDlihCrQlRFomWAQIgmABQmFAAlFlJgAlRoOQgmAFgcAaQgcAbgIAlQgHAiASAaQALAQAhAfQAOAPANAYIAXAsQAyBgA8BcQBhCTAkgOQACgCgBgDQg4hrgliUQgdiKgJgaQgFgSgIg3QgIg6gQgXQgVgdgqAAIgQABgApgqeQgPAoAHAiQAvAZAiBCIATAnQAJAPAGgDQACgBgEgyQgDgzABgCQABhZhmhmQALApgNAmgAnNukQgHAWASBJQAJAnAPAxQAJAiAaAPQAMAIANADIABAAQAFACAfAeQApAbA6gJQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQhMhOAAhRIgBgCQgIgKgWgKIgqgVQg5gfgVg2QAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_710.setTransform(231.1,431.5,1.004,1.004);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#000000").s().p("AmMoQII+hrIDaSMIo+Brg");
	this.shape_711.setTransform(191.7,396.5,1.004,1.004);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#F2F2F2").s().p("AgeBOQgEgFAAgGQAAgEACgDQACgEADgCQAEgCAEAAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAFgGgBQgGABgFgFgAgOAjIARhZIADgPQACgEAEgFQADgDAHAAQAGAAADADQAEAFAAAGQAAAHgFANIgiBSg");
	this.shape_712.setTransform(532.3,119.3);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#F2F2F2").s().p("AhMBPIAEgLQAHAAAEgEQAEgFADgIIAehjIACgJQAAgGgFgCQgEgDgGABIADgLIBuAAIABAmIgLAAQgGgNgEgFQgFgHgFgBQgFgBgLAAIgRAAIgRA8IAHAAQALAAAFgDQAHgCACgFQAEgEADgKIALAAIgTA+IgLAAQACgKAAgFQAAgJgFgCQgGgCgHAAIgIAAIgNAtQgDAFAAAFQAAADADACQACACAFACQAHABAIAAQAVAAALgJQALgHAIgPIAMAAIgNAqg");
	this.shape_713.setTransform(514.4,119.3);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#F2F2F2").s().p("Ag0BKQgOgJgHgOQgGgPAAgQQAAgSAHgSQAIgSAOgPQANgPASgJQASgIATAAQAdAAAMAUQAGgFAEgMIALAAIgMA3IgLAAQAAgQgFgLQgJgVgWAAQgPAAgMAKQgMAKgKAQQgIAPgEASQgGASAAAPQABAIACAJQACAJAHAGQAIAHAOAAQAMAAAKgGQAMgHADgOIABgEIACgHQAAgLgPAAIACgKIBBAAIgEAKQgHAAgEAEQgDAEgDALIgNAmIgNgJQgNAGgMAEQgLADgOAAQgVAAgOgIg");
	this.shape_714.setTransform(498.4,119.3);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#F2F2F2").s().p("AAFBRIAEgLQAJAAAEgCQAFgCACgGQADgFAAgLIAAgUIgxAAIgRAZQgHAJAAAEQAAAIAPAAIAGAAIgDALIg5AAIAEgLQAIgBAIgHQAIgHAJgOIBVh5IAVAAIgCCDQAAAIACAEQACAEAEABQAEACAIAAIgEALgAgJANIApAAIABg9g");
	this.shape_715.setTransform(480,119.1);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#F2F2F2").s().p("AhPBPIADgLIAEAAQAMAAAEgCQAEgEADgLIAlh2IgJAAIgDAAQgMAAgLAHQgLAGgKAVIgLAAIAOgtICRAAIgNAtIgMAAIACgKQAAgQgHgEQgHgEgKAAIgOAAIgiByIgCALQAAAGAFADQAEABAFAAIAFAAIgCALg");
	this.shape_716.setTransform(469.1,119.3);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#F2F2F2").s().p("AhMBrIAEgLQAHAAAEgFQAEgFADgHIAehjIACgJQAAgGgEgCQgFgDgGAAIADgLIBuAAIABAnIgLAAQgGgOgEgFQgFgGgFgBQgFgCgLAAIgRAAIgRA7IAHAAQALAAAFgCQAHgDACgFQAEgEADgJIALAAIgTA+IgLAAQACgJAAgFQAAgJgFgCQgGgDgHAAIgIAAIgOAtQgCAGAAAEQAAADACADQADACAFABQAHACAIAAQAVAAALgJQALgIAIgPIAMAAIgNArgAAWhCIAMgoIAfAAIgjAog");
	this.shape_717.setTransform(450.9,116.5);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#F2F2F2").s().p("AhMBPIAEgLQAHAAAEgEQAEgFADgIIAehjIACgJQAAgGgEgCQgFgDgGABIADgLIBuAAIABAmIgLAAQgGgNgEgFQgFgHgFgBQgFgBgLAAIgRAAIgRA8IAHAAQALAAAFgDQAHgCACgFQAEgEADgKIALAAIgTA+IgLAAQACgKAAgFQAAgJgFgCQgGgCgHAAIgIAAIgNAtQgDAFAAAFQAAADADACQACACAFACQAHABAIAAQAVAAALgJQALgHAIgPIAMAAIgNAqg");
	this.shape_718.setTransform(429.4,119.3);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#F2F2F2").s().p("AAkBPIgFgLIgKgXIgFgNIgGgQQgCgEgEgCQgEgDgKAAIgHAAIgLAoIgCAKQgBAIAGACQAFABAKAAIgEALIhIAAIAEgLQAGABADgCQAEgCADgDQACgEACgHIAfhjIACgJQgBgFgEgDQgEgDgGABIgEAAIADgLIBKAAQANAAAJABQAHABAIAEQAJAEAGAKQAGAHAAAMQAAAHgCAHQgDAHgFAGQgHAHgKAFQgLADgQACQAGAFAEAFQADAHAFANIAFAQQADAHAGAEQAFAFAKABIgDALgAgNgEIAMAAQAaABAKgHQAJgFAFgIQAFgKAAgJQAAgQgKgFQgLgEgOAAIgNAAg");
	this.shape_719.setTransform(412.8,119.3);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#F2F2F2").s().p("AhMBPIADgLQAJAAADgEQAEgFACgIIAfhjIACgJQAAgGgFgCQgEgDgGABIADgLIBuAAIABAmIgLAAQgFgNgFgFQgFgHgFgBQgFgBgLAAIgRAAIgRA8IAHAAQALAAAFgDQAHgCACgFQAEgEADgKIALAAIgTA+IgLAAQACgKAAgFQABgJgGgCQgGgCgHAAIgIAAIgNAtQgCAFgBAFQABADACACQABACAHACQAFABAJAAQAVAAALgJQALgHAIgPIAMAAIgNAqg");
	this.shape_720.setTransform(396.6,119.3);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#F2F2F2").s().p("Ag0BPIAEgLQAIAAADgEQAEgFADgIIAehhIABgLQAAgGgDgCQgEgCgGAAIADgLIA9AAIgDALQgEAAgEABQgDACgCAEIgEAKIgdBhQgDAHAAAEQAAAFAFADQAFADAGgBIgCALg");
	this.shape_721.setTransform(385,119.3);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#F2F2F2").s().p("AAOBPIAEgLIANAAQAEgCACgEQADgDACgIIAchtIhdCJIgPAAIgJiIIgoBmQgDAJAAADQAAAHAFACQAGACAJAAIgDALIg1AAIAEgLQAHAAAHgJQAHgHAEgLIAihaIACgHQAAgGgEgDQgFgCgHAAIgDAAIADgLIA5AAIAJB4IBRh4IA5AAIgDALQgJAAgFABQgFACgCAFQgDAEgCAKIgYBcIgCALQAAAHAFACQAFABAKAAIgEALg");
	this.shape_722.setTransform(368.9,119.3);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#F2F2F2").s().p("AhMBPIAEgLQAHAAAEgEQAEgFADgIIAehjIACgJQAAgGgEgCQgFgDgGABIADgLIBuAAIABAmIgLAAQgGgNgEgFQgFgHgFgBQgFgBgLAAIgRAAIgRA8IAHAAQALAAAFgDQAHgCACgFQAEgEADgKIALAAIgTA+IgLAAQACgKABgFQgBgJgFgCQgGgCgHAAIgIAAIgOAtQgCAFAAAFQAAADACACQADACAFACQAHABAIAAQAVAAALgJQALgHAIgPIAMAAIgNAqg");
	this.shape_723.setTransform(349.2,119.3);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#F2F2F2").s().p("AAkBPIgGgLIgJgXIgEgNIgHgQQgCgEgEgCQgEgDgJAAIgIAAIgLAoIgCAKQgBAIAGACQAFABAKAAIgEALIhIAAIAEgLQAGABAEgCQADgCADgDQACgEACgHIAehjIADgJQAAgFgFgDQgEgDgGABIgEAAIADgLIBKAAQANAAAJABQAHABAIAEQAJAEAGAKQAGAHAAAMQAAAHgDAHQgCAHgFAGQgHAHgKAFQgLADgQACQAGAFAEAFQADAHAFANIAFAQQADAHAGAEQAFAFAKABIgDALgAgNgEIANAAQAZABAKgHQAJgFAFgIQAFgKAAgJQAAgQgKgFQgKgEgPAAIgNAAg");
	this.shape_724.setTransform(332.6,119.3);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#F2F2F2").s().p("AhPBPIADgLQAIAAAEgDQAEgFACgJIAfhjIACgJQAAgHgFgCQgFgBgHAAIADgLIBAAAQAMAAAIABQAHABAIAFQAUAMAAAVQAAAHgCAIQgDAGgFAHQgGAHgKADQgJAEgPACIgcACIgOAAIgMAnIgCALQAAAGAEADQAFABAFAAIAEAAIgEALgAgJgDIANAAQATAAAJgHIAIgJQADgFACgHQADgGAAgHQAAgOgIgFQgIgEgLAAIgLAAg");
	this.shape_725.setTransform(316.7,119.3);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#F2F2F2").s().p("Ag7BMQgMgEgHgKQgHgIgBgLIACgLIADgNIAVhCIACgLQAAgHgEgCQgGgCgGAAIADgLIBIAAIgDALIgNABQgEABgDAEIgFALIgYBQQgDAMAAAGQgBALAJAFQAJAHAMAAQANAAAIgFQAIgFAGgHIAIgPIAEgOIAUhFIACgJQAAgIgGgDQgGgDgIAAIAEgLIA6AAIgDALQgJABgFADQgGADgDAFQgDAGgCAHIgTBDIgHAUQgEAJgGAJQgIAJgLAFQgMAGgSAAQgQAAgNgFg");
	this.shape_726.setTransform(296.8,119.4);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#F2F2F2").s().p("AhWBPIAEgLQAIAAADgDQADgGAEgIIAehiIABgKQAAgGgDgDQgFgBgGAAIADgLIA3AAQAOAAAKABQAKABALAHQASAKAHAQQAGAPAAAQQAAAKgCAJQgDALgEALQgFAKgIAKQgIAJgLAHQgLAHgMADQgLADgLABIgYAAgAgfAvIgCAKQAAALATAAQAVAAANgLQAOgMAJgUQAGgOACgNIACgUQAAgPgEgJQgEgJgGgEQgGgFgIgCQgIgBgIAAIgGAAg");
	this.shape_727.setTransform(277.1,119.3);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#F2F2F2").s().p("AgVBQQgHgBgGgEQgGgEgGgGQgDADgEAKIgMAAIAIg3IALAAQAAANAEAJQAEAKAFAFQAGAGAHACQAHADAHAAQAGAAAFgEQAFgDADgFQADgGABgGQAAgHgDgEQgDgFgEgFIgQgRQgPgNgGgKQgFgKAAgKQgBgNAHgLQAHgLALgGQALgGAMAAQATAAAQAPIACgDIACgEIAEgGIAKAAIgHAwIgLAAIgEgRQgDgIgHgHQgIgHgNAAQgLAAgFAGQgHAGAAAJQAAAHADAGQADAGAFAFIANANQAPAMAIAKQAHALABAOQAAALgHALQgGALgMAHQgMAHgOAAQgHAAgHgCg");
	this.shape_728.setTransform(636.5,89.7);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#F2F2F2").s().p("AhMBQIADgLQAJgBADgEQAEgFACgIIAfhiIACgJQAAgHgFgCQgEgCgGAAIADgMIBuAAIABAoIgLAAQgGgOgEgFQgFgHgFAAQgFgCgLAAIgRAAIgRA7IAHAAQALABAFgDQAHgCACgFQAEgFADgJIALAAIgTA+IgMAAQADgJAAgGQABgIgGgCQgGgDgHAAIgIAAIgNAtQgCAFAAAFQAAADACACQABACAHACQAFABAJAAQAVAAALgIQALgJAIgPIAMAAIgNAsg");
	this.shape_729.setTransform(621.3,89.7);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#F2F2F2").s().p("AAOBQIAEgLIANgBQAEgCACgEQADgDACgIIAchtIhdCKIgPAAIgJiJIgoBmQgDAJAAADQAAAGAFACQAGADAJABIgDALIg1AAIAEgLQAHgCAHgHQAHgJAEgKIAihaIACgHQAAgFgEgDQgFgDgHAAIgDAAIADgMIA5AAIAJB5IBRh5IA5AAIgDAMQgJAAgFACQgFABgCAEQgDAFgCAKIgYBcIgCALQAAAGAFADQAFACAKAAIgEALg");
	this.shape_730.setTransform(602.7,89.7);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#F2F2F2").s().p("Ag4BjQgPgJgHgPQgHgOABgQQAAgXAMgXQANgXAYgPQAYgPAdAAQAYAAAPAJQAPAKAHAPQAGAPABAPQAAARgIARQgHASgOAPQgOAPgSAIQgUAJgWAAQgYAAgPgKgAAAgoQgJADgIAIQgHAHgHALQgIAPgHAUQgGAUAAARQAAAlAiAAQATABAOgMQAOgMAJgWQAPgjAAgXQAAgngkAAQgJABgIADgAAuhDIgSgZIgkAZIgHAAIAhgqIAcAAIAHAqg");
	this.shape_731.setTransform(582,87);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#F2F2F2").s().p("AhPBQIADgLIAEAAQAMAAAEgEQAEgDADgLIAlh2IgJAAIgDAAQgMAAgLAGQgLAGgKAWIgLAAIAOguICRAAIgNAuIgMAAIACgLQAAgPgHgEQgHgEgKAAIgOAAIgiByIgCALQAAAGAFADQAEACAFAAIAFAAIgCALg");
	this.shape_732.setTransform(566.5,89.7);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#F2F2F2").s().p("AATBQIg1h2IgZBQQgCAIAAAFQAAAHAGADQAGADAHAAIgDALIg2AAIAEgLQAKgBAGgJQAFgHADgNIAdhcIgDgFQgEgHgDgBQgEgBgJAAIADgLIArAAIA0B1IAXhJIACgGIACgHIABgFQAAgGgFgEQgEgFgLAAIADgLIA4AAIgDALQgKAAgFAGQgGAEgFAQIgmB6g");
	this.shape_733.setTransform(548.3,89.8);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#F2F2F2").s().p("AAFBRIAEgLQAJAAAEgCQAFgCACgGQADgFAAgLIAAgUIgxAAIgRAZQgHAJAAAEQAAAIAPAAIAGAAIgDALIg5AAIAEgLQAIgBAIgHQAIgHAJgOIBVh5IAVAAIgCCDQAAAIACAEQACAEAEABQAEACAIAAIgEALgAgJANIApAAIABg9g");
	this.shape_734.setTransform(530,89.6);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#F2F2F2").s().p("AhMBQIAEgLQAIgBAEgEQAEgFACgIIAehiIACgJQAAgIgEgBQgGgCgGAAIADgMIBuAAIABAoIgLAAQgDgKgEgGQgDgFgEgDQgDgDgGAAIgPgBIgOAAIgRA7IAHAAQAJABAGgCQAFgCADgCIAFgHIAFgLIALAAIgTA+IgLAAQADgKAAgFQgBgNgRAAIgJAAIgOAsIgCALQAAAEADACQACADAEABIAGABIAFAAIgDALg");
	this.shape_735.setTransform(519.1,89.7);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#F2F2F2").s().p("AgVBQQgGgBgHgEQgGgEgGgGQgDADgFAKIgKAAIAHg3IALAAQABANADAJQAEAKAFAFQAGAGAIACQAGADAGAAQAHAAAFgEQAFgDAEgFQACgGAAgGQAAgHgCgEQgCgFgFgFIgQgRQgPgNgFgKQgHgKAAgKQABgNAGgLQAHgLALgGQALgGAMAAQATAAAQAPIACgDIADgEIACgGIALAAIgHAwIgLAAIgEgRQgDgIgHgHQgHgHgNAAQgLAAgGAGQgHAGAAAJQAAAHADAGQADAGAFAFIAOANQAOAMAHAKQAJALAAAOQgBALgGALQgGALgMAHQgMAHgPAAQgGAAgHgCg");
	this.shape_736.setTransform(499.7,89.7);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#F2F2F2").s().p("AhMBQIAEgLQAIgBAEgEQADgFADgIIAehiIACgJQAAgHgEgCQgFgCgGAAIADgMIBuAAIABAoIgLAAQgFgOgFgFQgFgHgFAAQgFgCgLAAIgRAAIgRA7IAHAAQAKABAHgDQAFgCAEgFQADgFADgJIAMAAIgUA+IgMAAQAEgJAAgGQgBgIgFgCQgGgDgHAAIgHAAIgPAtQgCAFAAAFQAAADACACQADACAFACQAHABAIAAQAVAAALgIQALgJAIgPIAMAAIgOAsg");
	this.shape_737.setTransform(484.4,89.7);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#F2F2F2").s().p("AhIBQIADgLQAHAAAEgCQAEgDABgDIAEgKIAfhmIABgFQAAgMgNABIgEAAIAEgMIBHAAIgDAMIgNABQgEAAgCAEQgDADgCAJIgcBdQgDAJAAAGQAAAEADACQADACAFACIAKAAQAOAAAKgCQAKgCAIgHQAJgHAHgOIALAAIgNAsg");
	this.shape_738.setTransform(469.6,89.7);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#F2F2F2").s().p("AhPBQIADgLIAEAAQAMAAAEgEQAEgDADgLIAlh2IgJAAIgDAAQgMAAgLAGQgLAGgKAWIgLAAIAOguICRAAIgNAuIgMAAIACgLQAAgPgHgEQgHgEgKAAIgOAAIgiByIgCALQAAAGAFADQAEACAFAAIAFAAIgCALg");
	this.shape_739.setTransform(451.2,89.7);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#F2F2F2").s().p("Ag6BMQgNgFgHgIQgHgJgBgLIACgLIADgNIAVhDIACgKQAAgHgEgCQgGgCgGAAIADgLIBIAAIgDALIgMABQgFABgDAEIgFALIgYBQQgDAMgBAGQAAAKAJAHQAIAGANAAQANAAAIgFQAIgEAGgIIAIgPIAEgPIAUhEIACgJQAAgJgGgCQgGgDgIAAIAEgLIA6AAIgDALQgIABgGACQgFADgEAGQgDAFgCAJIgTBBIgGAVQgEAJgHAJQgIAIgLAGQgMAGgSAAQgPAAgNgFg");
	this.shape_740.setTransform(434.8,89.9);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#F2F2F2").s().p("Ag4BIQgPgJgHgPQgGgPgBgPQABgWANgYQANgXAXgPQAYgPAeAAQAXAAAPAJQAPAKAGAPQAIAPgBAQQAAAQgHARQgIARgNAPQgNAPgUAJQgTAJgVAAQgZAAgPgKgAAAhDQgJADgHAHQgJAIgGALQgIAQgHAUQgGATAAARQAAAlAjAAQASAAAOgMQAOgMAKgWQAOghAAgYQAAgngkAAQgJAAgIAEg");
	this.shape_741.setTransform(415.5,89.7);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#F2F2F2").s().p("AhPBQIADgLIAEAAQAMAAAEgEQAEgDADgLIAlh2IgJAAIgDAAQgMAAgLAGQgLAGgKAWIgLAAIAOguICRAAIgNAuIgMAAIACgLQAAgPgHgEQgHgEgKAAIgOAAIgiByIgCALQAAAGAFADQAEACAFAAIAFAAIgCALg");
	this.shape_742.setTransform(400,89.7);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#F2F2F2").s().p("Ag7BMQgMgFgHgIQgIgJAAgLIACgLIADgNIAVhDIADgKQgBgHgFgCQgEgCgHAAIADgLIBHAAIgCALIgNABQgEABgCAEQgDADgDAIIgZBQQgCAMAAAGQAAAKAIAHQAIAGAMAAQANAAAJgFQAIgEAFgIIAJgPIAFgPIAUhEIABgJQAAgJgGgCQgGgDgIAAIADgLIA8AAIgEALQgIABgGACQgFADgDAGQgEAFgDAJIgSBBIgHAVQgDAJgIAJQgGAIgMAGQgMAGgRAAQgRAAgNgFg");
	this.shape_743.setTransform(377.6,89.9);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#F2F2F2").s().p("AgwBKQgOgIgIgPQgIgOAAgRQAAgUAIgSQAJgTAOgOQANgPARgHQARgIAQAAQAMAAAIADQAJAEAFAEIAJAJQAGgGAEgLIAKAAIgLA3IgMAAIAAgCIAAgCQAAgSgGgKQgHgKgIgDQgJgDgGAAQgOAAgKAKQgMAKgKAPQgIAQgFASQgFASAAAPQAAALAEAJQACAIAIAGQAGAFALAAQAJAAALgFQALgGAJgKQAKgKAGgOIAKAAIgPA1IgKAAIABgIIgBgIQgIAJgMAFQgLAGgOAAQgRAAgOgIg");
	this.shape_744.setTransform(360.2,89.7);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#F2F2F2").s().p("AATBQIg1h2IgZBQQgCAIAAAFQAAAHAGADQAGADAHAAIgDALIg2AAIAEgLQAKgBAGgJQAFgHADgNIAdhcIgDgFQgEgHgDgBQgEgBgJAAIADgLIArAAIA0B1IAXhJIACgGIACgHIABgFQAAgGgFgEQgEgFgLAAIADgLIA4AAIgDALQgKAAgFAGQgGAEgFAQIgmB6g");
	this.shape_745.setTransform(342.8,89.8);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#F2F2F2").s().p("Ag0BQIAEgLQAIgBADgEQAEgFADgIIAehhIABgKQAAgHgDgCQgEgCgGAAIADgMIA9AAIgDAMQgEAAgEACQgDABgCAEIgEAKIgdBhQgDAHAAAEQAAAGAFACQAFACAGABIgCALg");
	this.shape_746.setTransform(329.2,89.7);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#F2F2F2").s().p("AAFBRIAEgLQAJAAAEgCQAFgCACgGQADgFAAgLIAAgUIgxAAIgRAZQgHAJAAAEQAAAIAPAAIAGAAIgDALIg5AAIAEgLQAIgBAIgHQAIgHAJgOIBVh5IAVAAIgCCDQAAAIACAEQACAEAEABQAEACAIAAIgEALgAgJANIApAAIABg9g");
	this.shape_747.setTransform(315.2,89.6);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#F2F2F2").s().p("AhDBRIAFiIQAAgKgDgCQgDgCgIAAIAEgLIA/AAIgEALIgKABQgEABgCADQgDADAAAHIgDBlIA9hfQAEgGAAgEQAAgIgFgBQgGgCgIAAIADgLIA+AAIgCALQgJAAgKAGQgIAFgJAOIhSB9g");
	this.shape_748.setTransform(306.4,89.9);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#F2F2F2").s().p("AhOBQIAAgLIB0iIIgkAAQgIAAgHACQgGABgJAIQgJAGgGAOIgMAAIANgrIB4AAIAAAJIh0CKIAkAAQAlAAAPgjIAMAAIgPAvg");
	this.shape_749.setTransform(282.8,89.7);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#F2F2F2").s().p("AhMBQIAEgLQAHgBAEgEQAEgFADgIIAehiIACgJQAAgHgFgCQgEgCgGAAIADgMIBuAAIABAoIgLAAQgGgOgEgFQgFgHgFAAQgFgCgLAAIgRAAIgRA7IAHAAQALABAFgDQAHgCACgFQAEgFADgJIALAAIgTA+IgLAAQACgJAAgGQAAgIgFgCQgGgDgHAAIgIAAIgNAtQgDAFAAAFQAAADADACQACACAFACQAHABAIAAQAVAAALgIQALgJAIgPIAMAAIgNAsg");
	this.shape_750.setTransform(266.9,89.7);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#F2F2F2").s().p("AhCBRIAEiIQAAgKgDgCQgEgCgGAAIACgLIBAAAIgDALIgKABQgEABgDADQgDADAAAHIgDBlIA9hfQAEgGAAgEQAAgIgFgBQgFgCgJAAIADgLIA/AAIgDALQgKAAgJAGQgIAFgJAOIhSB9g");
	this.shape_751.setTransform(255,89.9);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#F2F2F2").s().p("AAFBRIAEgLQAJAAAEgCQAFgCACgGQADgFAAgLIAAgUIgxAAIgRAZQgHAJAAAEQAAAIAPAAIAGAAIgDALIg5AAIAEgLQAIgBAIgHQAIgHAJgOIBVh5IAVAAIgCCDQAAAIACAEQACAEAEABQAEACAIAAIgEALgAgJANIApAAIABg9g");
	this.shape_752.setTransform(236.8,89.6);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#F2F2F2").s().p("AgVBQQgHgBgGgEQgGgEgGgGQgDADgEAKIgLAAIAHg3IALAAQAAANAEAJQAEAKAFAFQAHAGAHACQAGADAGAAQAHAAAFgEQAFgDADgFQAEgGAAgGQAAgHgDgEQgDgFgEgFIgQgRQgPgNgGgKQgFgKAAgKQAAgNAGgLQAHgLALgGQALgGAMAAQATAAAQAPIACgDIADgEIADgGIAKAAIgHAwIgLAAIgEgRQgDgIgHgHQgIgHgNAAQgLAAgFAGQgHAGAAAJQAAAHADAGQAEAGAEAFIANANQAPAMAIAKQAHALABAOQAAALgHALQgGALgMAHQgMAHgOAAQgHAAgHgCg");
	this.shape_753.setTransform(219,89.7);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#F2F2F2").s().p("Ag7BMQgMgFgHgIQgIgJAAgLIACgLIADgNIAVhDIACgKQAAgHgEgCQgFgCgHAAIADgLIBHAAIgCALIgNABQgEABgDAEIgFALIgZBQQgCAMAAAGQAAAKAIAHQAJAGALAAQANAAAJgFQAIgEAGgIIAIgPIAEgPIAVhEIABgJQAAgJgGgCQgGgDgIAAIADgLIA8AAIgEALQgIABgGACQgFADgDAGQgEAFgCAJIgTBBIgHAVQgDAJgIAJQgHAIgLAGQgMAGgRAAQgRAAgNgFg");
	this.shape_754.setTransform(205.6,89.9);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#F2F2F2").s().p("Ag4BIQgPgJgHgPQgHgPAAgPQAAgWAOgYQANgXAXgPQAYgPAdAAQAYAAAPAJQAPAKAHAPQAGAPAAAQQABAQgIARQgHARgOAPQgOAPgSAJQgUAJgWAAQgYAAgPgKgAAAhDQgJADgIAHQgIAIgGALQgIAQgGAUQgHATAAARQAAAlAjAAQASAAAOgMQAOgMAJgWQAPghAAgYQAAgngkAAQgJAAgIAEg");
	this.shape_755.setTransform(186.3,89.7);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#F2F2F2").s().p("AhCBRIAEiIQAAgKgDgCQgEgCgGAAIACgLIBAAAIgDALIgKABQgFABgCADQgDADAAAHIgDBlIA9hfQAEgGAAgEQAAgIgFgBQgGgCgIAAIADgLIA/AAIgDALQgKAAgIAGQgJAFgJAOIhSB9g");
	this.shape_756.setTransform(171.8,89.9);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#F2F2F2").s().p("AgeBOQgEgFAAgGQAAgEACgDQACgEADgCQAEgCAEAAQAGAAAFAFQAEAEAAAGQAAAGgEAFQgFAFgGAAQgGAAgFgFgAgOAiIARhZIADgNQACgGAEgDQADgFAHAAQAGAAADAFQAEAEAAAGQAAAHgFAMIgiBSg");
	this.shape_757.setTransform(442.4,60.2);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#F2F2F2").s().p("Ag4BIQgPgJgHgPQgHgPABgPQAAgWAMgYQANgXAYgPQAYgPAdAAQAYAAAPAJQAPAKAHAPQAGAPABAQQAAAQgIARQgHARgOAPQgOAPgSAJQgUAJgWAAQgYAAgPgKgAAAhDQgJADgIAHQgHAIgHALQgIAQgHAUQgGATAAARQAAAlAiAAQATAAAOgMQAOgMAJgWQAPghAAgYQAAgngkAAQgJAAgIAEg");
	this.shape_758.setTransform(429.5,60.2);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#F2F2F2").s().p("AhDBRIAFiJQAAgIgDgDQgEgCgHAAIADgLIBAAAIgEALIgKABQgDABgDADQgDAEAAAFIgDBnIA9hgQAEgGAAgEQAAgHgFgCQgGgCgIAAIADgLIA+AAIgCALQgKAAgIAFQgJAGgJANIhSB+g");
	this.shape_759.setTransform(415,60.3);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#F2F2F2").s().p("AAFBRIAEgLQAJAAAEgCQAFgCACgGQADgFAAgLIAAgUIgxAAIgRAZQgHAJAAAEQAAAIAPAAIAGAAIgDALIg5AAIAEgLQAIgBAIgHQAIgHAJgOIBVh5IAVAAIgCCDQAAAIACAEQACAEAEABQAEACAIAAIgEALgAgJANIApAAIABg9g");
	this.shape_760.setTransform(396.9,60);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#F2F2F2").s().p("AAkBQIgFgMIgKgXIgFgOIgFgOQgDgFgEgCQgEgDgKAAIgHAAIgMAoIgBAKQAAAHAFACQAFACAJAAIgDAMIhIAAIADgMQAHAAADgBQAEgCADgDQACgEACgHIAfhjIABgJQAAgGgEgCQgEgCgGgBIgEAAIADgKIBLAAQAMAAAJABQAIABAHAEQAJAFAGAIQAGAJAAALQAAAHgCAHQgDAHgFAGQgHAHgKAFQgLAEgQABQAGAEADAHQAEAFAFAOIAGARQACAFAGAGQAGAEAJABIgDAMgAgNgEIAMAAQAaAAAKgFQAJgGAFgJQAFgJAAgKQAAgPgKgEQgKgFgOAAIgOAAg");
	this.shape_761.setTransform(382,60.2);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#F2F2F2").s().p("AhNBQIAEgMQAIAAADgEQAEgEADgJIAehjIACgJQAAgKgOgBIADgKIA/AAIASABQAHABAGAEQAIAFAFAHQAFAHAAAJQAAAKgGAIQgFAJgLAFQgMAHgPACQAgAJAAAcQAAAMgHAKQgIAKgKAGQgGAEgIABIgPACIgOABgAgWAvIgCAKQAAAEAEADQAEAEAKAAQAHAAAHgEQAHgCAGgNQADgGACgHQADgJAAgGQAAgNgGgDQgGgDgKAAIgPAAgAgFgIIAKAAQAKAAAHgEQAIgCADgDQAGgGAEgKQAEgLAAgHQAAgLgHgCQgGgDgMAAIgKAAg");
	this.shape_762.setTransform(366.1,60.2);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#595959").s().p("AgPAuQgUgFgNgIQAGgPAegXIA8grQgjAfgKAeQgJAeAXADQgFADgIAAQgIAAgLgDg");
	this.shape_763.setTransform(375.9,241,1.004,1.004);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("#000000").ss(0.3).p("AAjgGQABAGgJAHQgJAHgPADQgNACgLgDQgLgDgCgHQgBgGAJgHQAKgHAOgCQANgDALADQALADACAHg");
	this.shape_764.setTransform(399,207.3,1.004,1.004);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#ABAB99").s().p("AgVAQQgLgDgCgGQgBgHAJgHQAKgGAOgDQANgCALACQALAEACAGQABAGgJAHQgJAHgPADIgLABQgHAAgGgCg");
	this.shape_765.setTransform(399,207.3,1.004,1.004);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("#000000").ss(0.3).p("AhjhfQA4ACA4AuQBHA5ALBa");
	this.shape_766.setTransform(410.2,217.4,1.004,1.004);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("#000000").ss(0.3).p("AhBhuQAZAKAqA2QA8BMAEBW");
	this.shape_767.setTransform(405.2,219.6,1.004,1.004);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#000000").ss(0.3).p("AAbiOQgrBDgIBPQgHBJAYBD");
	this.shape_768.setTransform(395.1,221.3,1.004,1.004);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("#000000").ss(0.3).p("ABCiFQhgBAgZBJQgRA0ASBR");
	this.shape_769.setTransform(389.6,221.1,1.004,1.004);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#000000").ss(0.3).p("Ai5B/QgFgCgCgHQgYhQgBgZQgCg3AugiQAegZBegjIAHgCQA8gLBWANQAHAAAHAEQAiAWAaAwQATAkAVBAQACAFgFACQh7BChcAVQhrAbhOggg");
	this.shape_770.setTransform(401,221.6,1.004,1.004);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#595959").s().p("Ai5B/QgFgCgCgHQgYhQgBgZQgCg3AugiQAegZBegjIAHgCQA8gLBWANQAHAAAHAEQAiAWAaAwQATAkAVBAQACAFgFACQh7BChcAVQgwAMgrAAQg0AAgqgRg");
	this.shape_771.setTransform(401,221.6,1.004,1.004);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#000000").ss(0.3).p("AiAAXIBzhZQAaAIAnACQAdABAvgBQhHBSg4AbQhDAhg9grQgGgEAAgGQAAgGAFgEg");
	this.shape_772.setTransform(383.1,240.7,1.004,1.004);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#262626").s().p("Ah8ArQgGgEAAgGQAAgGAFgEIBzhZQAaAIAnACQAdABAvgBQhHBSg4AbQgdAOgcAAQglAAgigYg");
	this.shape_773.setTransform(382.8,240.8,1.004,1.004);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#CCCCCC").s().p("AgWAIQgCgOAEgLQACgGAGgEQAGgEAGgBQAJgBAPAFQgQgDgIABQgNABgFANQgDAJABAPIADAZQgEgNgBgMg");
	this.shape_774.setTransform(421.9,234.1,1.004,1.004);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#000000").s().p("ABNApIgMgaQgGgPAFgKIjFAAIAAgNIDHAAIAQgSQAWgJAWAJIAEAFQAIApgIAkQgNAGgOAAQgNAAgNgGg");
	this.shape_775.setTransform(411.8,234.1,1.004,1.004);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#5A3825").s().p("AiSBfQghgigFgkIAqhcQAbgzAlgmQDFAABCA0Qg0AVgpgJQAFAggkAoQgsAugEALQgWgngdgCQgagCgLAYQgMAaATAaQAXAgA6ANIhGArQg7gggegfg");
	this.shape_776.setTransform(403.7,233.2,1.004,1.004);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#AD8E63").s().p("AgDAvIgThmIATAAQgEBIAdAnQgNgDgMgGg");
	this.shape_777.setTransform(398.8,251.7,1.004,1.004);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#EAC086").s().p("AgPCMQgzgRgMgfQgIgsgsheQgcg8AbgJQCWgzBXAZQAPAtACAaQAEAjgOARQgGAHAFAKIAhA2QgJAJgHACQgEACgKAAQgEAAgCADQgDADAAADIAEApQACATgGAJQgdAGgcAAQgiAAgegKg");
	this.shape_778.setTransform(411.6,236.9,1.004,1.004);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#EAC086").s().p("AgqCSQgHgDgBgHQgZiKgFg5QgJhfAogOICDDZIAABvQAAAJgJAAQg/gFg0gSg");
	this.shape_779.setTransform(403.3,242.1,1.004,1.004);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#996400").s().p("AjKAtQBXiHAPgjQADgGAFgDQAGgDAGAAQB2AJDxgjQhmAehHAOQhdAThZAFQgLA8hFBKQhVBSgmArg");
	this.shape_780.setTransform(373.7,299.6,1.004,1.004);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#CC8500").s().p("AkpENQghgTgLgvQgDgOAGgLQBXi+B8iNQDDhpC/gPQATgBAMAMQBLBMggBgQgHASgUAGQhmAehHAOQhdAThZAEQgLA8hFBLQhWBSglArQgIAKgNACIgHABQgJAAgIgFg");
	this.shape_781.setTransform(371,289.8,1.004,1.004);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#996A02").ss(0.3).p("AgYgbQAOAkAmAP");
	this.shape_782.setTransform(334.6,319.7,1.004,1.004);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#2E1E01").s().p("AhDBxQgFgCgBgGQgEgZAdgoIgDACQgSARgNAEQgGACgEgEQgFgEABgGQAEgWAZgVIgLAFQgTAIgJgPQgBgNARgOQALgKAbgQIAEgEQAbgsAhgRQAEgCAEABQAmAKAgAhQACADAAADQACASgFAQQgEATAMAPQAIALACAOQACAQgHAIQgIAJgLgHQgHgFgMgQQgIgQgBgTIgCgCQAAAAgBAAQAAABAAAAQAAAAgBAAQAAABAAAAQgPAwgMAZQgQAfgTAGQgTgBAHgcIAJgXIgKATQgPAZgRALQgDACgDAAIgFgBg");
	this.shape_783.setTransform(334.9,321.2,1.004,1.004);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#996400").s().p("AgDAPQgqgKghgZIAAAAIASALIASAJQAUAIATAEQAQAFAYACIAqACIgWAAQggAAgcgGg");
	this.shape_784.setTransform(403.7,258.6,1.004,1.004);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#CC8700").s().p("AiUD2QgFgBgEgEQgEgEgBgGQgHipgGhNQgLiEgchdQgGgTADAHIARAnQAoBeAmBJQCOESBsgJIBbgCQgCAMgHAJQgIAIgLABQhSAIhQAAQhYAAhZgJg");
	this.shape_785.setTransform(399.1,310.2,1.004,1.004);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#FFFFFF").p("AgkBdIAKhDIACgLIAAAAIgCALAgYAPIAQhnIAyAAAAqAPIhCAA");
	this.shape_786.setTransform(419.3,282.4,1.004,1.004);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#CC8600").s().p("AhXA5QA1g7AAhGQBGASA0gcIgRClIgTAAQg/AAhMgag");
	this.shape_787.setTransform(415.1,313.4,1.004,1.004);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FFA800").s().p("AieGcQgGAAgEgEQgEgFAAgFQgHipgGhOQgLiFgchbQgNgrAJg5QAKg5Adg1QBGh+B7gLQAmAAAsAYQA1AdAQAEQA/APAMDlQAMDTgjEkQgCAMgHAIQgIAJgLABQhRAHhRAAQhXAAhYgJg");
	this.shape_788.setTransform(400.5,293.5,1.004,1.004);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#000000").s().p("AgcA2QgDgDADgCQAqgwAJg1QABgEADABQAEABgBAEQgJA2gsAyIgCACIgDgCg");
	this.shape_789.setTransform(403.6,345.2,1.004,1.004);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#414241").s().p("AAagzQgHA1gsAyg");
	this.shape_790.setTransform(403.7,345.2,1.004,1.004);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#414241").s().p("AjgChQAVhAAXiHQAUh9AQgnQAUgnCkAAQClAAATAnQhbDHgiBCQhECFgrArQgZADgVAAQiIAAgehRg");
	this.shape_791.setTransform(397,355.1,1.004,1.004);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#414241").s().p("Ai9EiQhUgcgRhJQASgjAjgmQArgvAlgKQBCiMCqjfQCHgrBNBfQgcBVgyBPQgcAthABUQg8BPgbAvQgpBJgTBPQiFgTgegKg");
	this.shape_792.setTransform(369.2,396.7,1.004,1.004);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f().s("#FFFFFF").ss(0.3).p("Ai8gpQChB9DahB");
	this.shape_793.setTransform(353.7,434.3,1.004,1.004);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#000000").s().p("AjFAiQALgpAPgpQASguALgIQB2g0BnBjQAEAcAdAaQAXAUAtAXQAlAxgoAJQhFAVg/AAQiDAAhvhXg");
	this.shape_794.setTransform(353.9,427.3,1.004,1.004);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#2E1E01").s().p("AghAcQgEgCgBgDIgGgPQgBgEACgDQACgDADgCIBAgXQAEgCAEACQAEACABAEIAFAOQADAIgJAEIhAAYIgDAAIgEgBg");
	this.shape_795.setTransform(479.8,234.9,1.004,1.004);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#2E1E01").s().p("AgZAPIgEgWQgBgEACgCQADgDADgBIAsgDQAEAAACADQADACAAAEIAAANQAAAIgJACIgnAIIgCABQgFAAgBgGg");
	this.shape_796.setTransform(479.1,239.3,1.004,1.004);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#2E1E01").s().p("Ag8AwQAEhKAwgZQANgIAPAGIAEACQA1AvgWAMQgMAEgJgGQgWgLABAHQAAAFAFAMQAAAPgJAXg");
	this.shape_797.setTransform(469.2,232.5,1.004,1.004);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#2E1E01").s().p("AgbAjIgKgLQgHgIAIgGIAygtQADgDAEAAQAEAAADADIAKAMQAHAHgIAHIgyAtQgDADgEAAQgEgBgDgDg");
	this.shape_798.setTransform(476,229.2,1.004,1.004);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#2E1E01").s().p("AgcAqQgDAAgCgDIgNgRQgEgFAGgFIBFgzQACgCADAAQADABABACIANARQAEAGgFAEIhFAzQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAAg");
	this.shape_799.setTransform(478.6,231.5,1.004,1.004);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#FCEE21").s().p("AAAABIgngvQAUAVAUAZQAYAbAPAUIgogug");
	this.shape_800.setTransform(491.3,205.3,1.004,1.004);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#FFBE17").s().p("AAhA2IhKhlQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAFgEQABgBAAAAQAAAAABAAQAAAAAAAAQABABAAAAIBJBlQABAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgFADIgBABIgCgBg");
	this.shape_801.setTransform(491.3,204.7,1.004,1.004);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FCEE21").s().p("AAAABIgwhDIAxBCIAxBEIgyhDg");
	this.shape_802.setTransform(484.8,207.4,1.004,1.004);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#FFBE17").s().p("AAxBRIhviXQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAIAIgHQABAAABgBQAAAAABAAQAAAAABABQAAAAABABIBuCXQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABIgJAGIgBABQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_803.setTransform(484.8,207.4,1.004,1.004);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#FCEE21").s().p("AgBABQgtg+gPgWQAYAdAnA1QAsA8AQAZIg/hTg");
	this.shape_804.setTransform(478.6,210.7,1.004,1.004);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FFBE17").s().p("AA+BlIiLi9QgCgDADgDIAKgHQADgBACACICKC9QADADgDACIgKAIIgDAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_805.setTransform(478.7,210.7,1.004,1.004);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#000000").s().p("AAAABIgMgPIANAOIALAPIgMgOg");
	this.shape_806.setTransform(495.4,202.4,1.004,1.004);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#FBB03B").s().p("AAJAaIgggmQgCgDACgCIAKgIQADgCACACIAgAmQACADgDACIgJAIIgCABIgDgBg");
	this.shape_807.setTransform(495.4,202.4,1.004,1.004);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#CCCCCC").s().p("AhiBKQA8ghAtgdQA1geAzglIAxgkIAygmIguAqIgxAnQgrAgg7AlQgzAfg5AdQg6Acg4AVQA+geAxgag");
	this.shape_808.setTransform(474.6,215.2,1.004,1.004);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#FFFFFF").s().p("ADSiBQi6CgjpBjg");
	this.shape_809.setTransform(474.6,215.2,1.004,1.004);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#80BAFF").s().p("Ag7hTQBihICcAcQj4ApiNDeQAriZBchCg");
	this.shape_810.setTransform(474.1,214.1,1.004,1.004);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#2E8EFF").s().p("AjXCMQAvigBfhFQBmhLCkAeIAXAfQgwCNh3A+QhTAshvAAQgiAAgkgEg");
	this.shape_811.setTransform(475.2,214.3,1.004,1.004);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FFE517").s().p("AgNgjQA3gqA7ALQgiAWgXAgQgFgeg8AnQg5AjgWAlQAnhFAwgjg");
	this.shape_812.setTransform(457.8,211.2,1.004,1.004);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#FFBE17").s().p("AgPgqQA7gqBJANIhoB8QgNgRgkAIQgdAHgzAYQAvhQA2glg");
	this.shape_813.setTransform(458.4,211.3,1.004,1.004);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#FFBE17").s().p("AAQBqQgQgFAIgTQgNhihQhCICLgYQgTBsAlA7QAUAIgJANQgIALgXAIQgPAGgMAAIgJgBg");
	this.shape_814.setTransform(470,233.8,1.004,1.004);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#2E1E01").s().p("AgNBGQgEAAgEgCQgdgWgYgvQA0hKAjAGQAnAGAXBiQgMASgaAJQgWAIgZAAIgDAAg");
	this.shape_815.setTransform(470.5,237.4,1.004,1.004);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#2E1E01").s().p("AgKA7IgvgtQgIgIgBgKQAAgMAIgIIAeggQAIgJALAAQALgBAJAIIAvAtQAJAIAAAKQAAAMgIAIIgeAgQgIAIgMABIgBAAQgKAAgIgHg");
	this.shape_816.setTransform(473.2,237.2,1.004,1.004);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#996400").s().p("Ai5ChICRhWQAAAFBzh9IBxh6Qh2DAh/B3QgYAJg2AKQgdAFgNAAQgOAAAGgHg");
	this.shape_817.setTransform(450.4,262.7,1.004,1.004);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#CC8500").s().p("AkgD4QgTAAgKgOQhDhTArhdQAJgRAUgEQBogUBJgIQBegJBYACQASg6BNhDQArgnBchLQAJgJANgBQANgBAKAHQAeAVAGAyQACALgHANQhtC3iJCAQjDBTi1AAIgTAAg");
	this.shape_818.setTransform(433.8,260.6,1.004,1.004);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#232323").s().p("AhgDvQgNglAqgpQg6hmgahqQgahpAPhOICfgWQAwAnA1CPQA0CPASCSQhRAihQAAQgzAAg0gOg");
	this.shape_819.setTransform(428.6,399.3,1.004,1.004);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#232323").s().p("AA2D1Qgrhjh0i0QhoihgbgbQgJgJA0gJQAygIBIgDQC6gHASAkQAwBzAZBZQAfBvABBkQg6A8hIAAQgaAAgcgIg");
	this.shape_820.setTransform(406.2,357.2,1.004,1.004);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f().s("#FFFFFF").ss(0.3).p("Ai/AMQCuBYDRiR");
	this.shape_821.setTransform(440.2,430.9,1.004,1.004);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#000000").s().p("AjBBKQgEgrACgrQACgxAJgLQBNg1BaAwQALAiBAAKQAxAIA9gIQAxAkgiATQhyBPh4AAQhGAAhIgbg");
	this.shape_822.setTransform(439.9,426.1,1.004,1.004);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#999999").s().p("AAKgJQgSgagjAAQAlgSAfAmQAgAkgWAVQgQgpgJgKg");
	this.shape_823.setTransform(445.2,450.6,1.004,1.004);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#999999").s().p("AAKgJQgTgagiAAQAlgSAfAmQAgAkgWAVQgRgpgIgKg");
	this.shape_824.setTransform(352.4,450.6,1.004,1.004);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#594006").s().p("AqWBbQhigPgHgCQgzgMgCgXQAHhnBigaQjICTFhAZQC/AOF9gRQA6AADGAHQDDAEBzgIQFfgZjZiTQAXAAAeAUQAjAWASAkQAXAshCAhQgzAagmAAg");
	this.shape_825.setTransform(398.7,432.6,1.004,1.004);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#000000").s().p("AgIAJQgEgEAAgFQAAgEAEgFQADgDAFAAQAFAAAEADQAEAFAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_826.setTransform(399.7,435.3,1.004,1.004);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#000000").s().p("AgIAJQgEgEAAgFQAAgFAEgEQAEgDAEAAQAGAAADADQAEAEAAAFQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_827.setTransform(405,431.3,1.004,1.004);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#000000").s().p("AgIAJQgEgEAAgFQAAgEAEgFQADgDAFAAQAGAAADADQAEAFAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_828.setTransform(386.4,435.3,1.004,1.004);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#000000").s().p("AgIAJQgEgEAAgFQAAgFAEgEQAEgDAEAAQAGAAADADQAEAEAAAFQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_829.setTransform(391.7,431.3,1.004,1.004);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#000000").ss(0.3).p("ArLhZQhiAagHBnQACAXAzAMQAHACBiAPIVCAAQAmAAAzgaQBCghgXgsQgSgkgjgXQgegTgXAAQgNAAg1ANQg1ANgNAAIyjAAQgngRgQgFQgegJgVAFg");
	this.shape_830.setTransform(398.7,432.6,1.004,1.004);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#93690A").s().p("AqWBcQhigPgHgCQgzgMgCgXQAHhnBigaQAVgFAeAJQAQAFAnARISjAAQANAAA1gNQA1gNANAAQAXAAAeATQAjAXASAkQAXAshCAhQgzAagmAAg");
	this.shape_831.setTransform(398.7,432.6,1.004,1.004);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#363636").s().p("AgkAkQgQgPAAgVQAAgVAQgPQAPgPAVAAQAWAAAPAPQAQAPAAAVQAAAVgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape_832.setTransform(440.7,454.8,1.004,1.004);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f().s("#1D1D1E").ss(0.3).p("ABdAAQAAglgbgaQgbgbgnAAQglAAgbAbQgcAaAAAlQAAAmAcAbQAbAaAlAAQAmAAAcgaQAbgbAAgmg");
	this.shape_833.setTransform(442.1,453.5,1.004,1.004);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#595959").s().p("AhABBQgbgbAAgmQAAglAbgaQAbgbAlAAQAmAAAbAbQAbAaAAAlQAAAmgbAbQgbAagmAAQglAAgbgag");
	this.shape_834.setTransform(442.1,453.5,1.004,1.004);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f().s("#000000").ss(1.5).p("AgmAaIBNgz");
	this.shape_835.setTransform(448.7,445.7,1.004,1.004);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#000000").ss(1.5).p("AAAgmIAABN");
	this.shape_836.setTransform(446,443.1,1.004,1.004);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f().s("#1D1D1E").ss(0.3).p("ABPAAQAAgggXgXQgXgWghAAQggAAgXAWQgXAXAAAgQAAAhAXAWQAXAXAgAAQAhAAAXgXQAXgWAAghg");
	this.shape_837.setTransform(451.3,444.4,1.004,1.004);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#595959").s().p("Ag3A3QgXgWAAghQAAgfAXgYQAXgWAgAAQAhAAAXAWQAXAYAAAfQAAAhgXAWQgXAXghAAQggAAgXgXg");
	this.shape_838.setTransform(451.3,444.4,1.004,1.004);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#363636").s().p("AgkAkQgQgPAAgVQAAgVAQgPQAPgPAVAAQAWAAAPAPQAQAPAAAVQAAAVgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape_839.setTransform(348,454.8,1.004,1.004);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#1D1D1E").ss(0.3).p("ABdAAQAAglgbgaQgbgbgnAAQgmAAgbAbQgbAaAAAlQAAAmAbAbQAcAaAlAAQAmAAAcgaQAbgbAAgmg");
	this.shape_840.setTransform(349.3,453.5,1.004,1.004);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#595959").s().p("AhBBBQgbgbAAgmQAAglAbgaQAbgbAmAAQAnAAAbAbQAbAaAAAlQAAAmgbAbQgcAagmAAQglAAgcgag");
	this.shape_841.setTransform(349.3,453.5,1.004,1.004);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#000000").ss(1.5).p("AgnAaIBPgz");
	this.shape_842.setTransform(355.9,445.7,1.004,1.004);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f().s("#000000").ss(1.5).p("AAAgmIAABN");
	this.shape_843.setTransform(353.3,443.1,1.004,1.004);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#1D1D1E").ss(0.3).p("ABPAAQAAgggXgXQgXgWghAAQggAAgXAWQgXAXAAAgQAAAhAXAWQAXAXAgAAQAhAAAXgXQAXgWAAghg");
	this.shape_844.setTransform(358.6,444.4,1.004,1.004);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#595959").s().p("Ag3A3QgXgWAAghQAAgfAXgYQAXgWAgAAQAhAAAXAWQAXAYAAAfQAAAhgXAWQgXAXghAAQggAAgXgXg");
	this.shape_845.setTransform(358.6,444.4,1.004,1.004);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#F2F2F2").s().p("AgeBOQgEgFAAgGQAAgEACgEQACgDADgCQAEgCAEAAQAGAAAFAEQAEAEAAAHQAAAGgEAFQgFAEgGABQgGgBgFgEgAgOAjIARhZIADgPQACgFAEgEQADgDAHAAQAGAAADADQAEAEAAAHQAAAHgFAMIgiBTg");
	this.shape_846.setTransform(474.8,162.8);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#F2F2F2").s().p("AAlBPIgGgKIgKgYIgFgNIgFgQQgCgEgFgDQgEgCgKAAIgGAAIgNAoIgCAKQABAIAFACQAGACAIAAIgDAKIhIAAIADgKQAHgBADgBQAEgCADgDQACgEACgHIAfhiIABgJQAAgGgEgDQgEgCgFAAIgFAAIADgMIBLAAQAMAAAIACQAJABAHAEQAJAEAGAKQAGAHAAANQAAAGgCAHQgDAHgGAHQgGAGgKAFQgLADgQACQAGAFADAGQAEAFAEAOIAHAQQACAGAGAFQAGAFAJACIgDAKgAgNgDIAMAAQAaAAAKgHQAJgFAFgIQAFgKAAgKQAAgPgKgFQgKgEgOAAIgPAAg");
	this.shape_847.setTransform(455.9,162.7);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#F2F2F2").s().p("Ag0BPIADgKQAJgBAEgEQADgEADgJIAehhIABgKQAAgHgEgCQgEgCgFAAIAEgMIA9AAIgEAMQgFAAgDACQgDABgCAEIgEAKIgeBhQgCAHAAAEQAAAFAFADQAFACAHABIgEAKg");
	this.shape_848.setTransform(443.6,162.7);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#F2F2F2").s().p("AATBQIg1h2IgZBRQgCAIAAAEQAAAHAGADQAGADAHAAIgDALIg2AAIAEgLQAKgBAGgJQAFgHADgNIAdhcIgDgFQgEgHgDgBQgEgBgJAAIADgLIArAAIA0B1IAXhJIACgGIACgHIABgFQAAgGgFgEQgEgFgLAAIADgLIA4AAIgDALQgKAAgFAGQgGAEgFAQIgmB6g");
	this.shape_849.setTransform(411.5,162.8);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#F2F2F2").s().p("AAOBPIAEgKIANgBQAEgCACgEQADgDACgIIAchtIhdCJIgPAAIgJiIIgoBmQgDAJAAADQAAAGAFADQAGACAJABIgDAKIg1AAIAEgKQAHgCAHgHQAHgJAEgKIAihaIACgHQAAgGgEgDQgFgCgHAAIgDAAIADgMIA5AAIAJB5IBRh5IA5AAIgDAMQgJAAgFACQgFABgCAFQgDAEgCAKIgYBcIgCALQAAAHAFACQAFACAKAAIgEAKg");
	this.shape_850.setTransform(376.2,162.7);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#F2F2F2").s().p("Ag6BMQgNgEgHgJQgHgJAAgLIABgLIADgNIAVhCIACgLQABgHgGgCQgFgCgGAAIADgLIBIAAIgDALIgMABQgFABgCAEIgGALIgYBQQgEAMAAAGQAAAKAJAHQAIAGANAAQANAAAIgFQAIgFAGgHIAIgPIAFgPIAThEIACgJQAAgIgGgDQgGgDgIAAIAEgLIA6AAIgDALQgIAAgGAEQgGADgDAFQgDAFgCAIIgTBCIgGAVQgFAJgGAJQgIAIgLAGQgMAGgSAAQgPAAgNgFg");
	this.shape_851.setTransform(352.4,162.9);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#F2F2F2").s().p("AhWBPIADgKQAJAAADgFQADgEADgJIAfhiIACgJQAAgIgFgBQgEgCgGAAIADgMIA3AAQAOAAAKACQAKABALAGQATAMAGAPQAGAPAAAQQAAAKgCAJQgDALgEAKQgFALgIAKQgIAIgLAIQgLAHgMADQgMADgKABIgYAAgAgfAuIgCALQAAALATAAQAVAAAOgLQAOgMAHgUQAHgOACgNIACgUQAAgPgEgJQgEgJgGgEQgHgFgHgBQgIgCgIAAIgGAAg");
	this.shape_852.setTransform(332.7,162.7);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#F2F2F2").s().p("AgVBQQgHgBgGgEQgGgEgGgGQgDADgFAKIgKAAIAHg3IALAAQAAANAEAJQAEAKAFAFQAGAGAIACQAGADAGAAQAHAAAFgEQAFgDAEgFQADgGAAgGQgBgHgCgEQgCgFgFgFIgQgRQgPgNgFgKQgHgKAAgKQABgNAGgLQAHgLALgGQALgGAMAAQATAAAQAPIACgDIADgEIACgGIALAAIgHAwIgLAAIgEgRQgDgIgHgHQgHgHgNAAQgLAAgGAGQgHAGAAAJQAAAHADAGQADAGAFAFIAOANQAOAMAHAKQAJALgBAOQAAALgGALQgGALgMAHQgMAHgPAAQgGAAgHgCg");
	this.shape_853.setTransform(635.6,133.2);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#F2F2F2").s().p("AhMBQIAEgLQAIAAAEgFQADgFADgIIAehiIACgJQAAgHgEgCQgFgDgGAAIADgLIBuAAIABAnIgLAAQgFgNgFgGQgFgFgFgBQgFgCgLAAIgRAAIgRA8IAHAAQAKgBAHgCQAFgCAEgFQADgEADgKIAMAAIgUA9IgMAAQAEgIAAgGQgBgIgFgCQgGgDgHAAIgHAAIgPAtQgCAFAAAEQAAAEACACQADADAFAAQAHACAIAAQAVAAALgIQALgJAIgOIAMAAIgOArg");
	this.shape_854.setTransform(620.3,133.2);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#F2F2F2").s().p("AAOBQIAEgLIANgCQAEgBACgDQADgEACgIIAchtIhdCKIgPAAIgJiKIgoBnQgDAJAAADQAAAGAFACQAGACAJACIgDALIg1AAIAEgLQAHgCAHgHQAHgIAEgLIAihaIACgHQAAgFgEgDQgFgEgHAAIgDAAIADgLIA5AAIAJB5IBRh5IA5AAIgDALQgJAAgFADQgFABgCAEQgDAFgCALIgYBbIgCALQAAAGAFACQAFACAKABIgEALg");
	this.shape_855.setTransform(601.8,133.2);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#F2F2F2").s().p("Ag4BjQgPgJgHgPQgGgOgBgQQABgXANgWQAMgYAYgPQAYgPAeAAQAXAAAPAKQAPAJAGAPQAIAPgBAPQAAAQgHASQgIASgNAOQgNAQgUAIQgTAKgVgBQgZABgPgLgAAAgoQgJADgHAIQgJAHgGALQgIAPgHAUQgGAUAAARQAAAmAjAAQASgBAOgLQAOgNAKgVQAOgjAAgXQAAgmgkAAQgJAAgIADgAAuhDIgRgZIgkAZIgHAAIAggpIAcAAIAHApg");
	this.shape_856.setTransform(581.1,130.5);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#F2F2F2").s().p("AhPBQIADgLIAEAAQAMgBAEgDQAEgDADgLIAlh2IgJAAIgDAAQgMAAgLAGQgLAHgKAVIgLAAIAOguICRAAIgNAuIgMAAIACgLQAAgPgHgDQgHgFgKAAIgOAAIgiByIgCAKQAAAHAFACQAEACAFABIAFAAIgCALg");
	this.shape_857.setTransform(565.6,133.2);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#F2F2F2").s().p("AATBQIg1h2IgZBQQgCAIAAAFQAAAHAGADQAGADAHAAIgDALIg2AAIAEgLQAKgCAGgHQAFgIADgMIAdheIgDgEQgEgGgDgCQgEgBgJAAIADgLIArAAIA0B2IAXhKIACgGIACgHIABgGQAAgFgFgFQgEgEgLAAIADgLIA4AAIgDALQgKAAgFAFQgGAFgFARIgmB5g");
	this.shape_858.setTransform(547.4,133.2);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#F2F2F2").s().p("AhLBQIADgLQAIAAAEgFQADgFADgIIAehiIADgJQgBgIgFgBQgEgDgHAAIADgLIBvAAIABAnIgMAAQgDgJgDgGQgEgFgDgDQgEgDgFAAIgQgBIgNAAIgRA8IAGAAQAJgBAFgBQAGgBADgEIAGgGIADgMIAMAAIgTA+IgMAAQADgJAAgFQABgNgTAAIgIAAIgNAsIgDAKQAAAFADACQADADADABIAGABIAGAAIgEALg");
	this.shape_859.setTransform(518.1,133.2);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#F2F2F2").s().p("AgVBQQgGgBgHgEQgGgEgGgGQgDADgEAKIgMAAIAIg3IALAAQABANADAJQAEAKAGAFQAFAGAHACQAHADAHAAQAGAAAFgEQAFgDADgFQADgGAAgGQAAgHgCgEQgDgFgEgFIgQgRQgPgNgGgKQgFgKAAgKQgBgNAHgLQAHgLALgGQALgGAMAAQATAAAQAPIACgDIACgEIAEgGIALAAIgIAwIgLAAIgEgRQgDgIgHgHQgIgHgNAAQgLAAgFAGQgHAGAAAJQAAAHADAGQADAGAFAFIANANQAPAMAIAKQAHALAAAOQABALgHALQgGALgMAHQgMAHgOAAQgHAAgHgCg");
	this.shape_860.setTransform(498.7,133.2);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#F2F2F2").s().p("AhMBQIAEgLQAIAAADgFQAEgFACgIIAfhiIACgJQAAgHgFgCQgEgDgGAAIADgLIBuAAIABAnIgLAAQgFgNgFgGQgFgFgFgBQgFgCgLAAIgRAAIgRA8IAHAAQALgBAFgCQAHgCACgFQAEgEADgKIALAAIgTA9IgLAAQACgIAAgGQABgIgGgCQgGgDgHAAIgIAAIgNAtQgCAFgBAEQABAEACACQABADAHAAQAFACAJAAQAVAAALgIQALgJAIgOIAMAAIgNArg");
	this.shape_861.setTransform(483.5,133.2);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#F2F2F2").s().p("AhIBQIADgLQAHgBAEgCQAEgCABgDIAEgKIAfhmIABgFQAAgMgNAAIgEAAIAEgLIBHAAIgDALIgNABQgEACgCADQgDAEgCAIIgcBdQgDAJAAAFQAAAFADACQADACAFABIAKABQAOAAAKgCQAKgCAIgHQAJgHAHgNIALAAIgNArg");
	this.shape_862.setTransform(468.6,133.2);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#F2F2F2").s().p("AhPBQIADgLIAEAAQAMgBAEgDQAEgDADgLIAlh2IgJAAIgDAAQgMAAgLAGQgLAHgKAVIgLAAIAOguICRAAIgNAuIgMAAIACgLQAAgPgHgDQgHgFgKAAIgOAAIgiByIgCAKQAAAHAFACQAEACAFABIAFAAIgCALg");
	this.shape_863.setTransform(450.2,133.2);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#F2F2F2").s().p("Ag7BMQgMgFgHgIQgIgJAAgLIACgLIADgNIAVhDIADgKQgBgHgFgCQgEgCgHAAIADgLIBHAAIgCALIgNABQgEABgCAEQgDADgDAJIgZBPQgCAMAAAGQAAAKAIAHQAIAGAMAAQANAAAJgFQAIgFAFgHIAJgPIAFgPIAUhFIABgIQAAgJgGgCQgGgDgIAAIADgLIA8AAIgEALQgIAAgGADQgFADgDAGQgEAFgDAJIgSBBIgHAUQgDAKgIAIQgGAKgMAFQgMAGgRAAQgRAAgNgFg");
	this.shape_864.setTransform(433.9,133.3);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#F2F2F2").s().p("Ag4BIQgPgJgHgPQgHgPABgPQAAgWAMgYQAOgXAXgPQAYgPAdAAQAYAAAPAJQAPAKAHAPQAGAPABAQQAAAQgIARQgHARgOAPQgOAPgSAJQgUAJgWAAQgYAAgPgKgAAAhDQgJADgIAHQgHAIgHALQgIAQgGAUQgHATAAARQAAAlAiAAQATAAAOgMQAOgMAJgWQAPghAAgYQAAgngkAAQgJAAgIAEg");
	this.shape_865.setTransform(414.5,133.2);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#F2F2F2").s().p("AhPBQIADgLIAEAAQAMgBAEgDQAEgDADgLIAlh2IgJAAIgDAAQgMAAgLAGQgLAHgKAVIgLAAIAOguICRAAIgNAuIgMAAIACgLQAAgPgHgDQgHgFgKAAIgOAAIgiByIgCAKQAAAHAFACQAEACAFABIAFAAIgCALg");
	this.shape_866.setTransform(399,133.2);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#F2F2F2").s().p("Ag6BMQgNgFgHgIQgHgJAAgLIABgLIADgNIAVhDIACgKQABgHgGgCQgFgCgGAAIADgLIBIAAIgDALIgMABQgFABgDAEIgFAMIgYBPQgEAMAAAGQAAAKAJAHQAIAGANAAQANAAAIgFQAIgFAGgHIAIgPIAEgPIAUhFIACgIQAAgJgGgCQgGgDgIAAIAEgLIA6AAIgDALQgIAAgGADQgGADgDAGQgDAFgCAJIgTBBIgGAUQgFAKgGAIQgIAKgLAFQgMAGgSAAQgPAAgNgFg");
	this.shape_867.setTransform(376.7,133.3);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#F2F2F2").s().p("AgwBKQgOgIgIgPQgIgOAAgRQAAgUAJgSQAIgTAOgOQANgPASgHQAQgIAPAAQAMAAAJADQAJAEAFAEIAIAJQAHgGADgLIALAAIgMA3IgLAAIAAgCIAAgCQAAgSgHgKQgGgKgJgDQgHgDgHAAQgOAAgLAKQgMAKgIAPQgJAQgFASQgFASAAAPQAAALADAJQAEAIAGAGQAIAFAJAAQAKAAAKgFQALgGAKgKQAKgKAFgOIAMAAIgQA1IgKAAIABgIIgBgIQgIAJgMAFQgLAGgNAAQgSAAgOgIg");
	this.shape_868.setTransform(359.2,133.2);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#F2F2F2").s().p("AATBQIg1h2IgZBQQgCAIAAAFQAAAHAGADQAGADAHAAIgDALIg2AAIAEgLQAKgCAGgHQAFgIADgMIAdheIgDgEQgEgGgDgCQgEgBgJAAIADgLIArAAIA0B2IAXhKIACgGIACgHIABgGQAAgFgFgFQgEgEgLAAIADgLIA4AAIgDALQgKAAgFAFQgGAFgFARIgmB5g");
	this.shape_869.setTransform(341.8,133.2);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#F2F2F2").s().p("AgzBQIACgLQAJAAAEgFQADgFADgIIAehhIABgKQAAgHgEgCQgEgCgFgBIAEgLIA9AAIgEALQgFAAgDADQgDABgCAEIgEAKIgdBhQgDAHAAADQAAAHAFACQAFADAHAAIgEALg");
	this.shape_870.setTransform(328.3,133.2);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#F2F2F2").s().p("AhCBRIAEiJQAAgIgDgDQgEgCgGAAIACgLIBAAAIgDALIgKABQgFABgCADQgDADAAAGIgDBnIA9hgQAEgGAAgEQAAgHgFgCQgGgCgIAAIADgLIA/AAIgDALQgKAAgIAFQgJAGgJAOIhSB9g");
	this.shape_871.setTransform(305.5,133.3);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#F2F2F2").s().p("AhOBQIAAgLIBziIIgkAAQgGAAgHACQgIABgIAIQgIAGgIAOIgLAAIANgrIB5AAIAAAJIh0CKIAkAAQAkAAAQgjIALAAIgPAvg");
	this.shape_872.setTransform(281.9,133.2);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#F2F2F2").s().p("AhMBQIADgLQAIAAAFgFQADgFACgIIAfhiIACgJQAAgHgFgCQgEgDgGAAIADgLIBuAAIABAnIgLAAQgFgNgFgGQgFgFgFgBQgFgCgLAAIgRAAIgRA8IAHAAQAKgBAHgCQAFgCAEgFQADgEADgKIAMAAIgUA9IgMAAQADgIABgGQAAgIgGgCQgGgDgHAAIgHAAIgPAtQgBAFAAAEQAAAEABACQACADAHAAQAFACAJAAQAVAAALgIQALgJAIgOIAMAAIgOArg");
	this.shape_873.setTransform(266,133.2);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#F2F2F2").s().p("AhDBRIAFiJQAAgIgDgDQgDgCgIAAIAEgLIA/AAIgEALIgKABQgDABgDADQgDADAAAGIgDBnIA9hgQAEgGAAgEQAAgHgFgCQgFgCgJAAIADgLIA+AAIgCALQgJAAgJAFQgJAGgJAOIhSB9g");
	this.shape_874.setTransform(254,133.3);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#F2F2F2").s().p("AgVBQQgHgBgGgEQgGgEgGgGQgDADgFAKIgLAAIAIg3IALAAQABANADAJQAEAKAGAFQAFAGAHACQAHADAGAAQAHAAAFgEQAFgDAEgFQACgGAAgGQABgHgDgEQgDgFgEgFIgQgRQgPgNgFgKQgHgKAAgKQABgNAGgLQAHgLALgGQALgGAMAAQATAAAQAPIACgDIACgEIADgGIAMAAIgIAwIgLAAIgEgRQgDgIgHgHQgHgHgNAAQgLAAgGAGQgHAGAAAJQAAAHADAGQADAGAFAFIAOANQAOAMAHAKQAJALgBAOQAAALgGALQgGALgMAHQgMAHgPAAQgGAAgHgCg");
	this.shape_875.setTransform(218.1,133.2);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#F2F2F2").s().p("Ag6BMQgNgFgHgIQgHgJAAgLIABgLIADgNIAVhDIADgKQAAgHgGgCQgFgCgGAAIADgLIBHAAIgCALIgMABQgFABgCAEIgGAMIgYBPQgEAMAAAGQAAAKAJAHQAJAGALAAQAOAAAIgFQAIgFAFgHIAJgPIAFgPIAThFIACgIQAAgJgGgCQgGgDgIAAIADgLIA8AAIgEALQgJAAgFADQgGADgDAGQgDAFgDAJIgSBBIgGAUQgFAKgHAIQgGAKgMAFQgMAGgSAAQgPAAgNgFg");
	this.shape_876.setTransform(204.7,133.3);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#F2F2F2").s().p("Ag4BIQgPgJgHgPQgGgPAAgPQgBgWANgYQANgXAYgPQAYgPAdAAQAYAAAPAJQAPAKAGAPQAIAPAAAQQgBAQgHARQgIARgNAPQgNAPgUAJQgSAJgXAAQgXAAgQgKgAAAhDQgJADgIAHQgHAIgHALQgIAQgHAUQgGATAAARQAAAlAiAAQATAAAOgMQAOgMAKgWQAOghAAgYQAAgngkAAQgJAAgIAEg");
	this.shape_877.setTransform(185.3,133.2);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#F2F2F2").s().p("AhDBRIAFiJQAAgIgDgDQgDgCgIAAIAEgLIA/AAIgEALIgKABQgEABgCADQgDADAAAGIgDBnIA9hgQAEgGAAgEQAAgHgFgCQgGgCgIAAIADgLIA+AAIgCALQgJAAgKAFQgIAGgJAOIhSB9g");
	this.shape_878.setTransform(170.9,133.3);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#FFFFFF").s().p("AhLDGIAAgEIABgMIABgLIABgJQACgXAFgTIBQgKIAGAGIAFAGIgHBCIgFABIgKAEIgMAEIgLABIgeAFIgMABIgIABgAgpBSIgHgKIgCgGIAAgJIgBgHQAAgDgIAAIALjsIAGgHIA+gIIAIAGIAJAGIAHgCIAUgJIAGgBQAGACAAAKIgBAFIAAALIgCAJIgiCxIgLArIABAAIgEAFIgNAKIgRAKIgXAFIgFABQgFAAgDgCg");
	this.shape_879.setTransform(478.4,51.8);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#FFFFFF").s().p("AAODQIgPgHIgOgHQgGgDgIAAQgLACgIAFQgJAEgMACQgYADgQgGQgPgHgIgOQgIgOgBgUQgCgUADgYQABgQAGgOIAMgdIAMgcIAIgdIgCgOIgGgLIgFgLQgDgGABgHIAAgDIAFgTIAGgZIAGgXIAEgNIAHgSQAEgJALgBIBTgTQAqgLAqgFQAEAAAGAEIAHAEIAIAGIgFA3QAQAHAHANQAGAOAAARIgCAjIgFAiIgFAxIgEAgIgEAgIgGAjIgHApQgPAXgTAIQgSAHgWADIgIAAQgIAAgGgCgAAehuIgMABIgJABIgLAEQgGADgEAJIgCAiIgFAaIgIAZIgKAhIAAAEQgEAZADAZIAIAvIAJAAIAKgBIAIgBIAPgEQAJgEABgJIAXjVIgCgEIgEgCIgJABg");
	this.shape_880.setTransform(455.2,53.7);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#FFFFFF").s().p("Ag+DRIgQgFIgGgHIgCgMIgDgRIgEgNIgDgFIgCgGIABgOQgJgJgFgKIgFgTIgBgVIgCgXQgEgSgGgMQgHgMgDgQIgCgRIgCgOIgBgEIAAgUIAAghIACgiIABgVIAFgGIAGgEIALgCIAUgDIAXgCIATgCIAMgDQAEASAAASIgDAmIgDAlQgBASAEATIABAFIAEAMIAFAOIAEANIACAFIAJAjQAHgHACgOIAEgdIACgOIAAgMIAFgtIAFgiIAJgnIAIggIAFgOIAFgJIAzgFIALACIALABIAEgBIATgOIAGgCQAEgBAEAEIACAeQgCAUgJAaIgXBDIghBmQgTA+gVBbIgPAFIgSAHIgRAGIgOAEg");
	this.shape_881.setTransform(428.2,53.5);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#FFFFFF").s().p("AhvAsIAEg2IAog6IgEhJQAAgGAMgJIAagTIAcgPIATgHIAPAKIAXgGIAcgIIAcgJIAYgEIAXBzIgUBRIANAoQgFAnAFAoIAGBRIgKAAIgRAAIgRgBIgLAAIgfAJIgQhGIhHAAIgNBSIhGAGIg0AIgAAnhRIgHAHIgNAPIgNAPIgGAHIADAoIgMAkIA1gDIACh2g");
	this.shape_882.setTransform(396.2,53.8);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#FFFFFF").s().p("AhkiNIAMgoIAqgFIAkgGIAigIIApgGIAbgDIAVABQAJACAEAHQAFAIgBAPIgFBvIgBALQgCAPgJALIgTASIgSANQgIAFgBAGQAAAHALACIAYADIAZAHQALAFgCAMIAAAEIgLAnIgBAHIAFBIIAAACIAAADQgbADgZAHQgZAIgbADQgIABgCgEIgBgLQADgVAIgTQAIgUADgUQABgOgGgGQgGgHgKgCIgWgBIgWACIgFA+IgFA9IhgALgAgRh8IgJBeIA7gSIAJhTg");
	this.shape_883.setTransform(366.1,54.3);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#FFFFFF").s().p("Ah7gBIgFgMIASiqIAIAAIANgBIAOgBIAJgBIAZAAIBRgHIAOgCIANgCIAJgBIAOgDIAZgDIAVACQAKACgBAJIgBAGIgCAFIgOBoIgDAEIgFADIgMAIIgVALIgVAMIgLAHIgBAGIBAAOIAECeQgBAFgGAHIgNAMIgQAJIgOAFIgLABIgWADIglADIgrAEIgsAEIglADIgWACgAgNAbIgKABIgNAEIgMAFQgFADAAAFIADBUIAlACIAHAAIAEgFIACgDIAJhWQABgJgFgBIgLgBgAgqg+IADADIADADIANAGIAKAEIAKgHIAMgPIAKgSIAFgQIAAgHQABgDgBgDIgBAAIgDABIgXACQgQAAgRgDg");
	this.shape_884.setTransform(339.5,49.5);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#FCEE21").s().p("AAAABIhMgkIBNAjIBMAkQgSgHg7gcg");
	this.shape_885.setTransform(465.5,441.1,1.004,1.004);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#FFBE17").s().p("ABKAqIibhKQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAABgBIAFgFQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAICcBJQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIgGAGIgCABIgCAAg");
	this.shape_886.setTransform(465.6,441.1,1.004,1.004);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#FCEE21").s().p("AAAABQhFgggigRIBoAwIBnAxIhogwg");
	this.shape_887.setTransform(473.3,435.8,1.004,1.004);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#FFBE17").s().p("ABuA/IjphuQgEgCADgDIAIgJQADgDAEACIDpBuQAEACgDADIgIAJQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgDgBg");
	this.shape_888.setTransform(473.3,435.8,1.004,1.004);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#FCEE21").s().p("AAhAPIgZgMIAZAMIBhAugAiAg8QAaAKAnATIBHAig");
	this.shape_889.setTransform(480.3,430.2,1.004,1.004);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#FFBE17").s().p("ACKBOIkjiKQgFgBADgEIAKgLQADgEAFADIEkCKIACACQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgKALQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgBg");
	this.shape_890.setTransform(480.3,430.1,1.004,1.004);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#000000").s().p("AAAABIgXgLIAYAKIAXALIgYgKg");
	this.shape_891.setTransform(460.8,445.2,1.004,1.004);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#FBB03B").s().p("AAXAYIg9gdQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIAKgLQADgDAFACIA9AdQAFACgDAEIgKAKQgCADgDAAIgDgBg");
	this.shape_892.setTransform(460.8,445.2,1.004,1.004);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#CCCCCC").s().p("AizCVIAyg8QAyg2A8g4QBDg8A0goQBBgyA+gnQhEAzg3AsQhEA3gxAvQgxAsg+BAIg0A5IgyA7QASgbAdgjg");
	this.shape_893.setTransform(483.6,424,1.004,1.004);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#FFFFFF").s().p("ADjjSInFGlQCwjmEVi/g");
	this.shape_894.setTransform(483.6,424,1.004,1.004);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#80BAFF").s().p("ADNjPQASCsheBlQhmBvjqAfQFJiJBTkWg");
	this.shape_895.setTransform(484.9,424.6,1.004,1.004);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#2E8EFF").s().p("AjwDCQgFihCGhsQB7hkDigpQASC0hiBpQhpBzj0Ahg");
	this.shape_896.setTransform(482.5,424.6,1.004,1.004);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#FFE517").s().p("Ag1AfQAWAcBAg9QA9g7ANguQgVBWgwA1Qg4BAhYALQAlgjAQgpg");
	this.shape_897.setTransform(509.2,421.6,1.004,1.004);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#FFBE17").s().p("AgrgtQAbAMAvgXQAkgRA7gtQgZBkg3A5Qg/BChsAOg");
	this.shape_898.setTransform(508.3,421.7,1.004,1.004);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FFBE17").s().p("AiFgvQgggBAGgRQAGgOAbgRQAbgQAVgCQAZgCgCAXQBIBdCPAlIi2BOQgeh1hRgtg");
	this.shape_899.setTransform(480.6,404.9,1.004,1.004);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#595959").s().p("Ag8ANQgSgVgGgRQASgNA0gBQARAABSADQg/AFgiAZQgkAYAXAWQgPgBgUgag");
	this.shape_900.setTransform(343.2,409.6,1.004,1.004);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f().s("#000000").ss(0.3).p("AAqAVQgFAIgPAAQgPAAgQgIQgRgJgKgMQgJgLAEgJQAFgIAPAAQAPAAAQAIQASAJAJALQAJAMgEAJg");
	this.shape_901.setTransform(394.1,389.7,1.004,1.004);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#ABAB99").s().p("AgJAVQgRgJgKgMQgJgLAEgJQAFgIAPAAQAPAAAQAIQASAJAJALQAJAMgEAJQgFAIgPAAQgPAAgQgIg");
	this.shape_902.setTransform(394.1,389.7,1.004,1.004);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f().s("#000000").ss(0.3).p("Agsi0QA3AuAXBfQAcB1g9Bq");
	this.shape_903.setTransform(399.5,409.2,1.004,1.004);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("#000000").ss(0.3).p("AANirQARAdABBdQACCChABe");
	this.shape_904.setTransform(391.5,407.9,1.004,1.004);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f().s("#000000").ss(0.3).p("ACIiJQhlAkhIBPQhDBIgcBb");
	this.shape_905.setTransform(379.5,402.1,1.004,1.004);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("#000000").ss(0.3).p("ACwhdQibgKhUA8Qg9AqguBj");
	this.shape_906.setTransform(373.3,397.3,1.004,1.004);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f().s("#000000").ss(0.3).p("AkMgLQgEgHADgIQAohoATgbQArg/BNABQAfgBAyAKQAiAIA+ASIAJADQBIAkBRBTQAIAIADAIQATAxgMBJQgJA0gfBXQgCAGgHgBQi2gchxgxQiIg7g3hfg");
	this.shape_907.setTransform(381.7,406.3,1.004,1.004);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#595959").s().p("ADaDcQi2gchxgxQiIg7g3hfQgEgHADgIQAohoATgbQArg/BNABQAfgBAyAKQAiAIA+ASIAJADQBIAkBRBTQAIAIADAIQATAxgMBJQgJA0gfBXQgCAFgFAAIgCAAg");
	this.shape_908.setTransform(381.7,406.3,1.004,1.004);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f().s("#000000").ss(0.3).p("AihhDIDAgFQAWAeAoAhQAdAYAyAjQiNAhhQgQQhigTgehdQgDgIAFgHQAFgHAJAAg");
	this.shape_909.setTransform(351.2,411.7,1.004,1.004);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#262626").s().p("AgtBDQhjgTgehdQgCgIAFgHQAFgHAIAAIDAgFQAXAeAnAhQAdAYAzAjQhgAXhDAAQggAAgagGg");
	this.shape_910.setTransform(350.9,411.7,1.004,1.004);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#999999").s().p("AhGCbQBFgQAhhZQAghQAFiQQAKDXhPCGQgVgagxAGg");
	this.shape_911.setTransform(323.4,282.5,1.004,1.004);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("#000000").ss(2,1).p("AgdgfIA7A/");
	this.shape_912.setTransform(304.8,242.8,1.004,1.004);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f().s("#000000").ss(2,1).p("AAcgaIg3A1");
	this.shape_913.setTransform(316.1,243.7,1.004,1.004);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#000000").s().p("AgEAeQgMgBgIgKQgHgLACgMQACgMAKgIQAKgIAMACQAMADAIAKQAHAKgCALQgCAOgKAHQgIAGgJAAIgFgBg");
	this.shape_914.setTransform(302.4,248.6,1.004,1.004);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#000000").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQAOABAIAJQAJAJAAALQgBANgIAJQgKAJgMAAQgMAAgJgJg");
	this.shape_915.setTransform(317.8,249.5,1.004,1.004);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().s("#000000").p("ADRGMQAcAVAqhvQAshyANiNQAQimgohwQgxiJh+gaQjFgqg8CxQgSA1gMBhQgMBigHAWQgbBTglA0QglA1g2AgQgZAOAPAIQAKAGAsAGQB8AQAmAWQAoAWATAmQALAZAogBQAkAABKgSQBAgKArAhg");
	this.shape_916.setTransform(299.8,260.6,1.004,1.004);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FFFFFF").s().p("ADRGMQgrghhAAKQhKASgkAAQgoABgLgZQgTgmgogWQgmgWh8gQQgsgGgKgGQgPgIAZgOQA2ggAlg1QAlg0AbhTQAHgWAMhiQAMhhASg1QA8ixDFAqQB+AaAxCJQAoBwgQCmQgNCNgsByQgkBdgZAAQgEAAgFgDg");
	this.shape_917.setTransform(299.8,260.6,1.004,1.004);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#324D31").s().p("ABHAMQA6g0hMg5QBsA+g4AyQgxAsizAoQCRgqAxgtg");
	this.shape_918.setTransform(258.2,389.9,1.004,1.004);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#324D31").s().p("ABQj7QA4FyjiCFQCgioAKlPg");
	this.shape_919.setTransform(185,395.4,1.004,1.004);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#324D31").s().p("AhZEjQimgvhRhbQhahjAIicQAhhmA1gvQA6gzBTAMQjCA5gICNQgDA8AjA8QAiA7A+AtQCOBnCugjQDRgpCfjoQhiC+hYBNQhwBjifAAQgZAAgagCg");
	this.shape_920.setTransform(181.5,430,1.004,1.004);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#86CC82").s().p("AkUJ7QiugHiRibQhFhJgLhiQgKhiAxhZQAzhcBUgWQA5gPArAhQArAigBA8QAAAggVAUQgUAUgfgDQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIAGgKQADgGAAgEQABgigGgPQgCgFgMgEQgMgEgDADQgbAVgEAUQgHAgAPAdQAQAcAeAQQAgAQAggDQAigEAVgZQAxg4AVgtQBZi1AGjcQADhPgZgyQgHgNgcgmQgXgfgHgXQgNgoAPgkQAIgTAPgNQAPgNASgFQApgLApAdQAmAcAMAqQALAmAMA4IAUBfIABACQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAUgTAGgEIBFg1QAogeAfgSQA1gdArANQAqAOAfA2QAdAzAGA/QAFA0gLBDIgOBLQgBADADgBIBFgRQApgKAagOIAlgZQAXgPASgBQAXgCAWAIQAWAIARAQQAVAVAFAdQAGAfgMAaQgWAthAAQQgTAFgjAFQgmAGgQAEQgWAFgQAGQhIAbgsAzQhQBggsBPQhJCChOBPQiKCNioAAIgQAAgABvjVQgHAKgDAZIgGAfQgEALgMA7QgQBAgYAtIAAACQAQAGApg+QAagnAWgqIAJgSQAGgLAGgHQAOgNAFgGQAIgMgDgOQgEgQgMgLQgMgMgQgCIgGgBQgTAAgJANgADZjvQABABgCAWIgBAWQADABAMgXQAPgcAUgLQACgPgGgRQgFgQAEgSQgsAsABAmgADDmPQgJAXgYANIgfASIAAABQAAAjghAhQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAABAAQAZAEARgLIAQgOIAAAAIALgFQALgGAEgPIAKglQAIgggDgJIgBgBIgCABg");
	this.shape_921.setTransform(205.1,397.9,1.004,1.004);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#000000").s().p("AipDjIBdnzID2AuIhdHzg");
	this.shape_922.setTransform(222,382.9,1.004,1.004);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#324D31").s().p("AigAXQhWhNClhgQh1BZBaBQQBLBDDfBBQkTg7hLhFg");
	this.shape_923.setTransform(483.6,275.2,1.004,1.004);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#324D31").s().p("Ah6mCQAPIDD3EDQldjOBXo4g");
	this.shape_924.setTransform(596,283.6,1.004,1.004);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#324D31").s().p("AllErQiHh3iXklQD1FmFAA/QCGAaCEgfQB5gcBkhIQBfhFA1hcQA1hcgFhcQgGhjhJhMQhQhUiXgsQCAgTBYBOQBSBIAyCdQANDwiKCZQh9CKj/BIQgpAEgmAAQj1AAiriXg");
	this.shape_925.setTransform(601.4,336.8,1.004,1.004);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#86CC82").s().p("AhGL2Qh4h5hwjIQhFh6h6iRQhEhRhvgoQgegLgcgGQgXgGg8gIQg1gIgdgIQgsgMghgWQglgagSgjQgTgoAJguQAJguAgggQAZgYAjgNQAhgMAkADQAbACAjAXIA5AmQAoAWA/AQIBrAZQAEABgBgEIgXh0QgQhmAIhRQAJhfAthPQAvhUBBgUQBCgVBRAtQAvAbA/AvIBqBQQAMAKAcAbQABAAAAABQABAAAAAAQABAAAAgBQABAAAAgBIAfiTQAShXARg6QAShAA7gqQA/guA+ARQAdAIAXAVQAXAUAMAcQAYA3gVA+QgLAjgjAwQgqA6gLAVQgnBKAEB8QAKFQCIEYQAiBIBKBTQAhAmAzAGQAxAGAygaQAugYAYgrQAYgtgLgwQgGgdgpgiQgGgFgTAGQgSAGgDAHQgJAYACAzQAAAHAEAJIAJAPQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgCABQgvADgfgeQgfgfgBgxQgChbBCg0QBCgzBZAWQCAAiBPCOQBMCJgRCVQgQCXhqBxQjfDtkLALIgYABQkBAAjWjagAjelaQgZADgSASQgSARgGAZQgFAWAMARQAHALAWAUQAJAKAJAQIAPAdQAiBBAmA7QBABgAYgJQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQglhGgZhhQgThbgFgRQgFgOgEgiQgFgmgLgQQgNgTgcAAIgLABgAmRm5QgJAbAEAWQAfAQAWAsQATAjAEgCQACAAgDghQgDgiABgBQABg7hEhDQAIAbgJAZgAkwplQgFAOAMAwIAQA6QAGAVARALQAKAFAHACIABAAQADACAUATQAbASAngGQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAQgygxAAg3IgBgCQgBgCgugZQgmgUgNgjQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABg");
	this.shape_926.setTransform(565.1,287.5,1.004,1.004);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#000000").s().p("AkElbIF6hHICPL/Il6BGg");
	this.shape_927.setTransform(539.1,264.4,1.004,1.004);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#F2F2F2").s().p("AgKALQgEgFAAgGQAAgDACgEQACgDADgCQAEgCADAAQAGAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_928.setTransform(627.1,160.5);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#F2F2F2").s().p("AgtAyIAThBQADgJAAgEIgBgDQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgEAAgFAGIgHAMIgLAAQAHgOAHgHQAHgIAHgDQAGgDAGAAQAJAAADAGQACAGAAAGQAAAKgGAVIAKgSIAKgOQAGgHAHgFQAGgFAHAAQAJAAADAGQADAFAAAFQAAAHgFAGQgEAFgGAAQgFAAgFgGQgDgDgDAAQgDAAgFAGQgGAFgGAKQgFAJgFANIgKAaIgBAFg");
	this.shape_929.setTransform(620.4,156.7);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#F2F2F2").s().p("AAQAtQgEgFAAgGIABgIIADgLIAEgNQgNAUgMAOQgOAPgQAAQgIAAgFgFQgEgFAAgHQAAgGADgKIAMgmIADgKIgBgDQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgLAQIgLAAQAJgNAJgJQAKgKAPAAQAGAAAGAEQAFADABAKQgBAGgBAEIgKAeQgDALAAAFQAAADABACQACACADAAQAGAAAHgIQAIgIAJgRQAJgSAKgbIAbAAIgVBHIgCAJIABADIACABQAFAAADgGIAIgMIAKAAQgEALgJALQgKALgOAAQgLAAgDgGg");
	this.shape_930.setTransform(607.6,156.9);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#F2F2F2").s().p("AgqAsQgJgIgBgOQABgSAJgQQALgRAQgKQARgLAUAAQARgBAGAGQAIAGAAAIQAAAFgDAGQgEAHgIAGQgHAHgOAFQgPAGgVACIgDAAIgBAIQAAAJAFADQAEAEAHAAQARABAQgUIAMAAQgGALgPAMQgQALgTAAQgNgBgLgHgAACgkQgFAFgFAJQgFAHgDAIIgDAJQAXgDAMgKQAMgJgBgLQAAgFgCgCQgDgDgFAAQgIgBgHAGg");
	this.shape_931.setTransform(595.4,156.9);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#F2F2F2").s().p("AgtAyIAThBQADgJAAgEIgBgDQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgEAAgFAGIgHAMIgLAAQAHgOAHgHQAHgIAHgDQAGgDAGAAQAJAAADAGQACAGAAAGQAAAKgGAVIAKgSIAKgOQAGgHAHgFQAGgFAHAAQAJAAADAGQADAFAAAFQAAAHgFAGQgEAFgGAAQgFAAgFgGQgDgDgDAAQgDAAgFAGQgGAFgGAKQgFAJgFANIgKAaIgBAFg");
	this.shape_932.setTransform(584.7,156.7);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#F2F2F2").s().p("AgtAyIAThBQADgJAAgEIgBgDQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgEAAgFAGIgHAMIgLAAQAHgOAHgHQAHgIAHgDQAGgDAGAAQAJAAADAGQACAGAAAGQAAAKgGAVIAKgSIAKgOQAGgHAHgFQAGgFAHAAQAJAAADAGQADAFAAAFQAAAHgFAGQgEAFgGAAQgFAAgFgGQgDgDgDAAQgDAAgFAGQgGAFgGAKQgFAJgFANIgKAaIgBAFg");
	this.shape_933.setTransform(574.2,156.7);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#F2F2F2").s().p("AgpAsQgLgIAAgOQAAgSALgQQAJgRASgKQAQgLAUAAQAQgBAHAGQAIAGgBAIQAAAFgCAGQgDAHgIAGQgIAHgPAFQgOAGgVACIgDAAIgBAIQAAAJAEADQAEAEAIAAQARABAQgUIANAAQgIALgPAMQgOALgUAAQgOgBgJgHgAADgkQgHAFgEAJQgFAHgDAIIgEAJQAYgDALgKQAMgJAAgLQAAgFgCgCQgDgDgFAAQgIgBgGAGg");
	this.shape_934.setTransform(563.2,156.9);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#F2F2F2").s().p("AgcA9QgGgFAAgKQAAgGAEgMIAPgwIgWAAIADgLIAWAAIALgkIAbAAIgLAkIAXAAIgDALIgXAAIgRA5IgCAJQAAACACACQAAABABAAQAAABAAAAQABAAABAAQAAAAABAAQAGAAAFgGIAJgPIALAAQgHAPgIAIQgIAIgHADQgHACgGABQgKAAgFgHg");
	this.shape_935.setTransform(554,155.3);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#F2F2F2").s().p("AgpAsQgLgIAAgOQAAgSALgQQAJgRASgKQAQgLAUAAQAQgBAHAGQAIAGgBAIQAAAFgCAGQgDAHgIAGQgIAHgPAFQgOAGgVACIgDAAIgBAIQAAAJAEADQAEAEAIAAQARABAQgUIANAAQgIALgPAMQgOALgUAAQgOgBgJgHgAADgkQgHAFgEAJQgFAHgDAIIgDAJQAXgDALgKQAMgJAAgLQAAgFgCgCQgDgDgFAAQgIgBgGAGg");
	this.shape_936.setTransform(538,156.9);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#F2F2F2").s().p("AAAA9IAAgCIAAgCIgLANQgHAFgIAEQgIADgJABQgMAAgHgJQgHgHAAgNQAAgNAGgNQAFgNAJgMQAJgKAMgGQAMgHANABQAIAAAFADQAFAEAEAFIAOguIACgIQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAIgFgCIgJAAIADgLIASAAIAMgBIAKgBIAIAAIgqCFIgCAMQAAAEADAAQAEAAAFgEQAEgFAEgHIALAAQgCAFgFAHQgFAHgIAGQgIAFgKABQgTgBAAgVgAgUAAQgKAJgFAOQgGAPAAALQAAAIAEAEQAEADAFAAQAIAAAIgGQAHgGAFgIQAGgKADgJQAEgKAAgJQAAgHgEgFQgEgEgGAAQgKAAgJAKg");
	this.shape_937.setTransform(526,153.8);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#F2F2F2").s().p("AgqAsQgKgIAAgOQAAgSAKgQQALgRAQgKQAQgLAVAAQAQgBAIAGQAGAGABAIQAAAFgEAGQgCAHgJAGQgHAHgOAFQgPAGgVACIgDAAIgBAIQAAAJAFADQADAEAIAAQARABAQgUIAMAAQgGALgPAMQgQALgSAAQgOgBgLgHgAACgkQgFAFgFAJQgFAHgDAIIgDAJQAWgDANgKQALgJABgLQgBgFgCgCQgDgDgEAAQgJgBgHAGg");
	this.shape_938.setTransform(507,156.9);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#F2F2F2").s().p("AALAuQgEgEgBgHQABgFADgKIAIgbQADgLAAgEQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAgBAAQgGAAgIALQgJAKgJARQgKATgGAVIgcAAIAUhDIADgMIAAgEQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQgFAAgEAGQgEAGgDAGIgKAAQAFgMAJgKQAJgKAOAAQAKAAAFAEQAEAFAAAGIgCAJIgCAMIgFAMQAPgWAMgOQANgMAPAAQAJgBAEAGQAEAFABAGQgBAEgDALIgLAnIgDALIABACIACABQAEAAAFgEQAEgFAFgIIALAAIgJAOQgFAHgJAGQgJAFgJABQgKAAgFgFg");
	this.shape_939.setTransform(494.3,156.8);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#F2F2F2").s().p("AgkBNQgNgCgKgGQgKgGAAgLQAAgFADgFQACgEAEgDQAEgCADAAIAEAAQABABAAAAQAAAAAAAAQABABAAAAQAAAAAAABIgDAEQgEAGAAAEQAAALANAEQANAEANAAQAPAAAKgFQAKgEAAgHQAAgEgCgCQgCgCgFgCIgUgHIgVgIQgHgDgEgFQgDgFAAgGQAAgJAIgHQAIgGAMgBQgJgEgFgHQgEgIAAgHQAAgKAGgJQAGgIAKgGQALgFANAAQAUAAAKAJIAIgHQAEgCAGAAQAEAAADACQADADAAAEQAAAEgDACIgFABQgDAAgDgCIgDgBQgDAAgCADIAEAHQABAEAAAGQAAAEgCAHQgCAGgFAGQgGAGgKAEQgLADgPAAQgOAAgFADQgFADAAAEQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAIAGADIAMAEIARAFQAgAJAAAUQAAAJgGAIQgGAHgOAFQgOAFgWAAQgJAAgMgCgAACg/QgFAGgDAJQgCAJAAAHQAAAHADADQADAEAFAAQAMAAAGgNQAHgNAAgLQAAgEgCgDQgBgDgDgCQgDgCgEAAQgIAAgFAGg");
	this.shape_940.setTransform(480.7,159.6);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#F2F2F2").s().p("AgpBIQgLgIAAgPQAAgSALgRQAJgPASgLQAQgLAUAAQAQAAAHAGQAIAFgBAIQAAAFgCAFQgDAHgIAHQgIAHgPAFQgOAGgVACIgDAAIgBAIQAAAKAEADQAEAEAIAAQARAAAQgTIANAAQgIALgPALQgOALgUAAQgOAAgJgHgAADgIQgHAFgEAHQgFAHgDAJIgEAKQAYgEAMgKQALgJAAgLQAAgEgCgDQgDgDgFAAQgIAAgGAGgAAXgmIgigoIAeAAIANAog");
	this.shape_941.setTransform(470.1,154.1);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#F2F2F2").s().p("AgtAyIAThBQADgJAAgEIgBgDQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgEAAgFAGIgHAMIgLAAQAHgOAHgHQAHgIAHgDQAGgDAGAAQAJAAADAGQACAGAAAGQAAAKgGAVIAKgSIAKgOQAGgHAHgFQAGgFAHAAQAJAAADAGQADAFAAAFQAAAHgFAGQgEAFgGAAQgFAAgFgGQgDgDgDAAQgDAAgFAGQgGAFgGAKQgFAJgFANIgKAaIgBAFg");
	this.shape_942.setTransform(459.3,156.7);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#F2F2F2").s().p("AgtAyIAThBQADgJAAgEIgBgDQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgEAAgFAGIgHAMIgLAAQAHgOAHgHQAHgIAHgDQAGgDAGAAQAJAAADAGQACAGAAAGQAAAKgGAVIAKgSIAKgOQAGgHAHgFQAGgFAHAAQAJAAADAGQADAFAAAFQAAAHgFAGQgEAFgGAAQgFAAgFgGQgDgDgDAAQgDAAgFAGQgGAFgGAKQgFAJgFANIgKAaIgBAFg");
	this.shape_943.setTransform(442.8,156.7);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#F2F2F2").s().p("AAQAtQgEgFAAgGIABgIIADgLIADgNQgMAUgMAOQgNAPgRAAQgIAAgFgFQgEgFAAgHQAAgGADgKIAMgmIADgKIgBgDQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgLAQIgLAAQAJgNAJgJQAKgKAOAAQAHAAAGAEQAFADAAAKQAAAGgBAEIgKAeQgDALAAAFQAAADACACQABACADAAQAFAAAJgIQAGgIAKgRQAJgSAKgbIAcAAIgWBHIgDAJIACADIACABQAEAAAEgGIAHgMIALAAQgEALgJALQgJALgQAAQgKAAgDgGg");
	this.shape_944.setTransform(430.1,156.9);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#F2F2F2").s().p("AgpAsQgLgIAAgOQAAgSALgQQAJgRASgKQAQgLAUAAQAQgBAHAGQAIAGgBAIQAAAFgCAGQgDAHgIAGQgIAHgPAFQgOAGgVACIgDAAIgBAIQAAAJAEADQAEAEAIAAQARABAQgUIANAAQgIALgPAMQgOALgUAAQgOgBgJgHgAADgkQgHAFgEAJQgFAHgDAIIgEAJQAYgDALgKQAMgJAAgLQAAgFgCgCQgDgDgFAAQgIgBgGAGg");
	this.shape_945.setTransform(417.9,156.9);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#F2F2F2").s().p("AgdBNQgGgFAAgGQAAgGAEgMIAehhIACgMQAAgEgDgCQgDgBgJAAIADgLIALAAIAPAAIANgCIAIAAIgoCFIgDAMIAAADIADABQADABAEgGQAGgFADgIIALAAQgGAMgJAKQgJALgOAAQgJAAgFgGg");
	this.shape_946.setTransform(409,153.8);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#F2F2F2").s().p("AgpAsQgLgIAAgOQAAgSALgQQAJgRASgKQAQgLAUAAQAQgBAHAGQAIAGgBAIQAAAFgCAGQgDAHgIAGQgIAHgPAFQgOAGgVACIgDAAIgBAIQAAAJAEADQAEAEAIAAQARABAQgUIANAAQgIALgPAMQgOALgUAAQgOgBgJgHgAADgkQgHAFgEAJQgFAHgDAIIgEAJQAYgDALgKQAMgJAAgLQAAgFgCgCQgDgDgFAAQgIgBgGAGg");
	this.shape_947.setTransform(393.1,156.9);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#F2F2F2").s().p("AgtAyIAThBQADgJAAgEIgBgDQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgEAAgFAGIgHAMIgLAAQAHgOAHgHQAHgIAHgDQAGgDAGAAQAJAAADAGQACAGAAAGQAAAKgGAVIAKgSIAKgOQAGgHAHgFQAGgFAHAAQAJAAADAGQADAFAAAFQAAAHgFAGQgEAFgGAAQgFAAgFgGQgDgDgDAAQgDAAgFAGQgGAFgGAKQgFAJgFANIgKAaIgBAFg");
	this.shape_948.setTransform(382.4,156.7);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#F2F2F2").s().p("AAAA9IAAgCIAAgCIgLANQgHAFgIAEQgIADgJABQgMAAgHgJQgHgHAAgNQAAgNAGgNQAFgNAJgMQAJgKAMgGQAMgHANABQAIAAAFADQAFAEAEAFIAOguIACgIQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAgBgBAAIgFgCIgJAAIADgLIASAAIAMgBIAKgBIAIAAIgqCFIgCAMQAAAEADAAQAEAAAFgEQAEgFAEgHIALAAQgCAFgFAHQgFAHgIAGQgIAFgKABQgTgBAAgVgAgUAAQgKAJgFAOQgGAPAAALQAAAIAEAEQAEADAFAAQAIAAAIgGQAHgGAFgIQAGgKADgJQAEgKAAgJQAAgHgEgFQgEgEgGAAQgKAAgJAKg");
	this.shape_949.setTransform(370.7,153.8);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#F2F2F2").s().p("AAMAuQgGgEABgHQgBgFADgKIAJgbQAEgLAAgEQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAAAAAQgGAAgKALQgIAKgKARQgIATgIAVIgcAAIAWhDIADgMIgBgEQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgEAAgEAGQgFAGgCAGIgKAAQAEgMAJgKQAJgKAPAAQAJAAAEAEQAFAFAAAGIgBAJIgEAMIgEAMQAPgWAMgOQAMgMAQAAQAJgBAFAGQADAFAAAGQAAAEgCALIgNAnIgCALIABACIACABQADAAAFgEQAGgFAEgIIAMAAIgJAOQgHAHgIAGQgIAFgLABQgJAAgEgFg");
	this.shape_950.setTransform(356.2,156.8);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#F2F2F2").s().p("AgpAsQgKgIAAgOQAAgSAKgQQAJgRASgKQAQgLAUAAQARgBAGAGQAIAGgBAIQAAAFgCAGQgEAHgHAGQgIAHgPAFQgOAGgVACIgDAAIgBAIQAAAJAEADQAFAEAIAAQAQABAQgUIANAAQgIALgPAMQgOALgUAAQgOgBgJgHgAADgkQgHAFgEAJQgFAHgDAIIgEAJQAXgDAMgKQAMgJAAgLQAAgFgCgCQgDgDgFAAQgIgBgGAGg");
	this.shape_951.setTransform(343.7,156.9);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#F2F2F2").s().p("AgcA9QgGgFAAgKQAAgGAEgMIAPgwIgWAAIADgLIAWAAIALgkIAbAAIgLAkIAXAAIgDALIgXAAIgRA5IgCAJQAAACACACQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAQAGAAAFgGIAJgPIALAAQgHAPgIAIQgIAIgHADQgHACgGABQgKAAgFgHg");
	this.shape_952.setTransform(334.5,155.3);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#F2F2F2").s().p("AgqBIQgJgIgBgPQABgSAJgRQALgPAQgLQARgLAUAAQARAAAGAGQAIAFAAAIQAAAFgDAFQgEAHgIAHQgHAHgOAFQgPAGgVACIgDAAIgBAIQAAAKAFADQAEAEAHAAQARAAAQgTIAMAAQgGALgPALQgQALgTAAQgNAAgLgHgAACgIQgFAFgFAHQgFAHgDAJIgDAKQAXgEAMgKQAMgJgBgLQAAgEgCgDQgDgDgEAAQgJAAgHAGgAABgmIANgoIAeAAIgiAog");
	this.shape_953.setTransform(324.5,154.1);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#F2F2F2").s().p("AgWAZQATgDAHgJQAIgJAAgFIgBgDIgDAAQgFAAgEgEQgFgFAAgHQAAgHAFgEQADgEAGAAQAJAAAFAHQAEAHAAAJQAAAKgFAKQgGALgMAHQgLAIgRACg");
	this.shape_954.setTransform(317.4,149.1);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#F2F2F2").s().p("AAAA9IAAgCIAAgCIgLANQgHAFgIAEQgIADgJABQgMAAgHgJQgHgHAAgNQAAgNAGgNQAFgNAJgMQAJgKAMgGQAMgHANABQAIAAAFADQAFAEAEAFIAOguIACgIQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIgFgCIgJAAIADgLIASAAIAMgBIAKgBIAIAAIgqCFIgCAMQAAAEADAAQAEAAAFgEQAEgFAEgHIALAAQgCAFgFAHQgFAHgIAGQgIAFgKABQgTgBAAgVgAgUAAQgKAJgFAOQgGAPAAALQAAAIAEAEQAEADAFAAQAIAAAIgGQAHgGAFgIQAGgKADgJQAEgKAAgJQAAgHgEgFQgEgEgGAAQgKAAgJAKg");
	this.shape_955.setTransform(306,153.8);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#F2F2F2").s().p("AgqArQgJgIAAgJQAAgFAEgEQADgEAGAAQAMAAACAPQAAAHAEAEQACADAKAAQAHAAAEgDQAGgEAAgHQAAgDgCgDQgCgDgFgEIgPgPIgKgLQgCgFAAgGQgBgGAEgGQADgHALgFQAKgEAQAAQALAAAHACQAHABAEADQAEAEACADQABADAAAEQAAAEgDAEQgEADgFAAQgEABgCgCQgDgBgBgEIgDgJIgEgFQgDgCgHAAQgFAAgGADQgDADAAAFQAAAEABADIAEAFIAJAIQAMAKAFAFQAFAGABAKQgBAIgEAHQgEAGgLAFQgKAEgPABQgXgBgKgIg");
	this.shape_956.setTransform(287.1,156.9);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#F2F2F2").s().p("AgqBIQgKgIABgPQgBgSAKgRQALgPAQgLQAQgLAVAAQAQAAAIAGQAGAFABAIQgBAFgDAFQgCAHgJAHQgHAHgOAFQgPAGgVACIgDAAIgBAIQAAAKAFADQADAEAJAAQAQAAAQgTIAMAAQgHALgOALQgQALgSAAQgOAAgLgHgAACgIQgFAFgFAHQgFAHgDAJIgEAKQAYgEALgKQAMgJABgLQgBgEgCgDQgDgDgEAAQgJAAgHAGgAACgmIALgoIAgAAIgjAog");
	this.shape_957.setTransform(276.1,154.1);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#F2F2F2").s().p("AAMAuQgFgEgBgHQAAgFAEgKIAIgbQADgLAAgEQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBAAgBAAQgGAAgIALQgJAKgJARQgKATgGAVIgcAAIAUhDIADgMIAAgEQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgFAAgEAGQgEAGgDAGIgKAAQAFgMAJgKQAKgKANAAQAKAAAFAEQAEAFAAAGIgCAJIgCAMIgFAMQAPgWAMgOQANgMAPAAQAJgBAEAGQAEAFAAAGQAAAEgDALIgLAnIgDALIABACIACABQAEAAAFgEQAEgFAFgIIALAAIgJAOQgFAHgJAGQgJAFgKABQgIAAgFgFg");
	this.shape_958.setTransform(263.4,156.8);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#F2F2F2").s().p("AA3AtQgFgEAAgHQAAgEADgIIAJgdQADgKAAgDQAAgEgCgDQgDgCgEAAQgKAAgLALQgLAKgKARQgKASgEAQIgCAGIgbAAIASg6IACgLQAAgEgCgDQgCgCgFAAQgIAAgIAHQgJAGgIAMQgHAKgHANQgGANgEANIgBAEIgcAAIAUhCIADgOIgBgDIgCgBIgFABIgFAGIgHALIgKAAQAFgNAJgJQAKgKAOAAQAFAAAFACQAEABADAEQACAEAAAFQAAAHgDAOIgEALQAHgLAHgJQAIgJAIgHQAIgGAHgDQAIgDAHAAQAJAAAGAEQAGAFAAAJQAAAGgEANIgDAKQAHgMAJgLQAJgKAMgHQALgIANABQAHAAAFADQAFADACAEQACAFAAAEIAAAGIgDALIgMAjIgCAJQAAAEAEAAQADAAAFgDQAFgEAGgKIALAAQgSAggZABQgJAAgFgGg");
	this.shape_959.setTransform(245,156.8);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#F2F2F2").s().p("AAFAsQgEgIAAgKQgIAMgKAGQgJAIgLAAQgHgBgEgDQgFgEgDgHQgBgGAAgHQgBgQAJgRQAHgSAOgLQAOgMAPAAQAIAAAEADQAFADABADIADAIIAEgOIAaAAIgWBGIgDAKIACACIACABQAIAAAJgQIALAAIgIANQgEAFgFAEQgFAFgFACQgGACgFABQgNgBgDgHgAgLgdQgIAKgGAOQgEANAAAKQAAAOAIAAQAGAAAHgGQAGgFAFgJQAGgKADgKQADgJAAgJQAAgFgCgFQgCgEgGAAQgIAAgIALg");
	this.shape_960.setTransform(227.5,156.9);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#F2F2F2").s().p("AAAA9IAAgCIAAgCIgLANQgHAFgIAEQgIADgJABQgMAAgHgJQgHgHAAgNQAAgNAGgNQAFgNAJgMQAJgKAMgGQAMgHANABQAIAAAFADQAFAEAEAFIAOguIACgIQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIgFgCIgJAAIADgLIASAAIAMgBIAKgBIAIAAIgqCFIgCAMQAAAEADAAQAEAAAFgEQAEgFAEgHIALAAQgCAFgFAHQgFAHgIAGQgIAFgKABQgTgBAAgVgAgUAAQgKAJgFAOQgGAPAAALQAAAIAEAEQAEADAFAAQAIAAAIgGQAHgGAFgIQAGgKADgJQAEgKAAgJQAAgHgEgFQgEgEgGAAQgKAAgJAKg");
	this.shape_961.setTransform(214.7,153.8);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#F2F2F2").s().p("AgqArQgJgIAAgJQAAgFAEgEQADgEAGAAQAMAAACAPQAAAHAEAEQACADAKAAQAHAAAEgDQAGgEAAgHQAAgDgCgDQgCgDgFgEIgPgPIgKgLQgCgFAAgGQgBgGAEgGQADgHALgFQAKgEAQAAQALAAAHACQAHABAEADQAEAEACADQABADAAAEQAAAEgDAEQgEADgFAAQgEABgCgCQgDgBgBgEIgDgJIgEgFQgDgCgHAAQgFAAgGADQgDADAAAFQAAAEABADIAEAFIAJAIQAMAKAFAFQAFAGABAKQgBAIgEAHQgEAGgLAFQgKAEgPABQgXgBgKgIg");
	this.shape_962.setTransform(195.7,156.9);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#F2F2F2").s().p("AgqAsQgKgIABgOQgBgSAKgQQALgRAQgKQAQgLAVAAQAQgBAIAGQAGAGABAIQgBAFgDAGQgCAHgIAGQgIAHgOAFQgPAGgVACIgDAAIgBAIQAAAJAFADQADAEAJAAQAQABAQgUIANAAQgIALgOAMQgQALgSAAQgOgBgLgHgAACgkQgFAFgFAJQgFAHgDAIIgEAJQAYgDALgKQAMgJABgLQgBgFgCgCQgDgDgEAAQgJgBgHAGg");
	this.shape_963.setTransform(184.7,156.9);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#F2F2F2").s().p("AgdBNQgGgFAAgGQAAgGAEgMIAehhIACgMQAAgEgDgCQgDgBgJAAIADgLIALAAIAPAAIANgCIAIAAIgoCFIgDAMIAAADIADABQADABAEgGQAGgFADgIIALAAQgGAMgJAKQgJALgOAAQgJAAgFgGg");
	this.shape_964.setTransform(175.9,153.8);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#F2F2F2").s().p("AgpAsQgLgHABgQQgBgSALgPQAKgRAQgLQAQgKAVgBQAQABAIAFQAGAGABAIQgBAFgDAGQgCAHgJAGQgHAHgOAFQgPAFgVACIgDAAIgBAJQAAAJAFAEQADADAJAAQAQAAAQgTIAMAAQgHAMgOAKQgQAMgSAAQgOAAgKgIgAADgkQgGAGgFAHQgFAIgDAIIgEAJQAYgDALgJQAMgKABgMQgBgDgCgDQgDgEgEAAQgJABgGAFg");
	this.shape_965.setTransform(697.7,127.3);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#F2F2F2").s().p("AAKBNQgFgEAAgGIAAgGIADgIIAJgeQACgJABgFIgBgEIgCgDIgFgBQgJAAgKAOQgMAPgFAMIgLAeIgCAIIgcAAIAoiCIACgKQAAgFgCgBQgEgBgGAAIgEAAIAEgLQAcgBAKgCIAIAAIgdBjIAOgSQAFgHAKgFQAJgHAMAAQAIABAGAEQAGAEgBAHQABAEgFAOIgLAmIgDAJIABADIADABQAGAAALgRIAMAAQgIAOgKAJQgLAJgNAAQgJAAgFgEg");
	this.shape_966.setTransform(685.1,124.1);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#F2F2F2").s().p("AgqAsQgIgJAAgOQAAgQAJgQQAJgRARgLQAQgMAUAAQAHAAAGACQAFADAEADQAEAEACAEQACAFAAAEQAAAHgEAFQgEAFgHAAQgFAAgDgDQgDgCAAgFIABgGIABgGQAAgGgEgBQgEgDgDAAQgKAAgIAMQgJALgFAPQgGAOAAAKQAAALAGADQAFACAFAAQAKAAAIgFQAJgGAGgIIANAAQgJANgPALQgPAJgRABQgRgBgJgHg");
	this.shape_967.setTransform(672.9,127.3);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#F2F2F2").s().p("AgpBIQgLgHAAgPQAAgSALgQQAJgQASgLQAQgLAUAAQAQAAAHAFQAIAGgBAJQAAAEgCAFQgDAHgIAHQgIAHgPAGQgOAFgVACIgDAAIgBAJQAAAIAEAEQAEAEAIAAQARAAAQgTIANAAQgIALgPALQgOALgUAAQgOAAgJgIgAADgIQgHAGgEAHQgFAIgDAIIgDAKQAXgFALgJQAMgKAAgKQAAgEgCgDQgDgDgFAAQgIAAgGAFgAApgmIgSgZIgkAZIgHAAIAhgpIAcAAIAGApg");
	this.shape_968.setTransform(661.8,124.5);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#F2F2F2").s().p("AhOBOIADgLIAEAAIAMgBQAEgBACgDIAEgMIAfhjIABgJIgBgDQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAAAAAQgDAAgFAFQgEAEgFALIgLAAIAHgPQAEgGAIgGQAIgHALAAQASAAAAAUQATgUATAAQANAAAHAGQAIAGACAIQADAIAAAHQAAANgEAMQgFAMgJAJQgIAJgMAGQgLAGgNAAQgLAAgGgDQgFgEgFgFIgMApIgCAHQAAAEAEABIANABIAGAAIgDALgAAUg4QgHAHgGALIgGAOIgDANIgBAKQAAAGADAGQAFAFAIAAQALAAAIgKQAJgKAFgPQAEgOAAgMQAAgHgDgGQgEgFgHAAQgIAAgIAHg");
	this.shape_969.setTransform(647.3,129.9);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#F2F2F2").s().p("AA3AuQgFgFAAgGQAAgFADgJIAJgcQADgKAAgDQAAgEgCgDQgDgCgEAAQgKAAgLALQgLAKgKARQgKARgEASIgCAFIgbAAIASg6IACgLQAAgEgCgCQgCgDgFAAQgIAAgIAGQgJAIgIAKQgHALgHANQgGANgEANIgBAEIgcAAIAUhCIADgOIgBgDIgCgBIgFABIgFAGIgHAMIgKAAQAFgNAJgLQAKgJAOgBQAFAAAFACQAEACADAEQACAEAAAFQAAAHgDANIgEAMQAHgMAHgJQAIgIAIgHQAIgGAHgDQAIgEAHAAQAJAAAGAGQAGAEAAAJQAAAGgEAMIgDALQAHgMAJgKQAJgLAMgHQALgIANAAQAHAAAFAEQAFADACAEQACAEAAAEIAAAHIgDAKIgMAkIgCAJQAAAEAEAAQADAAAFgEQAFgDAGgKIALAAQgSAhgZgBQgJAAgFgEg");
	this.shape_970.setTransform(630.9,127.2);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#F2F2F2").s().p("AgqAsQgKgHABgQQgBgSAKgPQALgRARgLQAPgKAVgBQAQABAIAFQAGAGABAIQgBAFgDAGQgCAHgJAGQgHAHgOAFQgPAFgVACIgDAAIgBAJQAAAJAFAEQADADAJAAQAQAAAQgTIAMAAQgHAMgOAKQgQAMgSAAQgOAAgLgIgAADgkQgHAGgEAHQgFAIgDAIIgEAJQAYgDALgJQAMgKABgMQgBgDgCgDQgDgEgEAAQgJABgGAFg");
	this.shape_971.setTransform(614,127.3);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#F2F2F2").s().p("AgWAZQATgDAHgJQAIgJAAgFIgBgDIgDAAQgFAAgEgEQgFgFAAgHQAAgHAFgEQADgEAGAAQAJAAAFAHQAEAHAAAJQAAAKgFAKQgGALgMAHQgLAIgRACg");
	this.shape_972.setTransform(606.9,119.5);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#F2F2F2").s().p("AAMAuQgGgEAAgGQAAgGADgKIAJgbQADgLABgFQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQgFAAgKALQgIAKgKASQgIARgHAWIgdAAIAWhDIACgNIAAgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgEAAgEAGQgFAFgDAIIgJAAQAEgNAJgLQAKgJAOgBQAJAAAFAGQAEAEAAAGIgBAJIgDAMIgFAMQAPgXAMgMQANgNAPgBQAJABAFAFQADAFAAAGQAAAEgCALIgMAnIgDALIABACIACABQADAAAGgFQAFgEAEgHIAMAAIgJANQgHAHgIAGQgJAGgKgBQgIAAgFgEg");
	this.shape_973.setTransform(594.8,127.2);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#F2F2F2").s().p("AALAuQgEgEgBgGQABgGADgKIAIgbQADgLAAgFQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQgGAAgIALQgJAKgJASQgKARgGAWIgcAAIAUhDIADgNIAAgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQgFAAgEAGQgEAFgDAIIgKAAQAFgNAJgLQAJgJAOgBQAKAAAFAGQAEAEAAAGIgCAJIgCAMIgFAMQAPgXAMgMQANgNAPgBQAJABAEAFQAEAFABAGQgBAEgDALIgLAnIgDALIABACIACABQAEAAAFgFQAEgEAFgHIALAAIgJANQgFAHgJAGQgJAGgJgBQgKAAgFgEg");
	this.shape_974.setTransform(574.9,127.2);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#F2F2F2").s().p("AgqAsQgKgHAAgQQAAgSAKgPQALgRAQgLQAQgKAVgBQAQABAIAFQAGAGABAIQAAAFgEAGQgCAHgJAGQgHAHgOAFQgPAFgVACIgDAAIgBAJQAAAJAFAEQADADAIAAQARAAAQgTIAMAAQgGAMgPAKQgQAMgSAAQgOAAgLgIgAACgkQgFAGgFAHQgFAIgDAIIgDAJQAWgDANgJQALgKABgMQgBgDgCgDQgDgEgEAAQgJABgHAFg");
	this.shape_975.setTransform(562.4,127.3);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#F2F2F2").s().p("AgYBNQgEgEgBgHQAAgHAFgMIAPgpIACgHIgBgCIgCgBQgEAAgFAFIgHALIgKAAQAGgPAMgIQAKgJALAAQAIAAAEAFQAGADgBAHQAAAFgCAHIgSAxQgBAFAAAEIABACIACABQADAAAEgDQAEgEAFgKIALAAQgFAKgKAKQgJAMgOAAQgKgBgFgFgAALg4QgEgFAAgGQAAgFAEgFQAFgFAGAAQAEAAAEADQAEABACAEQACADAAAEQgBAGgEAFQgEAFgHAAQgGAAgFgFg");
	this.shape_976.setTransform(553.3,124.2);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#F2F2F2").s().p("AgtAyIAThBQADgJAAgEIgBgDQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgEAAgFAGIgHAMIgLAAQAHgOAHgHQAHgIAHgDQAGgDAGAAQAJAAADAGQACAGAAAGQAAAKgGAVIAKgSIAKgOQAGgHAHgFQAGgFAHAAQAJAAADAGQADAFAAAFQAAAHgFAGQgEAFgGAAQgFAAgFgGQgDgDgDAAQgDAAgFAGQgGAFgGAKQgFAJgFANIgKAaIgBAFg");
	this.shape_977.setTransform(544.1,127.1);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#F2F2F2").s().p("AgqArQgJgJAAgHQAAgGADgEQAEgEAGAAQAMAAACAPQAAAHADAEQAEAEAJAAQAHAAAEgFQAFgDABgHQAAgDgDgDQgBgDgFgEIgPgPIgJgKQgDgGAAgGQAAgGADgGQAEgHAKgEQAKgGAQAAQAKAAAIACQAHADAEACQAEADABAEQACADAAADQAAAGgDADQgEADgFABQgEgBgDgBQgCgCgBgDIgDgJIgEgGQgDgCgHAAQgGAAgFAEQgDADgBAFQABADABADIAEAHIAJAIQAMAJAFAFQAGAGAAAKQAAAIgFAHQgFAGgKAFQgKAFgPAAQgXAAgKgJg");
	this.shape_978.setTransform(527.2,127.3);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#F2F2F2").s().p("AAQAtQgEgFAAgGIABgIIADgLIADgNQgMAUgMAOQgNAPgRAAQgIAAgEgFQgFgFAAgHQAAgGAEgKIALgmIACgKIAAgDQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgIAAgKAQIgKAAQAHgNAKgJQAKgKAOAAQAHAAAGAEQAGADgBAKQABAGgCAEIgKAeQgDALAAAFQAAADACACQABACADAAQAFAAAJgIQAHgIAJgRQAKgSAJgbIAcAAIgWBHIgDAJIACADIACABQAEAAAFgGIAGgMIAMAAQgFALgJALQgKALgPAAQgJAAgEgGg");
	this.shape_979.setTransform(514.4,127.4);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#F2F2F2").s().p("AgdBNQgGgEAAgHQAAgFAEgNIAehgIACgNQAAgEgDgCQgDgBgJAAIADgLIALAAIAPAAIANgDIAIAAIgoCFIgDANIAAADIADABQADAAAEgFQAGgFADgIIALAAQgGALgJALQgJALgOAAQgJgBgFgFg");
	this.shape_980.setTransform(504.6,124.2);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#F2F2F2").s().p("AhPBQIADgLQAIgBAEgEQAEgDACgKIAfhiIACgJQAAgIgFgBQgFgDgHAAIADgLIBAAAQAMABAIABQAHACAIAEQAUAMAAAVQAAAIgCAGQgDAIgFAGQgGAHgKADQgJAFgPACIgcABIgOAAIgMAnIgCAKQAAAHAEACQAFACAFABIAEAAIgEALgAgJgDIANAAQATAAAJgHIAIgJQADgFACgHQADgGAAgHQAAgPgIgDQgIgFgLAAIgLAAg");
	this.shape_981.setTransform(493,124.2);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#F2F2F2").s().p("AgKALQgEgFAAgGQAAgDACgEQACgDADgCQAEgCADAAQAGAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_982.setTransform(474.7,130.9);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#F2F2F2").s().p("AgpArQgKgJAAgHQAAgGADgEQAEgEAGAAQAMAAACAPQAAAHADAEQADAEAKAAQAIAAAEgFQAEgDABgHQgBgDgCgDQgBgDgFgEIgPgPIgJgKQgDgGgBgGQAAgGAEgGQAEgHAKgEQAKgGAQAAQAKAAAIACQAHADAEACQAEADABAEQACADAAADQAAAGgDADQgEADgFABQgEgBgDgBQgCgCgBgDIgDgJIgEgGQgDgCgHAAQgFAAgFAEQgFADAAAFQAAADACADIAEAHIAJAIQAMAJAFAFQAGAGAAAKQAAAIgFAHQgFAGgKAFQgKAFgQAAQgWAAgJgJg");
	this.shape_983.setTransform(466.8,127.3);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#F2F2F2").s().p("AgpAsQgKgHAAgQQAAgSAKgPQAJgRASgLQAQgKAUgBQARABAGAFQAIAGgBAIQAAAFgCAGQgEAHgHAGQgIAHgPAFQgOAFgVACIgDAAIgBAJQAAAJAEAEQAFADAIAAQAQAAAQgTIANAAQgIAMgPAKQgOAMgUAAQgOAAgJgIgAADgkQgHAGgEAHQgFAIgDAIIgEAJQAXgDAMgJQAMgKAAgMQAAgDgCgDQgDgEgFAAQgIABgGAFg");
	this.shape_984.setTransform(455.8,127.3);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#F2F2F2").s().p("AgtAyIAThBQADgJAAgEIgBgDQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgEAAgFAGIgHAMIgLAAQAHgOAHgHQAHgIAHgDQAGgDAGAAQAJAAADAGQACAGAAAGQAAAKgGAVIAKgSIAKgOQAGgHAHgFQAGgFAHAAQAJAAADAGQADAFAAAFQAAAHgFAGQgEAFgGAAQgFAAgFgGQgDgDgDAAQgDAAgFAGQgGAFgGAKQgFAJgFANIgKAaIgBAFg");
	this.shape_985.setTransform(445.1,127.1);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#F2F2F2").s().p("AAQAtQgEgFAAgGIABgIIADgLIADgNQgMAUgMAOQgNAPgRAAQgIAAgFgFQgEgFAAgHQAAgGADgKIAMgmIADgKIgBgDQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgLAQIgLAAQAJgNAJgJQAKgKAOAAQAHAAAGAEQAFADAAAKQAAAGgBAEIgKAeQgDALAAAFQAAADACACQABACADAAQAFAAAJgIQAGgIAKgRQAJgSAKgbIAcAAIgWBHIgDAJIACADIACABQAEAAAEgGIAHgMIALAAQgEALgJALQgJALgQAAQgKAAgDgGg");
	this.shape_986.setTransform(432.3,127.4);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#F2F2F2").s().p("AgqArQgJgJAAgHQAAgGADgEQAEgEAGAAQAMAAACAPQABAHACAEQAEAEAJAAQAHAAAEgFQAGgDAAgHQAAgDgCgDQgCgDgFgEIgPgPIgJgKQgDgGAAgGQgBgGAEgGQADgHALgEQAKgGAQAAQALAAAHACQAHADAEACQAEADABAEQACADAAADQAAAGgDADQgDADgGABQgEgBgCgBQgDgCgBgDIgDgJIgEgGQgDgCgHAAQgGAAgFAEQgDADAAAFQAAADABADIAEAHIAJAIQAMAJAFAFQAFAGABAKQgBAIgEAHQgFAGgKAFQgKAFgPAAQgXAAgKgJg");
	this.shape_987.setTransform(420.2,127.3);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#F2F2F2").s().p("AgqArQgJgJAAgHQAAgGAEgEQADgEAGAAQAMAAACAPQABAHADAEQACAEAJAAQAIAAAFgFQAEgDAAgHQAAgDgBgDQgCgDgFgEIgPgPIgKgKQgDgGABgGQAAgGADgGQAEgHAKgEQAKgGAQAAQALAAAHACQAHADAEACQAEADACAEQABADAAADQAAAGgDADQgDADgGABQgEgBgCgBQgDgCgBgDIgEgJIgDgGQgDgCgGAAQgHAAgFAEQgDADAAAFQAAADABADIAFAHIAJAIQALAJAFAFQAFAGAAAKQAAAIgEAHQgEAGgLAFQgKAFgQAAQgXAAgJgJg");
	this.shape_988.setTransform(409.2,127.3);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#F2F2F2").s().p("AgqAsQgKgHAAgQQAAgSAKgPQALgRAQgLQAQgKAVgBQAQABAIAFQAHAGAAAIQAAAFgEAGQgCAHgJAGQgHAHgOAFQgPAFgVACIgDAAIgBAJQAAAJAFAEQADADAIAAQARAAAQgTIAMAAQgGAMgPAKQgQAMgSAAQgOAAgLgIgAACgkQgFAGgFAHQgFAIgDAIIgDAJQAWgDANgJQAMgKgBgMQAAgDgCgDQgDgEgEAAQgJABgHAFg");
	this.shape_989.setTransform(398.2,127.3);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#F2F2F2").s().p("AgdBNQgGgEAAgHQAAgFAEgNIAehgIACgNQAAgEgDgCQgDgBgJAAIADgLIALAAIAPAAIANgDIAIAAIgoCFIgDANIAAADIADABQADAAAEgFQAGgFADgIIALAAQgGALgJALQgJALgOAAQgJgBgFgFg");
	this.shape_990.setTransform(389.4,124.2);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#F2F2F2").s().p("AgsBJQgKgKAAgNQAAgHAEgPIAahTIABgGQAAgEgEgCIgKgBIgDAAIADgLQAcAAAMgDIAIAAIgYBPIAGgEIAHgGIAKgFQAGgCAIAAQAIAAAHAFQAIAEAEAHQAEAGAAAMQAAAMgFAMQgGAMgKAKQgKALgNAFQgLAGgPABQgTAAgKgKgAgUAXIgHATIgCAOQAAAHAEAFQAFAFAHAAQANAAAIgLQAJgJAFgOQAEgPAAgKQAAgJgEgEQgEgGgHABQgTAAgMAbg");
	this.shape_991.setTransform(378.6,124.2);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#F2F2F2").s().p("AgqArQgJgJAAgHQAAgGAEgEQADgEAGAAQAMAAACAPQAAAHAEAEQACAEAJAAQAJAAADgFQAGgDAAgHQgBgDgBgDQgCgDgFgEIgPgPIgKgKQgCgGAAgGQAAgGADgGQAEgHAKgEQAKgGAQAAQALAAAHACQAHADAEACQAEADACAEQABADAAADQAAAGgDADQgEADgFABQgEgBgCgBQgDgCgBgDIgEgJIgDgGQgDgCgGAAQgGAAgGAEQgDADAAAFQAAADABADIAFAHIAJAIQALAJAFAFQAFAGAAAKQAAAIgEAHQgEAGgLAFQgKAFgPAAQgYAAgJgJg");
	this.shape_992.setTransform(360.5,127.3);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#F2F2F2").s().p("AgqAsQgKgHAAgQQAAgSAKgPQALgRAQgLQAQgKAVgBQAQABAIAFQAGAGABAIQAAAFgEAGQgCAHgJAGQgHAHgOAFQgPAFgVACIgDAAIgBAJQAAAJAFAEQADADAIAAQARAAAQgTIAMAAQgGAMgPAKQgQAMgSAAQgOAAgLgIgAACgkQgFAGgFAHQgFAIgDAIIgDAJQAWgDANgJQALgKABgMQgBgDgCgDQgDgEgEAAQgJABgHAFg");
	this.shape_993.setTransform(349.5,127.3);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#F2F2F2").s().p("AgpArQgKgJAAgHQAAgGADgEQAEgEAGAAQAMAAACAPQABAHACAEQAEAEAIAAQAIAAAFgFQAEgDAAgHQAAgDgCgDQgBgDgFgEIgPgPIgJgKQgEgGAAgGQABgGADgGQADgHALgEQAKgGAQAAQAKAAAIACQAHADAEACQAEADACAEQABADAAADQAAAGgDADQgDADgGABQgEgBgDgBQgCgCgBgDIgEgJIgDgGQgDgCgGAAQgHAAgEAEQgFADAAAFQAAADACADIAFAHIAJAIQALAJAFAFQAGAGgBAKQABAIgFAHQgFAGgKAFQgKAFgQAAQgWAAgJgJg");
	this.shape_994.setTransform(338.3,127.3);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#F2F2F2").s().p("AAEBHQgDgHAAgLQgIAMgJAHQgKAHgLAAQgHAAgFgEQgEgDgCgHQgDgGAAgIQABgQAHgSQAJgRAOgLQAOgMAPAAQAHAAAEADQAEADACAEIACAIIAFgPIAaAAIgWBGIgCAKIABACIACABQAHAAAJgPIALAAIgHAMQgEAGgGAEQgEAFgGACQgFACgGAAQgMAAgEgIgAgLgCQgJAJgFAPQgEAOgBAJQAAAOAJABQAGgBAHgFQAGgGAFgJQAFgKAEgKQADgKAAgJQAAgEgCgEQgDgEgFAAQgIAAgIAKgAAWgmIgigoIAeAAIAMAog");
	this.shape_995.setTransform(320.7,124.6);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#F2F2F2").s().p("AgpBHQgLgHABgPQgBgSALgQQAKgQAQgLQAQgLAVAAQAQAAAIAFQAGAGABAJQgBAEgDAFQgCAHgJAHQgHAHgOAGQgPAFgVACIgDAAIgBAJQAAAIAFAEQADAEAJAAQAQAAAQgTIAMAAQgHALgOALQgQALgSAAQgOAAgKgIgAADgJQgGAGgFAHQgFAIgDAIIgEAKQAYgFALgJQAMgKABgKQgBgEgCgDQgDgDgEAAQgJAAgGAFgAACgmIALgoIAgAAIgjAog");
	this.shape_996.setTransform(302.6,124.6);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#F2F2F2").s().p("AgsBJQgKgKAAgNQAAgHAEgPIAahTIABgGQAAgEgEgCIgKgBIgDAAIADgLQAcAAAMgDIAIAAIgYBPIAGgEIAHgGIAKgFQAGgCAIAAQAIAAAHAFQAIAEAEAHQAEAGAAAMQAAAMgFAMQgGAMgKAKQgKALgNAFQgLAGgPABQgTAAgKgKgAgUAXIgHATIgCAOQAAAHAEAFQAFAFAHAAQANAAAIgLQAJgJAFgOQAEgPAAgKQAAgJgEgEQgEgGgHABQgTAAgMAbg");
	this.shape_997.setTransform(290.5,124.2);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#F2F2F2").s().p("AA3AuQgFgFAAgGQAAgFADgJIAJgcQADgKAAgDQAAgEgCgDQgDgCgEAAQgKAAgLALQgLAKgKARQgKARgEASIgCAFIgbAAIASg6IACgLQAAgEgCgCQgCgDgFAAQgIAAgIAGQgJAIgIAKQgHALgHANQgGANgEANIgBAEIgcAAIAUhCIADgOIgBgDIgCgBIgFABIgFAGIgHAMIgKAAQAFgNAJgLQAKgJAOgBQAFAAAFACQAEACADAEQACAEAAAFQAAAHgDANIgEAMQAHgMAHgJQAIgIAIgHQAIgGAHgDQAIgEAHAAQAJAAAGAGQAGAEAAAJQAAAGgEAMIgDALQAHgMAJgKQAJgLAMgHQALgIANAAQAHAAAFAEQAFADACAEQACAEAAAEIAAAHIgDAKIgMAkIgCAJQAAAEAEAAQADAAAFgEQAFgDAGgKIALAAQgSAhgZgBQgJAAgFgEg");
	this.shape_998.setTransform(272.5,127.2);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#F2F2F2").s().p("AggAuQgLgFgFgKQgGgKAAgMQAAgOAJgOQAIgPAPgIQAPgJARAAQAOAAAKAHQALAFAFAKQAFAJAAALQAAALgEAKQgFAMgJAJQgIAIgMAFQgMAFgNABQgOAAgKgGgAgFgiQgHAGgFALQgEAJgDAJQgCAKAAAHQAAALAEAGQAFAHAIAAQAJAAAHgHQAHgHAFgJQAEgKACgJQADgKAAgHQAAgLgFgGQgFgGgJgBQgIAAgGAHg");
	this.shape_999.setTransform(254.6,127.3);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#F2F2F2").s().p("AgqAsQgIgJAAgOQAAgQAJgQQAJgRARgLQAQgMAUAAQAHAAAGACQAFADAEADQAEAEACAEQACAFAAAEQAAAHgEAFQgEAFgHAAQgFAAgDgDQgDgCAAgFIABgGIABgGQAAgGgEgBQgEgDgDAAQgKAAgIAMQgJALgFAPQgGAOAAAKQAAALAGADQAFACAFAAQAKAAAIgFQAJgGAGgIIANAAQgJANgPALQgPAJgRABQgRgBgJgHg");
	this.shape_1000.setTransform(243.1,127.3);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#F2F2F2").s().p("AgqAsQgIgJAAgOQAAgQAJgQQAJgRARgLQAQgMAUAAQAHAAAGACQAFADAEADQAEAEACAEQACAFAAAEQAAAHgEAFQgEAFgHAAQgFAAgDgDQgDgCAAgFIABgGIABgGQAAgGgEgBQgEgDgDAAQgKAAgIAMQgJALgFAPQgGAOAAAKQAAALAGADQAFACAFAAQAKAAAIgFQAJgGAGgIIANAAQgJANgPALQgPAJgRABQgRgBgJgHg");
	this.shape_1001.setTransform(232.2,127.3);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#F2F2F2").s().p("AAQAtQgEgFAAgGIABgIIADgLIAEgNQgNAUgMAOQgOAPgQAAQgIAAgFgFQgEgFAAgHQAAgGADgKIAMgmIADgKIgBgDQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgGAAgLAQIgLAAQAJgNAJgJQAKgKAPAAQAGAAAGAEQAFADABAKQgBAGgBAEIgKAeQgDALAAAFQAAADABACQACACADAAQAGAAAHgIQAIgIAJgRQAJgSAKgbIAbAAIgVBHIgCAJIABADIACABQAFAAADgGIAIgMIAKAAQgEALgJALQgKALgOAAQgLAAgDgGg");
	this.shape_1002.setTransform(219.3,127.4);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#F2F2F2").s().p("AgpArQgKgJAAgHQAAgGADgEQAEgEAGAAQAMAAACAPQAAAHADAEQADAEAKAAQAIAAADgFQAFgDABgHQgBgDgCgDQgBgDgFgEIgPgPIgJgKQgDgGgBgGQAAgGAEgGQAEgHAKgEQAKgGAQAAQAKAAAIACQAHADAEACQAEADABAEQACADAAADQAAAGgDADQgEADgFABQgEgBgDgBQgCgCgBgDIgDgJIgEgGQgDgCgHAAQgFAAgFAEQgEADgBAFQAAADACADIAEAHIAJAIQAMAJAFAFQAGAGAAAKQAAAIgFAHQgFAGgKAFQgKAFgQAAQgWAAgJgJg");
	this.shape_1003.setTransform(207.1,127.3);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#F2F2F2").s().p("AAFAsQgEgHAAgLQgIALgKAIQgJAGgLABQgHAAgEgFQgFgDgCgHQgCgGAAgHQAAgRAHgQQAJgSAOgLQAOgMAOgBQAIAAAEAEQAFADABADIACAIIAFgOIAaAAIgWBGIgDAKIACACIACABQAIAAAIgQIAMAAIgIANQgEAFgFAFQgGAEgEACQgGADgGAAQgMAAgDgIgAgLgdQgIAJgGAPQgEANAAAKQgBAOAJAAQAHAAAGgFQAGgGAFgKQAFgKAEgJQADgKAAgIQAAgGgCgDQgCgFgGAAQgIAAgIALg");
	this.shape_1004.setTransform(189.5,127.3);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#F2F2F2").s().p("AggAuQgLgFgFgKQgGgKAAgMQAAgOAJgOQAIgPAPgIQAPgJARAAQAOAAAKAHQALAFAFAKQAFAJAAALQAAALgEAKQgFAMgJAJQgIAIgMAFQgMAFgNABQgOAAgKgGgAgFgiQgHAGgFALQgEAJgDAJQgCAKAAAHQAAALAEAGQAFAHAIAAQAJAAAHgHQAHgHAFgJQAEgKACgJQADgKAAgHQAAgLgFgGQgFgGgJgBQgIAAgGAHg");
	this.shape_1005.setTransform(170.4,127.3);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#F2F2F2").s().p("AAAA8IAAgBIAAgBIgLALQgHAGgIAEQgIAEgJAAQgMgBgHgHQgHgJAAgMQAAgNAGgNQAFgNAJgLQAJgKAMgHQAMgGANgBQAIABAFADQAFAEAEAFIAOguIACgIQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIgFgCIgJAAIADgLIASAAIAMgBIAKgCIAIAAIgqCGIgCAMQAAAEADAAQAEAAAFgEQAEgFAEgHIALAAQgCAFgFAHQgFAIgIAFQgIAGgKAAQgTAAAAgXgAgUAAQgKAKgFANQgGAPAAALQAAAIAEADQAEAEAFAAQAIAAAIgFQAHgGAFgKQAGgIADgLQAEgKAAgIQAAgHgEgEQgEgFgGAAQgKAAgJAKg");
	this.shape_1006.setTransform(158,124.2);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#F2F2F2").s().p("AgqAsQgJgHgBgQQABgSAJgPQALgRAQgLQARgKAUgBQARABAGAFQAIAGAAAIQAAAFgDAGQgEAHgIAGQgHAHgOAFQgPAFgVACIgDAAIgBAJQAAAJAFAEQAEADAHAAQARAAAQgTIAMAAQgGAMgPAKQgQAMgTAAQgNAAgLgIgAACgkQgFAGgFAHQgFAIgDAIIgDAJQAXgDAMgJQAMgKgBgMQABgDgDgDQgDgEgFAAQgIABgHAFg");
	this.shape_1007.setTransform(145,127.3);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#F2F2F2").s().p("AgtAyIAThBQADgJAAgEIgBgDQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgEAAgFAGIgHAMIgLAAQAHgOAHgHQAHgIAHgDQAGgDAGAAQAJAAADAGQACAGAAAGQAAAKgGAVIAKgSIAKgOQAGgHAHgFQAGgFAHAAQAJAAADAGQADAFAAAFQAAAHgFAGQgEAFgGAAQgFAAgFgGQgDgDgDAAQgDAAgFAGQgGAFgGAKQgFAJgFANIgKAaIgBAFg");
	this.shape_1008.setTransform(134.3,127.1);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#F2F2F2").s().p("AhKBoQgIgFAAgHQAAgGAEgEQADgEAHAAQAHAAACAEQADAEAAAGQAAAIAHAAQAGAAAEgHQADgGAFgOIAfhqIgUAAIADgLIAVAAIABgHQAFgQAFgMQAGgMALgJQALgJAQAAQAGAAAFACQAGACADAEQAEADAAAGQAAAFgEADQgDAEgFAAQgFAAgDgDQgCgDgCgHIgCgFQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgDAAgCACIgDAHIgOAuIAUAAIgDALIgUAAIgVBCQgHAagGAPQgHAPgLAKQgMALgTAAQgMAAgHgGg");
	this.shape_1009.setTransform(124.6,127);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#F2F2F2").s().p("AgdBNQgGgEAAgHQAAgFAEgNIAehgIACgNQAAgEgDgCQgDgBgJAAIADgLIALAAIAPAAIANgDIAIAAIgoCFIgDANIAAADIADABQADAAAEgFQAGgFADgIIALAAQgGALgJALQgJALgOAAQgJgBgFgFg");
	this.shape_1010.setTransform(118.5,124.2);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FFFFFF").s().p("Ah1EFIAAgJIgBgUIABgXIABgTIAIgMIgBgWIAAgaIABgWIACgQIADgZIADgYIACgQIAEgEIAHgIIAGgIIAFgHIgBgBIgCgCIgDgEIgDgEIgDgBIgHgLQgCgEgBgEIAJhUIAGgIIAPAAIATgCIAUgEIARgIICCgRQgCAOgGAMQgHALgBANQgBAHAFAFQAEAGgCAHIgBAKQgBAGgGABIgnAEQgSADgNAHQgNAIgJANQgIAOgBAVIBNgJIgJBYIhTAKIgDAVIAAAXQAAAKAGAGQAFAGAOgBIASgCIAagDIAbgDIASgDIAAAQIAAAXIgBAXIgCAQIAAAEIAAACIgHAFIgGADIi+AYgAgTinIASgyIAFgHIAFgNIAGgNIADgMIAGgCIANABIAPAAIAHgBIAEgBIAMgBIAMABIAFAAQAOABAAAGIgGAIIgNAOIgUAXIgWAhIgKAEIgMAEIgOAEIgJAEg");
	this.shape_1011.setTransform(607.7,48.5);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FFFFFF").s().p("AiXCVIABgMIABgNQADgYAIgWQAJgXADgWIAAgDIgGgDIgHgCIAPi/QAAgFAEgBIAIgCIAHgBIAQgBIAWgBIAWgBIAQAAIgJBVIADAGIACAHIgBAJIgBARIgCAQIgBAKIgDAZIgCAlIgCAnIgBAZIAHAHIAKADIALAAIALgBIAHgCIAGgCIADgHIACgMIAdkOIADgHIAEgHIADgBQALgBAHADQAHADANgCIAdgHIAdgHIADAAIADAVIAAAVIgEAPIgMAPIgdEPIgOAXIgNASIgKAPIgEAEIgDADIgsALIgoAHIgYABQhIAAgihAg");
	this.shape_1012.setTransform(580.9,53.5);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FFFFFF").s().p("AiVDLIgKgBIgIgBIgDgBIATixIAQgdQAIgQABgPQACgJgDgEIgJgMIALhoIARgFIAPgEIANgDIAGAAIAGgBIAOAAIAPAAIATABIgRCcIAagBIAVAAIASgBIAEAAIARgEQAGgDABgLIAAgrQgBgVACgYIACgKIABgRIADgPIABgKQASgJAPgCIAigFIAHgBIAVgCIAGgBQAIAAgCAFIAAAJIgNBcIgNBbQgFAsADAuIAIBYIgIADIgOAEIgOAEIgIABIgHABIgSABIgUgCIgUgCIgRgBIALhoIgLgMIhFAJIgEAFIgEAJIgCAVIgBAHIgDAjIADAiIgIAHIhMAKg");
	this.shape_1013.setTransform(519.1,54);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FFFFFF").s().p("AiADGQgMgMAAgbIAGhMIAAgMIAFgdIAEgbIACgaIACgSIAAgFIACgHIADgaIAGgHIAKgNIAJgMIAEgLQABgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBIgRgOIAAgIIAFgIIAJgIIAJgHIAFgDIALgHIANgIIALgHIAGgDICqgVIAGAGIAAAJIAAAVIgBAaIgBAWIgBAGIAAAKIgBAKIgBAGIhZAMQADgLgBgGQgBgGgFgDIgLgDIgOAAIgGABIgJADIgIADIgGADIgHALIgDANIgFAVQgEALABALIADADIAIBZIgSA8QgBAFAGADIAPAEIAQACIALAAQAGgBADgEIAHgKIADgMIAEgLIBSgKQAFgBAAAEIAAAJIgBAFQgCAVgFAOQgFAOgJAKQgKAJgOAHIghAQIgLABIgQACIgQADIgKABIhOAHIgEABQgYAAgLgLg");
	this.shape_1014.setTransform(489.1,53.8);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FFFFFF").s().p("Ah1EFIAAgJIgBgUIABgXIABgTIAHgMIAAgWIgBgaIACgWIACgQIADgZIADgYIACgQIAEgEIAHgIIAGgIIAFgHIgBgBIgBgCIgEgEIgDgEIgDgBIgHgLQgCgEgBgEIAJhUIAGgIIAPAAIATgCIATgEIASgIICDgRQgDAOgGAMQgGALgCANQgBAHAEAFQAFAGgCAHIgBAKQgBAGgGABIgoAEQgRADgNAHQgNAIgJANQgIAOgCAVIBOgJIgJBYIhSAKIgEAVIgBAXQABAKAGAGQAFAGAOgBIARgCIAbgDIAbgDIASgDIAAAQIAAAXIgBAXIgCAQIAAAEIAAACIgHAFIgHADIi9AYgAgTinIASgyIAFgHIAFgNIAFgNIAEgMIAFgCIAPABIAOAAIAHgBIAEgBIAMgBIAMABIAGAAQANABAAAGIgGAIIgOAOIgTAXIgWAhIgKAEIgMAEIgOAEIgJAEg");
	this.shape_1015.setTransform(463.9,48.5);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FFFFFF").s().p("AiIDEIABgKIABgMIACgUIACgTIAAgKIAEgMIAFgDIAFgDIAEgKIAAgHIgBgKIgCgJICAijIhDAUIgeAEIgTACIAAgNIADgQIACgQIACgNIgEgrIAHgEIAHgEIDZgaIAHAFIAAAHIgJA9IgCALIgQARIhdCtIgdAKIABAFIADAFIADAGIACADQAAADAJgBIAUgEIAZgFIAZgFIAVgEQAMgBgBADIgIBVIgQAEIgZAFIgaAFIgQACIgfAFIgXACIgnACIgnADIgXABg");
	this.shape_1016.setTransform(421.8,54.1);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FFFFFF").s().p("Ah0DNIgBgJIAAgUIAAgWIABgUIAIgMIgBgWQgCgNACgNIACgWIACgQIACgYIADgYIACgQIAEgEIAHgIIAHgIIADgIIAAgBIgBgCIgDgEIgEgDIgCgCIgIgKIgDgIIAIhWIAIgGIAOAAIATgDIAUgEIASgJICBgQQgBAOgHALQgGAMgCAOIABAGIACAFIADAHIABAHIgCAKQgBAFgGACIgnAEQgSACgNAHQgNAIgIANQgJAOgBAWIBOgJIgJBXIhTAKIgDAWIgCAVQABALAFAGQAGAGAOgBIASgCIAagCIAbgEIARgDIAAAQIAAAXIAAAXIgBAQIAAAEIgBADIgGAEQgEADgDAAIi9AYg");
	this.shape_1017.setTransform(396.8,54.1);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FFFFFF").s().p("AiGDQIgFgMIAAgOIAAgIIAAgOIgBgRIAAgPIAAgGIAIgHIAWgGIATgEIAQgDIALgCQAKgCACAFIAAALIAAAMQAAAFAFgBIAzgGQAGgBAEgHIAFgSIADgVIABgQIABgJQgUgEgTABIgmABIglgDQgRgEgRgMQgHgLgBgOIABgcIACgSIADgiQADgdAKgeQAJgeAWgTIAlgIIAegGIAdgFIAggEIAigDQASgDAOADQAOADAIAJQAJAKgDAWIgBAFIgDAIIgDAJIgBAFIgBADIgBADIAEAgIAAAHIgBAGIhnANIgFgGIANgXIAFgVIAAgEIAAgFIgCgFIgDgCIgsAGQgEABgFALIgLAZIgKAcIgEARIgBARQAAAHALADIAKgBIAOAAIAPAAIAKABIAtAAQAVgCAPAEQAPACAHAMQAIAKgEAeIgHAkIgHAkIgBAHIACAsIgBADIAAAEQgNASgTAHQgUAHgUADIgWACIgEABIgaADIgqADIgqADIgbABIgEABQgEAAgDgDg");
	this.shape_1018.setTransform(294.6,54.2);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FFFFFF").s().p("AiXCVIABgMIABgNQADgYAIgWQAJgXADgWIAAgDIgGgDIgHgCIAPi/QAAgFAEgBIAIgCIAHgBIAQgBIAWgBIAWgBIAQAAIgJBVIADAGIACAHIgBAJIgBARIgCAQIgBAKIgDAZIgCAlIgCAnIgBAZIAHAHIAKADIALAAIALgBIAHgCIAGgCIADgHIACgMIAdkOIADgHIAEgHIADgBQALgBAHADQAHADANgCIAdgHIAdgHIADAAIADAVIAAAVIgEAPIgMAPIgdEPIgOAXIgNASIgKAPIgEAEIgDADIgsALIgoAHIgYABQhIAAgihAg");
	this.shape_1019.setTransform(265.8,53.5);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FFFFFF").s().p("AAODQIgPgHIgOgHQgGgDgIAAQgLACgIAFQgJAEgMACQgYADgQgGQgPgHgIgOQgIgOgBgUQgCgUADgYQABgQAGgOIAMgdIAMgcIAIgdIgCgOIgGgLIgFgLQgDgGABgHIAAgDIAFgTIAGgZIAGgXIAEgNIAHgSQAEgJALgBIBTgTQAqgLAqgFQAEAAAGAEIAHAEIAIAGIgFA3QAQAHAHANQAGAOAAARIgCAjIgFAiIgFAxIgEAgIgEAgIgGAjIgHApQgPAXgTAIQgSAHgWADIgIAAQgIAAgGgCgAAehuIgMABIgJABIgLAEQgGADgEAJIgCAiIgFAaIgIAZIgKAhIAAAEQgEAZADAZIAIAvIAJAAIAKgBIAIgBIAPgEQAJgEABgJIAXjVIgCgEIgEgCIgJABg");
	this.shape_1020.setTransform(235.6,53.7);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FFFFFF").s().p("Ag+DRIgQgFIgGgHIgCgMIgDgRIgEgNIgDgFIgCgGIABgOQgJgJgFgKIgFgTIgBgVIgCgXQgEgSgGgMQgHgMgDgQIgCgRIgCgOIgBgEIAAgUIAAghIACgiIABgVIAFgGIAGgEIALgCIAUgDIAXgCIATgCIAMgDQAEASAAASIgDAmIgDAlQgBASAEATIABAFIAEAMIAFAOIAEANIACAFIAJAjQAHgHACgOIAEgdIACgOIAAgMIAFgtIAFgiIAJgnIAIggIAFgOIAFgJIAzgFIALACIALABIAEgBIATgOIAGgCQAEgBAEAEIACAeQgCAUgJAaIgXBDIghBmQgTA+gVBbIgPAFIgSAHIgRAGIgOAEg");
	this.shape_1021.setTransform(208.6,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_432,p:{scaleX:1.004,scaleY:1.004,x:400.5,y:300.4}},{t:this.shape_431,p:{scaleX:1.004,scaleY:1.004,x:108,y:548.2}},{t:this.shape_430,p:{scaleX:1.004,scaleY:1.004,x:135.6,y:533.7}},{t:this.shape_429,p:{scaleX:1.004,scaleY:1.004,x:56.3,y:453.4}},{t:this.shape_428,p:{scaleX:1.004,scaleY:1.004,x:332.3,y:438.3}},{t:this.shape_427,p:{scaleX:1.004,scaleY:1.004,x:286.1,y:575.8}},{t:this.shape_426,p:{scaleX:1.004,scaleY:1.004,x:306.2,y:590.9}},{t:this.shape_425,p:{scaleX:1.004,scaleY:1.004,x:531,y:453.4}},{t:this.shape_424,p:{scaleX:1.004,scaleY:1.004,x:490.8,y:424.3}},{t:this.shape_423,p:{scaleX:1.004,scaleY:1.004,x:590.2,y:547.7}},{t:this.shape_422,p:{scaleX:1.004,scaleY:1.004,x:800.9,y:556.8}},{t:this.shape_421,p:{scaleX:1.004,scaleY:1.004,x:705.6,y:475.5}},{t:this.shape_420,p:{scaleX:1.004,scaleY:1.004,y:348,x:31.2}},{t:this.shape_419,p:{scaleX:1.004,scaleY:1.004,x:209.8,y:229.6}},{t:this.shape_418,p:{scaleX:1.004,scaleY:1.004,y:195.5,x:5.1}},{t:this.shape_417,p:{scaleX:1.004,scaleY:1.004,x:189.8,y:362.1}},{t:this.shape_416,p:{scaleX:1.004,scaleY:1.004,x:697.6,y:355.1}},{t:this.shape_415,p:{scaleX:1.004,scaleY:1.004,x:499.9,y:229.6}},{t:this.shape_414,p:{scaleX:1.004,scaleY:1.004,x:404.5,y:310.9}},{t:this.shape_413,p:{scaleX:1.004,scaleY:1.004,x:798.9,y:279.8}},{t:this.shape_412,p:{scaleX:1.004,scaleY:1.004,x:604.2,y:283.8}},{t:this.shape_411,p:{scaleX:1.004,scaleY:1.004,x:742.7,y:145.3}},{t:this.shape_410,p:{scaleX:1.004,scaleY:1.004,x:70.4,y:31.9}},{t:this.shape_409,p:{scaleX:1.004,scaleY:1.004,y:112.2,x:-8.9}},{t:this.shape_408,p:{scaleX:1.004,scaleY:1.004,x:163.7,y:90.1}},{t:this.shape_407,p:{scaleX:1.004,scaleY:1.004,x:305.2,y:72.1}},{t:this.shape_406,p:{scaleX:1.004,scaleY:1.004,x:281.1,y:57}},{t:this.shape_405,p:{scaleX:1.004,scaleY:1.004,x:465.7,y:112.2}},{t:this.shape_404,p:{scaleX:1.004,scaleY:1.004,x:425.6,y:141.3}},{t:this.shape_403,p:{scaleX:1.004,scaleY:1.004,x:525,y:17.9}},{t:this.shape_402,p:{scaleX:1.004,scaleY:1.004,x:735.7,y:8.8}},{t:this.shape_401,p:{scaleX:1.004,scaleY:1.004,x:608.2,y:177.4}},{t:this.shape_400,p:{scaleX:1.004,scaleY:1.004,x:660.4,y:75.1}},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99,p:{scaleX:1.004,scaleY:1.004,x:106.2,y:554}},{t:this.shape_98,p:{scaleX:1.004,scaleY:1.004,x:108,y:555.7}},{t:this.shape_97,p:{scaleX:1.004,scaleY:1.004,x:103.6,y:561.1}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94,p:{scaleX:1.004,scaleY:1.004,x:171.9,y:554.9}},{t:this.shape_93},{t:this.shape_92,p:{scaleX:1.004,scaleY:1.004,x:168.4,y:554}},{t:this.shape_91,p:{scaleX:1.004,scaleY:1.004,x:170.2,y:555.7}},{t:this.shape_90,p:{scaleX:1.004,scaleY:1.004,x:165.7,y:561.1}},{t:this.shape_89,p:{scaleX:1.004,scaleY:1.004,x:165.7,y:561.1}},{t:this.shape_88},{t:this.shape_87,p:{scaleX:1.004,scaleY:1.004,x:136.6,y:546.8}},{t:this.shape_86,p:{scaleX:1.004,scaleY:1.004,x:136.6,y:546.8}},{t:this.shape_85},{t:this.shape_84,p:{scaleX:1.004,scaleY:1.004,x:128.4,y:548.6}},{t:this.shape_83},{t:this.shape_82,p:{scaleX:1.004,scaleY:1.004,x:137.3,y:548.6}},{t:this.shape_81,p:{scaleX:1.004,scaleY:1.004,x:136.6,y:546.9}},{t:this.shape_80,p:{scaleX:1.004,scaleY:1.004,x:105.6,y:559.1}},{t:this.shape_79,p:{scaleX:1.004,scaleY:1.004,x:167.8,y:559.1}},{t:this.shape_78,p:{scaleX:1.004,scaleY:1.004,x:164.2,y:542.4}},{t:this.shape_77,p:{scaleX:1.004,scaleY:1.004,x:164.5,y:545.7}},{t:this.shape_76,p:{scaleX:1.004,scaleY:1.004,x:141.6,y:495.5}},{t:this.shape_75,p:{scaleX:1.004,scaleY:1.004,x:156.7,y:524.2}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{scaleX:1.004,scaleY:1.004,x:106.6,y:543.3}},{t:this.shape_49,p:{scaleX:1.004,scaleY:1.004,x:106.5,y:548}},{t:this.shape_48,p:{scaleX:1.004,scaleY:1.004,x:116.9,y:522.4}},{t:this.shape_47},{t:this.shape_46,p:{scaleX:1.004,scaleY:1.004,x:140,y:487.4}},{t:this.shape_45,p:{scaleX:1.004,scaleY:1.004,x:140,y:487.4}},{t:this.shape_44,p:{scaleX:1.004,scaleY:1.004,x:137.8,y:452.2}},{t:this.shape_43,p:{scaleX:1.004,scaleY:1.004,x:147.6,y:465.7}},{t:this.text,p:{x:144.4,font:"21px 'MonsterHunterStaggeredRotalic'",lineHeight:24.5}},{t:this.shape_42},{t:this.shape_41,p:{scaleX:1.004,scaleY:1.004,x:137,y:463.5}},{t:this.shape_40,p:{scaleX:1.004,scaleY:1.004,x:140,y:428.4}},{t:this.shape_39,p:{scaleX:1.004,scaleY:1.004,x:93.9,y:469}},{t:this.shape_38,p:{scaleX:1.004,scaleY:1.004,x:93.6,y:468}},{t:this.shape_37,p:{scaleX:1.004,scaleY:1.004,x:118.1,y:447.6}},{t:this.shape_36,p:{scaleX:1.004,scaleY:1.004,x:119.9,y:454.3}},{t:this.shape_35,p:{scaleX:1.004,scaleY:1.004,x:139.8,y:417.2}},{t:this.shape_34,p:{scaleX:1.004,scaleY:1.004,x:145.3,y:413.6}},{t:this.shape_33},{t:this.shape_32,p:{scaleX:1.004,scaleY:1.004,x:140,y:411.1}},{t:this.shape_31,p:{scaleX:1.004,scaleY:1.004,x:145.5,y:411.8}},{t:this.shape_30,p:{scaleX:1.004,scaleY:1.004,x:152.2,y:411.7}},{t:this.shape_29,p:{scaleX:1.004,scaleY:1.004,x:126,y:416.3}},{t:this.shape_28,p:{scaleX:1.004,scaleY:1.004,x:126.3,y:416.2}},{t:this.shape_27,p:{scaleX:1.004,scaleY:1.004,x:138.1,y:403.2}},{t:this.shape_26,p:{scaleX:1.004,scaleY:1.004,x:138.1,y:403.2}},{t:this.shape_25,p:{scaleX:1.004,scaleY:1.004,x:130.5,y:402.8}},{t:this.shape_24,p:{scaleX:1.004,scaleY:1.004,x:134.2,y:403}},{t:this.shape_23,p:{scaleX:1.004,scaleY:1.004,x:141,y:401.8}},{t:this.shape_22,p:{scaleX:1.004,scaleY:1.004,x:144.2,y:400.3}},{t:this.shape_21,p:{scaleX:1.004,scaleY:1.004,x:136.9,y:393.5}},{t:this.shape_20,p:{scaleX:1.004,scaleY:1.004,x:136.9,y:393.5}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_432,p:{scaleX:1.002,scaleY:1.002,x:400,y:300.5}},{t:this.shape_431,p:{scaleX:1.002,scaleY:1.002,x:107.8,y:51.9}},{t:this.shape_430,p:{scaleX:1.002,scaleY:1.002,x:135.4,y:66.5}},{t:this.shape_429,p:{scaleX:1.002,scaleY:1.002,x:56.2,y:146.6}},{t:this.shape_428,p:{scaleX:1.002,scaleY:1.002,x:331.9,y:161.7}},{t:this.shape_427,p:{scaleX:1.002,scaleY:1.002,x:285.8,y:24.4}},{t:this.shape_426,p:{scaleX:1.002,scaleY:1.002,x:305.8,y:9.3}},{t:this.shape_425,p:{scaleX:1.002,scaleY:1.002,x:530.3,y:146.6}},{t:this.shape_424,p:{scaleX:1.002,scaleY:1.002,x:490.2,y:175.7}},{t:this.shape_423,p:{scaleX:1.002,scaleY:1.002,x:589.5,y:52.4}},{t:this.shape_422,p:{scaleX:1.002,scaleY:1.002,x:800,y:43.4}},{t:this.shape_421,p:{scaleX:1.002,scaleY:1.002,x:704.7,y:124.6}},{t:this.shape_420,p:{scaleX:1.002,scaleY:1.002,y:251.9,x:31.2}},{t:this.shape_419,p:{scaleX:1.002,scaleY:1.002,x:-15,y:389.2}},{t:this.shape_418,p:{scaleX:1.002,scaleY:1.002,y:404.2,x:5.1}},{t:this.shape_417,p:{scaleX:1.002,scaleY:1.002,x:189.5,y:237.9}},{t:this.shape_416,p:{scaleX:1.002,scaleY:1.002,x:696.7,y:244.9}},{t:this.shape_415,p:{scaleX:1.002,scaleY:1.002,x:499.3,y:370.2}},{t:this.shape_414,p:{scaleX:1.002,scaleY:1.002,x:404,y:289}},{t:this.shape_413,p:{scaleX:1.002,scaleY:1.002,x:798,y:320}},{t:this.shape_412,p:{scaleX:1.002,scaleY:1.002,x:603.5,y:316}},{t:this.shape_411,p:{scaleX:1.002,scaleY:1.002,x:741.8,y:454.4}},{t:this.shape_410,p:{scaleX:1.002,scaleY:1.002,x:70.2,y:567.6}},{t:this.shape_409,p:{scaleX:1.002,scaleY:1.002,y:487.4,x:-8.9}},{t:this.shape_408,p:{scaleX:1.002,scaleY:1.002,x:163.5,y:509.5}},{t:this.shape_407,p:{scaleX:1.002,scaleY:1.002,x:304.8,y:527.5}},{t:this.shape_406,p:{scaleX:1.002,scaleY:1.002,x:280.7,y:542.6}},{t:this.shape_405,p:{scaleX:1.002,scaleY:1.002,x:465.2,y:487.4}},{t:this.shape_404,p:{scaleX:1.002,scaleY:1.002,x:425.1,y:458.4}},{t:this.shape_403,p:{scaleX:1.002,scaleY:1.002,x:524.3,y:581.7}},{t:this.shape_402,p:{scaleX:1.002,scaleY:1.002,x:734.8,y:590.7}},{t:this.shape_401,p:{scaleX:1.002,scaleY:1.002,x:607.5,y:422.3}},{t:this.shape_400,p:{scaleX:1.002,scaleY:1.002,x:659.6,y:524.5}},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_99,p:{scaleX:1.002,scaleY:1.002,x:68,y:501.7}},{t:this.shape_98,p:{scaleX:1.002,scaleY:1.002,x:69.7,y:474.4}},{t:this.shape_90,p:{scaleX:1.002,scaleY:1.002,x:65.3,y:479.7}},{t:this.shape_505},{t:this.shape_504},{t:this.shape_94,p:{scaleX:1.002,scaleY:1.002,x:133.6,y:473.5}},{t:this.shape_503},{t:this.shape_92,p:{scaleX:1.002,scaleY:1.002,x:130.1,y:472.6}},{t:this.shape_91,p:{scaleX:1.002,scaleY:1.002,x:131.8,y:474.4}},{t:this.shape_97,p:{scaleX:1.002,scaleY:1.002,x:127.4,y:479.7}},{t:this.shape_89,p:{scaleX:1.002,scaleY:1.002,x:127.4,y:479.7}},{t:this.shape_502},{t:this.shape_87,p:{scaleX:1.002,scaleY:1.002,x:98.4,y:465.5}},{t:this.shape_86,p:{scaleX:1.002,scaleY:1.002,x:98.4,y:465.5}},{t:this.shape_501},{t:this.shape_84,p:{scaleX:1.002,scaleY:1.002,x:90.2,y:467.3}},{t:this.shape_500},{t:this.shape_82,p:{scaleX:1.002,scaleY:1.002,x:99,y:467.3}},{t:this.shape_81,p:{scaleX:1.002,scaleY:1.002,x:98.4,y:465.5}},{t:this.shape_80,p:{scaleX:1.002,scaleY:1.002,x:67.4,y:477.7}},{t:this.shape_79,p:{scaleX:1.002,scaleY:1.002,x:129.5,y:477.7}},{t:this.shape_78,p:{scaleX:1.002,scaleY:1.002,x:125.9,y:461.1}},{t:this.shape_77,p:{scaleX:1.002,scaleY:1.002,x:126.2,y:464.3}},{t:this.shape_76,p:{scaleX:1.002,scaleY:1.002,x:103.4,y:414.2}},{t:this.shape_75,p:{scaleX:1.002,scaleY:1.002,x:118.4,y:442.8}},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_50,p:{scaleX:1.002,scaleY:1.002,x:68.4,y:461.9}},{t:this.shape_49,p:{scaleX:1.002,scaleY:1.002,x:68.3,y:465.6}},{t:this.shape_48,p:{scaleX:1.002,scaleY:1.002,x:78.6,y:441.1}},{t:this.shape_475},{t:this.shape_46,p:{scaleX:1.002,scaleY:1.002,x:101.7,y:406.1}},{t:this.shape_45,p:{scaleX:1.002,scaleY:1.002,x:101.7,y:406.1}},{t:this.shape_44,p:{scaleX:1.002,scaleY:1.002,x:99.6,y:371}},{t:this.shape_43,p:{scaleX:1.002,scaleY:1.002,x:109.4,y:384.5}},{t:this.text,p:{x:106.4,font:"21px 'Baskerville-SemiBold'",lineHeight:26}},{t:this.shape_474},{t:this.shape_41,p:{scaleX:1.002,scaleY:1.002,x:98.7,y:382.3}},{t:this.shape_40,p:{scaleX:1.002,scaleY:1.002,x:101.7,y:347.2}},{t:this.shape_39,p:{scaleX:1.002,scaleY:1.002,x:55.7,y:471.9}},{t:this.shape_38,p:{scaleX:1.002,scaleY:1.002,x:55.4,y:470.9}},{t:this.shape_37,p:{scaleX:1.002,scaleY:1.002,x:79.9,y:366.4}},{t:this.shape_36,p:{scaleX:1.002,scaleY:1.002,x:81.6,y:373}},{t:this.shape_35,p:{scaleX:1.002,scaleY:1.002,x:101.5,y:336}},{t:this.shape_34,p:{scaleX:1.002,scaleY:1.002,x:107,y:332.4}},{t:this.shape_473},{t:this.shape_32,p:{scaleX:1.002,scaleY:1.002,x:101.7,y:329.9}},{t:this.shape_31,p:{scaleX:1.002,scaleY:1.002,x:107.2,y:330.6}},{t:this.shape_30,p:{scaleX:1.002,scaleY:1.002,x:113.9,y:330.5}},{t:this.shape_29,p:{scaleX:1.002,scaleY:1.002,x:87.8,y:335.1}},{t:this.shape_28,p:{scaleX:1.002,scaleY:1.002,x:88.1,y:335.1}},{t:this.shape_27,p:{scaleX:1.002,scaleY:1.002,x:99.9,y:322}},{t:this.shape_26,p:{scaleX:1.002,scaleY:1.002,x:99.9,y:322}},{t:this.shape_25,p:{scaleX:1.002,scaleY:1.002,x:92.3,y:321.7}},{t:this.shape_24,p:{scaleX:1.002,scaleY:1.002,x:96,y:321.9}},{t:this.shape_23,p:{scaleX:1.002,scaleY:1.002,x:102.8,y:320.7}},{t:this.shape_22,p:{scaleX:1.002,scaleY:1.002,x:106,y:319.1}},{t:this.shape_21,p:{scaleX:1.002,scaleY:1.002,x:98.6,y:312.4}},{t:this.shape_20,p:{scaleX:1.002,scaleY:1.002,x:98.6,y:312.4}},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433}]},1).to({state:[{t:this.shape_432,p:{scaleX:1.004,scaleY:1.004,x:401.5,y:300.1}},{t:this.shape_431,p:{scaleX:1.004,scaleY:1.004,x:109,y:548}},{t:this.shape_430,p:{scaleX:1.004,scaleY:1.004,x:136.6,y:533.4}},{t:this.shape_429,p:{scaleX:1.004,scaleY:1.004,x:57.3,y:453.1}},{t:this.shape_428,p:{scaleX:1.004,scaleY:1.004,x:333.3,y:438.1}},{t:this.shape_427,p:{scaleX:1.004,scaleY:1.004,x:287.1,y:575.6}},{t:this.shape_426,p:{scaleX:1.004,scaleY:1.004,x:307.2,y:590.6}},{t:this.shape_425,p:{scaleX:1.004,scaleY:1.004,x:532,y:453.1}},{t:this.shape_424,p:{scaleX:1.004,scaleY:1.004,x:491.8,y:424}},{t:this.shape_423,p:{scaleX:1.004,scaleY:1.004,x:591.2,y:547.5}},{t:this.shape_422,p:{scaleX:1.004,scaleY:1.004,x:801.9,y:556.5}},{t:this.shape_421,p:{scaleX:1.004,scaleY:1.004,x:706.6,y:475.2}},{t:this.shape_420,p:{scaleX:1.004,scaleY:1.004,y:347.7,x:32.2}},{t:this.shape_419,p:{scaleX:1.004,scaleY:1.004,x:210.8,y:229.3}},{t:this.shape_418,p:{scaleX:1.004,scaleY:1.004,y:195.2,x:6.1}},{t:this.shape_417,p:{scaleX:1.004,scaleY:1.004,x:190.8,y:361.8}},{t:this.shape_416,p:{scaleX:1.004,scaleY:1.004,x:698.6,y:354.8}},{t:this.shape_415,p:{scaleX:1.004,scaleY:1.004,x:500.9,y:229.3}},{t:this.shape_414,p:{scaleX:1.004,scaleY:1.004,x:405.5,y:310.6}},{t:this.shape_413,p:{scaleX:1.004,scaleY:1.004,x:799.9,y:279.5}},{t:this.shape_412,p:{scaleX:1.004,scaleY:1.004,x:605.2,y:283.5}},{t:this.shape_411,p:{scaleX:1.004,scaleY:1.004,x:743.7,y:145}},{t:this.shape_410,p:{scaleX:1.004,scaleY:1.004,x:71.4,y:31.6}},{t:this.shape_409,p:{scaleX:1.004,scaleY:1.004,y:111.9,x:-7.9}},{t:this.shape_408,p:{scaleX:1.004,scaleY:1.004,x:164.7,y:89.8}},{t:this.shape_407,p:{scaleX:1.004,scaleY:1.004,x:306.2,y:71.8}},{t:this.shape_406,p:{scaleX:1.004,scaleY:1.004,x:282.1,y:56.7}},{t:this.shape_405,p:{scaleX:1.004,scaleY:1.004,x:466.7,y:111.9}},{t:this.shape_404,p:{scaleX:1.004,scaleY:1.004,x:426.6,y:141}},{t:this.shape_403,p:{scaleX:1.004,scaleY:1.004,x:526,y:17.6}},{t:this.shape_402,p:{scaleX:1.004,scaleY:1.004,x:736.7,y:8.5}},{t:this.shape_401,p:{scaleX:1.004,scaleY:1.004,x:609.2,y:177.1}},{t:this.shape_400,p:{scaleX:1.004,scaleY:1.004,x:661.4,y:74.8}},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758,p:{y:60.2}},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752,p:{x:236.8,y:89.6}},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747,p:{x:315.2,y:89.6}},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734,p:{x:530,y:89.6}},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715,p:{x:480,y:119.1}},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540}]},1).to({state:[{t:this.shape_432,p:{scaleX:1.004,scaleY:1.004,x:401.6,y:300.1}},{t:this.shape_431,p:{scaleX:1.004,scaleY:1.004,x:108,y:548}},{t:this.shape_430,p:{scaleX:1.004,scaleY:1.004,x:135.6,y:533.4}},{t:this.shape_429,p:{scaleX:1.004,scaleY:1.004,x:56.3,y:453.1}},{t:this.shape_428,p:{scaleX:1.004,scaleY:1.004,x:332.3,y:438.1}},{t:this.shape_427,p:{scaleX:1.004,scaleY:1.004,x:286.1,y:575.6}},{t:this.shape_426,p:{scaleX:1.004,scaleY:1.004,x:306.2,y:590.6}},{t:this.shape_425,p:{scaleX:1.004,scaleY:1.004,x:531,y:453.1}},{t:this.shape_424,p:{scaleX:1.004,scaleY:1.004,x:490.8,y:424}},{t:this.shape_423,p:{scaleX:1.004,scaleY:1.004,x:590.2,y:547.5}},{t:this.shape_422,p:{scaleX:1.004,scaleY:1.004,x:800.9,y:556.5}},{t:this.shape_421,p:{scaleX:1.004,scaleY:1.004,x:705.6,y:475.2}},{t:this.shape_420,p:{scaleX:1.004,scaleY:1.004,y:347.7,x:31.2}},{t:this.shape_419,p:{scaleX:1.004,scaleY:1.004,x:209.8,y:229.3}},{t:this.shape_418,p:{scaleX:1.004,scaleY:1.004,y:195.2,x:5.1}},{t:this.shape_417,p:{scaleX:1.004,scaleY:1.004,x:189.8,y:361.8}},{t:this.shape_416,p:{scaleX:1.004,scaleY:1.004,x:697.6,y:354.8}},{t:this.shape_415,p:{scaleX:1.004,scaleY:1.004,x:499.9,y:229.3}},{t:this.shape_414,p:{scaleX:1.004,scaleY:1.004,x:404.5,y:310.6}},{t:this.shape_413,p:{scaleX:1.004,scaleY:1.004,x:798.9,y:279.5}},{t:this.shape_412,p:{scaleX:1.004,scaleY:1.004,x:604.2,y:283.5}},{t:this.shape_411,p:{scaleX:1.004,scaleY:1.004,x:742.7,y:145}},{t:this.shape_410,p:{scaleX:1.004,scaleY:1.004,x:70.4,y:31.6}},{t:this.shape_409,p:{scaleX:1.004,scaleY:1.004,y:111.9,x:-8.9}},{t:this.shape_408,p:{scaleX:1.004,scaleY:1.004,x:163.7,y:89.8}},{t:this.shape_407,p:{scaleX:1.004,scaleY:1.004,x:305.2,y:71.8}},{t:this.shape_406,p:{scaleX:1.004,scaleY:1.004,x:281.1,y:56.7}},{t:this.shape_405,p:{scaleX:1.004,scaleY:1.004,x:465.7,y:111.9}},{t:this.shape_404,p:{scaleX:1.004,scaleY:1.004,x:425.6,y:141}},{t:this.shape_403,p:{scaleX:1.004,scaleY:1.004,x:525,y:17.6}},{t:this.shape_402,p:{scaleX:1.004,scaleY:1.004,x:735.7,y:8.5}},{t:this.shape_401,p:{scaleX:1.004,scaleY:1.004,x:608.2,y:177.1}},{t:this.shape_400,p:{scaleX:1.004,scaleY:1.004,x:660.4,y:74.8}},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882,p:{x:396.2}},{t:this.shape_881,p:{x:428.2}},{t:this.shape_880,p:{x:455.2}},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_752,p:{x:235.9,y:133}},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_747,p:{x:314.3,y:133}},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_734,p:{x:529,y:133}},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_715,p:{x:393.1,y:162.6}},{t:this.shape_849},{t:this.shape_758,p:{y:162.7}},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763}]},1).to({state:[{t:this.shape_432,p:{scaleX:1.004,scaleY:1.004,x:401,y:300.1}},{t:this.shape_431,p:{scaleX:1.004,scaleY:1.004,x:109,y:548}},{t:this.shape_430,p:{scaleX:1.004,scaleY:1.004,x:136.6,y:533.4}},{t:this.shape_429,p:{scaleX:1.004,scaleY:1.004,x:57.3,y:453.1}},{t:this.shape_428,p:{scaleX:1.004,scaleY:1.004,x:333.3,y:438.1}},{t:this.shape_427,p:{scaleX:1.004,scaleY:1.004,x:287.1,y:575.6}},{t:this.shape_426,p:{scaleX:1.004,scaleY:1.004,x:307.2,y:590.6}},{t:this.shape_425,p:{scaleX:1.004,scaleY:1.004,x:532,y:453.1}},{t:this.shape_424,p:{scaleX:1.004,scaleY:1.004,x:491.8,y:424}},{t:this.shape_423,p:{scaleX:1.004,scaleY:1.004,x:591.2,y:547.5}},{t:this.shape_422,p:{scaleX:1.004,scaleY:1.004,x:801.9,y:556.5}},{t:this.shape_421,p:{scaleX:1.004,scaleY:1.004,x:706.6,y:475.2}},{t:this.shape_420,p:{scaleX:1.004,scaleY:1.004,y:347.7,x:32.2}},{t:this.shape_419,p:{scaleX:1.004,scaleY:1.004,x:210.8,y:229.3}},{t:this.shape_418,p:{scaleX:1.004,scaleY:1.004,y:195.2,x:6.1}},{t:this.shape_417,p:{scaleX:1.004,scaleY:1.004,x:190.8,y:361.8}},{t:this.shape_416,p:{scaleX:1.004,scaleY:1.004,x:698.6,y:354.8}},{t:this.shape_415,p:{scaleX:1.004,scaleY:1.004,x:500.9,y:229.3}},{t:this.shape_414,p:{scaleX:1.004,scaleY:1.004,x:405.5,y:310.6}},{t:this.shape_413,p:{scaleX:1.004,scaleY:1.004,x:799.9,y:279.5}},{t:this.shape_412,p:{scaleX:1.004,scaleY:1.004,x:605.2,y:283.5}},{t:this.shape_411,p:{scaleX:1.004,scaleY:1.004,x:743.7,y:145}},{t:this.shape_410,p:{scaleX:1.004,scaleY:1.004,x:71.4,y:31.6}},{t:this.shape_409,p:{scaleX:1.004,scaleY:1.004,y:111.9,x:-7.9}},{t:this.shape_408,p:{scaleX:1.004,scaleY:1.004,x:164.7,y:89.8}},{t:this.shape_407,p:{scaleX:1.004,scaleY:1.004,x:306.2,y:71.8}},{t:this.shape_406,p:{scaleX:1.004,scaleY:1.004,x:282.1,y:56.7}},{t:this.shape_405,p:{scaleX:1.004,scaleY:1.004,x:466.7,y:111.9}},{t:this.shape_404,p:{scaleX:1.004,scaleY:1.004,x:426.6,y:141}},{t:this.shape_403,p:{scaleX:1.004,scaleY:1.004,x:526,y:17.6}},{t:this.shape_402,p:{scaleX:1.004,scaleY:1.004,x:736.7,y:8.5}},{t:this.shape_401,p:{scaleX:1.004,scaleY:1.004,x:609.2,y:177.1}},{t:this.shape_400,p:{scaleX:1.004,scaleY:1.004,x:661.4,y:74.8}},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_882,p:{x:339}},{t:this.shape_881,p:{x:371}},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_880,p:{x:550.7}},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_715,p:{x:105.7,y:124}},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29,-21,850,622.4);
p.frameBounds = [rect, new cjs.Rectangle(-35,-21,855,622.2), new cjs.Rectangle(-28,-1,850,602.2), new cjs.Rectangle(-29,-1,850,602.2), new cjs.Rectangle(-28,-1,850,602.2)];


(lib.clipProtagoniste = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"normal":0,hit:1,"mort":2,"frein":3,retourFrein:4});

	// ptContact
	this.mc_p4 = new lib.clipPointContact();
	this.mc_p4.name = "mc_p4";
	this.mc_p4.parent = this;
	this.mc_p4.setTransform(13.2,-9.5,0.522,0.522,0,0,0,0.3,-0.5);
	this.mc_p4.visible = false;

	this.mc_p3 = new lib.clipPointContact();
	this.mc_p3.name = "mc_p3";
	this.mc_p3.parent = this;
	this.mc_p3.setTransform(0.2,-42.1,0.522,0.522,0,0,0,0.3,-0.5);
	this.mc_p3.visible = false;

	this.mc_p2 = new lib.clipPointContact();
	this.mc_p2.name = "mc_p2";
	this.mc_p2.parent = this;
	this.mc_p2.setTransform(28.2,-64.6,0.522,0.522,0,0,0,0.3,-0.5);
	this.mc_p2.visible = false;

	this.mc_p1 = new lib.clipPointContact();
	this.mc_p1.name = "mc_p1";
	this.mc_p1.parent = this;
	this.mc_p1.setTransform(0.2,-88.6,0.522,0.522,0,0,0,0.3,-0.5);
	this.mc_p1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_p1},{t:this.mc_p2},{t:this.mc_p3},{t:this.mc_p4}]}).wait(5));

	// anim
	this.normal_mc = new lib.anim_protagonisteNormal();
	this.normal_mc.name = "normal_mc";
	this.normal_mc.parent = this;
	this.normal_mc.setTransform(5.7,-296.8,1,1,0,0,0,5.7,-296.8);

	this.anim_mc = new lib.anim_protagonisteHit();
	this.anim_mc.name = "anim_mc";
	this.anim_mc.parent = this;
	this.anim_mc.setTransform(5.6,-296.9,1,1,0,0,0,5.7,-296.8);

	this.anim_mc_1 = new lib.anim_protagonisteMort();
	this.anim_mc_1.name = "anim_mc_1";
	this.anim_mc_1.parent = this;
	this.anim_mc_1.setTransform(5.6,-296.8,1,1,0,0,0,5.7,-296.8);

	this.frein_mc = new lib.anim_protagonisteFrein();
	this.frein_mc.name = "frein_mc";
	this.frein_mc.parent = this;
	this.frein_mc.setTransform(5.7,-296.7,1,1,0,0,0,5.7,-296.8);

	this.retourFrein_mc = new lib.anim_protagonisteRetourNormal();
	this.retourFrein_mc.name = "retourFrein_mc";
	this.retourFrein_mc.parent = this;
	this.retourFrein_mc.setTransform(-17.8,-291.4,1,1,0,0,0,-17.9,-291.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.normal_mc}]}).to({state:[{t:this.anim_mc}]},1).to({state:[{t:this.anim_mc_1}]},1).to({state:[{t:this.frein_mc}]},1).to({state:[{t:this.retourFrein_mc}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31.4,-91.5,74.2,97.4);
p.frameBounds = [rect, new cjs.Rectangle(-31.5,-92.4,78.2,100.9), new cjs.Rectangle(-31.5,-92.7,78.2,101.3), new cjs.Rectangle(-31.4,-91.5,74.2,97.4), new cjs.Rectangle(-35.2,-91.5,67.5,103)];


(lib.clipBoss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"normal":0,"mort":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// antagonsite
	this.instance = new lib.anim_bossNormal();
	this.instance.parent = this;
	this.instance.setTransform(-47.7,-18.9,0.494,0.494,0,0,0,0.6,-38.4);

	this.instance_1 = new lib.anim_bossMort();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-47.7,-19,0.494,0.494,0,0,0,0.5,-38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-101.2,-100.2,100,100.3);
p.frameBounds = [rect, new cjs.Rectangle(-101.2,-100.2,103,104)];


(lib.clipAntagoniste = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"normal":0,"mort":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// antagonsite
	this.instance = new lib.anim_antagonisteNormal();
	this.instance.parent = this;
	this.instance.setTransform(-17.1,-20.5,0.532,0.531,0,0,0,0.6,-38.6);

	this.instance_1 = new lib.anim_antagonisteMort();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17.1,-20.5,0.532,0.531,0,0,0,0.6,-38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-35.8,-42.5,37.4,44);
p.frameBounds = [rect, new cjs.Rectangle(-35.8,-42.5,40,47)];


// stage content:
(lib.animate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{lieu0:0});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'D11B100AE7AC4B66A5A89714B4544561',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D11B100AE7AC4B66A5A89714B4544561'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;