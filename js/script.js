$(document).ready(function(){
	$('.item1').click(function(){
		$('.select-item1').slideToggle(2500);  
        $('.select-item1').focus();
        $('.select-item2').slideUp(1500);   
        $('.select-item3').slideUp(1500);   
        $('.select-item4').slideUp(1500);   
        $('.select-item5').slideUp(1500);   
        $('.select-item6').slideUp(1500);   
	});
  
    $('.item2').click(function(){
		$('.select-item2').toggle(2500);  
        $('.select-item1').slideUp(1500); 
        $('.select-item6').slideUp(1500);   
        $('.select-item3').slideUp(1500);   
        $('.select-item4').slideUp(1500);   
        $('.select-item5').slideUp(1500);        
		
	});
    $('.item3').click(function(){
		$('.select-item3').toggle(2500);  
        $('.select-item1').slideUp(1500); 
        $('.select-item2').slideUp(1500);   
        $('.select-item6').slideUp(1500);   
        $('.select-item4').slideUp(1500);   
        $('.select-item5').slideUp(1500);        
		
	});
    $('.item4').click(function(){
		$('.select-item4').toggle(2500);  
        $('.select-item1').slideUp(1500);
        $('.select-item2').slideUp(1500);   
        $('.select-item3').slideUp(1500);   
        $('.select-item6').slideUp(1500);   
        $('.select-item5').slideUp(1500);         
		
	});
    $('.item5').click(function(){
		$('.select-item5').toggle(2500);  
        $('.select-item1').slideUp(1500);
        $('.select-item2').slideUp(1500);   
        $('.select-item3').slideUp(1500);   
        $('.select-item4').slideUp(1500);   
        $('.select-item6').slideUp(1500);         
		
	});
    $('.item6').click(function(){
		$('.select-item6').toggle(2500);  
        $('.select-item1').slideUp(1500); 
        $('.select-item2').slideUp(1500);   
        $('.select-item3').slideUp(1500);   
        $('.select-item4').slideUp(1500);   
        $('.select-item5').slideUp(1500);        
		
	});
    
});
        
        
    
        
