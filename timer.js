	

/*
 * ---------------------------------------------------------------------
 *
 * Timer class
 *
 * ---------------------------------------------------------------------
 */

	function Timer(callback, delay) 
	{
		var id_ = 0, 
				start_, 
				stopped_ = true,
				remain_ = delay;

		this.pause = function() {
			stopped_ = true;
			if (id_)
			{
				window.clearTimeout(id_);
				remain_ -= new Date() - start_;
				id_ = 0;
			}
		};

		this.resume = function() {
			if (stopped_)
			{
				start_ = new Date();
				id_ = window.setTimeout(callback, remain_);
				stopped_ = false;
			}
		};

		this.resume();
	}
