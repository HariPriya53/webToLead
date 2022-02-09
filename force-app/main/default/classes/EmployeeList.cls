public with sharing class EmployeeList {
    @AuraEnabled(cacheable=true)
    public static Map<String,String> getProjects(){
        Map <String,String> projectMap = new Map <String,String> (); 
        for(Project__c projectObj:[select id,name from Project__c WITH SECURITY_ENFORCED order by name]){
            projectMap.put(projectObj.Id,projectObj.name);
        }
        return projectMap;
    }
}
