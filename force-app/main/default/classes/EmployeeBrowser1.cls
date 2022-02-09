public with sharing class EmployeeBrowser1 {
    @AuraEnabled(cacheable=true)
    public static List<Project__c> getProject(){
List<Project__c> acclist=[Select Id,Name from Project__c WITH SECURITY_ENFORCED
ORDER BY Name];
    return acclist;
    }
    @AuraEnabled(cacheable=true)
    public static List<	Employee__c> getEmployees(String accId){
List<Employee__c> conlist=new List<Employee__c>();
for(Employee__c con:[Select Id,Name,Current_project__c from Employee__c where Current_project__r.Project_Name__c=:accId])
      conlist.add(con);
      return conlist;
        }
}
