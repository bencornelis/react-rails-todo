%w(eat drink sleep shower).each do |task|
  Todo.create(title: task)
end