$(document).ready(function(){
	$('.item1').click(function(){
		$('.select-item1').slideToggle(1000);  
        
        $('.select-item2').slideUp(700);   
        $('.select-item3').slideUp(700);   
        $('.select-item4').slideUp(700);   
        $('.select-item5').slideUp(700);   
        $('.select-item6').slideUp(700);   
	});
  
    $('.item2').click(function(){
		$('.select-item2').toggle(1000);  
        $('.select-item1').slideUp(700); 
        $('.select-item6').slideUp(700);   
        $('.select-item3').slideUp(700);   
        $('.select-item4').slideUp(700);   
        $('.select-item5').slideUp(700);        
		
	});
    $('.item3').click(function(){
		$('.select-item3').toggle(1000);  
        $('.select-item1').slideUp(700); 
        $('.select-item2').slideUp(700);   
        $('.select-item6').slideUp(700);   
        $('.select-item4').slideUp(700);   
        $('.select-item5').slideUp(700);        
		
	});
    $('.item4').click(function(){
		$('.select-item4').toggle(1000);  
        $('.select-item1').slideUp(700);
        $('.select-item2').slideUp(700);   
        $('.select-item3').slideUp(700);   
        $('.select-item6').slideUp(700);   
        $('.select-item5').slideUp(700);         
		
	});
    $('.item5').click(function(){
		$('.select-item5').toggle(1000);  
        $('.select-item1').slideUp(700);
        $('.select-item2').slideUp(700);   
        $('.select-item3').slideUp(700);   
        $('.select-item4').slideUp(700);   
        $('.select-item6').slideUp(700);         
		
	});
    $('.item6').click(function(){
		$('.select-item6').toggle(1000);  
        $('.select-item1').slideUp(700); 
        $('.select-item2').slideUp(700);   
        $('.select-item3').slideUp(700);   
        $('.select-item4').slideUp(700);   
        $('.select-item5').slideUp(700);        
		
	});
    
});
        
        
    
        
