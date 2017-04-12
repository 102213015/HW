var App = (function(){
	function _bindEvent(){
		console.log('bind event');
		$('#btn-addTask').on('click',_handleAddTack);//對按鈕設定click監聽 執行_handleAddTack
		$('#taskContainer').on('click','.taskItem .btn-delTask',_handleDelTask);//對x(叉叉)設定click監聽 執行_handleDelTask
	}
	function _handleDelTask(){
		console.log('del btn clicked');
		$(this).parents('.taskItem').remove();//移除被按的x的祖先節點裡有class = taskItem的東西
	}
	function _handleAddTack(){
		console.log('button clicked');
		var taskName = $('#input-taskName').val();//取得框框內(taskName)的值
		var taskDesc = $('#input-taskDesc').val();//取得taskDesc的值
		$('#taskContainer').append( //移動節點(待辦事項)到 id = taskContainer的東西裡面
			`<div class = "col col-md-12">
				<div id = "taskContainer" class = "row">
					<div class = "col-sm-4 taskItem">
						<div class = "card">
							<div class = "card-block">
								<button type = "button" class = "close btn-delTask" aria-label = "Close">
									<span aria-hidden = "true">&times;</span>
								</button>
								<h3 class = "card-title">${taskName}</h3>
								<p class = "card-text">${taskDesc}</p>
							</div>
						</div>
					</div>
				</div>
			</div>`);
		$('#input-taskName').val('');//清空taskName
		$('#input-taskDesc').val('');//清空taskdesc
	}
	
	function init(){
		console.log('init');
		_bindEvent();
	}
	return{
		init
	}
	
})();